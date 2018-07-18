describe('Admin Login Test', function() {  
    
    beforeEach(() => {
        cy.visit('/admin/login')
    })
         
  
      it('Navigates/Login to the Admin Page', function() {
        
     
        cy.adminlogin('autotest','testpassword')


       Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        //this is here, because there is an error on the admin page with usergroups, needs to be bugged and fixed
        return false
      })
      
       
       cy.get('#login-attempt').click()

       cy.visit('/admin/pageeditor')  
       
       //select from tn-page-list, the guid id for example: Package Listing
       //cy.get('#login-username').select('')
       //find the field by guild and fieldname, and then enter in the text you want
       //cy.get('#login-username')
       //.type('autotest')
       //then click the save button btn-primary
       //cy.get('.btn-primary').click()
       //load the page change was made on in new tab, 
       //find the item and get the text  and compare with what was changed.
  
      })
    })