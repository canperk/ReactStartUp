var webpack = require("webpack")
var glob = require("glob")

module.exports = {
    entry: {
        myPages: glob.sync('./ScriptLib/**/*.tsx')
    },
    output: {
        filename: './wwwroot/js/dist/webpack.build.js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /.tsx$/, loaders: ['awesome-typescript-loader'] }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "react": "React",
            "react-dom": "ReactDOM"
        })
    ]
};