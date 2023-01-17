import { getArticleDetailsPath } from './../../../src/shared/config/const/router';
describe('Пользователь открывает страницу статьи', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit(getArticleDetailsPath('1'));
    })
  })

  it('И видит статью', () => {
    cy.getByTestid('ArticleDetails').should('exist');
  })
})