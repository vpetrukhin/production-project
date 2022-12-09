module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/jsx-runtime', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': ['react', '@typescript-eslint', 'i18next', 'react-hooks', 'carav-plugin'],
    'rules': {
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-undef': 'off',
        'react/display-name': 'off',
        'react-hooks/rules-of-hooks': 'error', 
        'react-hooks/exhaustive-deps': 'warn',
        'i18next/no-literal-string': ['warn', {
            markupOnly: true,
            ignoreCallee: ['TEST', 'test'],
            ignoreAttribute: [
                'to',
                'data-testid',
                'name',
                'target',
                'direction',
                'align',
                'justify',
                'wrap',
                'as',
                'color',
                'size',
                'theme'
            ]
        }],
        '@typescript-eslint/no-non-null-assertion': 'off',
        'carav-plugin/path-checker': 'error',
        '@typescript-eslint/no-var-requires': 'off'
    },
};
