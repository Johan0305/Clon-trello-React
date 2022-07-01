describe("Test e2e to dashboard page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
    cy.get(`[data-cy="textInput-login"]`).type("dannytorres0211@gmail.com");
    cy.get(`[data-cy="passwordInput-login"]`).type("Abcd12345");
    cy.get(`[data-cy="button-login"]`).click();
  });

  it("The page is render succesfully the texts", () => {
    cy.url().should("include", "/dashboard");
    cy.contains("Tus tableros");
    cy.contains("Mostrar los tableros cerrados");
    cy.contains("Reciente");
    cy.contains("Marcado");
    cy.contains("Crear");
  });

  it("The page is render succesfully the components", () => {
    cy.url().should("include", "/dashboard");
    cy.get(`[data-cy="nav-dashboard"]`).should("have.length", 1);
    cy.get(`[data-cy="boardsMenu-dashboard"]`).should("have.length", 1);
    cy.get(`[data-cy="button-dashboard"]`).should("have.length", 1);
  });

  it("The page is succesfully logout", () => {
    cy.url().should("include", "/dashboard");
    cy.get(`[data-cy="buttonProfile-nav"]`).click();
    cy.contains("Cuenta");
    cy.contains("Cerrar sesión");
    cy.get(`[data-cy="buttonLogout-Profile"]`).click();
    cy.url().should("include", "/");
  });

  it("The page is succesfully to show Nav-s button", () => {
    cy.url().should("include", "/dashboard");
    cy.get(`[data-cy="buttonMark-nav"]`).click();
    cy.contains("Tableros marcados");
    cy.get(`[data-cy="buttonCreate-nav"]`).click();
    cy.contains("Crear tablero");
    cy.get(`[data-cy="buttonTrello-nav"]`).click();
    cy.url().should("include", "/dashboard");
  });

  it("The page is creating a board with popOver button Create", () => {
    cy.get(`[data-cy="buttonCreate-nav"]`).click();
    cy.contains("Crear tablero");
    cy.get(`[data-cy="inputCreate-Create"]`).type("Tab1");
    cy.get(`[data-cy="buttonCreate-Create"]`).click();
  });
});
