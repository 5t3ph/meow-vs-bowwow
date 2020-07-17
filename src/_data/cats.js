"use strict";
const fastglob = require("fast-glob");
const fs = require("fs");

module.exports = async () => {
  // Create a "glob" of all cat json files
  const catFiles = await fastglob("./src/pets/cats/*.json", {
    caseSensitiveMatch: false,
  });

  // Loop through those files and add their content to our `cats` Set
  let cats = new Set();
  for (let cat of catFiles) {
    const catData = JSON.parse(fs.readFileSync(cat));
    cats.add(catData);
  }

  // Return the cats Set of objects within an array
  return [...cats];
};
