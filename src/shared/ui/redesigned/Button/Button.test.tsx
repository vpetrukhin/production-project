import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('test for Button', () => {
    test('render test', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('render clear theme', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
