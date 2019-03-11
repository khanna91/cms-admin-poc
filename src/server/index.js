const async = require('async');

const app = require('./config/express');
const startupBoot = require('./boot');
const { logger } = require('./utils/logger');

const startupTasks = [];
startupBoot.forEach((boot) => {
  startupTasks.push(async.apply(boot, app));
});

async.waterfall(startupTasks, (err) => {
  if (err) {
    logger.error('Unable to start server - please restart the service', err);
    process.exit(1);
  }
});

/**
* Exports express
* @public
*/
module.exports = app;
