import { Paths } from '../build/types/config';
import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildScssLoader } from '../build/loaders/buildScssLoader';
import { buildSVGLoader } from '../build/loaders/BuildSVGLoader';

export default ({ config }: {config: webpack.Configuration}): webpack.Configuration => {
    const paths: Paths = {
        html: '',
        build: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module.rules.push(buildSVGLoader());
    config.module.rules.push(buildScssLoader(true));

    return config;
};
