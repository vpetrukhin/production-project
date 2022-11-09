import { ArticleView } from 'entity/Article/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleSkeletonItem.module.scss';

interface ArticleSkeletonItemProps {
    className?: string;
    view?: ArticleView;
}

export const ArticleSkeletonItem = (props: ArticleSkeletonItemProps) => {
    const { className, view = ArticleView.SMALL } = props;

    if (view === ArticleView.BIG) {
        return (<div className={classNames(cls.ArticleSkeletonItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.header}>
                    <div className={cls.userWrapper}>
                        <Skeleton width={33} height={33} border='50%' />
                        <Skeleton width={100} height={18} />
                    </div>
                    <Skeleton width={100} height={18} />
                </div>
                <Skeleton className={cls.title} width={200} height={18} />
                <Skeleton className={cls.types} width={50} height={18} />
                <Skeleton className={cls.img} height={178} />
                <Skeleton className={cls.text} />
                <div className={cls.footer}>
                    <Skeleton width={150} height={30} />
                    <Skeleton width={75} height={20} />
                </div>
            </Card>
        </div>);
    }

    return (
        <div className={classNames(cls.ArticleSkeletonItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <Skeleton width={198} height={200} />
                <div className={cls.info}>
                    <Skeleton width={'25%'} height={18} />
                    <Skeleton width={75} height={18} />
                </div>
                <Skeleton className={cls.title} width={'75%'} height={18} />
            </Card>
        </div>
    );
};