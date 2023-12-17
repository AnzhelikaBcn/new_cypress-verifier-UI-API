describe("Sign In", () => {
  const username = "admin";
  const password = "admin";

  it("should sign in successfully", () => {
    cy.login(username, password);
  });

  it("should validate the user after signing in", () => {
    cy.login(username, password);
  });
});
