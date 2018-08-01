describe('MOS Tests - Package/Promo Code', function() {

    beforeEach(() => {
      cy.visit('/packages/fixed/763')
    })

    it('add package to cart, then attempt to add promo code',() => {
        
        //goes to package page, and selects quantity (fixed),and price type adds to cart
        cy.get('#tn-fixed-package-detail-form > div.tn-ticket-selector__controls-container > fieldset.tn-ticket-selector__zone-selector > ul > li > label > input').click()

        cy.get('#zone-59-select-pricetype-2').select('1')

        cy.get('#tn-add-to-cart-button').click()
        
        //add promo code
        cy.get('#tn-subnav-promo-code').type('30discount')

        cy.get('#tn-subnav-promo-button').click()        
        cy.wait(1000)
        cy.document().contains('#tn-whitelabel-container > main > section.tn-header-component > div.bg-danger.alert.tn-heading-error','One or more items in your cart are not available under the promo code you\'ve applied to your session.This promo code has been removed from your session.Click here to reapply your promo code and remove the ineligible items from your cart')
    })


})
