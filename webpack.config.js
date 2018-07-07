// Webpack v4
const path = require('path');
//const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');   
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const conf = {
 entry: {
  main: './src/js/index.js',
 },
 output: {
  path: path.resolve(__dirname, './dist/'),
  filename: 'index.js',
  publicPath: 'dist',
 },
 devServer: {
	overlay: true,
	contentBase: './dist',
 },
 module: {
  rules: [
		{
		test: /\.js$/,
		exclude: /node_modules/,
		use: 
		{
			loader: 'babel-loader', // drive js through babel
		},
		},
		{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: 'css-loader',
				}),
		},
		{
				test: /\.sass|\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
		},
		{
			test: /\.html$/,
			exclude: /node_modules/,
			use: {loader: 'html-loader'}
		},
		{
			test: /\.(png|jpeg|jpg|svg|gif)$/,
			use: [
				{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'img/',
						publicPath: '../img/'
					},
				}
			],
		},
	],
 },
 plugins: [
	//new CleanWebpackPlugin(['dist']), // clean folder 'dist'
	new HtmlWebpackPlugin({
		title: 'Game',
		 template: path.resolve(__dirname, 'src', 'index.html'),
 	}),
	new ExtractTextPlugin({
			filename: 'style/style.css',
			//  disable: !isProd,
	}),
 ],
};

module.exports = (env, options) => {
 const production = options.mode === 'production';
 conf.devtool = production ? false : 'eval-sourcemap';
 return conf;
};