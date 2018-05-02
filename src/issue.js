'use strict';

const octokit = require('@octokit/rest');

module.exports.create = async (args, { debug, apiKey, owner, repositories, title, body }, logger) => {
    const octoOptions = {};

    if (debug || 
        (process.env.DEBUG && String(process.env.DEBUG).split(',').includes('ghu'))) {

        octoOptions.debug = true;
        logger.warn('Debug mode is enabled');
    }

    const github = octokit(octoOptions);
    await github.authenticate({
        type: 'oauth',
        token: apiKey
    });
    
    logger.info(`Successfully authenticated as "${owner}".`);

    await Promise.all(repositories.map((repo, index) => {
        logger.info(`${index+1}) Publishing an issue to the "${repo}" repository.`);
        return github.issues.create({ owner, repo, title, body });
    }));

    logger.info('Issues are has been published successfully.');
};
