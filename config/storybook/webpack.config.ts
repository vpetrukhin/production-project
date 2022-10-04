import { Paths } from '../build/types/config';
import webpack from 'webpack';
import path from 'path';
import { buildScssLoader } from '../build/loaders/buildScssLoader';

export default ({ config }: {config: webpack.Configuration}): webpack.Configuration => {
    const paths: Paths = {
        html: '',
        build: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push(buildScssLoader(true));

    return config;
};
