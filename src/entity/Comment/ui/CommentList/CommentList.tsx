import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { useTranslation } from 'react-i18next';
import { IComment } from '../../model/types/comment';
import { Comment } from '../Comment/Comment';
import cls from './CommentList.module.scss';
import {
    toggleFeature,
    ToggleFeatureComponent,
} from '@/shared/lib/featureFlags';
import { Text } from '@/shared/ui/redesigned/Text';

interface CommentListProps {
    className?: string;
    isLoading?: boolean;
    comments: IComment[];
}

export const CommentList = (props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    const Skeleton = toggleFeature({
        name: 'isRedesignEnable',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    if (isLoading) {
        return (
            <>
                <ToggleFeatureComponent
                    name="isRedesignEnable"
                    on={<Text title={t('Комментарии')} />}
                    off={<TextDeprecated title={t('Комментарии')} />}
                />
                <div className={cls.loadingComment}>
                    <div className={cls.userInfo}>
                        <Skeleton
                            width={30}
                            height={30}
                            border={'50%'}
                        />
                        <Skeleton
                            width={100}
                            height={19}
                        />
                    </div>
                    <Skeleton height={40} />
                </div>
                <div className={cls.loadingComment}>
                    <div className={cls.userInfo}>
                        <Skeleton
                            width={30}
                            height={30}
                            border={'50%'}
                        />
                        <Skeleton
                            width={100}
                            height={19}
                        />
                    </div>
                    <Skeleton height={40} />
                </div>
            </>
        );
    }

    return (
        <VStack
            gap="16"
            max
            className={className}
            align="start"
        >
            <ToggleFeatureComponent
                name="isRedesignEnable"
                on={<Text title={t('Комментарии')} />}
                off={<TextDeprecated title={t('Комментарии')} />}
            />
            {comments.length > 0 ? (
                comments.map((comment) => (
                    <Comment
                        key={comment.id}
                        comment={comment}
                    />
                ))
            ) : (
                <ToggleFeatureComponent
                    name="isRedesignEnable"
                    on={<Text title={t('Комментарии отсутствуют')} />}
                    off={
                        <TextDeprecated title={t('Комментарии отсутствуют')} />
                    }
                />
            )}
        </VStack>
    );
};
