import { getUserInfo } from '@/entity/User';
import { useSelector } from 'react-redux';
import { getSideBarItems } from '../selectors/getSidebarItems';

export function useSidebarItems() {
    const user = useSelector(getUserInfo);
    const sidebarItems = useSelector(getSideBarItems);
    

    if (user) {
        return sidebarItems
    }

    return sidebarItems.filter(item => !item.onlyAuthorized)
}