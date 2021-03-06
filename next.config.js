const withImages = require('next-images')

module.exports = module.exports = {
  withImages: withImages({
    esModule: true
  }),
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/\//',
        destination: '/post/',
        permanent: true // 308 | false=307
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*/',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          }
        ]
      }
    ]
  }
}
