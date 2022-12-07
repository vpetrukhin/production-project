/* eslint-disable i18next/no-literal-string */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flex } from './Flex';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';

export default {
    title: 'shared/Flex',
    component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
    </>
};
export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    children: <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
    </>
};

export const RowDark = Template.bind({});
RowDark.decorators = [ThemeDecorator(Theme.DARK)];
RowDark.args = {
    children: <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
    </>

};