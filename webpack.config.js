const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

const getStyleRule = (isProduction, cssOptions, extraLoaders) => {
	return {
		[isProduction ? 'loader' : 'use']: [
			isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
			{
				loader: 'css-loader',
				options: {
					importLoaders: 1,
					...(cssOptions || {}),
				},
			},
			...(extraLoaders || []),
		],
	}
}

module.exports = env => {
	const isProduction = env.NODE_ENV === 'production'
	const PUBLIC_PATH = '/'
	return {
		entry: {
			app: ['@babel/polyfill', './src/index.js'],
		},
		output: {
			filename: '[name]-[hash].bundle.js',
			path: path.resolve(__dirname, 'build'),
			publicPath: PUBLIC_PATH,
		},
		devtool: 'source-map',
		devServer: {
			contentBase: './public',
			hot: true,
			historyApiFallback: true,
		},
		optimization: {
			minimizer: [
				new UglifyJsPlugin({
					sourceMap: true,
					parallel: true,
				}),
			],
		},
		plugins: (function() {
			return [
				!isProduction
					? new BundleAnalyzerPlugin({
							openAnalyzer: false,
					  })
					: null,
				!isProduction ? new DashboardPlugin() : null,
				isProduction ? new CleanWebpackPlugin(['build']) : null,
				new HtmlWebpackPlugin({
					template: './public/index.html',
					filename: './index.html',
					chunksSortMode: 'none',
				}),
				isProduction ? new MiniCssExtractPlugin() : null,
				!isProduction ? new webpack.HotModuleReplacementPlugin() : null,
			].filter(p => p)
		})(),
		module: {
			rules: [
				{
					test: /\.m?js$/,
					exclude: /(node_modules)/,
					use: {
						loader: 'babel-loader',
						options: {
							plugins: ['lodash'],
							presets: ['@babel/preset-env'],
						},
					},
				},

				{
					test: /\.css$/,
					exclude: /\.module.css$/,
					...getStyleRule(isProduction),
				},

				{
					test: /\.module.css$/,
					...getStyleRule(isProduction, { modules: true }),
				},

				{
					test: /\.(png|svg|jpg|gif)$/,
					use: ['file-loader'],
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/,
					use: ['file-loader'],
				},
			],
		},
		resolve: {
			alias: {
				app: path.resolve(__dirname, 'src/'),
			},
		},
	}
}
