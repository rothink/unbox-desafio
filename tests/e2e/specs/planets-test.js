// https://docs.cypress.io/api/introduction/api.html

describe("Planet test", () => {
  it("Listagem de planetas", () => {
    cy.visit("http://localhost:8080/#/");
    cy.contains("h2", "Planetas");
  });
});
