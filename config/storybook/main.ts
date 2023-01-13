import path from 'path';
import { Configuration, DefinePlugin, webpack } from 'webpack';
import { buildScssLoader } from '../build/loaders/buildScssLoader';
import { buildSVGLoader } from '../build/loaders/BuildSVGLoader';
import { Paths } from '../build/types/config';

module.exports = {
    'stories': [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    'addons': [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false
            }
        },
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        'storybook-addon-themes'
    ],
    'framework': '@storybook/react',
    'core': {
        'builder': '@storybook/builder-webpack5'
    },
    'webpackFinal': async (config: Configuration) => {
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

        config!.plugins!.push(new DefinePlugin({
            __IS_DEV__: true,
            __API_URL__: JSON.stringify('http://localhost:8000'),
            __PROJECT__: JSON.stringify('storybook')
        }));
        return config;
    },
};