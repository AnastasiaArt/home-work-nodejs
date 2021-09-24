class Game {
    constructor(file) {
        this.data = '';
        this.result = 0;
        this.number = this.selfRandom(1, 2);
        this.fs = require('fs');
        this.file = file;
        this.start();
    }

    start() {
        console.log('Угадай число: 1 или 2');
    }

    play(input) {
        if (Number(input) === this.number) {
            console.log('Победа :)');
            this.result = 'win';
        } else {
            console.log('Поражение :(');
            this.result = 'loss';
        }
        this.data = `{"zero-game":"${new Date}","result":"${this.result}"}\n`
        this.fs.appendFile(this.file, this.data, err => {
            if (err) throw new Error(err)
        });
        this.number = this.selfRandom(1, 2);
        console.log('Угадай число: 1 или 2');
    }

    selfRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

module.exports = Game;