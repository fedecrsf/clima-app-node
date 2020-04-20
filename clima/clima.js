const axios = require('axios');

const getClima = async(latitud, longitud) => {

    const clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=72a5115e5c6e86287651586f33c97023&units=metric`)

    if (!clima || !clima.data || !clima.data.main || !clima.data.main.temp) {
        throw new Error()
    }

    return clima.data.main.temp;
};

module.exports = {
    getClima
}