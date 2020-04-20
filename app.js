const colors = require('colors');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async(direccion) => {
    try {
        let respuestaLugar = await lugar.getLugarLatLong(direccion);
        let respuestaClima = await clima.getClima(respuestaLugar.latitud, respuestaLugar.longitud);

        return `La temperatura en ${respuestaLugar.direccion.green} es de ${String(respuestaClima).red}°C.`;
    } catch (e) {
        return `No se pudo determinar el clima para ${direccion}`;
    }
};

getInfo(argv.direccion).then(resp => console.log(resp));