import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoginForm from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';

export default {
    title: 'feutures/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {};