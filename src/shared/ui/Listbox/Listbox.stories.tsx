import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Listbox, ListBoxItem } from './Listbox';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';

const items: ListBoxItem<string>[] = [
    { value: '1', content: '1' },
    { value: '2', content: '2' },
    { value: '3', content: '3' },
];

export default {
    title: 'shared/Listbox',
    component: Listbox,
} as ComponentMeta<typeof Listbox>;

const Template: ComponentStory<typeof Listbox> = (args) => <Listbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    items,
    defaultValue: 'default',
    label: 'label'
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {
    items,
    defaultValue: 'default',
    label: 'label'
};