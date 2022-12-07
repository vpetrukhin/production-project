import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoginForm from './LoginForm';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

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
Default.decorators = [
    StoreDecorator({
        login: {
            username: '123',
            password: '',
        }
    })
];

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        login: {
            username: '123',
            password: '',
        }
    })
];
DefaultDark.args = {};

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
    StoreDecorator({
        login: {
            username: '123',
            password: '12345',
            error: 'error',
        }
    }),
];

export const ErrorDark = Template.bind({});
ErrorDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        login: {
            username: '123',
            password: '12345',
            error: 'error',
        }
    }),
];
ErrorDark.args = {};

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
    StoreDecorator({
        login: {
            username: '123',
            password: '12345',
            isLoading: true,
        }
    }),
];

export const LoadingDark = Template.bind({});
LoadingDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        login: {
            username: '123',
            password: '12345',
            isLoading: true,
        }
    }),
];
LoadingDark.args = {};