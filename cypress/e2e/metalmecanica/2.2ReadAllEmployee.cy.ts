describe('Show all employees endpoint', () => {
  it('passes', () => {
    cy.api('http://localhost:1689/metalmecanica/employee/detailall')
    cy.get('span').contains('Ok')
  })
})