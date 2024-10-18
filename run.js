const ESC = '\x1B';
const reset = ESC+'[0m'
import chalk from 'chalk'; 
console.log(chalk.red("Hello world"))

function write(text) {
    process.stdout.write(text);
}

for(let i = 0; i < 256; i++) {
    write(ESC + `[38;5;${i}m` + ' # ' + reset)
}

for(let r = 0; r < 256; r++) {
    for(let g = 0; g < 256; g++) {
        for(let b = 0; b < 256; b++) {
            write(ESC + `[38;5;${i}m` + ' # ' + reset)
        }
    }
    write('\n')
}

/*for(let r = 0; r < 256; r++) {
    for(let g = 0; g < 256; g++) {
        for(let b = 0; b < 256; b++) {
            write(ESC + `[38;5;${i}m` + ' # ' + reset)
        }
    }
    write('\n')
}

/*const fgBlack = ESC + '[2;30m';
const fgRed = ESC + '[2;31m';
const fgGreen = ESC + '[2;32m';
const fgYellow = ESC + '[2;33m';
const fgBlue = ESC + '[2;34m';
const fgMagenta = ESC + '[2;35m';
const fgCyan = ESC + '[2;36m';
const fgWhite = ESC + '[2;37m';

const fgBrightBlack = ESC + '[1;30m';
const fgBrightRed = ESC + '[1;31m';
const fgBrightGreen = ESC + '[1;32m';
const fgBrightYellow = ESC + '[1;33m';
const fgBrightBlue = ESC + '[1;34m';
const fgBrightMagenta = ESC + '[1;35m';
const fgBrightCyan = ESC + '[1;36m';
const fgBrightWhite = ESC + '[1;37m';

const bgBrightBlack = ESC + '[1;40m';
const bgBrightRed = ESC + '[1;41m';
const bgBrightGreen = ESC + '[1;42m';
const bgBrightYellow = ESC + '[1;43m';
const bgBrightBlue = ESC + '[1;44m';
const bgBrightMagenta = ESC + '[1;45m';
const bgBrightCyan = ESC + '[1;46m';
const bgBrightWhite = ESC + '[1;47m';

const reset = ESC+ '[0m';
const bold = ESC+ '[1m';
const dim = ESC+ '[2m';
const italic = ESC + '[3m';
const underline = ESC + '[4m';
const blinking = ESC + '[5m';
const inverse = ESC + '7m';
const hidden = ESC + '[8m';
const striketrough = ESC + '[9m';

console.log("Hello World" + reset)
console.log(fgCyan + underline + "Hello World" + reset)
console.log(fgCyan + blinking + "Hello World" + reset)*/
