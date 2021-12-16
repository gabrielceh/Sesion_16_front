import CONFIG from '../configuracion/config.json';

const consumir = async () => {
  try {
    const ruta = new URL(CONFIG.COMMENTS_API.url);
    const result = await fetch(ruta);

    let json = result.json();

    return json;
  } catch (error) {
    console.log(error);
  }
};

export { consumir };
