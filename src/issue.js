'use strict';

const octokit = require('@octokit/rest');

module.exports.create = (args, options, logger) => {
    const octoOptions = {};

    if (options.debug) {

        octoOptions.debug = true;
        logger.warn('Debug mode is enabled');
    }

    const github = octokit(octoOptions);
};
