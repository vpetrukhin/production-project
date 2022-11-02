import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticalTextBlockComponent } from './ArticalTextBlockComponent';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';

export default {
    title: 'entity/ArticalTextBlockComponent',
    component: ArticalTextBlockComponent,
} as ComponentMeta<typeof ArticalTextBlockComponent>;

const Template: ComponentStory<typeof ArticalTextBlockComponent> = (args) => <ArticalTextBlockComponent {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {};