if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}
module.exports = {
    distDir: 'build',
    target: 'serverless',
    env: {
        GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
        FACEBOOK_APPID: process.env.FACEBOOK_APPID,
        GOOGLE_CLIENTID: process.env.GOOGLE_CLIENTID,
        SOCKET_GRAPHQL_ENDPOINT: process.env.SOCKET_GRAPHQL_ENDPOINT,
    },
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
      ) {
        return {
          '/': { page: '/' },
          '/About': { page: '/About' },
          '/Feature': { page: '/Feature' },
        }
      },
}