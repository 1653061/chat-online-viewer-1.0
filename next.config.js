if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}
module.exports = {
    distDir: 'build',
    env: {
        GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    },
  }