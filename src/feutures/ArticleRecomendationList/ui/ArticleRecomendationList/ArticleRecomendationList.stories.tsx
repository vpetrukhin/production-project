
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleRecomendationList } from './ArticleRecomendationList';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';

export default {
    title: 'feutures/ArticleRecomendationList',
    component: ArticleRecomendationList,
} as ComponentMeta<typeof ArticleRecomendationList>;

const Template: ComponentStory<typeof ArticleRecomendationList> = (args) => <ArticleRecomendationList {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {};