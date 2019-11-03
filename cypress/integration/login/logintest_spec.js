describe('Login Tests', ()  => {

    beforeEach(() => {
      cy.visit(loginPath)
    })

    it('Navigates to the Login Page, invalid login', () => {

     cy.login(username,password)

     cy.logout()

    })
 
    it('Navigates to the Login Page successful login', () => {
      // cy.server()
      // cy.route('GET', '/users/**', 'fixture:users')
    
     cy.login(username,password)

     // Verifies that the user is logged in based on the path
     cy.hash().should('eq','pathOnceLoggedIn')

     // Verifies the user is logged in based on a message on page
     cy.contains('tag', 'what to verify')
     .should('contain','message to be displayed')

     cy.logout()

    })


  })
