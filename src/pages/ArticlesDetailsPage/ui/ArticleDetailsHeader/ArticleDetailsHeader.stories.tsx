import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleDetailsHeader } from './ArticleDetailsHeader';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';

export default {
    title: 'pages/ArticleDetails/ArticleDetailsHeader',
    component: ArticleDetailsHeader,
} as ComponentMeta<typeof ArticleDetailsHeader>;

const Template: ComponentStory<typeof ArticleDetailsHeader> = (args) => <ArticleDetailsHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {};