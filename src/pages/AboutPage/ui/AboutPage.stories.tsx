import { ComponentStory, ComponentMeta } from '@storybook/react';

import AboutPage from './AboutPage';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';
import { StoreDecorator } from '@/shared/config/storybook/decorators';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    }
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Default = Template.bind({});
Default.decorators = [
    StoreDecorator({})
];

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({})
];