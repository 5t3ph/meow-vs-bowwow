module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");

  // Borrowed from the official 11ty site .eleventy.js
  // @link https://github.com/11ty/11ty-website/blob/master/.eleventy.js
  eleventyConfig.addFilter("randomItem", (arr) => {
    if (Array.isArray(arr)) {
      const random = arr[Math.floor(Math.random() * arr.length)];
      return [random];
    }
    return [];
  });

  return {
    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",
    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
    },
  };
};
