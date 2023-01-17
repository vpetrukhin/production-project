import { getArticlesPath } from '@/shared/config/const/router'

describe('Пользователь заходит на страницу "Статьи"', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit(getArticlesPath());
    })
  })

  it('И видит список статей', () => {
    cy.getByTestid('ArtilclesPage').should('exist');
  })
})