import { getAPIUrl } from 'cypress/helpers/getAPIBaseUrl';

export const updateProfile = (name: string, lastname: string) => {
    cy.getByTestid('EditableProfileCardHeader.editButton').click();
    cy.getByTestid('ProfileCard.FirstName').clear().type(name);
    cy.getByTestid('ProfileCard.LastName').clear().type(lastname);
    cy.getByTestid('EditableProfileCardHeader.saveButton').click();
}

export const resetUpdate = (profileID: string) => {
    cy.request({
        method: 'PUT',
        url: getAPIUrl(`profile/${profileID}`),
        headers: { authorization: 'auth' },
        body: {
            id: "3",
            first: "test",
            lastname: "testovich",
            age: 23,
            currency: "RUB",
            country: "Россия",
            city: "Москва",
            username: "testuser",
            avatar: "https://images.unsplash.com/photo-1637779692999-26cdadc69c1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
    })
}


declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(name: string, lastname: string): Chainable<void>
            resetUpdate(profileId: string): Chainable<void>
        }
    }
}