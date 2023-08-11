import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Skeleton as Skeleton } from './Skeleton';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/config/const/theme';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
    width: 150,
    height: 150,
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {
    width: 150,
    height: 150,
};

export const Circle = Template.bind({});
Circle.args = {
    width: 150,
    height: 150,
    border: '50%'
};

export const CircleDark = Template.bind({});
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
CircleDark.args = {
    width: 150,
    height: 150,
    border: '50%'
};