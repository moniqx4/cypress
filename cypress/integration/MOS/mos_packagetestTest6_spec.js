describe('MOS Tests - Add Single Perf(web mos)/Add Package, then remove Package', function() {

    beforeEach(() => {
        cy.visit('/6933/6972')
    })

    it('add single perf, add package to cart',() => {

        //adds perf
        cy.get('#zone-60-select-pricetype-1').select('1')        
        cy.get('#tn-add-to-cart-button').click()
        
        //adds package
        cy.visit('/packages/fixed/763')      
        
        //Selects quantity (fixed),and price type adds Package to cart
        //rest of this will not run, when force sub on cart is set to TRUE       
        cy.get('#tn-fixed-package-detail-form > div.tn-ticket-selector__controls-container > fieldset.tn-ticket-selector__zone-selector > ul > li > label > input').click()

        cy.get('#zone-59-select-pricetype-2').select('1')

        cy.get('#tn-add-to-cart-button').click()
              
        //remove the package from the cart
        cy.get('#tn-whitelabel-container > main > section.tn-cart-component > section.tn-cart__section.tn-cart__section--packages > div > div > button').click()
        cy.get('body > div.modal.fade.in > div.modal-dialog > div > div.modal-footer > button.modal-btn-confirm.btn.btn-primary').click()

        cy.wait(1000)
        cy.document().contains('Your cart contains items which are offered alongside subscription packages, however, your cart contains no subscription packages. You will not be able to complete this order without re-adding a subscription package, or you may choose to remove all cart items and begin a new order. Review our package offerings. CART MSG')
    })


})
