
/* -- Fill in a text box -- */
Cypress.Commands.add('FillTextBox', (elementName,value) => {
 
    /* --  Grabs the element on the page, name needs to be include the # if id, or . for a class, etc -- */
    cy.get(elementName)
    .type(value)

})

/*  -- Click Button -- */
Cypress.Commands.add('ClickButton', (btnElementName) => {
      
    /* -- Gets the button element and clicks -- */
        cy.get(btnElementName).click()
})

/* -- Select from Dropdown -- */
Cypress.Commands.add('SelectOption', (selectorElementName,textOnSelector) => {
  
    cy.get(selectorElementName)
        .select(textOnSelector)

})

/* -- Clear then Fill in a text box -- */
Cypress.Commands.add('ClearFillTextBox', (elementName,value) => {
 
    /* --  Grabs the element on the page, name needs to be include the # if id, or . for a class, etc -- */
    cy.get(elementName)
    .clear()
    .type(value)
   

})