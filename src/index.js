"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    for (let i = 0; i < 10; i++) {
      await strapi.entityService.create("api::blog.blog", {
        data: {
          title: faker.lorem.text(),
          body: faker.lorem.paragraph({ min: 50, max: 300 }),
          image: faker.image.business(1234, 2345, true),
        },
      });
    }
  },
};
