describe('template spec', () => {
  it('Visits the Home page', () => {
    cy.visit('http://localhost:3001/');
    cy.get('h1').contains('Vite + React');

    cy.contains('count is 0');

    cy.get('button').click();
    cy.contains('count is 1');
  });
});
