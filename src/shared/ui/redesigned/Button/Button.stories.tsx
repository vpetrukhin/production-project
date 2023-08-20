import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
    title: 'shared/redesigned/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'test',
};

export const Loading = Template.bind({});
Loading.args = {
    children: 'test',
    loading: true,
};
export const Disabled = Template.bind({});
Disabled.args = {
    children: 'test',
    disabled: true,
};
