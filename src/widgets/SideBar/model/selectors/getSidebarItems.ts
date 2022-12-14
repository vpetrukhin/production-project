import { createSelector } from '@reduxjs/toolkit';
import { getUserInfo } from '@/entity/User';
import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { getAboutPath, getArticlesPath, getMainPath, getProfilePath } from '@/shared/config/const/router';
import { SidebarItemType } from '../types/SidebarItem';

export const getSideBarItems = createSelector(
    getUserInfo,
    (user) => {
        const sidebarItems: SidebarItemType[] = [
            {
                path: getMainPath(),
                text: 'Главная страница',
                Icon: MainIcon,
                onlyAuthorized: false
            },
            {
                path: getAboutPath(),
                text: 'О сайте',
                Icon: AboutIcon,
                onlyAuthorized: false
            },
        ];

        if (user) {
            sidebarItems.push(
                {
                    path: getProfilePath(user.id),
                    text: 'Профиль',
                    Icon: ProfileIcon,
                    onlyAuthorized: true
                },
                {
                    path: getArticlesPath(),
                    text: 'Статьи',
                    Icon: ArticleIcon,
                    onlyAuthorized: true
                });
        }

        return sidebarItems;
    }
);