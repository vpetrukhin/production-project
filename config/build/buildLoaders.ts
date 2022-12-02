import webpack from 'webpack';
import { buildOptions } from './types/config';
import { buildSVGLoader } from './loaders/BuildSVGLoader';
import { buildScssLoader } from './loaders/buildScssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders({ isDev }: buildOptions): webpack.RuleSetRule[] {
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        fileLoader,
        buildSVGLoader(),
        buildBabelLoader({ isTsx: false }),
        buildBabelLoader({ isTsx: true }),
        buildScssLoader(isDev),
    ];
}