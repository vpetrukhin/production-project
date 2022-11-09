import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleItem } from './ArticleItem';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';

export default {
    title: '/ArticleItem',
    component: ArticleItem,
} as ComponentMeta<typeof ArticleItem>;

const Template: ComponentStory<typeof ArticleItem> = (args) => <ArticleItem {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {};