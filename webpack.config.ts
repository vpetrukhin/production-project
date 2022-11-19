import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { buildEnv, Paths } from './config/build/types/config';


const paths: Paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
    locales: path.resolve(__dirname, 'public', 'locales'),
};

export default (env: buildEnv) => {
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const ApiUrl = env.ApiUrl || 'http://localhost:8000';
    const port = env.port || 3000;
    const project = 'frontend';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
        ApiUrl,
        project
    });

    return config;
};
