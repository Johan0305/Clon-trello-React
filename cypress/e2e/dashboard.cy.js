describe("Test e2e to landing page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  it("The page is render succesfully the texts", () => {
    cy.contains("Tus tableros");
    cy.contains("Mostrar los tableros cerrados");
    cy.contains("Crear un nuevo tablero...");
  });

  it("The page is render succesfully the components", () => {
    cy.get(`[data-cy="nav-dashboard"]`).should("have.length", 1);
    cy.get(`[data-cy="boardsMenu-dashboard"]`).should("have.length", 1);
    cy.get(`[data-cy="button-dashboard"]`).should("have.length", 4);
  });
});
