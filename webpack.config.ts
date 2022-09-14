import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { buildEnv, Paths } from './config/build/types/config';


const paths: Paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
};

export default (env: buildEnv) => {
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const port = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port
    })

    return config
};
