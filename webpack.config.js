const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
	const isProductionBuild = argv.mode === "production";
	const publicPath = "/prav-fund__project/";

	const pcss = {
		test: /\.(p|post|)css$/,
		use: [
			isProductionBuild ? MiniCssExtractPlugin.loader : "vue-style-loader",
			"css-loader",
			"postcss-loader"
		]
	};

	const vue = {
		test: /\.vue$/,
		loader: "vue-loader"
	};

	const js = {
		test: /\.js$/,
		loader: "babel-loader",
		exclude: /node_modules/,
		options: {
			presets: ["@babel/preset-env"],
			plugins: ["@babel/plugin-syntax-dynamic-import"]
		}
	};

	const files = {
		test: /\.(png|jpg|jpe?g|gif|woff2?)$/i,
		loader: "file-loader",
		options: {
			name: "[hash].[ext]"
		}
	};

	const svg = {
		test: /\.svg$/,
		use: [
			{
				loader: "svg-sprite-loader",
				options: {
					extract: true,
					spriteFilename: svgPath => `sprite${svgPath.substr(-4)}`
				}
			},
			"svg-transform-loader",
			{
				loader: "svgo-loader",
				options: {
					plugins: [{removeTitle: true}, {removeAttrs: false}]
				}
			}
		]
	};

	const pug = {
		test: /\.pug$/,
		oneOf: [
			{
				resourceQuery: /^\?vue/,
				use: ["pug-plain-loader"]
			},
			{
				use: ["pug-loader"]
			}
		]
	};

	const config = {
		entry: {
			home: "./src/main__home.js",
			activity: "./src/main__activity.js",
			activityPage: "./src/main__activityPage.js",
			fund: "./src/main__fund.js",
			fundPolitics: "./src/main__fundPolitics.js",
			fundDocuments: "./src/main__fundDocuments.js",
			fundDocumentsAll: "./src/main__fundDocumentsAll.js",
			fundDirectorateExecutive: "./src/main__fundDirectorateExecutive.js",
			fundDirectorateTrust: "./src/main__fundDirectorateTrust.js",
			fundDirectoratePage: "./src/main__fundDirectoratePage.js",
			grantsAbout: "./src/main__grantsAbout.js",
			grantsText: "./src/main__grantsText.js"
		},
		output: {
			path: path.resolve(__dirname, "./dist"),
			filename: "[name].[hash].build.js",
			publicPath: isProductionBuild ? publicPath : "",
			chunkFilename: "[chunkhash].js"
		},
		module: {
			rules: [pcss, vue, js, files, svg, pug]
		},
		resolve: {
			alias: {
				vue$: "vue/dist/vue.esm.js",
				images: path.resolve(__dirname, "src/images")
			},
			extensions: ["*", ".js", ".vue", ".json"]
		},
		devServer: {
			historyApiFallback: true,
			noInfo: false,
			overlay: true
		},
		performance: {
			hints: false
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: "./src/pug/pages/home.pug",
				chunks: ["home"]
			}),
			new HtmlWebpackPlugin({
				template: "./src/pug/pages/activity.pug",
				chunks: ["activity"],
				filename: "activity.html"
			}),
			new HtmlWebpackPlugin({
				template: "./src/pug/pages/activityPage.pug",
				chunks: ["activityPage"],
				filename: "activityPage.html"
			}),
			new HtmlWebpackPlugin({
				template: "./src/pug/pages/fund.pug",
				chunks: ["fund"],
				filename: "fund.html"
			}),
			new HtmlWebpackPlugin({
				template: "./src/pug/pages/fundPolitics.pug",
				chunks: ["fundPolitics"],
				filename: "fundPolitics.html"
			}),
			new HtmlWebpackPlugin({
				template: "./src/pug/pages/fundDocumentsAll.pug",
				chunks: ["fundDocumentsAll"],
				filename: "fundDocumentsAll.html"
			}),
			new HtmlWebpackPlugin({
				template: "./src/pug/pages/fundDocuments.pug",
				chunks: ["fundDocuments"],
				filename: "fundDocuments.html"
			}),
			new HtmlWebpackPlugin({
				template: "./src/pug/pages/fundDirectorateExecutive.pug",
				chunks: ["fundDirectorateExecutive"],
				filename: "fundDirectorateExecutive.html"
			}),
			new HtmlWebpackPlugin({
				template: "./src/pug/pages/fundDirectorateTrust.pug",
				chunks: ["fundDirectorateTrust"],
				filename: "fundDirectorateTrust.html"
			}),
			new HtmlWebpackPlugin({
				template: "./src/pug/pages/fundDirectoratePage.pug",
				chunks: ["fundDirectoratePage"],
				filename: "fundDirectoratePage.html"
			}),
			new HtmlWebpackPlugin({
				template: "./src/pug/pages/grantsAbout.pug",
				chunks: ["grantsAbout"],
				filename: "grantsAbout.html"
			}),
			new HtmlWebpackPlugin({
				template: "./src/pug/pages/grantsText.pug",
				chunks: ["grantsText"],
				filename: "grantsText.html"
			}),
			new SpriteLoaderPlugin({plainSprite: true}),
			new VueLoaderPlugin()
		],
		devtool: "#eval-source-map"
	};

	if (isProductionBuild) {
		config.devtool = "none";
		config.plugins = (config.plugins || []).concat([
			new webpack.DefinePlugin({
				"process.env": {
					NODE_ENV: '"production"'
				}
			}),
			new MiniCssExtractPlugin({
				filename: "[name].[contenthash].css",
				chunkFilename: "[contenthash].css"
			})
		]);

		config.optimization = {};

		config.optimization.minimizer = [
			new TerserPlugin({
				cache: true,
				parallel: true,
				sourceMap: false
			}),
			new OptimizeCSSAssetsPlugin({})
		];
	}

	return config;
};
