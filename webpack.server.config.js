const webpack = require("webpack");
const path = require("path");
const basePath = path.join(__dirname, "./");

let config = {
    target: "node",
    entry: {
        server: path.join(basePath, "./entries/server.js")
    },
    output: {
        path: path.resolve(__dirname, "./dist"), // 项目的打包文件路径
        publicPath: "/dist/", // 通过devServer访问路径
        filename: "[name]_[hash].js", // 打包后的文件名
        libraryTarget: "commonjs2"
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js"
        }
    }
};
module.exports = config;
