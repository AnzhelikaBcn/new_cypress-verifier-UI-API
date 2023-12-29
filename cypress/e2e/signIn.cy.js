describe("Sign In", () => {
  let userss;

  before(() => {
    cy.fixture("userss").then((data) => {
      userss = data.userss;
    });
  });

  it("should sign in successfully and validate the user", () => {
    userss.forEach((user) => {
      cy.login(user.username, user.password);
    });
  });
});
