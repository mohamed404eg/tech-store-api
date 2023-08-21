'use strict';

/**
 * barnd service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::barnd.barnd');
