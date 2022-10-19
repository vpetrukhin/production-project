import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { buildOptions } from './types/config';

export function buildPlugins({ paths, isDev, ApiUrl }: buildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API_URL__: JSON.stringify(ApiUrl) || 'http://localhost:8000',
        }),
    ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }));
    }

    return plugins;
}