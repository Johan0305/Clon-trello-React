describe("Test e2e to landing page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("The page is render succesfully the texts", () => {
    cy.contains("Iniciar sesión en Trello");
    cy.contains("Olvidaste tu contraseña?");
    cy.contains("Registrese para crear una cuenta");
  });

  it("The page is render succesfully the components", () => {
    cy.get(`[data-cy="button-login"]`).should("have.length", 1);
    cy.get(`[data-cy="trelloImg-login"]`).should("have.length", 1);
    cy.get(`[data-cy="textInput-login"]`).should("have.length", 1);
    cy.get(`[data-cy="passwordInput-login"]`).should("have.length", 1);
  });
});
