describe('PackageListing Meta Data Tests', function() {

    beforeEach(() => {
      cy.visit('/packages')
    })

    //check the nav bar login redirects to correct page TODO: figure out how to append the base url to the endpoint
    it('looks nav class and gets the url for the tn.login.link', () => {
        cy.get('.tn-link').should('have.attr','href','https://development-na-TQA5.tn.services/account/login?returnurl=%2fpackages')
    })

    //check the nav bar login redirects to correct page TODO: figure out how to append the base url to the endpoint
    it('looks nav class and gets the url for the tn.cart.link', () => {
        cy.get('.tn-cart-link').within(($tn) => {
            cy.get('.tn-link').should('have.attr','href','https://development-na-TQA5.tn.services/cart/details')
     })
        
      
        
    })

})