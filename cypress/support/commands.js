// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("enterText", (selector, text) => {
  cy.get('[data-test="new-todo"]').type(`${text}{enter}`);
});

Cypress.Commands.add("checkNthChild", (index, expectedText) => {
  const selector = `:nth-child(${index}) > h3`;
  cy.get(selector).should("have.text", expectedText);
});

Cypress.Commands.add("login", (username, password) => {
  cy.visit("/login"); // Посещаем страницу входа
  cy.get("#username").type(username); // Предположим, что поле логина имеет id='username'
  cy.get("#password").type(password); // Предположим, что поле пароля имеет id='password'
  cy.get("form").submit(); // Отправляем форму входа

  cy.url().should("include", "/?page=1&sort=id,asc"); // Проверяем, что перешли на страницу после входа
});
