import { useTranslation } from 'react-i18next';
import { Listbox } from '@/shared/ui/Popups/Listbox/Listbox';
import { ArticleType, ArticleTypeRus } from '../../model/const/articleConsts';
import { ListBoxItem } from '@/shared/ui/Popups/types/listBox';

interface ArticleTypeSelectProps {
    className?: string;
    value: ArticleType;
    onChange: (value: ArticleType) => void;
    error?: string;
}

const ArticleTypeItems: ListBoxItem<ArticleType>[] = [
    {
        content: ArticleTypeRus.ALL,
        value: ArticleType.All,
    },
    {
        content: ArticleTypeRus.ECONOMY,
        value: ArticleType.ECONOMY,
    },
    {
        content: ArticleTypeRus.IT,
        value: ArticleType.IT,
    },
    {
        content: ArticleTypeRus.SCIENCE,
        value: ArticleType.SCIENCE,
    },
];

export const ArticleTypeSelect = (props: ArticleTypeSelectProps) => {
    const { className, onChange, value, error } = props;
    const { t } = useTranslation();

    return (
        <Listbox
            className={className}
            label={t('tip-stati')}
            value={value}
            defaultValue={t('tip-ne-vybran')}
            onChange={onChange}
            items={ArticleTypeItems}
            error={error}
        />
    );
};
