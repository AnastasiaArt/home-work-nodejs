require('dotenv').config({silent: true})
const {API_URL_WEATHERSTACK, API_KEY_WEATHERSTACK} = require('../../config/config.js');
const http = require('http')

function getWeatherStack(query) {
    const url = `${API_URL_WEATHERSTACK}?access_key=${API_KEY_WEATHERSTACK}&query=${query}`;
    http.get(url, (res) => {
        const {statusCode} = res;
        let error;
        if (statusCode !== 200) {
            error = new Error('Request Failed.\n' +
                `Status Code: ${statusCode}`);
        }
        if (error) {
            console.error(error.message);
            res.resume();
            return;
        }

        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => {
            rawData += chunk;
        });
        res.on('end', () => {
            try {
                const parsedData = JSON.parse(rawData);
                console.log(`Weather in ${query}:\n`, parsedData);
                console.log('Enter city:')
            } catch (e) {
                console.error(e.message);
            }
        });
    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
    });
}

module.exports = getWeatherStack;