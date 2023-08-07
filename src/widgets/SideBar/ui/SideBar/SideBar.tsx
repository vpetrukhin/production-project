import { useState } from 'react';
import { useSelector } from 'react-redux';
import { LangSwitcher } from '@/feutures/LangSwitcher';
import { ThemeSwitcher } from '@/feutures/ThemeSwitcher';
import { getUserInfo } from '@/entity/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSideBarItems } from '../../model/selectors/getSidebarItems';
import cls from './SideBar.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { AppLogo } from '@/shared/layout';

import Arrow from './arrow.svg';
import { Icon } from '@/shared/ui/Icon';

interface SideBarProps {
    className?: string;
}

export const SideBar = (props: SideBarProps) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const user = useSelector(getUserInfo);
    const sidebarItems = useSelector(getSideBarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <ToggleFeatureComponent
            name="isRedesignEnable"
            on={
                <VStack
                    data-testid="sidebar"
                    className={classNames(
                        cls.SideBar_redesigned,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )}
                    align="start"
                >
                    <Button
                        className={cls.toggle_btn_redesigned}
                        theme={'clear'}
                        square
                        size={'large'}
                        data-testid="sidebar-btn"
                        onClick={onToggle}
                    >
                        <Icon
                            Svg={Arrow}
                            className={cls.arrow}
                        />
                    </Button>
                    <AppLogo className={cls.appLogo} />
                    <VStack
                        align="start"
                        gap="16"
                        className={cls.items_redesigned}
                    >
                        {user
                            ? sidebarItems.map((item) => (
                                  <SidebarItem
                                      key={item.path}
                                      item={item}
                                      collapsed={collapsed}
                                  />
                              ))
                            : sidebarItems
                                  .filter((item) => !item.onlyAuthorized)
                                  .map((item) => (
                                      <SidebarItem
                                          key={item.path}
                                          item={item}
                                          collapsed={collapsed}
                                      />
                                  ))}
                        {}
                    </VStack>

                    <HStack
                        gap="16"
                        justify="center"
                        align="center"
                        wrap="wrap"
                        className={cls.switchers_redesign}
                    >
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} />
                    </HStack>
                </VStack>
            }
            off={
                <div
                    data-testid="sidebar"
                    className={classNames(
                        cls.SideBar,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )}
                >
                    <Button
                        className={cls.toggle_btn}
                        theme={'inverted_background'}
                        square
                        size={'large'}
                        data-testid="sidebar-btn"
                        onClick={onToggle}
                    >
                        {collapsed ? '>' : '<'}
                    </Button>

                    <VStack
                        align="start"
                        gap="16"
                        className={cls.items}
                    >
                        {user
                            ? sidebarItems.map((item) => (
                                  <SidebarItem
                                      key={item.path}
                                      item={item}
                                      collapsed={collapsed}
                                  />
                              ))
                            : sidebarItems
                                  .filter((item) => !item.onlyAuthorized)
                                  .map((item) => (
                                      <SidebarItem
                                          key={item.path}
                                          item={item}
                                          collapsed={collapsed}
                                      />
                                  ))}
                        {}
                    </VStack>

                    <HStack
                        gap="16"
                        justify="center"
                        wrap="wrap"
                        max
                        className={cls.switchers}
                    >
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} />
                    </HStack>
                </div>
            }
        />
    );

    // return (
    //     <div data-testid="sidebar" className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}>
    //         <Button
    //             className={cls.toggle_btn}
    //             theme={'inverted_background'}
    //             square
    //             size={'large'}
    //             data-testid="sidebar-btn"
    //             onClick={onToggle}
    //         >
    //             {collapsed ? '>' : '<'}
    //         </Button>

    //         <VStack align='start' gap='16' className={cls.items}>
    //             {user
    //                 ? (
    //                     sidebarItems.map(item => (
    //                         <SidebarItem key={item.path} item={item} collapsed={collapsed} />
    //                     ))
    //                 )
    //                 : (
    //                     sidebarItems.filter(item => !item.onlyAuthorized).map(item => (
    //                         <SidebarItem key={item.path} item={item} collapsed={collapsed} />
    //                     ))
    //                 )
    //             }
    //             {}
    //         </VStack>

    //         <HStack
    //             gap='16'
    //             justify='center'
    //             wrap='wrap'
    //             max
    //             className={cls.switchers}
    //         >
    //             <ThemeSwitcher />
    //             <LangSwitcher short={collapsed} />
    //         </HStack>
    //     </div>
    // );
};
