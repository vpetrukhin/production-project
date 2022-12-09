import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { Card } from '@/shared/ui/Card/Card';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input, InputTheme } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import cls from './RatingCard.module.scss';

interface RatingCardProps {
    className?: string;
    rate?: number;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onAccept?: (rating: number, feedback?: string) => void;
    onCancel?: (rating: number) => void
}

export const RatingCard = (props: RatingCardProps) => {
    const {
        className,
        feedbackTitle,
        hasFeedback,
        rate = 0,
        title,
        onAccept,
        onCancel
    } = props;
    const {t} = useTranslation();

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
        <form onSubmit={handleFeedbackFormSubmit}>
            <VStack gap='16' max>
                <Text color='inverted' title={feedbackTitle} />
                <Input
                    value={feedback}
                    onChange={setFeedback}
                    theme={InputTheme.INVERTED}
                    label={t('vash-otzyv')}
                />
                {type === 'desktop'
                    ? (
                        <HStack gap='8' max justify='end'>
                            <Button onClick={handleCancel} theme={'outline_red'} >{t('Отменить')}</Button>
                            <Button type='submit' theme={'inverted_outline'}>{t('Отправить')}</Button>
                        </HStack >
                    )
                    : (
                        <Button type='submit' theme={'inverted_outline'}>{t('Отправить')}</Button>
                    )
                }
            </VStack>
        </form>
    );

    return (
        <>
            <Card className={classNames(cls.RatingCard, {}, [className])} max>
                <VStack align='center' justify='center' max gap='16'>
                    <Text title={title} color='inverted' />
                    <StarRating
                        onSelect={handleSetRating}
                        selectedStars={rating}
                    />
                </VStack>
            </Card>
            <BrowserView>
                <Modal isOpen={isModalOpen} onClose={handleClose} >
                    {getFeedBackForm('desktop')}
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={handleClose}>
                    {getFeedBackForm('mobile')}
                </Drawer>
            </MobileView>
        </>
    );
};