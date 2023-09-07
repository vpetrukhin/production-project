import { getProfilePath } from '@/shared/config/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { IComment } from '../../model/types/comment';
import cls from './Comment.module.scss';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { Card } from '@/shared/ui/redesigned/Card';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';

interface CommentProps {
    className?: string;
    comment: IComment;
}

export const Comment = (props: CommentProps) => {
    const { className, comment } = props;

    return (
        <ToggleFeatureComponent
            name="isRedesignEnable"
            on={
                <Card
                    className={classNames(cls.CommentRedesigned, {}, [
                        className,
                    ])}
                    max
                    padding="24"
                >
                    <VStack
                        gap="16"
                        align="start"
                    >
                        <AppLink to={getProfilePath(comment.user.id)}>
                            <Avatar
                                size={30}
                                src={comment.user.avatar}
                                userName={comment.user.username}
                            />
                        </AppLink>
                        <Text text={comment.text} />
                    </VStack>
                </Card>
            }
            off={
                <div className={classNames(cls.Comment, {}, [className])}>
                    <AppLinkDeprecated to={getProfilePath(comment.user.id)}>
                        <HStack gap="8">
                            <AvatarDeprecated
                                size={30}
                                src={comment.user.avatar}
                            />
                            <TextDeprecated
                                title={comment.user.username}
                                color="inverted"
                            />
                        </HStack>
                    </AppLinkDeprecated>
                    <TextDeprecated
                        text={comment.text}
                        color="inverted"
                    />
                </div>
            }
        />
    );
};
