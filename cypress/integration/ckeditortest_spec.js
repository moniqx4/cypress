describe('CKEditor Test', function() {  
   
    it('Check for CKEditor Loading', function() {

    cy.no_ckeditor('/events')
    cy.no_ckeditor('/events?view=list')
    cy.no_ckeditor('/gift/add')
    cy.no_ckeditor('/donate/contribute1')
    cy.no_ckeditor('/donate/contribute2')
    cy.no_ckeditor('/account/login')
    cy.no_ckeditor('/account/create/brief')
    cy.no_ckeditor('/account/create')
    cy.no_ckeditor('/error/notfound')
    cy.no_ckeditor('/error')
    cy.no_ckeditor('/packages/fixed/734')
    cy.no_ckeditor('/packages')
    cy.no_ckeditor('/6933/6940')   
    cy.no_ckeditor('/events/'+ '5184')
    //cy.no_ckeditor('/6933')
    cy.no_ckeditor('/packages/flex/720/details')
    cy.no_ckeditor2('/6933')    

  })

})