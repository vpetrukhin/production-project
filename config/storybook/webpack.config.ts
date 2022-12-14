import { Paths } from '../build/types/config';
import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildScssLoader } from '../build/loaders/buildScssLoader';
import { buildSVGLoader } from '../build/loaders/BuildSVGLoader';

export default ({ config }: { config: webpack.Configuration }): webpack.Configuration => {
    const paths: Paths = {
        html: '',
        build: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        buildLocales: '',
        locales: path.resolve(__dirname, '..', '..', 'public', 'locales'),
    };

    config?.resolve?.modules?.push(paths.src);
    config?.resolve?.extensions?.push('.ts', '.tsx', '.scss');
    config!.resolve!.alias = {
        ...config?.resolve?.alias,
        '@': paths.src,
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    config!.module!.rules = config?.module?.rules?.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config!.module!.rules!.push(buildSVGLoader());
    config!.module!.rules!.push(buildScssLoader(true));

    config!.plugins!.push(new webpack.DefinePlugin({
        __IS_DEV__: true,
        __API_URL__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('storybook')
    }));

    return config;
};
