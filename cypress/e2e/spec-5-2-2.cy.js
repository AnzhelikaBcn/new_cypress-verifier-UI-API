/// <reference types="cypress" />
describe("Проверка элементов на странице", () => {
  beforeEach(() => {
    // Заходим на проверяемую страницу перед каждым тестом
    cy.visit("");
    cy.log("Current base url" + Cypress.config("baseUrl"));
  });

  it("1 - Проверяет наличие навигационного бара", () => {
    cy.get("[data-cy=navbar]").should("exist");
  });

  it("2 -Проверяет наличие метатега charset=utf-8", () => {
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com");
    cy.get('head meta[charset="utf-8"]').should("exist");
  });

  it("3 - Проверяет наличие тега title и его содержимого", () => {
    cy.get("head title").should("exist").contains("sqlverifier");
  });

  it("4 - Проверяет наличие метатега description", () => {
    cy.get('head meta[name="description"]').should("exist");
  });

  it("5 - Проверяет наличие метатега viewport", () => {
    cy.get('head meta[name="viewport"]').should("exist");
  });

  it("6 - Проверяет наличие метатега theme-color", () => {
    cy.get('head meta[name="theme-color"]').should("exist");
  });

  it("7 - Проверяет наличие метатега X-UA-Compatible", () => {
    cy.get('head meta[http-equiv="X-UA-Compatible"]').should("exist");
  });

  it("8 - Проверяет наличие стилей", () => {
    cy.get('head style[type="text/css"]').should("exist");
  });

  it("9 - Проверка версии в хедере", () => {
    cy.get(".navbar-version").should("contain.text", "0.0.1-SNAPSHOT");
  });

  it('10 - Проверка наличие и правильность стилей', () => {
    cy.get('style[data-css-hash="_effect-css-tjinbz-antSlideDownIn"]').should('exist');
  });

  it('11 - Проверка наличие и правильность стилей', () => {
    cy.get('style[data-css-hash="_effect-css-tjinbz-antSlideUpOut"]').should('exist');
  });

  // it("7 - Проверяет наличие анимации fa-shake", () => {
  //   cy.get('[style*="animation-name: fa-shake"]').should("exist");
  // });

  // it("8 - 11 Проверяет наличие и функционал кнопок", () => {
  //   // Нажатие на кнопку с атрибутом aria-label="Menu"
  //   cy.get(".navbar-toggler").click();

  //   // Проверка видимости и текста на кнопке с классом .navbar-toggler-icon
  //   cy.get(".navbar-toggler-icon").should("be.visible").should("have.text", "");

  //   // Проверка кликабельности кнопки с классом .brand-logo
  //   cy.get(".brand-logo").click();

  //   // Проверка, что элемент .brand-title содержит текст "Sqlverifier"
  //   cy.get(".brand-title span").should("have.text", "Sqlverifier");
  // });
});
