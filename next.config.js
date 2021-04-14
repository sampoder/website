const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({ pageExtensions: ['js', 'mdx'], images: {
  imageSizes: [18, 36, 54, 24, 48, 72, 96, 144],
  domains: [
    'dl.airtable.com',
    'emoji.slack-edge.com',
    'cloud-lp0r5yk68.vercel.app',
    'github.com'
  ]
}, })
