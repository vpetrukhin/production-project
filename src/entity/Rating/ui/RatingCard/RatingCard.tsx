import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Drawer } from '@/shared/ui/Drawer';
import cls from './RatingCard.module.scss';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Modal } from '@/shared/ui/Modal';
import { VStack, HStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

interface RatingCardProps {
    className?: string;
    rate?: number;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onAccept?: (rating: number, feedback?: string) => void;
    onCancel?: (rating: number) => void;
}

export const RatingCard = (props: RatingCardProps) => {
    const {
        className,
        feedbackTitle,
        hasFeedback,
        rate = 0,
        title,
        onAccept,
        onCancel,
    } = props;
    const { t } = useTranslation();

    const [rating, setRating] = useState(rate);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [feedback, setFeedback] = useState('');

    const handleSetRating = (rating: number) => {
        setRating(rating);

        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(rating);
        }
    };

    const handleClose = () => setIsModalOpen(false);

    const handleFeedbackFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onAccept?.(rating, feedback);

        handleClose();
    };

    const handleCancel = () => {
        setRating(0);

        onCancel?.(rating);

        handleClose();
    };

    const getFeedBackForm = (type: 'desktop' | 'mobile') => (
        <ToggleFeatureComponent
            name={'isRedesignEnable'}
            on={
                <form onSubmit={handleFeedbackFormSubmit}>
                    <VStack
                        gap="16"
                        max
                    >
                        <Text title={feedbackTitle} />
                        <Input
                            value={feedback}
                            onChange={setFeedback}
                            label={t('vash-otzyv')}
                        />
                        {type === 'desktop' ? (
                            <HStack
                                gap="8"
                                max
                                justify="end"
                            >
                                <Button onClick={handleCancel}>
                                    {t('Отменить')}
                                </Button>
                                <Button type="submit">{t('Отправить')}</Button>
                            </HStack>
                        ) : (
                            <Button type="submit">{t('Отправить')}</Button>
                        )}
                    </VStack>
                </form>
            }
            off={
                <form onSubmit={handleFeedbackFormSubmit}>
                    <VStack
                        gap="16"
                        max
                    >
                        <TextDeprecated
                            color="inverted"
                            title={feedbackTitle}
                        />
                        <InputDeprecated
                            value={feedback}
                            onChange={setFeedback}
                            theme={'inverted'}
                            label={t('vash-otzyv')}
                        />
                        {type === 'desktop' ? (
                            <HStack
                                gap="8"
                                max
                                justify="end"
                            >
                                <ButtonDeprecated
                                    onClick={handleCancel}
                                    theme={'outline_red'}
                                >
                                    {t('Отменить')}
                                </ButtonDeprecated>
                                <ButtonDeprecated
                                    type="submit"
                                    theme={'inverted_outline'}
                                >
                                    {t('Отправить')}
                                </ButtonDeprecated>
                            </HStack>
                        ) : (
                            <ButtonDeprecated
                                type="submit"
                                theme={'inverted_outline'}
                            >
                                {t('Отправить')}
                            </ButtonDeprecated>
                        )}
                    </VStack>
                </form>
            }
        />
    );

    const content = (
        <>
            <VStack
                align="center"
                justify="center"
                max
                gap="16"
            >
                <ToggleFeatureComponent
                    name="isRedesignEnable"
                    on={<Text title={title} />}
                    off={
                        <TextDeprecated
                            title={title}
                            color="inverted"
                        />
                    }
                />
                <StarRating
                    onSelect={handleSetRating}
                    selectedStars={rating}
                />
            </VStack>
        </>
    );

    return (
        <>
            <ToggleFeatureComponent
                name="isRedesignEnable"
                on={
                    <Card
                        padding="24"
                        className={classNames(cls.RatingCardRedesigned, {}, [
                            className,
                        ])}
                        max
                    >
                        {content}
                    </Card>
                }
                off={
                    <CardDeprecated
                        className={classNames(cls.RatingCard, {}, [className])}
                        max
                    >
                        {content}
                    </CardDeprecated>
                }
            />
            <BrowserView>
                <Modal
                    isOpen={isModalOpen}
                    onClose={handleClose}
                >
                    {getFeedBackForm('desktop')}
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer
                    isOpen={isModalOpen}
                    onClose={handleClose}
                >
                    {getFeedBackForm('mobile')}
                </Drawer>
            </MobileView>
        </>
    );
};
