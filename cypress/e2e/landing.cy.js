/*describe("my first test", () => {
  it("should work", () => {
    expect(true).to.equal(true);
  });
});*/

describe("Test e2e to landing page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("The page is render succesfully the texts", () => {
    cy.contains("Trello ayuda a los equipos a avanzar en el trabajo.");
    cy.contains(
      "Trello te da siempre las herramientas para que alcances el éxito."
    );
  });

  it("The page is render succesfully the components", () => {
    cy.get(`[data-cy="button-landing"]`).should("have.length", 2);
    cy.get(`[data-cy="trelloImg-landing"]`).should("have.length", 1);
    cy.get(`[data-cy="img-landing"]`).should("have.length", 1);
  });
});
