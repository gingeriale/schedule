const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/',
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    },
    devServer: {
        contentBase: './',
        port: 8080,
        noInfo: false,
		hot: true,
		inline: true,
        proxy: {
			'/': {
				bypass: function (req, res, proxyOptions) {
					return '/public/index.html';
				}
			}
		}
    },
    plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
