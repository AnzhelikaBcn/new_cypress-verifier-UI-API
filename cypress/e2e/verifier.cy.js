


describe("verifier login - UI", () => {
    it("user can login  - UI", () => {
        cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com");
        cy.contains("Sign in").click({ force: true });
        cy.get('[data-cy="username"]').type('user_teacher');
        cy.get('[data-cy="password"]').type('user');
        cy.get('[data-cy="submit"] > span').click();
    });
});