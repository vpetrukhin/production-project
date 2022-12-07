import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticlesPage from './ArtilclesPage';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';
import { StoreDecorator } from '@/shared/config/storybook/decorators';

export default {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    }
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({})];
Default.args = {};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
DefaultDark.args = {};