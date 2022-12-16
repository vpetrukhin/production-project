import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationItem } from './NotificationItem';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/config/const/theme';

export default {
    title: 'entity/Notification/NotificationItem',
    component: NotificationItem,
    decorators: [
        (Story => 
            <div
                style={{
                    backgroundColor: 'var(main-bg)'
                }}
            >
                <Story />
            </div>)
    ]
} as ComponentMeta<typeof NotificationItem>;

const mockNotification = {
    id: '1',
    title: 'Уведомление 1',
    description: 'Описание уведомления 1',
    userId: '1',
};

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    item: mockNotification
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {
    item: mockNotification
};