import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleDetailsComments } from './ArticleDetailsComments';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';
import { StoreDecorator } from '@/shared/config/storybook/decorators';

export default {
    title: 'pages/ArticleDetails/ArticleDetailsComments',
    component: ArticleDetailsComments,
    decorators: [StoreDecorator({})]
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {};