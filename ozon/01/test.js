// how to use
// $ node test.js < data.txt

/* global process */

const readline = require('readline');

const lineReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

const map = {};

lineReader
    .on('line', line => {
        if (line.trim() && map[line]) {
            map[line] += 1;
            return;
        }

        map[line] = 1;
    })
    .on('close', () => {
        Object.keys(map).forEach(key => {
            if (map[key] === 1) {
                console.log(key);
            }
        });

        process.exit(0);
    });
