// https://docs.cypress.io/api/introduction/api.html

describe("My test", () => {
  it("Pagina principal da aplicacao", () => {
    cy.visit("http://localhost:8080/#/");
    cy.contains("h2", "Planetas");
  });
});
