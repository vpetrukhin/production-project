import { User } from './../../../src/entity/User/model/types/UserSchema';
import { getTestidSelector } from 'cypress/helpers/getTestidSelector';
import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/config/const/localStorage';
import { getAPIUrl } from 'cypress/helpers/getAPIBaseUrl';

/**
 * Команда для авторизации 
 */
export const login = (username?: string, password?: string) => {
    return cy.request({
        method: 'POST',
        url: getAPIUrl('login'),
        body: { username: username ?? 'testuser', password: password ?? 'test' },
        headers: {
            authorization: window.localStorage.getItem(USER_LOCALSTORAGE_KEY) || 'key'
        }
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
        return body;
    });
};

/**
 * Получение HTML элемента по testid
 */
export const getByTestid = (testid: string) => {
    return cy.get(getTestidSelector(testid));
}

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<User>
            getByTestid(testid: string): Chainable<JQuery<HTMLElement>>
        }
    }
}