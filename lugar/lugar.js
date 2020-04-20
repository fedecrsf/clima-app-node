const axios = require('axios');

const getLugarLatLong = async(direccionParam) => {
    const encodedURL = encodeURI(direccionParam);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'x-rapidapi-key': 'fcf08091acmsh6d1c9ae756917cfp116d27jsn4f16b28d1bf8' }
    });

    const respuesta = await instance.get();

    if (!respuesta.data || !respuesta.data.Results || respuesta.data.Results.length === 0) {
        throw new Error();
    }

    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    return {
        direccion,
        latitud,
        longitud
    }
};

module.exports = {
    getLugarLatLong
}