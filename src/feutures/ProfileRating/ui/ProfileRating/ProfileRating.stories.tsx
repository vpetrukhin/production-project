import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfileRating } from './ProfileRating';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';
import { StoreDecorator } from '@/shared/config/storybook/decorators';
import withMock from 'storybook-addon-mock';

export default {
    title: 'feutures/ProfileRating',
    component: ProfileRating,
    decorators: [StoreDecorator({}), withMock]
} as ComponentMeta<typeof ProfileRating>;

const mockData = [
    {
        url: `${__API_URL__}/profile-ratings?userId='1'&profileId='1'`,
        method: 'GET',
        status: 200,
        response: [
            {
                rate: 3
            }
        ],
    },
];

const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = { mockData };

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
Default.parameters = { mockData };
DefaultDark.args = {};