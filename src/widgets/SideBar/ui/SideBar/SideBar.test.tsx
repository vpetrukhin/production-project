import { render, screen, fireEvent } from '@testing-library/react';
import { ComponentRender } from 'shared/config/tests/componentRender';
import { SideBar } from 'widgets/SideBar/ui/SideBar/SideBar';

describe('Tests for Sidebar', () => {
    test('Sidebar render test', () => {
        ComponentRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Is sidebar open test', () => {
        ComponentRender(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-btn');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
    test('Is sidebar open test', () => {
        ComponentRender(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-btn');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});