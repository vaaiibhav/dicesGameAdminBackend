// Set Consoles
const {log} = console
const chalk=require("chalk");


const simpleConsole = (printThis) => {
    log(chalk.blue(printThis))
}

const warnConsole = (printThis) => {
    log(chalk.yellow(printThis))
}

const dangerConsole = (printThis) => {
    log(chalk.white.bgRed(printThis))
}

const successConsole = (printThis) => {
    log(chalk.black.bgHex("32cd32")(printThis))
}

const darkConsole = (printThis) => {
    log(chalk.black.bgMagenta(` ${printThis} `))
}


module.exports = {simpleConsole, warnConsole, dangerConsole,successConsole,darkConsole}