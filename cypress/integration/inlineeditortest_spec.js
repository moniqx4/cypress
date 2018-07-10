describe('Inline Editor Test', function() {  
    
    beforeEach(() => {
        cy.visit('/admin/login')
    })
         
  
      it('Navigates/Login to the Admin Page', function() {
        
     
        cy.adminlogin('autotest','testpassword')

        // returning false here prevents Cypress from
        // failing the test
        //this is here, because there is an error on the admin page with usergroups, needs to be bugged and fixed
       Cypress.on('uncaught:exception', (err, runnable) => {
        
        return false
      })

       cy.get('#login-attempt').click()

       //open upgrade page
       //cy.get('/admin/upgrade') may not need this

       //click preview my site

       //goto open tab and navigate to the event listing page


 })


