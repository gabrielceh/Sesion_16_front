import React, { useEffect, useState } from 'react';
import { consumir } from '../api/comentarios';

const Comentarios = () => {
  const [listComments, setListComments] = useState([]);

  useEffect(() => {
    const peticion = async () => {
      const data = await consumir();
      //console.log(data);
      setListComments(data);
    };
    peticion();
  }, []);

  return (
    <div>
      {listComments ? (
        listComments.map((comment) => <p key={comment.id}>{comment.name}</p>)
      ) : (
        <p>No hay comentarios</p>
      )}
    </div>
  );
};

export default Comentarios;
