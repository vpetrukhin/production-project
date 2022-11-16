import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesViewSelector } from './ArticlesViewSelector';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { ArticleView } from '../../model/types/article';

export default {
    title: 'entity/Article/ArticlesViewSelector',
    component: ArticlesViewSelector,
} as ComponentMeta<typeof ArticlesViewSelector>;

const Template: ComponentStory<typeof ArticlesViewSelector> = (args) => <ArticlesViewSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
    view: ArticleView.SMALL
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {
    view: ArticleView.BIG
};