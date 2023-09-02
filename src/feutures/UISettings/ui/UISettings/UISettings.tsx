import { useUserInfo } from '@/entity/User';
import { getFeatureFlag } from '@/shared/lib/featureFlags';
import { updateFeatureFlags } from '@/shared/lib/featureFlags/services/updateFeatureFlags';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Listbox } from '@/shared/ui/redesigned/Popups';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack } from '@/shared/ui/Stack';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface UISettingsProps {
    className?: string;
}

export const UISettings = (props: UISettingsProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const [isLoading, setIsLoading] = useState(false);
    const isRedesignEnable = getFeatureFlag('isRedesignEnable');
    const dispatch = useAppDispatch();
    const user = useUserInfo();

    const items = [
        {
            value: 'old',
            content: 'Старая',
        },
        {
            value: 'new',
            content: 'Новая',
        },
    ];

    const onChange = async (value: string) => {
        if (user) {
            setIsLoading(true);
            await dispatch(
                updateFeatureFlags({
                    userId: user.id,
                    newFeatureFlags: {
                        isRedesignEnable: value === 'new',
                    },
                }),
            );
            setIsLoading(false);
        }
    };

    return (
        <HStack className={className}>
            <Text text={t('tema-prilozheniya')} />
            {isLoading ? (
                <Skeleton
                    width={100}
                    height={40}
                />
            ) : (
                <Listbox
                    items={items}
                    value={isRedesignEnable ? 'new' : 'old'}
                    onChange={onChange}
                />
            )}
        </HStack>
    );
};
