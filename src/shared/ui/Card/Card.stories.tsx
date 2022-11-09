import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/theme';
import { Text } from 'shared/ui/Text/Text';

export default {
    title: 'shared/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    // eslint-disable-next-line i18next/no-literal-string
    children: <Text text={'test'} />
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {
    // eslint-disable-next-line i18next/no-literal-string
    children: <Text text={'test'} />
};