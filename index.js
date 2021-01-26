#!/usr/bin/env node

//add packages
const chalk = require("chalk");
const boxen = require("boxen");
const gradient = require('gradient-string');
const CFonts = require('cfonts');

//Text and chalk creation
const data = {
    work: chalk.magentaBright("Junior Web Developer"),
    npm: chalk.magentaBright("https://www.npmjs.com/~tanya-amber-l"),
    github: chalk.magentaBright("https://github.com/Tanya-Amber-L/"),
    linkedin: chalk.magentaBright("https://www.linkedin.com/in/tanya-leenders/"),
    npx: chalk.red.bold("npx tanya"),
    labelWork: chalk.cyan.bold("Work:"),
    labelNpm: chalk.cyan.bold("Npm:"),
    labelGitHub: chalk.cyan.bold("GitHub:"),
    labelLinkedIn: chalk.cyan.bold("LinkedIn:"),
    labelCard: chalk.cyan.bold("Card:"),
};;

// card display
console.log(chalk.white(
    boxen(
        [
            CFonts.say('Tanya Leenders', {  
                font: 'tiny',  
                gradient: ["magenta", "blue"],
                letterSpacing: 2  
            }),
            `${data.labelWork} ${data.work}`,
            `${data.labelNpm} ${data.npm}`,
            `${data.labelGitHub} ${data.github}`,
            `${data.labelLinkedIn} ${data.linkedin}`,
            "",
            `${data.labelCard} ${data.npx}`
        ].join("\n"),
        {
            padding: {
                top: 2,
                bottom: 2,
                left: 8,
                right: 8
            },
            margin: {
                bottom: 2,
            },
            borderStyle: 'double',
            align: "center"
        }
    )
))