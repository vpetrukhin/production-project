import webpack from 'webpack';
import { buildOptions } from './types/config';
import { buildSVGLoader } from './loaders/BuildSVGLoader';
import { buildScssLoader } from './loaders/buildScssLoader';

export function buildLoaders({ isDev }: buildOptions): webpack.RuleSetRule[] {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const babelLoader = {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    };

    return [
        fileLoader,
        buildSVGLoader(),
        babelLoader,
        tsLoader,
        buildScssLoader(isDev),
    ];
}