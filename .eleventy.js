module.exports = function(eleventyConfig) {

    eleventyConfig.setTemplateFormats(["md", "njk", "css", "jpg", "svg", "png"]);
    eleventyConfig.addPassthroughCopy("src/css");

    return {
        dir: {
            input: "_src",
            output: "dist",
            pathPrefix: "/chilli-pepper-fields-website/"
        },
    };
};