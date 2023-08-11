#! /usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import * as process from "process";

yargs(hideBin(process.argv))
    .command(
        "analyze <language> <path>",
        "analyze the project at the path using the relevant LSP",
        () => {},
        (argv) => {
            console.info(argv.language)
            console.info(argv.path)
        }
    )
    .demandCommand(1)
    .parse()



