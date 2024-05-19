module.exports = function (config) {
  config.addPassthroughCopy("src/netlify.toml");
  config.addPassthroughCopy({ "src/en/_images/": "/en/" });

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",

    dir: {
      input: "src/",
      output: "_site",
    },
  };
};
