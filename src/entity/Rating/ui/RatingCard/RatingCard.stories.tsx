import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RatingCard } from './RatingCard';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/config/const/theme';

export default {
    title: 'entity/RatingCard',
    component: RatingCard,
} as ComponentMeta<typeof RatingCard>;

const defaultProps = {
    title: 'Ваша оценка'
};


const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    ...defaultProps,
    rate: 3
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {
    ...defaultProps,
    rate: 3
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
    ...defaultProps
};