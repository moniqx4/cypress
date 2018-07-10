// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//-- Login command --
Cypress.Commands.add("login", (email, password) => {

    cy.get('#PatronAccountLogin_Username')
    .type(email)
    .should('have.value', email)

    cy.get('#PatronAccountLogin_Password')
    .type(password)  
    
    cy.get('#tn-login-button').click()

    //check that user is logged in
    cy.get('.tn-login-link')
    .contains(email).should('be.visible')

})

//-- Logout command --
Cypress.Commands.add("logout", () => {
    cy.get('.tn-logout-link').click()
    //verification they have logged out 
    cy.url().should('contains', '/account/logout')

})

// -- Admin Login --
Cypress.Commands.add("adminlogin", (email, password) => {
      // Valid Admin Login Entry
      cy.get('#login-username')
      .type(email)
      .should('have.value', email)
 
      cy.get('#login-password')
      .type(password)
})

// -- Check to be sure ckeditor is not loaded --
Cypress.Commands.add("no_ckeditor", (urlpath) => {
    
    cy.visit(urlpath)

    cy.get('script').should('not.have.value','ckeditor.js')
    cy.get('script').should('not.have.value','/libs/ckeditor/adapters/jquery.js')
    cy.get('script').should('not.have.value','/tnew-content-editor')
})

// -- Check to be sure ckeditor is not loaded, workaround for cross origin frame error --
Cypress.Commands.add("no_ckeditor2", (urlpath) => {

    cy.request(urlpath)
   
    cy.get('script').should('not.have.value','ckeditor.js')
    cy.get('script').should('not.have.value','/libs/ckeditor/adapters/jquery.js')
    cy.get('script').should('not.have.value','/tnew-content-editor')
})

// -- Check to be sure ckeditor is loaded, workaround for cross origin frame error --
Cypress.Commands.add("ckeditor_loaded", (urlpath) => {
    
    cy.visit(urlpath)
    cy.get('.tn-admin-preview-banner__heading').click
    cy.get('script').contains('ckeditor')
    //cy.contains('script','ckeditor')
    //cy.contains('script','/resources/js/libs/ckeditor/adapters/jquery.js')
    //cy.contains('script','/tnew-content-editor')

    // cy.get('script').contains('contain','ckeditor.js')
    // cy.get('script').contains('contain','/libs/ckeditor/adapters/jquery.js')
    // cy.get('script').contains('contain','/tnew-content-editor')
})

// -- open a new tab, and open new page in tab
Cypress.Commands.add("NewTab",(win)  => {
   
        cy.stub(win, 'open').as('windowOpen')
        cy.get('#open-window').click()
        //cy.get('@windowOpen').should('be.calledWith', urlpath)
})
