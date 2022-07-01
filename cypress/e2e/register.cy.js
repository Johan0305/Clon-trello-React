describe("Test e2e to register page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/register-form");
  });

  it("The page is render succesfully the texts", () => {
    cy.contains("Crea tu cuenta");
    cy.contains(
      "Al registrarte, confirmas que has leído y aceptado nuestras Condiciones del servicio y nuestra Política de Privacidad."
    );
    cy.contains("¿Ya tienes cuenta? Inicia sesión");
  });

  it("The page is render succesfully the components", () => {
    cy.get(`[data-cy="button-register"]`).should("have.length", 1);
    cy.get(`[data-cy="trelloImg-register"]`).should("have.length", 1);
    cy.get(`[data-cy="textInput-register"]`).should("have.length", 3);
    cy.get(`[data-cy="passwordInput-register"]`).should("have.length", 2);
  });
});
