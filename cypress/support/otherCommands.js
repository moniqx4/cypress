cy.wait(1000)

cy.url().should('contains', '/packages?5184&k=dance')

cy.get('.tn-cart-link').within(($tn) => {
    cy.get('.tn-link').should('have.attr','href','https://development-na-TQA5.tn.services/cart/details')
})

// When you need to catch an error use this
Cypress.on('uncaught:exception', (err, runnable) => {
        
    return false
  })

/* Clears a text field */
  cy.get(elementFieldName).clear()

  /* Example of using .find and .next */
  cy.get('.tn-contribution-type-form-container')
        .find('#CT_11_Address_2_Address_address1').type('100 Tester Street')
        .find('#CT_11_Address_2_Address_postal').type('12121')
      cy.get('.tn-contribution-type-form-container').submit()
        .next().should('contain', 'Shopping Cart')