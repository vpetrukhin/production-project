import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleDetailsEditPage from './ArticleDetailsEditPage';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/config/const/theme';

export default {
    title: 'pages/ArticleDetailsEditPage',
    component: ArticleDetailsEditPage,
} as ComponentMeta<typeof ArticleDetailsEditPage>;

const Template: ComponentStory<typeof ArticleDetailsEditPage> = (args) => <ArticleDetailsEditPage {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {};