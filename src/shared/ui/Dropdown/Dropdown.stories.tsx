/* eslint-disable i18next/no-literal-string */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown } from './Dropdown';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    decorators: [
        (Story) => 
            <div
                style={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Story />
            </div>
    ]
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
    trigger: <div>open</div>,
    items: [
        { content: 'first' },
        { content: 'second' },
        { content: 'third' },
    ]
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {
    trigger: <div>open</div>,
    items: [
        { content: 'first' },
        { content: 'second' },
        { content: 'third' },
    ]
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    trigger: <div>open</div>,
    items: [
        { content: 'first' },
        { content: 'second' },
        { content: 'third' },
    ],
    direction: 'topLeft'
};
export const TopRight = Template.bind({});
TopRight.args = {
    trigger: <div>open</div>,
    items: [
        { content: 'first' },
        { content: 'second' },
        { content: 'third' },
    ],
    direction: 'topRight'
};
export const BottomLeft = Template.bind({});
BottomLeft.args = {
    trigger: <div>open</div>,
    items: [
        { content: 'first' },
        { content: 'second' },
        { content: 'third' },
    ],
    direction: 'bottomLeft'
};
export const BottomRight = Template.bind({});
BottomRight.args = {
    trigger: <div>open</div>,
    items: [
        { content: 'first' },
        { content: 'second' },
        { content: 'third' },
    ],
    direction: 'bottomRight'
};