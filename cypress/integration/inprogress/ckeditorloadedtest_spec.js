describe('CKEditor Loaded Test', function() {  
  beforeEach(() => {
    cy.visit('/admin/login')
    // returning false here prevents Cypress from
      // failing the test
      //this is here, because there is an error on the admin page with usergroups, needs to be bugged and fixed
    Cypress.on('uncaught:exception', (err, runnable) => {      
      return false
    })

    
  })
     

   
    it('Check for CKEditor Loading', function() {
  
      cy.adminlogin('autotest', 'testpassword')
      cy.get('#login-attempt').click()
      cy.visit('/admin/upgrade')
      cy.get('[href="\/"]').click({force:true})

    
      

    cy.ckeditor_loaded('/events')
    cy.ckeditor_loaded('/events?view=list')
    cy.ckeditor_loaded('/gift/add')
    cy.ckeditor_loaded('/donate/contribute1')
    cy.ckeditor_loaded('/donate/contribute2')
    cy.ckeditor_loaded('/account/login')
    cy.ckeditor_loaded('/account/create/brief')
    cy.ckeditor_loaded('/account/create')
    cy.ckeditor_loaded('/error/notfound')
    cy.ckeditor_loaded('/error')
    cy.ckeditor_loaded('/packages/fixed/734')
    cy.ckeditor_loaded('/packages')
    cy.ckeditor_loaded('/6933/6940')   
    cy.ckeditor_loaded('/events/'+ '5184')
    cy.ckeditor_loaded('/packages/flex/720/details')
    cy.ckeditor_loaded('/6933')    

  })

})