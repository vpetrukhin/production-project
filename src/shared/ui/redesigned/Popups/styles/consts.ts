import { DropdownDirection } from '@/shared/types/ui';
import cls from '../styles/popup.module.scss';

export const mappedDropdownDirectionsClasses: Record<DropdownDirection, string> = {
    ['topLeft']: cls.topLeft,
    ['topRight']: cls.topRight,
    ['bottomLeft']: cls.bottomLeft,
    ['bottomRight']: cls.bottomRight,
};