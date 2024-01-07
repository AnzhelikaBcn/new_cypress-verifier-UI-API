import { faker } from "@faker-js/faker";
//import { LoginPage } from "../pages/loginPage";
//const loginPageElements = require("../fixtures/pages/loginPageSelectors.json");


describe("verifier login - UI", () => {
    it("user cannot login with old password - UI", () => {

        const oldPassword = "user";
        const newPassword = faker.internet.password(5);
        cy.log(newPassword);
        
        cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com");
        cy.contains("Sign in").click({ force: true });
        cy.get('[data-cy="username"]').type('user_teacher');
        cy.get('[data-cy="password"]').clear().type(oldPassword);
        cy.get('[data-cy="submit"] > span').click();
        cy.contains("Account").should("exist");

        //change password and save old password

        cy.changePassword(oldPassword, newPassword);

        // cy.get('[data-cy="accountMenu"] > .d-flex > span').click({ force: true }); // account
        // cy.get('[data-cy="passwordItem"] > span').click({ force: true }); //password
        // cy.get('[data-cy="currentPassword"]', { timeout: 10000 }).type('oldPassword'); 
        // cy.get('[data-cy="newPassword"]').type('newPassword');
        // cy.get('[data-cy="confirmPassword"]').type('newPassword');
        // cy.get('[data-cy="submit"] > span').click(); //save

        cy.get('[data-cy="logout"]').click({ force: true }); // Log out 

        cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com");
        cy.contains("Sign in").click({ force: true });
        cy.get('[data-cy="username"]').type('user_teacher');
        cy.get('[data-cy="password"]').clear().type(oldPassword);
        cy.get('[data-cy="submit"] > span').click();
        cy.contains("Failed to sign in! Please check your credentials and try again.").should("exist");

        cy.get('[data-cy="password"]').clear().type(newPassword); // clear
        cy.get('[data-cy="submit"] > span').click();
        cy.changePassword(newPassword, oldPassword);

    });
});