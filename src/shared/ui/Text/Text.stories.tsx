import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from './Text';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Title 12345',
    text: 'Text 123432423'
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {
    title: 'Title 12345',
    text: 'Text 123432423'
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title 12345',
};

export const OnlyTitleDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
OnlyTitleDark.args = {
    title: 'Title 12345',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text 123432423'
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
OnlyTextDark.args = {
    text: 'Text 123432423'
};

export const ErrorTitle = Template.bind({});
ErrorTitle.args = {
    title: 'Title 12345',
    error: true,
};

export const ErrorText = Template.bind({});
ErrorText.args = {
    text: 'Error Error Error 12345',
    error: true,
};