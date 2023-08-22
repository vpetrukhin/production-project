import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSortTypes, ArticleType, OrderType } from '@/entity/Article';
import { ArticlesViewSelector } from '@/feutures/ArticlesViewSelector';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import {
    SelectItem,
    Select as SelectDeprecated,
} from '@/shared/ui/deprecated/Select';
import { HStack, VStack } from '@/shared/ui/Stack';
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { useArticleFilters } from '../../lib/useArticleFilters';
import cls from './ArticlesFilters.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { Listbox } from '@/shared/ui/redesigned/Popups';
import { Tabs } from '@/shared/ui/redesigned/Tabs';
import { Input } from '@/shared/ui/redesigned/Input';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ArticlesFiltersProps {
    className?: string;
}

export const ArticlesFilters = (props: ArticlesFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation('article');

    const {
        onOrderSort,
        onSearchChange,
        onSortTypeSort,
        onTypeChange,
        order,
        search,
        sortType,
        type,
        onChangeView,
        view,
    } = useArticleFilters();

    const sortTypes = useMemo<SelectItem<ArticleSortTypes>[]>(
        () => [
            {
                content: t('prosmotram'),
                value: ArticleSortTypes.VIEWS,
            },
            {
                content: t('data-sozdaniya'),
                value: ArticleSortTypes.CREATED,
            },
        ],
        [t],
    );

    const orderOptions = useMemo<SelectItem<OrderType>[]>(
        () => [
            {
                value: 'asc',
                content: t('vozrastaniyu'),
            },
            {
                value: 'desc',
                content: t('ubyvaniyu'),
            },
        ],
        [t],
    );

    const types = useMemo<TabItem<ArticleType>[]>(
        () => [
            {
                value: ArticleType.All,
                content: t('all'),
            },
            {
                value: ArticleType.ECONOMY,
                content: t('ekonomika'),
            },
            {
                value: ArticleType.IT,
                content: t('it'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('sciense'),
            },
        ],
        [t],
    );

    return (
        <ToggleFeatureComponent
            name="isRedesignEnable"
            on={
                <Card
                    className={classNames(cls.ArticlesFiltersRedesigned, {}, [
                        className,
                    ])}
                    padding="24"
                >
                    <VStack
                        gap="16"
                        align="start"
                    >
                        <Input
                            addonLeft={
                                <Icon
                                    Svg={SearchIcon}
                                    width={32}
                                    height={32}
                                />
                            }
                            value={search}
                            placeholder={t('poisk')}
                            onChange={onSearchChange}
                            className={cls.input}
                        />
                        <Tabs
                            value={type}
                            tabs={types}
                            onTabClick={onTypeChange}
                        />

                        <Listbox
                            items={sortTypes}
                            value={sortType}
                            label={t('sortirovat-po')}
                            onChange={onSortTypeSort}
                        />
                        <Listbox
                            items={orderOptions}
                            value={order}
                            onChange={onOrderSort}
                        />
                    </VStack>
                </Card>
            }
            off={
                <CardDeprecated
                    theme={'outline'}
                    className={classNames(cls.ArticlesFilters, {}, [className])}
                >
                    <HStack
                        gap="16"
                        wrap="wrap"
                    >
                        <SelectDeprecated
                            items={sortTypes}
                            label={t('sortirovat-po')}
                            value={sortType}
                            onChange={onSortTypeSort}
                        />
                        <SelectDeprecated
                            items={orderOptions}
                            label={t('po')}
                            value={order}
                            onChange={onOrderSort}
                        />
                        <ArticlesViewSelector
                            view={view}
                            onViewChange={onChangeView}
                            className={cls.selector}
                        />
                        <InputDeprecated
                            value={search}
                            placeholder={t('poisk')}
                            onChange={onSearchChange}
                            className={cls.input}
                        />
                        <TabsDeprecated
                            value={type}
                            tabs={types}
                            onTabClick={onTypeChange}
                        />
                    </HStack>
                </CardDeprecated>
            }
        />
    );
};
