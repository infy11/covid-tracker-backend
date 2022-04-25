var fetch = require('node-fetch');
const BASE_URL = 'https://www.mohfw.gov.in/data/datanew.json';

const getCovidData = () => {
    return fetch(BASE_URL).then(res=> res.json());
}

module.exports = getCovidData;
