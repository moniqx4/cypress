// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import './formCommands';
import './ckEditorCommands';

// Alternatively you can use CommonJS syntax:
// require('./commands')


/* -- Login command - ElementHardCode -- */
Cypress.Commands.add('login', (email, password) => {

    let emailElementName = '.form-username';
    let passwordElementName = '.form-password';
    let buttonElementName = '#btnLogin';
    

    cy.FillTextBox(emailElementName,email)    
    .should('have.value', email)
    
    cy.FillTextBox(passwordElementName,password)
    
    cy.ClickButton(buttonElementName)

    /* -- check that user is logged in  -- */
    //cy.get(elementName)
    //.contains(email).should('be.visible')

})

/*  -- Click Button -- */
Cypress.Commands.add('clickButton', (btnElementName) => {
      
    /* -- Gets the button element and clicks -- */
        cy.get(btnElementName).click()
})

/* -- Fills out the Add Employee Form -- */
Cypress.Commands.add('addEmployee',(firstname, lastname, dependents) => {

    let fnameElement = ':nth-child(1) > .col-sm-10 > .form-control'
    let lnameElement = ':nth-child(2) > .col-sm-10 > .form-control'
    let depElement = '.col-xs-1 > .form-control'
    let buttonElementName  = '.col-sm-offset-2 > .btn-primary'

    cy.FillTextBox(fnameElement,firstname)    

    cy.FillTextBox(lnameElement,lastname) 

    cy.FillTextBox(depElement,dependents)

    cy.ClickButton(buttonElementName)
    
})


/* -- Fills out the Edit Employee Form -- */
Cypress.Commands.add('editEmployee',(firstname, lastname, dependents) => {

    let fnameElement = ':nth-of-type(1) > .col-sm-10 > .form-control'
    let lnameElement = ':nth-child(2) > .col-sm-10 > .form-control'    
    let depElement = '.col-xs-1 > .form-control'
    let buttonElementName  = '.col-sm-offset-2 > .btn-primary'
    
    cy.ClearFillTextBox(fnameElement,firstname)

    cy.ClearFillTextBox(lnameElement,lastname)
    
    cy.ClearFillTextBox(depElement,dependents) 

    cy.ClickButton(buttonElementName)

})
