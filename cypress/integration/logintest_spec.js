describe('Login Test', function() {

    beforeEach(() => {
      cy.visit('/account/login')
    })
 
    it('Navigates to the Login Page', function() {
      // cy.server()
      // cy.route('GET', '/users/**', 'fixture:users')
    
     cy.login('autotester@mailinator.com','Cl0udN1n3!')

     cy.logout()

    })


  })
