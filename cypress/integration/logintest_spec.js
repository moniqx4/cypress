describe('Login Test', function() {

  cy.route('GET', '/users/**', 'fixture:users')

    it('Navigates to the Login Page', function() {
      cy.visit('/account/login')

      // Valid Login Account Entry
     cy.get('#PatronAccountLogin_Username')
     .type('autotester@mailinator.com')
     .should('have.value', 'autotester@mailinator.com')

     cy.get('#PatronAccountLogin_Password')
     .type('Cl0udN1n3!')  
     
     cy.get('#tn-login-button').click()

     //check that user is logged in
      cy.get('.tn-login-link')
      .contains('autotester@mailinator.com').should('be.visible')

     //logout
     cy.get('.tn-logout-link').click()
     //verification they have logged out 
     cy.url().should('contains', '/account/logout')
    })
  })
