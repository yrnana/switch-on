import markdownIt from 'markdown-it';

export default function (eleventyConfig) {
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  eleventyConfig.setLibrary('md', markdownIt(options));

  return {
    pathPrefix: '/switch-on/',
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts',
    },
  };
}
