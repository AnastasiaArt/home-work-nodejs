const moment = require("moment");
class CalcDate {
    constructor(argv, command) {
        this.argv = argv;
        this.command = command;
    }
    parseDate() {
        switch (true) {
            // eslint-disable-next-line no-prototype-builtins
            case this.argv.hasOwnProperty('year') && typeof this.argv.year === 'number' :
                return `Изменение года на ${this.argv.year}: ${moment().clone()[this.command](this.argv.year, 'years').toISOString()}`
            // eslint-disable-next-line no-prototype-builtins
            case this.argv.hasOwnProperty('month') && typeof this.argv.month === 'number':
                return `Изменение месяца на  ${this.argv.month}: ${moment().clone()[this.command](this. argv.month, 'months').toISOString()}`
            // eslint-disable-next-line no-prototype-builtins
            case this.argv.hasOwnProperty('day') && typeof this.argv.day === 'number':
                return `Изменение дня на ${this.argv.day} : ${moment().clone()[this.command]( this.argv.day, 'days').toISOString()}`
            default:
                return `Неверно указаны параметры (example: add -y5)`
        }
    }
}
module.exports = CalcDate;
