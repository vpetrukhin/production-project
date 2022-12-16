import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/config/const/theme';

export default {
    title: 'shared/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    items: [
        {
            value: '123',
            content: '123',
        },
        {
            value: '123213',
            content: '12332131',
        },
        {
            value: '1233123',
            content: '12323213',
        },
    ]
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {
    label: 'Label',
    items: [
        {
            value: '123',
            content: '123',
        },
        {
            value: '123213',
            content: '12332131',
        },
        {
            value: '1233123',
            content: '12323213',
        },
    ]
};