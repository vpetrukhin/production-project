import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SidebarItem } from './SidebarItem';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import MainIcon from '@/shared/assets/icons/main.svg';
import { VFC, SVGProps } from 'react';
import { Theme } from '@/shared/config/const/theme';

export default {
    title: 'widgets/SidebarItem',
    component: SidebarItem,
} as ComponentMeta<typeof SidebarItem>;

const icon: VFC<SVGProps<SVGSVGElement>> = MainIcon;

const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    item: {
        path: '/',
        text: 'MenuItem',
        Icon: icon
    },
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {
    item: {
        path: '/',
        text: 'MenuItem',
        Icon: icon
    },
};