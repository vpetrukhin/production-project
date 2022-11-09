import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesViewSelector } from './ArticlesViewSelector';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';

export default {
    title: '/ArticlesViewSelector',
    component: ArticlesViewSelector,
} as ComponentMeta<typeof ArticlesViewSelector>;

const Template: ComponentStory<typeof ArticlesViewSelector> = (args) => <ArticlesViewSelector {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {};