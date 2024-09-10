/// <reference types="cypress" />
describe("Just visit e2e test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("add todo", () => {
    cy.get('[data-test-id="title-input"]').click().type("test");
    cy.get('[data-test-id="description-input"]')
      .click()
      .type("description test");
    cy.get('[data-test-id="add-button"]').click();
    cy.get('[data-test-id="title-input"]').should("have.value", "");
    cy.get('[data-test-id="description-input"]').should("have.value", "");
  });
});
