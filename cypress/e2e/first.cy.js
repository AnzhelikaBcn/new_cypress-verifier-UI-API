describe("First tests suit", () => {
  it("First test", () => {
    cy.visit("/todo");
    //cy.log("test is still going");
    cy.log("Current base url" + Cypress.config("baseUrl"));
    cy.get("h1").debug().should("be.visible");
  });
});
