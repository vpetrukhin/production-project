import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticlesDetailsPage from './ArticlesDetailsPage';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { StoreDecorator } from 'shared/config/storybook/decorators';

export default {
    title: 'pages/ArticlesDetails/ArticlesDetailsPage',
    component: ArticlesDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    }
} as ComponentMeta<typeof ArticlesDetailsPage>;

const Template: ComponentStory<typeof ArticlesDetailsPage> = (args) => <ArticlesDetailsPage {...args} />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({})];
Default.args = {};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
DefaultDark.args = {};