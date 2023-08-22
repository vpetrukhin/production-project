import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { Listbox as ListboxDeprecated } from '@/shared/ui/deprecated/Popups';
import { SelectItem } from '@/shared/ui/deprecated/Select';
import { Listbox } from '@/shared/ui/redesigned/Popups';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from '../consts/Countries';

interface CountryProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const countryItems: Array<SelectItem<Country>> = [
    {
        value: Country.Germany,
        content: Country.Germany,
    },
    {
        value: Country.Russia,
        content: Country.Russia,
    },
    {
        value: Country.USA,
        content: Country.USA,
    },
];

export const CountrySelect = (props: CountryProps) => {
    const { className, onChange, value, readonly } = props;
    const { t } = useTranslation();

    const handleChange = useCallback(
        (value: Country) => {
            if (onChange) onChange(value);
        },
        [onChange],
    );

    const listboxProps = {
        className,
        items: countryItems,
        readonly,
        label: t('Страна'),
        value,
        onChange: handleChange,
        direction: 'topLeft' as const,
    };

    return (
        <ToggleFeatureComponent
            name="isRedesignEnable"
            on={
                <Listbox
                    {...listboxProps}
                    flexDirection="row"
                />
            }
            off={<ListboxDeprecated {...listboxProps} />}
        />
    );
};
