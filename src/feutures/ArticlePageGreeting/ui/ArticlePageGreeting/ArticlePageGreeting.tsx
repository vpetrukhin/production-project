import { saveJsonSettings, useGetJsonSettings } from '@/entity/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const ArticlePageGreeting = () => {
    const { t } = useTranslation('article');
    const [isOpen, setIsOpen] = useState(false);
    const { isArticleGreeting } = useGetJsonSettings();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isArticleGreeting) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticleGreeting: true }));
        }
    }, [dispatch, isArticleGreeting]);

    const onClose = () => setIsOpen(false);

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <Text
                title={t('dobro-pozhalovat-na-stranicu-statei')}
                text={t('zdes-vy-mozhete-prosmatrivat-stati-na-raznye-temy')}
            />
        </Modal>
    );
};
