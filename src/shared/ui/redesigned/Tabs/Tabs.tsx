import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '../Card/Card';
import { HStack } from '../../Stack';
import cls from './Tabs.module.scss';
import { Flex } from '../../Stack/Flex/Flex';

export interface TabItem<V> {
    content: string;
    value: V;
}

interface TabsProps<V extends string> {
    className?: string;
    tabs: TabItem<V>[];
    value: V;
    direction?: 'row' | 'column';
    onTabClick: (tab: V) => void;
}

export const Tabs = <V extends string>(props: TabsProps<V>) => {
    const { className, onTabClick, value, tabs, direction = 'column' } = props;

    const onClick = useCallback(
        (newTab: V) => {
            return () => {
                onTabClick(newTab);
            };
        },
        [onTabClick],
    );

    return (
        <Flex
            gap="8"
            align="start"
            direction={direction}
            className={classNames(cls.Tabs, {}, [className])}
        >
            {tabs.map((tab) => (
                <Card
                    key={tab.value}
                    theme={tab.value === value ? 'light' : 'normal'}
                    padding={'8'}
                    onClick={onClick(tab.value)}
                >
                    {tab.content}
                </Card>
            ))}
        </Flex>
    );
};
