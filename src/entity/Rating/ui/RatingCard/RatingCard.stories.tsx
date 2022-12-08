import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RatingCard } from './RatingCard';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';

export default {
    title: '/RatingCard',
    component: RatingCard,
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {};