import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { VStack } from 'shared/ui/Stack';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { IComment } from '../../model/types/comment';
import { Comment } from '../Comment/Comment';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    isLoading?: boolean;
    comments: IComment[]
}

export const CommentList = (props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const {t} = useTranslation();

    if (isLoading) {
        return (
            <>
                <Text title={t('Комментарии')} />
                <div className={cls.loadingComment}>
                    <div className={cls.userInfo}>
                        <Skeleton width={30} height={30} border={'50%'} />
                        <Skeleton width={100} height={19} />
                    </div>
                    <Skeleton height={40} />
                </div>
                <div className={cls.loadingComment}>
                    <div className={cls.userInfo}>
                        <Skeleton width={30} height={30} border={'50%'} />
                        <Skeleton width={100} height={19} />
                    </div>
                    <Skeleton height={40} />
                </div>
            </>
        );
    }

    return (
        <VStack gap='16' max className={className}>
            <Text align={TextAlign.LEFT} title={t('Комментарии')} />
            {comments.length > 0
                ? (
                    comments.map(comment => (
                        <Comment key={comment.id} comment={comment} />
                    ))
                )
                : <Text text={t('Комментарии отсутствуют')} />
            }
        </VStack>
    );
};