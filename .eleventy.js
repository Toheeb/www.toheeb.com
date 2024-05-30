const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")


module.exports = function (config) {
  config.addPassthroughCopy("src/netlify.toml");
  config.addPassthroughCopy({ "src/en/_images/": "/en/" });
  config.addPassthroughCopy({ "src/en/_assets/": "/en/" });
  config.addPassthroughCopy({ "node_modules/@toheeb/prose/index.css": "/en/base.css" });

  config.addPlugin(eleventyNavigationPlugin);

	config.addCollection("hc-parts-and-chapters", api => {

		const hcPreface = api.getFilteredByTags('hc-preface').sort(ascendingOrder)
		const hcPreamble = api.getFilteredByTags('hc-preamble').sort(ascendingOrder)
		const hcPrimal = api.getFilteredByTags('hc-primal').sort(ascendingOrder)
		const hcPhrasing = api.getFilteredByTags('hc-phrasing').sort(ascendingOrder)
		const hcProtocol = api.getFilteredByTags('hc-protocol').sort(ascendingOrder)

    const hcOutline = [];
    
    if (hcPreface.length > 0) {
      hcOutline.push({
        name: "Content Preface",
        chapters: hcPreface,
        cummulativeChapterLength: 1
      })
    }
    
    if (hcPreamble.length > 0) {
      hcOutline.push({
        name: "Preamble Contents",
        chapters: hcPreamble,
        cummulativeChapterLength: 1 + hcPreface.length
      })
    }
    
    if (hcPrimal.length > 0) {
      hcOutline.push({
        name: "Primal Contents",
        chapters: hcPrimal,
        cummulativeChapterLength: 1 + hcPreface.length + hcPreamble.length
      })
    }
    
    if (hcPhrasing.length > 0) {
      hcOutline.push({
        name: "Phrasing Contents",
        chapters: hcPhrasing,
        cummulativeChapterLength: 1 + hcPreface.length + hcPreamble.length + hcPrimal.length
      })
    }
    
    if (hcProtocol.length > 0) {
      hcOutline.push({
        name: "Content Protocols",
        chapters: hcProtocol,
        cummulativeChapterLength: 1 + hcPreface.length + hcPreamble.length + hcPrimal.length + hcPhrasing.length
      })
    }

		return hcOutline;
	})

  config.addCollection("hc-chapters", api => {
    return api.getFilteredByTags("hc").sort(ascendingOrder);
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
	return Number(a.data.hcChapter) > Number(b.data.hcChapter) ? 1 : -1
}
