"use strict";

const fractal = module.exports = require("@frctl/fractal").create();
const MarkdownIt = require("markdown-it");
const nunjucks = require("@frctl/nunjucks")({
    filters: {
        markdown: function (str) {
            const md = new MarkdownIt();
            return md.render(str);
        }
    }
});

fractal.set("project.title", "Two Zero Five");
fractal.components.engine(nunjucks);
fractal.components.set("path", __dirname + "/src/components");
fractal.components.set("ext", ".njk");
fractal.docs.set("path", __dirname + "/src/docs");
fractal.web.set("static.path", __dirname + "/src/assets");
