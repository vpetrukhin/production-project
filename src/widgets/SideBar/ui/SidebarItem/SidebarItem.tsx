import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { SidebarItemType } from '../../model/types/SidebarItem';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props;
    const {t} = useTranslation();
    const { Icon } = item;

    return (
        <AppLink theme={AppLinkTheme.INVERTED} to={item.path} className={classNames(cls.item, {[cls.collapsed]: collapsed})}>
            <HStack gap='8' justify='between'>
                <Icon className={cls.icon} />
                <span className={cls.link}>{t(item.text)}</span>
            </HStack>
        </AppLink>
    );
});