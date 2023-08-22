import { ArticleView } from '@/entity/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    toggleFeature,
    ToggleFeatureComponent,
} from '@/shared/lib/featureFlags';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { HStack } from '@/shared/ui/Stack';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import cls from './ArticlesViewSelector.module.scss';
import ListIconOld from '@/shared/assets/icons/list.svg';
import BlockIconOld from '@/shared/assets/icons/blocks.svg';
import PlateIcon from '@/shared/assets/icons/plate.svg';
import BurgerIcon from '@/shared/assets/icons/burger.svg';

interface ArticlesViewSelectorProps {
    className?: string;
    view?: ArticleView;
    onViewChange?: (newView: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.BIG,
        // icon: ListIconOld,
        icon: toggleFeature({
            name: 'isRedesignEnable',
            on: () => BurgerIcon,
            off: () => ListIconOld,
        }),
    },
    {
        view: ArticleView.SMALL,
        icon: toggleFeature({
            name: 'isRedesignEnable',
            on: () => PlateIcon,
            off: () => BlockIconOld,
        }),
    },
];

export const ArticlesViewSelector = (props: ArticlesViewSelectorProps) => {
    const { className, view, onViewChange } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewChange?.(newView);
    };

    return (
        <ToggleFeatureComponent
            name="isRedesignEnable"
            on={
                <Card
                    padding="8"
                    className={classNames(
                        cls.ArticlesViewSelectorRedesigned,
                        {},
                        [className],
                    )}
                >
                    <HStack gap="16">
                        {viewTypes.map((viewType) => (
                            <Icon
                                key={viewType.view}
                                clickable
                                onClick={onClick(viewType.view)}
                                Svg={viewType.icon}
                                width={16}
                                height={16}
                                className={classNames(cls.button, {
                                    [cls.notSelected]: view !== viewType.view,
                                })}
                            />
                        ))}
                    </HStack>
                </Card>
            }
            off={
                <HStack
                    gap="4"
                    className={classNames(cls.ArticlesViewSelector, {}, [
                        className,
                    ])}
                >
                    {viewTypes.map((viewType) => (
                        <ButtonDeprecated
                            key={viewType.view}
                            onClick={onClick(viewType.view)}
                            className={classNames(cls.button, {
                                [cls.notSelected]: view !== viewType.view,
                            })}
                        >
                            {
                                <IconDeprecated
                                    Svg={viewType.icon}
                                    width={24}
                                    height={24}
                                />
                            }
                        </ButtonDeprecated>
                    ))}
                </HStack>
            }
        />
    );
};
