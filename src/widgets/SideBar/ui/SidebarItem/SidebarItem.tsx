import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/types/SidebarItem';
import cls from './SidebarItem.module.scss';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { HStack } from '@/shared/ui/Stack';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

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
                    to={item.path}
                    className={classNames(cls.item, {
                        [cls.collapsed]: collapsed,
                    })}
                    activeClassName={cls.active}
                >
                    <HStack
                        className={cls.wrapper}
                        gap="16"
                    >
                        <Icon Svg={icon} />
                        <span className={cls.link}>{t(item.text)}</span>
                    </HStack>
                </AppLink>
            }
            off={
                <AppLinkDeprecated
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
                        <IconDeprecated
                            Svg={icon}
                            color="inverted"
                        />
                        <span className={cls.link}>{t(item.text)}</span>
                    </HStack>
                </AppLinkDeprecated>
            }
        />
    );
});
