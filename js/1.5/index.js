#!/usr/bin/env node
const readline = require('readline');
const getWeatherStack = require('./getWeatherStask.js');

(async function checkWeather() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log('Enter city:');
    try {
        for await (const line of rl) {
            getWeatherStack(line);
        }
    } catch (err) {
        console.log(err);
    }
})();
