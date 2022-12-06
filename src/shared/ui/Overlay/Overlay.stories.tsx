import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Overlay } from './Overlay';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';

export default {
    title: '/Overlay',
    component: Overlay,
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = (args) => <Overlay {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {};