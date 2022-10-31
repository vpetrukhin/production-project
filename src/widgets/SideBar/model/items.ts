import { SVGProps, VFC } from 'react';
import { routesPaths } from 'shared/config/router/routerConfig';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
    onlyAuthorized?: boolean;
}

export const sidebarItems: SidebarItemType[] = [
    {
        path: routesPaths.main,
        text: 'Главная страница',
        Icon: MainIcon,
        onlyAuthorized: false
    },
    {
        path: routesPaths.about,
        text: 'О сайте',
        Icon: AboutIcon,
        onlyAuthorized: false
    },
    {
        path: routesPaths.profile,
        text: 'Профиль',
        Icon: ProfileIcon,
        onlyAuthorized: true
    },
];