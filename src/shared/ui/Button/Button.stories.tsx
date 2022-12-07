import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';

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
    theme: ButtonTheme.CLEAR,
};

export const InvertedClear = Template.bind({});
InvertedClear.args = {
    children: 'test',
    theme: ButtonTheme.INVERTED_CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'test',
    theme: ButtonTheme.OUTLINE,
};

export const InvertedOutline = Template.bind({});
InvertedOutline.args = {
    children: 'test',
    theme: ButtonTheme.INVERTED_OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'test',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [
    ThemeDecorator(Theme.DARK)
];

export const OutlineM = Template.bind({});
OutlineM.args = {
    children: 'test',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M
};
export const OutlineL = Template.bind({});
OutlineL.args = {
    children: 'test',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
};
export const OutlineXL = Template.bind({});
OutlineXL.args = {
    children: 'test',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
};
export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.L
};
export const Background = Template.bind({});
Background.args = {
    children: 'test',
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.M
};
export const InvertedBackground = Template.bind({});
InvertedBackground.args = {
    children: 'test',
    theme: ButtonTheme.INVERTED_BACKGROUND,
    size: ButtonSize.M
};
export const Loading = Template.bind({});
Loading.args = {
    children: 'test',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
    loading: true
};
export const Disabled = Template.bind({});
Disabled.args = {
    children: 'test',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
    disabled: true,
};