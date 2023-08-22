import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/config/const/theme';

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
};
export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
PrimaryDark.args = {
    placeholder: 'Text',
};

export const Inverted = Template.bind({});
Inverted.args = {
    placeholder: 'Text',
    theme: 'inverted'
};
export const InvertedDark = Template.bind({});
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)];
InvertedDark.args = {
    placeholder: 'Text',
    theme: 'inverted'
};