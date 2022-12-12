import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleRating } from './ArticleRating';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';
import { StoreDecorator } from '@/shared/config/storybook/decorators';
import withMock from 'storybook-addon-mock';

export default {
    title: 'feutures/ArticleRating',
    component: ArticleRating,
    decorators: [StoreDecorator({}), withMock]
} as ComponentMeta<typeof ArticleRating>;

const mockData = [
    {
        url: `${__API_URL__}/article-ratings?userId='1'`,
        method: 'GET',
        status: 200,
        response: [
            {
                rate: 4
            }
        ],
    },
];

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = { mockData };

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {};
DefaultDark.parameters = { mockData };

export const WithoutRate = Template.bind({});
Default.args = {};