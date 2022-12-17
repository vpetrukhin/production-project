import { getProfilePath } from '@/shared/config/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
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
            <AppLink to={getProfilePath(comment.user.id)}>
                <HStack gap='8'>
                    <Avatar size={30} src={comment.user.avatar} />
                    <Text title={comment.user.username} color='inverted' />
                </HStack>
            </AppLink>
            <Text text={comment.text} color='inverted' />
        </div>
    );
};