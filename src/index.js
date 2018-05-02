#!/usr/bin/env node
'use strict';

const pack = require('../package.json');
const program = require('caporal');
const { create } = require('./issue');

program
    .version(pack.version)
    .description('GitHub issue creator')
    .option('-k, --api-key <api-key>', 'GihHub API key', /^[\S]+$/, undefined, true)
    .option('-d, --debug', 'Enable debug mode')
    .option('-r, --repositories <repositories>', 'Targeted GitHub repositories (can be coma separated)', program.LIST, undefined, true)
    .option('-t, --title <title>', 'Issue title', /^[\wа-яё\s]+$/i, undefined, true)
    .option('-b, --body <body>', 'Issue body', /^[\wа-яё\s]+$/i, undefined, true)
    .action(create);

program.parse(process.argv);
