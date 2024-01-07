import { faker } from "@faker-js/faker";
import { LoginPage } from "../pages/loginPage";
const loginPageElements = require("../fixtures/pages/loginPageSelectors.json");

describe("santa login - UI", () => {
    let oldPassword = "test1111";
    let loginPage = new LoginPage();

    it("user cannot login with old password - UI", () => {

        // Объект класса
        //let loginPage = new LoginPage();
        //  let oldPassword = "test1111";
        let newPassword = faker.internet.password(8); // 8 characters
        cy.log(newPassword);

        cy.visit("https://santa-secret.ru");
        cy.contains("Вход и регистрация").click({ force: true }); //нажать не смотря ни на что
        loginPage.login("angela.pikulina+test@gmail.com", oldPassword);
        // cy.get(":nth-child(3) > .frm").type("angela.pikulina+test@gmail.com");
        // cy.get(":nth-child(4) > .frm").type(oldPassword);
        // cy.get(".btn-main").click();
        cy.contains("Коробки").should("exist");
        cy.changePassword("angela", newPassword);

        cy.contains("Выйти из профиля").click();
        //cy.get('.form-page__header > .base--clickable > .txt--med').click();
        cy.visit("https://santa-secret.ru");
        cy.contains("Вход и регистрация").click({ force: true }); //нажать не смотря ни на что
        cy.get(loginPageElements.loginField).type("angela.pikulina+test@gmail.com");
        cy.get(loginPageElements.passwordField).type(oldPassword);
        cy.get(loginPageElements.loginButton).click();
        cy.contains("Неверное имя пользователя или пароль").should("exist");


        cy.get(":nth-child(4) > .frm").clear().type(newPassword);
        cy.get(".btn-main").click();
        cy.changePassword("angela", oldPassword);

    });

    it.only("user cannot login with old password - API", () => {

        let newPassword = faker.internet.password(8); // 8 characters
        cy.log(newPassword);

        cy.request({
            method: "PUT",
            headers: {
                Cookie: ""
            },
            url: "https://santa-secret.ru/api/account/password",
            body: { password: newPassword }
        }).then((response) => {
            expect(response.status).to.eq(200)
        });
        cy.visit("https://santa-secret.ru");
        cy.contains("Вход и регистрация").click({ force: true }); //нажать не смотря ни на что
        loginPage.login("angela.pikulina+test@gmail.com", newPassword);
        cy.contains("Коробки").should("exist");
        cy.contains(angela).click({ force: true });
        cy.contains("Выйти из профиля").click();

        cy.request({
            method: "PUT",
            headers: {
                Cookie: ""
            },
            url: "https://santa-secret.ru/api/account/password",
            body: { password: oldPassword }
        }).then((response) => {
            expect(response.status).to.eq(200)
        });
        cy.visit("https://santa-secret.ru");

        loginPage.login("angela.pikulina+test@gmail.com", oldPassword);

    });

});