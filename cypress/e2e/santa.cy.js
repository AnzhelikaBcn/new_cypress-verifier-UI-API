describe("santa login - UI", () => {
    it("user can login", () => {
        cy.visit("https://santa-secret.ru");
        cy.contains('Вход и регистрация').click({force: true}); //нажать не смотря ни на что
        cy.get(':nth-child(3) > .frm').type("angela.pikulina+test@gmail.com");
        cy.get(':nth-child(4) > .frm').type("test1111");
        cy.contains('Войти').click();
    });
});