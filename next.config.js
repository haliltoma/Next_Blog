/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  output: {
    // ...
    globalObject: 'this',
  },
}

module.exports = nextConfig
