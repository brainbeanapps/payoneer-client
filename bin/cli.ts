import * as fs from 'fs';
import * as yargs from 'yargs';

const argv = yargs
    .usage('Usage: $0 <command> [options]')
    .demandCommand(1, 'No command was specified! Please specify command')
    .help('h')
    .alias('h', 'help')
    .epilog('https://github.com/brainbeanapps/payoneer-client')
    .argv;
