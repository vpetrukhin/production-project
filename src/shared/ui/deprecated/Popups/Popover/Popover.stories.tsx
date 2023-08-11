/* eslint-disable i18next/no-literal-string */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Popover } from './Popover';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/config/const/theme';

const mockChildren = 
    <>
        Lorem ipsum 
    </>;

export default {
    title: 'shared/Popups/Popover',
    component: Popover,
    decorators: [
        Story => 
            <div style={{
                padding: 150,
            }}>
                <Story />
            </div>
    ]
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Default = Template.bind({});
Default.args = {
    trigger: 'trigger',
    children: mockChildren,
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {
    trigger: 'trigger',
    children: mockChildren,
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    trigger: 'trigger',
    children: mockChildren,
    direction: 'topLeft'
};

export const TopRight = Template.bind({});
TopRight.args = {
    trigger: 'trigger',
    children: mockChildren,
    direction: 'topRight'
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    trigger: 'trigger',
    children: mockChildren,
    direction: 'bottomLeft'
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    trigger: 'trigger',
    children: mockChildren,
    direction: 'bottomLeft'
};