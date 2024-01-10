 export class LoginPage {

    elements = {
        loginField: () => cy.get('[data-cy="username"]'), // method
        passwordField: () => cy.get('[data-cy="password"]'), // method
        loginButton: () =>  cy.get('[data-cy="submit"] > span'), // method

    };

    // Инкапсуляция логина (functions)

    login(login, password) {
        this.elements.loginField().type(login);
        this.elements.passwordField().clear().type(password);
        this.elements.loginButton().click();
    }

}
