import { screen, fireEvent } from '@testing-library/react';
import { ComponentRender } from 'shared/config/tests/ComponentRender';
import { Counter } from './Counter';

describe('tests for Counter', () => {
    test('Counter render test', () => {
        ComponentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            }
        });
        expect(screen.getByTestId('counter')).toHaveTextContent('10');
    });
    test('Counter increment test', () => {
        ComponentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            }
        });
        const incrementBtn = screen.getByTestId('increment-btn');
        fireEvent.click(incrementBtn);
        expect(screen.getByTestId('counter')).toHaveTextContent('11');
    });
    test('Counter decrement test', () => {
        ComponentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
            }
        });
        const decrementBtn = screen.getByTestId('decrement-btn');
        fireEvent.click(decrementBtn);
        expect(screen.getByTestId('counter')).toHaveTextContent('9');
    });
});