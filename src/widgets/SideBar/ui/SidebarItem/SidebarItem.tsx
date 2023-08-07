import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { SidebarItemType } from '../../model/types/SidebarItem';
import cls from './SidebarItem.module.scss';
import { Icon } from '@/shared/ui/Icon';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();
    const { Icon: icon } = item;

    return (
        <ToggleFeatureComponent
            name="isRedesignEnable"
            on={
                <AppLink
                    theme={'inverted'}
                    to={item.path}
                    className={classNames(cls.item, {
                        [cls.collapsed]: collapsed,
                    })}
                >
                    <HStack
                        gap="8"
                        justify="between"
                    >
                        <Icon
                            Svg={icon}
                            color="inverted"
                        />
                        <span className={cls.link}>{t(item.text)}</span>
                    </HStack>
                </AppLink>
            }
            off={
                <AppLink
                    theme={'inverted'}
                    to={item.path}
                    className={classNames(cls.item, {
                        [cls.collapsed]: collapsed,
                    })}
                >
                    <HStack
                        gap="8"
                        justify="between"
                    >
                        <Icon
                            Svg={icon}
                            color="inverted"
                        />
                        <span className={cls.link}>{t(item.text)}</span>
                    </HStack>
                </AppLink>
            }
        />
    );
});
