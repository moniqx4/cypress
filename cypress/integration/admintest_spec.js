describe('Admin Login Test', function() {

    
  
      it('Navigates to the Admin Login Page', function() {
        
        cy.visit('/admin/login')  
        
        // cy.fixture('users').then((json) => {
        //     cy.route('GET', '/users/**', json)

        // })

        // cy.get('admin').then(() => {
        //     this.usersJSON
        // })

        // cy.get('adminpassword').then(() => {
        //     this.usersJSON
        // })
        
        // Valid Admin Login Entry
       cy.get('#login-username')
       .type('autotest')
       .should('have.value', 'autotest')
  
       cy.get('#login-password')
       .type('testpassword')

       Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      
       
       cy.get('#login-attempt').click()

       cy.visit('/admin/pageeditor')  

       //select from tn-page-list, the guid id for example: Package Listing
       //find the field by guild and fieldname, and then enter in the text you want
       //then click the save button btn-primary
       //load the page change was made on in new tab, 
       //find the item and get the text  and compare with what was changed.
  
       //check that user is logged in
        //cy.get('.tn-login-link')
        //.contains('autotester@mailinator.com').should('be.visible')
  
       //logout
       //cy.get('.tn-logout-link').click()
       //verification they have logged out 
       //cy.url().should('contains', '/account/logout')
      })
    })