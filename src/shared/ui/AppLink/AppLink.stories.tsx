import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink to="/" {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'test',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
PrimaryDark.args = {
    children: 'test',
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'test',
    theme: AppLinkTheme.SECONDARY,
};
export const SecondaryDark = Template.bind({});
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
SecondaryDark.args = {
    children: 'test',
    theme: AppLinkTheme.SECONDARY,
};