#!/usr/bin/env node
'use strict';

const pack = require('../package.json');
const program = require('caporal');
const { create } = require('./issue');

program
    .version(pack.version)
    .description(pack.description)
    
// "issue" command
    .command('issue', 'Create an issue on GitHub repositories')
    .option('-d, --debug', 'Enable debug mode')
    .option('-k, --api-token, --api-key <api-key>', 'GihHub access API key', /^[\S]+$/i, undefined, true)
    .option('-o, --owner <owner>', 'GitHub repository owner', /^[\S]+$/i, undefined, true)
    .option('-r, --repositories <repositories>', 'Targeted GitHub repositories (can be coma separated)', program.LIST, undefined, true)
    .option('-t, --title <title>', 'Issue title', undefined, undefined, true)
    .option('-b, --body <body>', 'Issue body', undefined, undefined, true)
    .action(create);

program.parse(process.argv);
