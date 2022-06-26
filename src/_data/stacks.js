"use strict";
const fastglob = require("fast-glob");
const fs = require("fs");

module.exports = async () => {
  // Create a "glob" of all cat json files
  const stackFiles = await fastglob("./src/stacks/*.json", {
    caseSensitiveMatch: false,
  });

  // Loop through those files and add their content to our `stacks` Set
  let stacks = new Set();
  for (let stack of stackFiles) {
    const stackData = JSON.parse(fs.readFileSync(stack));
    stacks.add(stackData);
  }

  // Return the stacks Set of objects within an array
  return [...stacks];
};
