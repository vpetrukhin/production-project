import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLink } from './AppLink';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/config/const/theme';

export default {
    title: 'shared/AppLink',
    component: AppLink,
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    to: '/',
    children: 'test',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
PrimaryDark.args = {
    to: '/',
    children: 'test',
};

export const Inverted = Template.bind({});
Inverted.args = {
    to: '/',
    children: 'test',
    theme: 'inverted',
};
export const InvertedDark = Template.bind({});
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)];
InvertedDark.args = {
    to: '/',
    children: 'test',
    theme: 'inverted',
};