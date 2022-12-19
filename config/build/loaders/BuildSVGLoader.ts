export const buildSVGLoader = () => ({
    test: /\.svg$/,
    exclude: /node_modules/,
    use: ['@svgr/webpack'],
});