

describe('Проверка загрузки страницы', () => {
  it('Страница должна загрузиться', () => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com'); 
    cy.get('body').should('exist');
    cy.get('.app-container').should('be.visible');
  
  });
});