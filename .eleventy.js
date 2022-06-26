module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");

  // Borrowed from the official 11ty site .eleventy.js
  // @link https://github.com/11ty/11ty-website/blob/master/.eleventy.js
  eleventyConfig.addFilter("randomStack", (arr) => {
    if (Array.isArray(arr)) {
      const random = arr[Math.floor(Math.random() * arr.length)];
      return [random];
    }
    return [];
  });

  eleventyConfig.addFilter("getKeys", (obj) => {
      const keys = Object.keys(obj)
      return keys.length !== 0 ? keys : ["not", "yo", "mama"]
  })

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
