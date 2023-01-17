import { getAdminPanelPath, getProfilePath } from './../../../src/shared/config/const/router';

let userId = '';

describe('router tests', () => {
    it('page is render', () => {
        cy.visit('/');
        cy.getByTestid('MainPage').should('exist');
    });

    describe('Авторизованный пользователь', () => {
        beforeEach(() => {
            cy.login().then((user) => {
                userId = user.id;
            });
        })

        it('старница профиля', () => {
            cy.visit(getProfilePath(userId));
            cy.getByTestid('ProfilePage').should('exist');
        })
        it('нет доступа к странице', () => {
            cy.visit(getAdminPanelPath());
            cy.getByTestid('ForbiddenPage').should('exist');
        })
    });
    describe('Не авторизованный пользователь', () => {
        it('редирект на главную страницу', () => {
            cy.visit(getProfilePath('1'));
            cy.getByTestid('MainPage').should('exist');
        })
        it('переход на несуществующий путь', () => {
            cy.visit('/cddvdvdcvc');
            cy.getByTestid('NotFoundPage').should('exist');
        })
    });
});