describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:1689/curame')
    cy.get('h1').contains('Este es el index principal de CurAME')
  })
})