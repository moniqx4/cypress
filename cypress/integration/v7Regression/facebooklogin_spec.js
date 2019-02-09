describe('Login Test', function() {

    // seems to be an issue with loading facebook in the cypress browser window, says connection refused
    beforeEach(() => {
      cy.visit('/account/login')
    })
 
    it('Logs in with a facebook account', function() {
      // cy.server()
      // cy.route('GET', '/users/**', 'fixture:users')

      let email = 'jhcjayqnrd_1543967835@tfbnw.net'
      let password = 'testpassword'     
     
     //cy.get().click('#tn-login-facebook-button')
     cy.get('.btn-group > .btn').click()
     cy.facebooklogin(email,password)
    

    //check that user is logged in
    cy.get('.tn-login-link')
    .contains(email).should('be.visible')

     cy.logout()

    })


  })
