#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
    .option('y', {
        alias: 'year'
    })
    .option('m', {
        alias: 'month'
    })
    .option('d', {
        alias: 'date'
    })
    .argv;
if (argv.year) {
    console.log(new Date().getFullYear());
}
else if (argv._[0] == 'add' && argv.month) {
    console.log(((new Date().getMonth()) + 1) + argv.month);
}
else if (argv._[0] == 'add' && argv.date) {
    console.log(new Date().getDate() + argv.date);
}
else if (argv._[0] == 'sub' && argv.month) {
    console.log(((new Date().getMonth()) + 1) - argv.month);
}
else if (argv._[0] == 'sub' && argv.date) {
    console.log(new Date().getDate() - argv.date);
}
else if (argv.month) {
    console.log((new Date().getMonth()) + 1);
}
else if (argv.date) {
    console.log(new Date().getDate());
}

else {
    console.log(new Date());
}
