import babelRemoveAttributesPlugin from '../../babel/babelRemoveAttributesPlugin';

interface buildBabelLoaderProps {
    isTsx: boolean;
}

export const buildBabelLoader = ({ isTsx }: buildBabelLoaderProps) => ({
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: [
                '@babel/plugin-transform-runtime',
                [
                    '@babel/plugin-transform-typescript',
                    {
                        isTsx
                    }
                ],
                (isTsx && [
                    babelRemoveAttributesPlugin, { props: ['data-testid'] }
                ])
            ].filter(Boolean),
        }
    }
});