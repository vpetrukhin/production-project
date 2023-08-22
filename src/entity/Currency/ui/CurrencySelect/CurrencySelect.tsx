import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { Listbox as ListboxDeprecated } from '@/shared/ui/deprecated/Popups';
import { SelectItem } from '@/shared/ui/deprecated/Select';
import { Listbox } from '@/shared/ui/redesigned/Popups';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/Currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    readonly?: boolean;
    onChange?: (value: Currency) => void;
}

const CurrencyItems: Array<SelectItem<Currency>> = [
    {
        value: Currency.EUR,
        content: Currency.EUR,
    },
    {
        value: Currency.GBP,
        content: Currency.GBP,
    },
    {
        value: Currency.RUB,
        content: Currency.RUB,
    },
    {
        value: Currency.USD,
        content: Currency.USD,
    },
];

export const CurrencySelect = (props: CurrencySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation();

    const handleChange = (value: string) => {
        if (onChange) onChange(value as Currency);
    };

    const listboxProps = {
        className,
        label: t('Валюта'),
        items: CurrencyItems,
        value: value,
        onChange: handleChange,
        readonly,
        direction: 'topLeft' as const,
    };

    return (
        <ToggleFeatureComponent
            name="isRedesignEnable"
            on={
                <Listbox
                    flexDirection="row"
                    {...listboxProps}
                />
            }
            off={<ListboxDeprecated {...listboxProps} />}
        />
    );
};
