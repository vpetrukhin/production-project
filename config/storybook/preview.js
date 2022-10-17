import { addDecorator } from '@storybook/react';
import { ThemeDecorator, StyleDecorator, RouterDecorator, StoreDecorator } from '../../src/shared/config/storybook/decorators';
import { Theme } from 'app/providers/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(StoreDecorator);
addDecorator(RouterDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));