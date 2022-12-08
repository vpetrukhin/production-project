import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StarRating } from './StarRating';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';

export default {
    title: '/StarRating',
    component: StarRating,
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {};