import { getAdminPanelPath } from './../../../src/shared/config/const/router';
import { getTestidSelector } from 'cypress/helpers/getTestidSelector';

describe('router tests', () => {
    it('page is render', () => {
        cy.visit('/');
        cy.get(getTestidSelector('MainPage')).should('exist');
    });

    describe('Авторизованный пользователь', () => {
        it('старница профиля', () => {
            cy.login('user', '123');

            cy.visit('/profile/1');
            cy.get(getTestidSelector('ProfilePage'))
        })
        it('нет доступа к странице', () => {
            cy.login('user', '123');

            cy.visit(getAdminPanelPath());
            cy.get(getTestidSelector('ForbiddenPage'))
        })
    });
    describe('Не авторизованный пользователь', () => {
        it('редирект на главную страницу', () => {
            cy.visit('/profile/1');
            cy.get(getTestidSelector('MainPage'))
        })
        it('переход на несуществующий путь', () => {
            cy.visit('/cddvdvdcvc');
            cy.get(getTestidSelector('NotFoundPage')).should('exist')
        })
    });
});