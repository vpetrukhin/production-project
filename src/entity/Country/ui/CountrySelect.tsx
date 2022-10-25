import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { Select, SelectItem } from 'shared/ui/Select/Select';
import { Country } from '../model/types/Countries';

interface CountryProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
}

const countryItems: Array<SelectItem> = [
    {
        value: Country.Germany,
        content: Country.Germany
    },
    {
        value: Country.Russia,
        content: Country.Russia
    },
    {
        value: Country.USA,
        content: Country.USA
    },
];

export const CountrySelect = (props: CountryProps) => {
    const { className, onChange, value } = props;
    const {t} = useTranslation();

    const handleChange = useCallback((value: string) => {
        if (onChange) onChange(value as Country);
    }, [onChange]);

    return (
        <Select
            className={className}
            label={t('Страна')}
            items={countryItems}
            onChange={handleChange}
            value={value}
        />
    );
};