describe('Login Test', function() {

    beforeEach(() => {
      cy.visit('/account/login')
    })
 
    it('Navigates to the Login Page', function() {
         
     cy.login('autotester@mailinator.com','Cl0udN1n3!')

     cy.getCookie('TNEWQA')
     .should('have.property', 'domain', '.tn.services')
     
     cy.logout()

    })


  })

  describe('Invalid Login Test', function() {

    beforeEach(() => {
      cy.visit('/account/login')
    })
 
    it('Navigates to the Login Page', function() {
         
     cy.login_nocheck('autotesterNoEmail@mailinator.com','Cl0udN1n3!')

     cy.get('.tn-heading-error')
     //.expect('.bg-danger').to.contain('The email address you submitted is not associated with an account')
     .should('have.value', 'The email address you submitted is not associated with an account')
     //.should('contains','The email address you submitted is not associated with an account')

     cy.getCookie('TNEWQA')
     .should('have.property', 'domain', '.tn.services')
     
     //cy.logout()

    })


  })

