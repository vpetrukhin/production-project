import { SVGProps, FC } from 'react';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: FC<SVGProps<SVGSVGElement>>;
    onlyAuthorized?: boolean;
}