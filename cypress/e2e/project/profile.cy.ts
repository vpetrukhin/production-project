import { getProfilePath } from './../../../src/shared/config/const/router';
let profileId = '';

describe('Подьзователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(getProfilePath(profileId));
    });
  })

  afterEach(() => {
    cy.resetUpdate(profileId);
  })

  it('И видит страницу профиля', () => {
    cy.getByTestid('ProfilePage').should('exist');
  })

  it('И обновляет профиль', () => {
    const newName = 'new';
    const newLastname = 'lastname';
    cy.updateProfile(newName, newLastname);
    cy.getByTestid('ProfileCard.FirstName').should('have.value', newName);
    cy.getByTestid('ProfileCard.LastName').should('have.value', newLastname);
  })
})