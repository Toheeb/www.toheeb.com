const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")


module.exports = function (config) {
  config.addPassthroughCopy("src/netlify.toml");
  config.addPassthroughCopy({ "src/en/_images/": "/en/" });
  config.addPassthroughCopy({ "src/en/_assets/": "/en/" });
  config.addPassthroughCopy({ "node_modules/@toheeb/prose/index.css": "/en/base.css" });

  config.addPlugin(eleventyNavigationPlugin);

  config.addCollection("book-hc-page-list", api => {
    return api.getFilteredByTags("book-hc-page").sort(ascendingOrder);
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

function ascendingOrder(a, b) {
	return Number(a.data.bookHc) > Number(b.data.bookHc) ? 1 : -1
}