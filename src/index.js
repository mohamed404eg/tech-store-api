"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // for (let i = 0; i < 10; i++) {
    //   await strapi.entityService.create("api::product.product", {
    //     data: {
    //       title: faker.commerce.productName(),
    //       images: faker.image.urlLoremFlickr({ category: "gaminglaptop" }),
    //       images2: faker.image.urlLoremFlickr({ category: "gaminglaptop" }),
    //       state: "in stock",
    //       currentprice: faker.commerce.price({ min: 100, max: 9000 }),
    //       afterdiscount: faker.commerce.price({ min: 100, max: 8000 }),
    //       color: [
    //         { id: 1, color: "blue" },
    //         { id: 2, color: "white" },
    //         { id: 3, color: "black" },
    //       ],
    //     },
    //     desc: faker.lorem.paragraph({ min: 1, max: 10 }),
    //     categories: 2,
    //     barnd: 2,
    //   });
    // }
  },
};

