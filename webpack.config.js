// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {};
    if (isProd) {
        config.minimizer = [new CssMinimizerPlugin(), new TerserWebpackPlugin()];
    }
    return config;
};

const excludeSourceMap = () => {
    if (isProd) {
        return 'bundle.js';
    }
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    // entry: ['./js/index.js', './js/animation-galaxy-sphere.js', './style/style.scss'],
    entry: {
        index: './js/index.js',
        animation: './js/animation-galaxy-sphere.js',
    },
    output: {
        path: path.resolve(__dirname, './assets/'),
        filename: './js/[name].bundle.js'
    },
    optimization: optimization(),
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './css/style.[contenthash].css'
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            exclude: excludeSourceMap(),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            url: true,
                            import: true,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    }
}