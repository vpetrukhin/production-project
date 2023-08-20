import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Text } from '../Text/Text';
import { Card } from './Card';
import { Theme } from '@/shared/config/const/theme';

export default {
    title: 'shared/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    // eslint-disable-next-line i18next/no-literal-string
    children: <Text text={'test'} />,
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {
    // eslint-disable-next-line i18next/no-literal-string
    children: <Text text={'test'} />,
};

export const Outline = Template.bind({});
Outline.args = {
    // eslint-disable-next-line i18next/no-literal-string
    children: <Text text={'test'} />,
};

export const OutlineDark = Template.bind({});
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
OutlineDark.args = {
    // eslint-disable-next-line i18next/no-literal-string
    children: <Text text={'test'} />,
};
