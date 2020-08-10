const {merge} = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
// const { resolve } = require('path')
// const { rejects } = require('assert')

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: []
})

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
})
//--mode production