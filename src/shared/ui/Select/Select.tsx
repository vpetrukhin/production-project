import { ChangeEvent, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectItem {
    content: string;
    value: string;
}

interface SelectProps<V = string> {
    className?: string;
    label: string;
    value?: V;
    onChange?: (value: V) => void;
    items: Array<SelectItem>;
    readonly?: boolean;
}

export const Select = (props: SelectProps) => {
    const { className, label, items, value, onChange, readonly } = props;

    const options = useMemo(() => {
        return items.map(item => (
            <option className={cls.option} key={item.value} value={item.value}>{item.content}</option>
        ));
    }, [items]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) onChange(e.target.value);
    };

    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            <span className={cls.label}>{label}:</span>
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {options}
            </select>
        </div>
    );
};