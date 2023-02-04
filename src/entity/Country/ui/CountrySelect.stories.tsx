import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CountrySelect } from './CountrySelect';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Country } from '../consts/Countries';
import { Theme } from '@/shared/config/const/theme';

export default {
    title: 'entity/CountrySelect',
    component: CountrySelect,
    decorators: [
        Story => <div style={{
            padding: 150
        }}><Story /></div>
    ]
} as ComponentMeta<typeof CountrySelect>;

const defaultProps = {
    value: Country.Russia,
};

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Default = Template.bind({});
Default.args = {
    ...defaultProps
};

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = {
    ...defaultProps
};