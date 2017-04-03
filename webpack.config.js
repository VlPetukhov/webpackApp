let webpack = require('webpack');
let path = require('path');
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let extractCSS = new ExtractTextPlugin('css/[name].css');

module.exports = {
    entry: {
        app: [
            './src/main.js',
            './src/index.html'
        ],
        vendor: [
            'vue',
            'axios',
            'bootstrap-webpack'
        ],
    },
    output: {
        path: path.resolve(__dirname, 'public/assets'),
        filename: 'js/[name].js',
        publicPath: '/assets/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                options: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.less$/i,
                use: extractCSS.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "less-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: function () {
                                    return [
                                        require('precss'),
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }
                    ]
                })
            },
            {
                test: /\.css$/i,
                use: extractCSS.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: function () {
                                    return [
                                        require('precss'),
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader?limit=10000&name=fonts/[name].[ext]'
            },
            {
                test: /\.ttf$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.eot$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.svg$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.html?$/,
                use: [
                    'file-loader?name=../[name].[ext]',
                    'extract-loader',
                    {
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            },
            {
                test: /backgrounds\/[\S]+\.(jpe?g|png|gif)$/i,
                loaders: [
                    'file-loader?name=../images/backgrounds/[name].[ext]'
                ]
            },
            {
                test: /images\/[\S]+\.(jpe?g|png|gif)$/i,
                loaders: [
                    'file-loader?name=../images/[name].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7'
                ]
            },
            {
                test: /bootstrap\/js\//,
                loader: 'imports?jQuery=jquery'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]

    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    plugins: [
        extractCSS,
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        }),
        new OptimizeCssAssetsPlugin({
            // assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true
                }
            },
            canPrint: true
        })
    ]
};

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    );
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourcemap: true,
            compress: {
                warnings:false
            }
        })
    );
}