import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CurrencySelect } from './CurrencySelect';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/theme';
import { Currency } from '../../model/types/Currency';

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