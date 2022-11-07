import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { IComment } from '../../model/types/comment';
import cls from './Comment.module.scss';

interface CommentProps {
    className?: string;
    comment: IComment
}

export const Comment = (props: CommentProps) => {
    const { className, comment } = props;

    return (
        <div className={classNames(cls.Comment, {}, [className])}>
            <div className={cls.userInfo}>
                <Avatar size={30} src={comment.user.avatar} />
                <Text title={comment.user.username} />
            </div>
            <Text text={comment.text} />
        </div>
    );
};