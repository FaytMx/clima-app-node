const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=775b519eb42fc48a6ac665ad75e645bb`)

    let temp = resp.data.main.temp;
    return temp;
}

module.exports = {
    getClima
}