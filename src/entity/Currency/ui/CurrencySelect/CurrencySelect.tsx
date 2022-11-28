import { useTranslation } from 'react-i18next';
import { SelectItem } from 'shared/ui/Select/Select';
import { Listbox } from 'shared/ui/Listbox/Listbox';
import { Currency } from '../../model/types/Currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    readonly?: boolean;
    onChange?: (value: Currency) => void
}

const CurrencyItems: Array<SelectItem<Currency>> = [
    {
        value: Currency.EUR,
        content: Currency.EUR
    },
    {
        value: Currency.GBP,
        content: Currency.GBP
    },
    {
        value: Currency.RUB,
        content: Currency.RUB
    },
    {
        value: Currency.USD,
        content: Currency.USD
    },
];

export const CurrencySelect = (props: CurrencySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const {t} = useTranslation();

    const handleChange = (value: string) => {
        if (onChange) onChange(value as Currency);
    };

    return (
        <Listbox 
            className={className}
            label={t('Валюта')}
            items={CurrencyItems}
            value={value}
            onChange={handleChange}
            readonly={readonly}
            direction='topLeft'
        />
    );
};