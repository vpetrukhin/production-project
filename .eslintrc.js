module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/jsx-runtime',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    ignorePatterns: ['./config/babel/*.ts'],
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'carav-plugin',
        'unused-imports',
    ],
    rules: {
        'no-undef': 'off',
        'react/display-name': 'off',
        'react/jsx-max-props-per-line': ['error', { maximum: 3 }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'i18next/no-literal-string': [
            'warn',
            {
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
                    'theme',
                ],
            },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'carav-plugin/path-checker': ['error', { alias: '@' }],
        'carav-plugin/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: ['**/*.test.ts', '**/*.stories.tsx', '**/StoreDecorator.tsx'],
            },
        ],
        'carav-plugin/layer-imports': [
            'error',
            {
                alias: '@',
                ignorePatterns: ['**/Redux'],
            },
        ],
        '@typescript-eslint/no-var-requires': 'off',
        'unused-imports/no-unused-imports': 'warn',
    },
};
