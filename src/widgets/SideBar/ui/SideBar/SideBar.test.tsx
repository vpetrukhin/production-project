import { render, screen, fireEvent } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar/ui/SideBar/SideBar';

describe('Tests for Sidebar', () => {
    test('Sidebar render test', () => {
        render(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Is sidebar open test', () => {
        render(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-btn');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
    test('Is sidebar open test', () => {
        render(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-btn');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});