#!/usr/bin/env node
const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')
const moment = require('moment')

yargs(hideBin(process.argv))
    .option('year', {
        alias: 'y',
        desc: 'год',
    })
    .option('month', {
        alias: 'm',
        desc: 'месяц',
    })
    .option('days', {
        alias: 'd',
        desc: 'день',
    })
    .command({
        command: 'current',
        desc: 'Текущая дата',
        handler: (argv) => {
            const date = switchCurrentDate(argv)
            console.log(date)
        }
    })
    .command({
            command: 'add',
            desc: 'Увеличить -y[value](год), -m[value](месяц), -d[value](день)',
            handler: (argv) => {
                const date = switchCalcDate(argv, 'add')
                console.log(date)
            }
        })
    .command({
        command: 'sub',
        desc: 'Уменьшить -y[value](год), -m[value](месяц), -d[value](день)',
        handler: (argv) => {
            const date = switchCalcDate(argv,'subtract')
            console.log(date)
        }
    })
    .demandCommand()
    .help()
    .argv

function switchCurrentDate(argv) {
    switch (true) {
        // eslint-disable-next-line no-prototype-builtins
        case argv.hasOwnProperty('year'):
            return `Текущий год: ${moment().year()}`
        // eslint-disable-next-line no-prototype-builtins
        case argv.hasOwnProperty('month'):
            return `Текущий месяц: ${moment().format("MMMM")}`
        // eslint-disable-next-line no-prototype-builtins
        case argv.hasOwnProperty('days'):
            return `Дней в календарном месяце:  ${moment().daysInMonth()}`;

        default:
            return `Текущая дата и время в формате ISO : ${moment().toISOString()}`
    }
}
function switchCalcDate(argv,command) {
    switch (true) {
        // eslint-disable-next-line no-prototype-builtins
        case argv.hasOwnProperty('year') && typeof argv.year === 'number' :
            return `Изменение года на ${argv.year}: ${moment().clone()[command]( argv.year, 'years').toISOString()}`
        // eslint-disable-next-line no-prototype-builtins
        case argv.hasOwnProperty('month') && typeof argv.month === 'number':
            return `Изменение месяца на  ${argv.month}: ${moment().clone()[command]( argv.month, 'months').toISOString()}`
        // eslint-disable-next-line no-prototype-builtins
        case argv.hasOwnProperty('day') && typeof argv.day === 'number':
            return `Изменение дня  на ${argv.day} : ${moment().clone()[command]( argv.day, 'days').toISOString()}`
        default:
            return `Неверно указаны параметры (example: add -y5)`
    }
}
