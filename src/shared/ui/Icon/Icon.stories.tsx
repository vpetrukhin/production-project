import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from './Icon';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';

import icon from '@/shared/assets/icons/notifications.svg';

export default {
    title: 'shared/Icon',
    component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    Svg: icon
};

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
PrimaryDark.args = {
    Svg: icon
};

export const Inverted = Template.bind({});
Inverted.args = {
    Svg: icon
};

