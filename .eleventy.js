const fs = require('fs');

const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
const markdownIt = require('markdown-it')
const markdownitlinkatt = require('markdown-it-link-attributes')
const markdownItAnchor = require('markdown-it-anchor')

const timeToRead = require('./lib/js/reading-time');
const now = String(Date.now());

module.exports = function(eleventyConfig) {
  // src folders and files
  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' });
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("fonts");
  // watch
  eleventyConfig.addWatchTarget('./style.css');
  eleventyConfig.addWatchTarget('./_tmp/style.css');

  // eleventyConfig.addPlugin(lazyImagesPlugin);

  /* Markdown Overrides */
  let markdownLib = markdownIt({
    html: true,
    breaks: true
  }).use(markdownitlinkatt, {
      pattern: /^(?!(https:\/\/rispov\.com|#)).*$/gm,
      attrs: {
        target: '_blank',
        rel: 'noreferrer'
      }
  }).use(markdownItAnchor, {
      permalink: true,
      permalinkClass: 'direct-link text-red-400 dark:text-red-600',
      permalinkSymbol: '#',
      permalinkAttrs: (slug, state) => ({
        'aria-label': `permalink to ${slug}`,
        title: 'Anchor link for easy sharing.'
      })
  });
  eleventyConfig.setLibrary("md", markdownLib);

  // Custom Filters
  eleventyConfig.addFilter("excerpt", (post) => {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
  });
  eleventyConfig.addFilter("reverse", a => a.slice().reverse() );
  eleventyConfig.addFilter('timeToRead', timeToRead);


  eleventyConfig.addCollection("posts", collection => {
    const posts = collection.getFilteredByGlob("_posts/**/*.md")
    const newPosts = posts.map(post => {
      post.data.permalink += '.html';
      post.data.outputPath += '/index.html';
      return post
    })
    return newPosts
  })

  eleventyConfig.addShortcode('version', function () {
    return now
  })

}