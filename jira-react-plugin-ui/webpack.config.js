const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const entry = './src/index.js';
const dist = "./build";

const plugins = [
    new CleanPlugin(dist),
    new ExtractTextPlugin(`${dist}/css/bundle.css`)
];

const rules = [
    {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    },
    {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            use: "css-loader?url=false"
        })
    },
    {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['es2015', 'react']
            }
        }
    }
];

module.exports = {
    entry,
    devtool: 'source-map',
    output: {
        filename: `${dist}/js/bundle.js`
    },
    resolve: {
        extensions: ['.js', '.css', '.svg'],
    },
    module: {
        rules
    },
    plugins
};
