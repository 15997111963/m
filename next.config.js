 
const path = require('path')
const withLess = require("@zeit/next-less")
const withPlugins = require("next-compose-plugins")

// const imageInlineSizeLimit = parseInt(
//   process.env.IMAGE_INLINE_SIZE_LIMIT || '10000'
// )

module.exports = withPlugins([withLess], {
  webpack(config){
    config.resolve.alias = Object.assign(config.resolve.alias,{ "@": path.resolve(__dirname, './') })
    // config.module.rules.concat({
    //   test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    //   use: require.resolve('url-loader'),
    //   options: {
    //     limit: imageInlineSizeLimit,
    //     name: '/_next/static/[name].[hash:8].[ext]'
    //   }
    // })
    return config
  }
})