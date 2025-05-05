const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")


module.exports = function (config) {
  config.addPassthroughCopy("src/_redirects");
  config.addPassthroughCopy({ "src/en/_images/": "/en/" });
  config.addPassthroughCopy({ "src/en/_assets/": "/en/" });
  config.addPassthroughCopy({ "node_modules/@toheeb/base/base.css": "/en/css/base.css" });
  config.addPassthroughCopy({ "node_modules/@toheeb/base/base-settings.js": "/en/js/base-settings.js" });

  config.addPlugin(eleventyNavigationPlugin);

  config.addCollection("book-hc-page-list", api => {
    return api.getFilteredByTags("book-hc-page").sort((a, b) => {
      return a.data["book-hc"] - b.data["book-hc"];
    });
  })
  
  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",

    dir: {
      input: "src/",
      output: "_site",
    },
  };
};
