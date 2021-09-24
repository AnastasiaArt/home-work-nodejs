#!/usr/bin/env node
const readline = require('readline');
const fs = require('fs');
const path = require('path')
const { once } = require('events');

(async function parseLog(nameFile) {
    try {
        const fileStream = fs.createReadStream(path.join(__dirname, nameFile));
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });
        fileStream.on('error', (err) => {
            console.log('Zero-log is failed!', err)
        });
        let totalGames = 0;
        let countWin = 0;
        let countLoss = 0;
        rl.on('line', (line) => {
                totalGames++;
                // Process the line.
                const obj = JSON.parse(line)
                if (obj && Object.keys('obj').length > 0 && obj.result === 'win') {
                    countWin++;
                } else {
                    countLoss++;
                }
            }
        )

        await once(rl, 'close');
        const result = `Всего партий: ${totalGames}\nПобед: ${countWin} / Поражений: ${countLoss}\nCоотношение выигранных партий %: ${Math.floor(100 * countWin/totalGames)}\n)`
        console.log(result);
    } catch (err) {
        console.error('Zero-log is failed! \n', err);
    }
})('zero-log.txt');