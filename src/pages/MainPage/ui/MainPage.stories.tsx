import { ComponentStory, ComponentMeta } from '@storybook/react';

import MainPage from './MainPage';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/decorators';
import { Theme } from '@/shared/config/const/theme';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    }
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({})];

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];