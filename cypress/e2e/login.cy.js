describe("Test e2e to login page", () => {
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

  it("Login with incorrect credentials", () => {
    cy.get(`[data-cy="textInput-login"]`).type("dannytorres0211@gmail.com");
    cy.get(`[data-cy="passwordInput-login"]`).type("1234Ab");
    cy.get(`[data-cy="button-login"]`).click();
    cy.contains(
      "La contraseña debe contener mínimo 8 carácteres y al menos una letra mayúscula, una letra minúscula y un número"
    );
  });

  it("Login with correct credentials", () => {
    cy.get(`[data-cy="textInput-login"]`).type("dannytorres0211@gmail.com");
    cy.get(`[data-cy="passwordInput-login"]`).type("Abcd12345");
    cy.get(`[data-cy="button-login"]`).click();
    cy.url().should("include", "/dashboard");
  });
});
