const { before } = require("cypress/types/lodash");

describe("First tests suit", () => {
  before(() => {
    cy.log("before hook executed");
  });

  it("First test", () => {
    cy.visit("/todo");
    //cy.log("test is still going");
    cy.log("Current base url" + Cypress.config("baseUrl"));
    cy.get("h1").debug().should("be.visible");
  });

  it.only("Test for .then()", () => {
    cy.visit("/todo");
    cy.get('[data-test="new-todo"]').type("test{enter}");
    cy.get('[data-test="new-todo"]').type("test{enter}");
    cy.get('[data-test="new-todo"]').type("test{enter}");
    cy.get(".todo-list li").then((number) => {
      expect(number.length).to.equal(5);
      //assert.equal(number.length, 5, "Array number is right");
    });
  });
});
