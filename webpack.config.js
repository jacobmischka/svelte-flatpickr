/* eslint-env node */

const path = require('path');

module.exports = {
	entry: {
		index: path.resolve(__dirname, 'src/index.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	target: 'web',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.html$/,
				use: [
					'babel-loader',
					'svelte-loader'
				]
			}
		]
	}
};
