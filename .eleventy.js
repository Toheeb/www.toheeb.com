const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")


module.exports = function (config) {
  config.addPassthroughCopy("src/netlify.toml");
  config.addPassthroughCopy({ "src/en/_images/": "/en/" });
  config.addPassthroughCopy({ "src/en/_assets/": "/en/" });
  config.addPassthroughCopy({ "node_modules/@toheeb/prose/index.css": "/en/base.css" });

  config.addPlugin(eleventyNavigationPlugin);

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",

    dir: {
      input: "src/",
      output: "_site",
    },
  };
};
