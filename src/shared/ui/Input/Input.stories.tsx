import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input, InputTheme } from './Input';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    placeholder: 'Text',
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {
    placeholder: 'Text',
};

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Text',
    theme: InputTheme.PRIMARY
};
export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
PrimaryDark.args = {
    placeholder: 'Text',
    theme: InputTheme.PRIMARY
};

export const Secondary = Template.bind({});
Secondary.args = {
    placeholder: 'Text',
    theme: InputTheme.SECONDARY
};
export const SecondaryDark = Template.bind({});
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
SecondaryDark.args = {
    placeholder: 'Text',
    theme: InputTheme.SECONDARY
};