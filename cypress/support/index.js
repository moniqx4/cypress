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

/* -- Fill in a text box*/
// Cypress.Commands.add('fillTextBox', (elementName,value) => {
 
//     /* --  Grabs the element on the page, name needs to be include the # if id, or . for a class, etc -- */
//     cy.get(elementName)
//     .type(value)

// }) 



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

Cypress.Commands.add('verifyDataEntry',(actId, actFname, actLname, actSal, actDep, actGpay, actBenCost, actNetPay) =>{
    expId, expFname, expLname, expSal, expDep, expGpay, expBenCost, expNetPay

    actId = cy.get('tbody > :nth-child(2) > :nth-child(1)')

})

/* -- Fills out the Add Employee Form -- */
Cypress.Commands.add('editEmployee',(firstname, lastname, dependents) => {

    var fnameElement = ':nth-of-type(1) > .col-sm-10 > .form-control' 
 
    var lnameElement = ':nth-child(2) > .col-sm-10 > .form-control'
    
    var depElement = '.col-xs-1 > .form-control'
    var buttonElementName  = '.col-sm-offset-2 > .btn-primary'

    
    cy.ClearFillTextBox(fnameElement,firstname)

    cy.ClearFillTextBox(lnameElement,lastname)
    
    cy.ClearFillTextBox(depElement,dependents)
 

    cy.ClickButton(buttonElementName)

})

/*calculate benefit cost*/
Cypress.Commands.add('CalculateBenefitCost',(firstname, dependents) => {

    var baseBenefit = 1000
    var dependentBenefit = 500

    totalbenefitCost = baseBenefit + (parseInt(dependents)*dependentBenefit)

    firstNameChar = firstname[0]

    if(firstNameChar.lowerCase() == 'a'){
        benefitDisc = totalbenefitCost * .10
        return totalbenefitCost - benefitDisc
    } else {
        return totalbenefitCost
    }


})

/*calculate Net Pay*/
Cypress.Commands.add('CalculateNetPay',(benefitCost) => {

    var grossPay = 2000
    
    return grossPay - benefitCost

    
})