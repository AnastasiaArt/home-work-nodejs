#!/usr/bin/env node
const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')
const CurrentDate = require('./utils/current-date.js')
const CalcDate = require('./utils/calc-date.js')

yargs(hideBin(process.argv))
    .option('year', {
        alias: 'y',
        desc: 'год',
    })
    .option('month', {
        alias: 'm',
        desc: 'месяц',
    })
    .option('day', {
        alias: 'd',
        desc: 'день',
    })
    .command({
        command: 'current',
        desc: 'Текущая дата',
        handler: (argv) => {
            const date = new CurrentDate(argv)
            console.log(date.parseDate())
        }
    })
    .command({
        command: 'add',
        desc: 'Увеличить -y[value](год), -m[value](месяц), -d[value](день)',
        handler: (argv) => {
            const date = new CalcDate(argv, 'add')
            console.log(date.parseDate())
        }
    })
    .command({
        command: 'sub',
        desc: 'Уменьшить -y[value](год), -m[value](месяц), -d[value](день)',
        handler: (argv) => {
            const date = new CalcDate(argv, 'subtract')
            console.log(date.parseDate())
        }
    })
    .demandCommand()
    .help()
    .argv
