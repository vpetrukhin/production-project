import { screen } from '@testing-library/react';
import { getAboutPath, getAdminPanelPath, getProfilePath } from '@/shared/config/const/router';
import { ComponentRender } from '@/shared/config/tests/ComponentRender';
import { AppRouter } from './AppRouter';

describe('tests for AppRouter', () => {
    test('page is render', async () => {
        ComponentRender(<AppRouter />, {
            route: getAboutPath()
        });

        const page = await screen.findByTestId('AboutPage');
        
        expect(page).toBeInTheDocument();
    });

    test('page is not found', async () => {
        ComponentRender(<AppRouter />, {
            route: '/dsxscddcd'
        });

        const page = await screen.findByTestId('NotFoundPage');
        
        expect(page).toBeInTheDocument();
    });

    test('redirect to main page without auth', async () => {
        ComponentRender(<AppRouter />, {
            route: getProfilePath('1'),
            initialState: {
                user: {
                    _inited: true, isAuth: false,
                }
            }
        });

        const page = await screen.findByTestId('MainPage');
        
        expect(page).toBeInTheDocument();
    });

    test('redirect to forbidden page without roles', async () => {
        ComponentRender(<AppRouter />, {
            route: getAdminPanelPath(),
            initialState: {
                user: {
                    _inited: true, isAuth: true, userInfo: {
                        id: '1',
                        roles: []
                    }
                }
            }
        });

        const page = await screen.findByTestId('ForbiddenPage');
        
        expect(page).toBeInTheDocument();
    });
});