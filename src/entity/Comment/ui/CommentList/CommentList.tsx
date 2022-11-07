import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { IComment } from '../../model/types/comment';
import { Comment } from '../Comment/Comment';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments: IComment[]
}

export const CommentList = (props: CommentListProps) => {
    const { className, comments } = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            <Text title={t('Комментарии')} />
            {comments.length > 0
                ? (
                    comments.map(comment => (
                        <Comment className={cls.comment} key={comment.id} comment={comment} />
                    ))
                )
                : <Text text={t('Комментарии отсутствуют')} />
            }
        </div>
    );
};