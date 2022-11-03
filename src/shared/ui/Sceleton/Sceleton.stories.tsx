import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Sceleton } from './Sceleton';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';

export default {
    title: 'shared/Sceleton',
    component: Sceleton,
} as ComponentMeta<typeof Sceleton>;

const Template: ComponentStory<typeof Sceleton> = (args) => <Sceleton {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {};