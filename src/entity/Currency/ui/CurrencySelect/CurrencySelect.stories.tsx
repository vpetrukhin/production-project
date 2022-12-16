import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CurrencySelect } from './CurrencySelect';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Currency } from '../../model/types/Currency';
import { Theme } from '@/shared/config/const/theme';

export default {
    title: 'entity/CurrencySelect',
    component: CurrencySelect,
    decorators: [
        Story => <div style={{
            padding: 150
        }}><Story /></div>
    ]
} as ComponentMeta<typeof CurrencySelect>;

const defaultProps = {
    value: Currency.RUB,
};

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Default = Template.bind({});
Default.args = { ...defaultProps };

export const DefaultDark = Template.bind({});
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
DefaultDark.args = { ...defaultProps  };