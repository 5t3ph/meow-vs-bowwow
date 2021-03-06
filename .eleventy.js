module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");

  // Borrowed from the official 11ty site .eleventy.js
  // @link https://github.com/11ty/11ty-website/blob/master/.eleventy.js
  eleventyConfig.addFilter("randomPet", (arr) => {
    if (Array.isArray(arr)) {
      const random = arr[Math.floor(Math.random() * arr.length)];
      return [random];
    }
    return [];
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
