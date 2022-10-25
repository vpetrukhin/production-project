import { Currency } from '../../model/types/Currency';
import { useTranslation } from 'react-i18next';
import { Select, SelectItem } from 'shared/ui/Select/Select';
// import cls from './CurrencySelect.module.scss';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    readonly?: boolean;
    onChange?: (value: Currency) => void
}

const CurrencyItems: Array<SelectItem> = [
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
        <Select
            className={className}
            label={t('Валюта')}
            items={CurrencyItems}
            value={value}
            onChange={handleChange}
            readonly={readonly}
        />
    );
};