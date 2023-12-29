/*
before(() => {
  cy.log("Main before hook executed");
});

after(() => {
  cy.log("Main after hook executed");
});

describe("First tests suit - first part", () => {
  before(() => {
    cy.log("1st before hook executed");
  });

  beforeEach(() => {
    cy.visit("/todo");
  });

  it("First test", () => {
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

describe("First tests suit - secondt part", () => {
  before(() => {
    cy.log("2nd before hook executed");
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
*/
