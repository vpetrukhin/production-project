import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationList } from './NotificationList';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/decorators';
import { Theme } from '@/shared/config/const/theme';

export default {
    title: 'entity/Notification/NotificationList',
    component: NotificationList,
    decorators: [
        StoreDecorator({}),
    ]
} as ComponentMeta<typeof NotificationList>;

const mockData = [
    {
        url: `${__API_URL__}/notifications`,
        method: 'GET',
        status: 200,
        response: [
            {
                id: '1',
                title: 'Уведомление 1',
                description: 'Описание уведомления 1',
                userId: '1',
            },
            {
                id: '2',
                title: 'Уведомление 2',
                description: 'Описание уведомления 2 (с href)',
                userId: '1',
                href: '1'
            },
            {
                id: '3',
                title: 'Уведомление 3',
                description: 'Описание уведомления 3',
                userId: '1',
            },
        ],
    },
];

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [Story => <div style={{ backgroundColor: 'var(--inverted-main-bg)' }}><Story /></div>];
Default.parameters = { mockData };

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [
    Story => <div style={{ backgroundColor: 'var(--inverted-main-bg)' }}><Story /></div>,
    ThemeDecorator(Theme.DARK),
];
DefaultDark.args = {};
Default.parameters = { mockData };