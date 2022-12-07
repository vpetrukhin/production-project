import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticlesDetailsCreatePage from './ArticlesDetailsCreatePage';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';

export default {
    title: 'pages/ArticlesDetailsCreatePage',
    component: ArticlesDetailsCreatePage,
} as ComponentMeta<typeof ArticlesDetailsCreatePage>;

const Template: ComponentStory<typeof ArticlesDetailsCreatePage> = (args) => <ArticlesDetailsCreatePage {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {};