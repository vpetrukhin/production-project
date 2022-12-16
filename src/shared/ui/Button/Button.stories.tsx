import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/shared/config/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'test'
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'test',
    theme: 'clear',
};

export const InvertedClear = Template.bind({});
InvertedClear.args = {
    children: 'test',
    theme: 'inverted_clear',
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'test',
    theme: 'outline',
};

export const InvertedOutline = Template.bind({});
InvertedOutline.args = {
    children: 'test',
    theme: 'inverted_outline',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'test',
    theme: 'outline',
};
OutlineDark.decorators = [
    ThemeDecorator(Theme.DARK)
];

export const OutlineM = Template.bind({});
OutlineM.args = {
    children: 'test',
    theme: 'outline',
    size: 'medium'
};
export const OutlineL = Template.bind({});
OutlineL.args = {
    children: 'test',
    theme: 'outline',
    size: 'large'
};
export const OutlineXL = Template.bind({});
OutlineXL.args = {
    children: 'test',
    theme: 'outline',
    size: 'extralarge'
};
export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    theme: 'background',
    size: 'large'
};
export const Background = Template.bind({});
Background.args = {
    children: 'test',
    theme: 'background',
    size: 'medium'
};
export const InvertedBackground = Template.bind({});
InvertedBackground.args = {
    children: 'test',
    theme: 'inverted_background',
    size: 'medium'
};
export const Loading = Template.bind({});
Loading.args = {
    children: 'test',
    theme: 'outline',
    size: 'medium',
    loading: true
};
export const Disabled = Template.bind({});
Disabled.args = {
    children: 'test',
    theme: 'outline',
    size: 'medium',
    disabled: true,
};