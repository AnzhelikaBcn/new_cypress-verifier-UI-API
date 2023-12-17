describe("Sign In", () => {
  const username = "admin";
  const password = "admin";

  beforeEach(() => {
    cy.visit("/login"); // Assuming the signin page is at '/signin'
  });

  it("should sign in successfully", () => {
    cy.login(username, password);
  });

  it("should validate the user after signing in", () => {
    cy.login(username, password);
    // Assuming there's a user profile page after successful sign in
    cy.visit("/?page=1&sort=id,asc");
    cy.url().should("include", "/?page=1&sort=id,asc");
    // You can add more assertions to validate the user's profile
  });
});
