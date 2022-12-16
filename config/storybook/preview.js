import { addDecorator } from '@storybook/react';
import { ThemeDecorator, StyleDecorator, RouterDecorator, TranslateDecorator } from '../../src/shared/config/storybook/decorators';
import {Theme} from '../../src/shared/config/const/theme'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: Theme.LIGHT, color: '#00aced' },
            { name: 'dark', class: Theme.DARK, color: '#3b5998' }
        ],
    },
};

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(TranslateDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));