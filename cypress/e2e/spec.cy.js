/// <reference types="cypress" />
describe('Проверка элементов на странице', () => {
  beforeEach(() => {
    // Заходим на вашу страницу перед каждым тестом
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com');
  });

  it('Должен содержать div с классом "app-container" и стилем padding-top: 60px', () => {
    // Проверка наличия элемента с классом "app-container"
    cy.get('.app-container').should('exist');

    // Проверка стиля padding-top у элемента с классом "app-container"
    cy.get('.app-container').should('have.css', 'padding-top', '60px');
  });

  it('Должен содержать элемент с классом "Toastify"', () => {
    // Проверка наличия элемента с классом "Toastify"
    cy.get('.Toastify').should('exist');
  });

  it('Должен содержать элемент с id "app-header"', () => {
    // Проверка наличия элемента с id "app-header"
    cy.get('#app-header').should('exist');
  });
});
