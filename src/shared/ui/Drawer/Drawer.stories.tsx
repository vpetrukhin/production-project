import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Drawer } from './Drawer';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';

export default {
    title: '/Drawer',
    component: Drawer,
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {};