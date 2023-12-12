describe("Second tests suit", () => {
  it("Second test", () => {
    Cypress.config("baseUrl", "https://cypress.io");
    cy.visit("/todo");
  });
});
