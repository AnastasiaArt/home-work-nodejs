#!/usr/bin/env node
const readline = require('readline');
const path = require('path');
const Game = require('./game.js');

function playGame() {
    const file = path.join(__dirname, 'zero-log.txt');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const game = new Game(file);

    rl.on('line', (input) => {
        game.play(input);
    }).on('close', () => {
        console.log('\nИгра окончена');
    });
}

playGame();
