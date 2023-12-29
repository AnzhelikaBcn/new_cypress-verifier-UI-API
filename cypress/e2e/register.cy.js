describe("User Registration", () => {
  let users;

  before(() => {
    cy.fixture("users").then((data) => {
      users = data.users;
    });
  });

  it("should register a new user successfully", () => {
    users.forEach((user, index) => {
      cy.visit("/account/register");
      cy.get("#username").type(user.username);
      //cy.get("#password").type(user.password);
      cy.get("#email").type(user.email);
      cy.get("form").submit();
      // Добавьте здесь проверки успешной регистрации, если необходимо
    });
  });
});
