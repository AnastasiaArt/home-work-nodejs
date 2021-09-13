const moment = require("moment");
class CurrentDate {
    constructor(argv) {
        this.argv = argv;
    }
    parseDate() {
        switch (true) {
        // eslint-disable-next-line no-prototype-builtins
        case this.argv.hasOwnProperty('year'):
            return `Текущий год: ${moment().year()}`
        // eslint-disable-next-line no-prototype-builtins
        case this.argv.hasOwnProperty('month'):
            return `Текущий месяц: ${moment().format("MMMM")}`
        // eslint-disable-next-line no-prototype-builtins
        case this.argv.hasOwnProperty('day'):
            return `Дней в календарном месяце:  ${moment().daysInMonth()}`;

        default:
            return `Текущая дата и время в формате ISO : ${moment().toISOString()}`
    }
    }
}
module.exports = CurrentDate;
