describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have working operator buttons', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('.display').should('contain', '4')
  })

  it('should be able to use multiple operations chained together', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6')
  })

  it('should show scientific notaion for big enough numbers', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '9.9999999998e+21')
  })
  
  it('should correctly display decimals', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0.1')
  })

  it('should correctly display negatives', () => {
    cy.get('#number1').click();
    cy.get('#operator-subtract').click()
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1');
  })

  it('should handle dividing by 0', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'error')
  })
})