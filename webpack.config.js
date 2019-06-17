// import plugins
const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');

// basic webpack configuration
module.exports = (env, argv) => {
    return {
        context: path.resolve(__dirname, "src"),
        entry: [
            "./scripts/index.js",
            "./styles/style.scss",
        ],
        devtool: "inline-source-map",
        output: {
            filename: "scripts/brnch.js",
            path: path.resolve(__dirname, "dist"),
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: "styles/brnch.css"
            }),
            // new CopyPlugin([
            //     {from: './assets', to: 'asstes'}
            // ]),
            new ImageminPlugin({
                disable: argv.mode !== 'production',
                test: /\.(jpe?g|png|gif)$/i,
                pngquant: {quality: '70-85'},
                optipng: {optimizationLevel: 9}
            }),
            new webpack.ProvidePlugin({
            }),
            new HtmlWebpackPlugin({
                template: '../index.html',
                filename: 'index.html',
                inject: true,
                hash: false,
                minify: {
                    removeCommits: true,
                    collapseWhitespace: false
                }
            })
        ],
        optimization: {
            minimizer: [
                new OptimizeCSSAssetsPlugin(),
            ],
        },
        module: {
            rules: [{
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ],
            }, {
                test: /\.(png|jpe?g|gif)$/,
                loaders: [{
                    loader: "file-loader",
                    options: {
                        name: "img/[name].[ext]"
                    }
                }, {
                    loader: 'image-webpack-loader',
                    options: {
                        disable: argv.mode !== 'production',
                        mozjpeg: {
                            progressive: true,
                            quality: 65
                        },
                        pngquant: {
                            quality: '65-90',
                            speed: 4
                        },
                        optipng: {enabled: false},
                        gifsicle: {interlaced: false},
                        webp: {quality: 75}
                    }
                }],
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "assets/fonts/[name].[ext]"
                    }
                }],
            }, {
                test: /\.svg$/,
                loader: "svg-url-loader"
            }]
        },
    };
};