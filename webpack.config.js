const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin");
var ENV = process.env.NODE_ENV,
    isProd = ENV === "production" ? true : false,
    BUILD_DIR = path.resolve(__dirname, 'public'),
    APP_DIR = path.resolve(__dirname, 'app'),
    ROOT_DIR = path.resolve(__dirname),
    NODE_MODULES = path.resolve(__dirname, 'node_modules'),
    config = {
        entry: {
            app: [APP_DIR + "/index.jsx"],
            login: [APP_DIR + "/login.js"],
          },
        output: {
            path: (isProd ? BUILD_DIR : ROOT_DIR), //<- This path is use at build time
            // filename: "bundle.js", //<- This file is created under path which we specified in output.path
            // publicPath: "/static/" //<- This path is for dev server. you cant see this folder
            filename: '[name].[hash].js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Ranger',
                template: 'index.ejs',
                chunks: [ 'app' ],
                filename: ROOT_DIR + '/index.html'
            }),
            new HtmlWebpackPlugin({
                title: 'Ranger Login',
                template: 'index.ejs',
                chunks: [ 'login' ],
                filename: ROOT_DIR + '/login.html'
            }),
             new MiniCssExtractPlugin({
                // Extracting all css in one file, and file name is based on what you specified in filename
                filename: "style.css",
                allChunks: true
            }), new webpack.ProvidePlugin({
                "React": "react",
            })
        ],
        resolve: {
            modules: [
                APP_DIR,
                NODE_MODULES
            ],
            alias: {},
            extensions: ['.js', '.jsx', '.json', '.css']
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                include: APP_DIR
            }, {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
            }, {
                test: /\.css$/,
                loader: MiniCssExtractPlugin.loader
            }
        ]
        },
        devServer: {
            proxy: {
                "/api": "http://localhost:8080/"
            }
        }
    }

if (!isProd) {
    config['devtool'] = 'inline-source-map';
    config['cache'] = true;
}
module.exports = config;
