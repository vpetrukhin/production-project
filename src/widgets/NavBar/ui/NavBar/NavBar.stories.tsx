import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavBar } from './NavBar';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';

export default {
    title: 'widgets/NavBar',
    component: NavBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    }
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    user: {}
})];

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: {}
    })
];
PrimaryDark.args = {};


export const Auth = Template.bind({});
Auth.args = {};
Auth.decorators = [
    StoreDecorator({
        user: {
            userInfo: {
                id: '1',
                username: 'admin',
            }
        }
    })
];

export const AuthDark = Template.bind({});
AuthDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: {
            userInfo: {
                id: '1',
                username: 'admin',
            }
        }
    })
];
AuthDark.args = {};