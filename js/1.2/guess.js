#!/usr/bin/env node
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const number = selfRandom(1,10)
console.log('Загадано число в диапазоне от 0 до 10')
rl.on('line', (input) => {
    if (Number(input) > number) {
        console.log('Меньше')
    } else if (Number(input) < number) {
        console.log('Больше')
    } else {
        console.log(`Отгадано число ${number}`)
        rl.close();
    }
});
function selfRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
