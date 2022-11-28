import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectItem } from 'shared/ui/Select/Select';
import { Listbox } from 'shared/ui/Listbox/Listbox';
import { Country } from '../model/types/Countries';

interface CountryProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const countryItems: Array<SelectItem<Country>> = [
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
    const { className, onChange, value, readonly } = props;
    const {t} = useTranslation();

    const handleChange = useCallback((value: Country) => {
        if (onChange) onChange(value);
    }, [onChange]);

    return (
        <Listbox
            className={className}
            items={countryItems}
            readonly={readonly}
            label={t('Страна')}
            value={value}
            onChange={handleChange}
            direction='topLeft'
        />
    );
};