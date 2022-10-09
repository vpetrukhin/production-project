import { getCounterValue } from 'entity/Counter/model/selectors/getCounterValue/getCounterValue';
import { CounterActions } from 'entity/Counter/model/slices/CounterSlice/CounterSlice';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';

export const Counter = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(CounterActions.increment());
    };

    const decrement = () => {
        dispatch(CounterActions.decrement());
    };

    return (
        <div data-testid='counter'>
            <h1>{counterValue}</h1>
            <Button data-testid='increment-btn' onClick={increment}>{t('Добавить')}</Button>
            <Button data-testid='decrement-btn' onClick={decrement}>{t('Вычесть')}</Button>
        </div>
    );
};
