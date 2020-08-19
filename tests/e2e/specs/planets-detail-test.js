// https://docs.cypress.io/api/introduction/api.html

describe("Test planet detail", () => {
  it("Pagina detalhe de planetas", () => {
    cy.visit("http://localhost:8080/#/detalhar/2");
    cy.contains("#title-residentes", "Residentes");
  });
});
