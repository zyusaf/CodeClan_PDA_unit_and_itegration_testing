describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2');
  });

  it('should display the result of a math operation', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '15');
  });

  it('should display the result of a chain of math operations', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6');
  });

  it('should display the result of a chain of math operations with a range of numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number6').click();
    cy.get('#number8').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#number7').click();
    cy.get('#number9').click();
    cy.get('#number3').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '37874');
  });

  it('should display the result of a math operation - large number', () => {
    cy.get('#number3').click();
    cy.get('#number7').click();
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '19074');
  });

  it('should display the result of a math operation - negative number', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#number1').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-516');
  });

  it('should display the result of a math operation - decimal number', () => {
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1.5');
  });

  it('should diplay the result of dividing by zero', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'undefined');
  });
  
})