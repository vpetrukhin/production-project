import { USER_LOCALSTORAGE_KEY } from './../../../src/shared/config/const/localStorage';

/**
 * Команда для авторизации 
 * @param username 
 * @param password 
 */
export const login = (username: string, password: string) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: { username, password },
        headers: {
            authorization: window.localStorage.getItem(USER_LOCALSTORAGE_KEY) || 'key'
        }
    }).then((data) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));

        cy.visit('/');
    });
};