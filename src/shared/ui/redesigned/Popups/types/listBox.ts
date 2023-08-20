import { ReactNode } from 'react';

export interface ListBoxItem<T> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}