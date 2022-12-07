import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AddCommentForm } from './AddCommentForm';
import { Theme } from '@/app/providers/theme';
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook/decorators';

export default {
    title: 'feutures/addCommentForm',
    component: AddCommentForm,
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Default = Template.bind({});
Default.decorators = [
    StoreDecorator({
        addCommentFrom: {
            text: 'comment text'
        }
    })
];
Default.args = {
    onSendComment: (value: string) => console.log(value),
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        addCommentFrom: {
            text: 'comment text'
        }
    })
];
DefaultDark.args = {
    onSendComment: (value: string) => console.log(value),
};