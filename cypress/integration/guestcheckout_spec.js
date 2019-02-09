describe('Guestcheckout Test', function() {

    beforeEach(() => {
      cy.visit('/cart/guest')
    })
 
    it('Navigates to the Guestcheckout Page', function() {
      // cy.server()
      // cy.route('GET', '/users/**', 'fixture:users')
    
     //cy.login('autotester@mailinator.com','Cl0udN1n3!')

     //cy.logout()
    var email = 'autotester2001@mailinator.com' //existing guest checkout
    //var email = 'guest_1c448e71-a100-4d16-bed3-e22d3024a3b1@tnew.tnew' //old style
    //var email = 'autotester@mailinator.com' //current regular account
    var lastname = 'TesterTwo'

     cy.get('body > form > input:nth-child(2)').type(email)

     cy.get('body > form > input:nth-child(4)').type(lastname)

     cy.get('body > form > button').click()


    })


  })
