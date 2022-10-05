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
    'plugins': ['react', '@typescript-eslint', 'i18next'],
    'rules': {
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-undef': 'warn',
        'react/display-name': 'off',
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            ignoreCallee: ['TEST', 'test'],
            ignoreAttribute: ['to', 'data-testid']
        }]
    }
};
