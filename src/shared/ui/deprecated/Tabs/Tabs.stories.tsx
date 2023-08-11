import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TabItem, Tabs } from './Tabs';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/config/const/theme';

const tabs: TabItem<string>[] = [
    {
        content: 'tab1',
        value: 'tab1',
    },
    {
        content: 'tab2',
        value: 'tab2',
    },
    {
        content: 'tab3',
        value: 'tab3',
    },
];

export default {
    title: 'shared/Tabs',
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
    tabs,
    value: 'tab1'
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {
    tabs,
    value: 'tab1'
};