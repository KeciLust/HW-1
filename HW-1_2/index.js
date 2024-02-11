#!/usr/bin/env node

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });
const min = 0;
const max = 100;
const number = Math.floor(Math.random() * (max - min + 1) + min);

console.log('Загадано число в диапазоне от 0 до 100');
rl.on('line', (answer) => {
    if (number < answer) {
        console.log('Меньше');
    }
    else if (number > answer) {
        console.log('Больше');
    }
    else {
        console.log('Отгадано число :' + answer);
        rl.close();
    }
});
