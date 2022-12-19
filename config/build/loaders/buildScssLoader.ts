import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildScssLoader = (isDev: boolean | undefined) => ({
    test: /\.s[ac]ss$/i,
    use: [
        // Creates `style` nodes from JS strings
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        {
            loader: 'css-loader',
            exclude: /node_modules/,
            options: {
                modules: {
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
                },
            },
        },
        // Compiles Sass to CSS
        'sass-loader',
    ],
});