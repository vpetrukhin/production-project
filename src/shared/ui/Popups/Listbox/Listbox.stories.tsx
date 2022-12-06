import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Listbox, ListBoxItem } from './Listbox';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';

const items: ListBoxItem<string>[] = [
    { value: '1', content: '1' },
    { value: '2', content: '2', disabled: true },
    { value: '3', content: '3' },
];

export default {
    title: 'shared/Popups/Listbox',
    component: Listbox,
    decorators: [
        (Story) => <div style={{ padding: 150 }} ><Story /></div>
    ]
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

export const TopLeft = Template.bind({});
TopLeft.args = {
    items,
    defaultValue: 'default',
    label: 'label',
    direction: 'topLeft'
};

export const TopRight = Template.bind({});
TopRight.args = {
    items,
    defaultValue: 'default',
    label: 'label',
    direction: 'topRight'
};
export const BottomRight = Template.bind({});
BottomRight.args = {
    items,
    defaultValue: 'default',
    label: 'label',
    direction: 'bottomRight'
};
export const BottomLeft = Template.bind({});
BottomLeft.args = {
    items,
    defaultValue: 'default',
    label: 'label',
    direction: 'bottomLeft'
};