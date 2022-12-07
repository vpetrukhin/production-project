import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Comment } from './Comment';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';

const CommentObj = {
    id: 'id',
    text: 'comment',
    user: {
        id: '3',
        avatar: 'https://images.unsplash.com/photo-1665856314098-4aa9ff7a3d76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        username: 'user'
    }
};

export default {
    title: 'entity/Comment/Comment',
    component: Comment,
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args) => <Comment {...args} />;

export const Default = Template.bind({});
Default.args = {
    comment: CommentObj
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {
    comment: CommentObj
};