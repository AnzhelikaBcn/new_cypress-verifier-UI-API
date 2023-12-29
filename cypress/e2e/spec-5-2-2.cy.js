/// <reference types="cypress" />

before(() => {
  cy.log("Main before hook executed");

  cy.visit("");
  cy.log("Current base url" + Cypress.config("baseUrl"));
});

after(() => {
  cy.log("Main after hook executed");
});

describe("Проверка элементов на странице", () => {
  beforeEach(() => {
    // Заходим на проверяемую страницу перед каждым тестом
    cy.visit("");
    cy.log("Current base url" + Cypress.config("baseUrl"));
  });
  const expectedTexts = [
    "applications program Somalia maroon Architect",
    "Gloryfly",
    "Geography",
    "***NEW!!!! intagration testing 123425",
    "philosophy",
    "FTP",
    "SMS",
    "Automotive Metrics best-of-breed payment",
    "Producer ROI",
    "index capability",
  ];
  for (let i = 1; i <= 10; i++) {
    it(`проверка ${i}-го элемента`, () => {
      cy.checkNthChild(i, expectedTexts[i - 1]);
    });
  }
});
// it("10 - Проверка наличие и правильность стилей", () => {
//   cy.get('style[data-css-hash="_effect-css-tjinbz-antSlideDownIn"]').should(
//     "exist"
//   );
// });

// it("11 - Проверка наличие и правильность стилей", () => {
//   cy.get('style[data-css-hash="_effect-css-tjinbz-antSlideUpOut"]').should(
//     "exist"
//   );
// });
