"use strict";
const fastglob = require("fast-glob");
const fs = require("fs");

module.exports = async () => {
  const dogFiles = await fastglob("./src/pets/dogs/*.json", {
    caseSensitiveMatch: false,
  });

  let dogs = new Set();
  for (let dog of dogFiles) {
    const dogData = JSON.parse(fs.readFileSync(dog));
    dogs.add(dogData);
  }

  return [...dogs];
};
