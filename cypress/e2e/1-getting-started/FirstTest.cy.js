describe('MyTestSuite', () => {
  beforeEach(() => {
    cy.visit('https://demo.nopcommerce.com/')
  })

  it('Verify Title of The Page Positive Test', () => {
    cy.title('eq', 'nopCommerce demo store')
  })

  it('Verify Title of The Page Negative Test', () => {
    cy.title('eq', '')
  })


})