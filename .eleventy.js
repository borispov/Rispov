const fs = require('fs');

const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
const markdownIt = require('markdown-it')
const markdownitlinkatt = require('markdown-it-link-attributes')
const markdownItAnchor = require('markdown-it-anchor')

const timeToRead = require('./lib/js/reading-time');
const now = String(Date.now());

// const publishedPosts = post => post && post.date <= now && !post.date.draft

const publishedPosts = post => post.date <= now && !post.data.draft

module.exports = function(eleventyConfig) {

  /*
   * Thanks to https://github.com/robdodson
   * From Issue:
   * https://github.com/11ty/eleventy/issues/26
   */
  eleventyComputed: {
    /**
     * Adds support for drafts.
     * If a page has `draft: true` in its YAML frontmatter then this snippet
     * will set its permalink to false and exclude it from collections.
     *
     * For dev builds we will always render the page.
     */
     permalink: data => {
      if (process.env.NODE_ENV === 'production' && data.draft) {
        return false;
      }

      return data.permalink;
    }
    eleventyExcludeFromCollections: data => {
      if (process.env.NODE_ENV === 'production' && data.draft) {
        return true;
      }

      return false;
    }
  }

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

    return process.env.ELEVENTY_PRODUCTION
      ? newPosts.filter(publishedPosts)
      : newPosts
  })

  eleventyConfig.addShortcode('version', function () {
    return now
  })

}
