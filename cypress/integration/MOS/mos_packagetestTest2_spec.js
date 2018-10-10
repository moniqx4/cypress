describe('MOS Tests - Package/Single', function() {

    beforeEach(() => {
      cy.visit('/packages/fixed/763')
    })

    it('add package to cart, then attempt to add single item',() => {

        cy.add_fixedpackage('#zone-59-select-pricetype-2','1')
     
        // cy.get('#tn-fixed-package-detail-form > div.tn-ticket-selector__controls-container > fieldset.tn-ticket-selector__zone-selector > ul > li > label > input').click()

        // cy.get('#zone-59-select-pricetype-2').select('1')

        // cy.get('#tn-add-to-cart-button').click()
        
        cy.visit('/5184/6965?z=ba')
        
        cy.document().contains('You cannot make a subscription reservation as you already have a shopping cart started. You may view your cart and either complete your existing order prior to beginning a subscription reservation or you may delete the contents of your cart before adding a subscription to your cart. PACKAGE MSG')
    })

})