import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentList } from './CommentList';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';

const commentList = [
    {
        id: 'id',
        text: 'comment',
        user: {
            id: '3',
            avatar: 'https://images.unsplash.com/photo-1665856314098-4aa9ff7a3d76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
            username: 'user'
        }
    },
    {
        id: 'id2',
        text: 'comment',
        user: {
            id: '4',
            avatar: 'https://images.unsplash.com/photo-1665856314098-4aa9ff7a3d76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
            username: 'user2'
        }
    },
];

export default {
    title: 'entity/Comment/CommentList',
    component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Default = Template.bind({});
Default.args = {
    comments: commentList
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {
    comments: commentList
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true
};

export const LoadingDark = Template.bind({});
LoadingDark.decorators = [ThemeDecorator(Theme.DARK)];
LoadingDark.args = {
    comments: [],
    isLoading: true
};