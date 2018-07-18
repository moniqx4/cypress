describe('Admin Login Test', function() {  
    
    beforeEach(() => {
        cy.visit('/admin/login')
        cy.adminlogin('autotest','testpassword')


        Cypress.on('uncaught:exception', (err, runnable) => {
         // returning false here prevents Cypress from
         // failing the test
         //this is here, because there is an error on the admin page with usergroups, needs to be bugged and fixed
         return false
       })
       
        
        cy.get('#login-attempt').click()
    })
         
  
      it('Sets text properties in Admin Page and checks page for change', function() {
             
       cy.visit('/admin/pageeditor?pageKey=2c35a9a4-c442-4604-8dad-ae5ab264f529')

      
       cy.get('#e8c51af2-84b2-4f50-acd1-3f5db4c45fea\\|Author').click()
       .clear()
       .type('Monica1')

       cy.get('.tn-component-fields-form > :nth-child(4)').click()
      
       cy.visit('/packages')
       
       cy.checkMetadata('head meta[name="author"]','Monica1')

        
            })
        
        
})


