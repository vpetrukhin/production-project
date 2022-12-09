import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '../Card/Card';
import { HStack } from '../Stack';
import cls from './Tabs.module.scss';

export interface TabItem<V> {
    content: string;
    value: V;
}

interface TabsProps<V extends string> {
    className?: string;
    tabs: TabItem<V>[];
    value: V;
    onTabClick: (tab: V) => void;
}

export const Tabs = <V extends string>(props: TabsProps<V>) => {
    const { className, onTabClick, value, tabs } = props;

    const onClick= useCallback((newTab: V) => {
        return () => {
            onTabClick(newTab);
        };
    }, [onTabClick]);

    return (
        <HStack gap='8' className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map(tab => (
                <Card
                    key={tab.value}
                    theme={tab.value === value ? 'normal' : 'outline'}
                    onClick={onClick(tab.value)}
                >
                    {tab.content}
                </Card> 
            ))}
        </HStack>
    );
};