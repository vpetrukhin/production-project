import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeature } from '@/shared/lib/featureFlags';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { HStack } from '@/shared/ui/Stack';
import { ArticleView } from '../../../model/const/articleConsts';
import cls from './ArticleSkeletonItem.module.scss';

interface ArticleSkeletonItemProps {
    className?: string;
    view?: ArticleView;
}

export const ArticleSkeletonItem = (props: ArticleSkeletonItemProps) => {
    const { className, view = ArticleView.SMALL } = props;

    const Skeleton = toggleFeature({
        name: 'isRedesignEnable',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });
    const Card = toggleFeature({
        name: 'isRedesignEnable',
        on: () => CardRedesigned,
        off: () => CardDeprecated,
    });

    if (view === ArticleView.BIG) {
        return (
            <div
                className={classNames(cls.ArticleSkeletonItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card}>
                    <HStack justify="between">
                        <HStack gap="16">
                            <Skeleton
                                width={33}
                                height={33}
                                border="50%"
                            />
                            <Skeleton
                                width={100}
                                height={18}
                            />
                        </HStack>
                        <Skeleton
                            width={100}
                            height={18}
                        />
                    </HStack>
                    <Skeleton
                        className={cls.title}
                        width={200}
                        height={18}
                    />
                    <Skeleton
                        className={cls.types}
                        width={50}
                        height={18}
                    />
                    <Skeleton
                        className={cls.img}
                        height={178}
                    />
                    <Skeleton className={cls.text} />
                    <HStack justify="between">
                        <Skeleton
                            width={150}
                            height={30}
                        />
                        <Skeleton
                            width={75}
                            height={20}
                        />
                    </HStack>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleSkeletonItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card className={cls.card}>
                <Skeleton height={245} />
                <HStack
                    justify="between"
                    className={cls.info}
                >
                    <Skeleton
                        width={'25%'}
                        height={18}
                    />
                    <Skeleton
                        width={75}
                        height={18}
                    />
                </HStack>
                <Skeleton
                    className={cls.title}
                    width={'75%'}
                    height={18}
                />
            </Card>
        </div>
    );
};
