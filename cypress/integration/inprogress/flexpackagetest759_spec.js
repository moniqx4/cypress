describe('Flex Package Tests ', function() {

    beforeEach(() => {
      cy.visit('/packages/flex/759/details')
    })

    it('add flex package to cart',() => {
        
        //goes to package page, and selects quantity and goes to selection page
        cy.get('#select-pricetype-2').select('1')

        cy.get('#flex-form-pricetype-quantities > div.tn-ticket-selector__controls-container > button').click()

        cy.get('#tn-add-to-cart-button').click()

        //selector page
        // cy.get("#tn-whitelabel-container > main > div.tn-flex-layout > div.tn-flex-layout__main-container > div > div > ul > li > div > div.tn-flex-performance-group__production-list-container > ul > li > div > div.tn-flex-performance-selector > div.tn-flex-production__btn-toggle-performances-wrapper > button > span.tn-flex-production__btn-toggle-performances-label-hide > span:nth-child(1) > span").click()

        cy.wait(1000)

        cy.get('.tn-flex-production__btn-toggle-performances-wrapper > .btn > .tn-toggle-btn__label-show > [aria-hidden="true"] > .tn-toggle-btn__icon').click()

       cy.get('#select-Parking-FP-PAC-SV\ Past-Future\ Aux').click()

        cy.get("#select-Parking-FP-PAC-SV20 Past-Future20 Aux").select('6940')

        cy.wait(2000)

        cy.get(':nth-child(1) > label > .tn-ticket-selector__input-zone').click()

        cy.get('#tn-add-to-cart-button').click()

        

        cy.get('#tn-whitelabel-container > main > div.tn-flex-layout > div.tn-flex-layout__sidebar-container > div.tn-flex-cart > div.tn-flex-cart__main-container > div.tn-flex-cart__primary-section.tn-flex-cart__primary-section--actions > div:nth-child(1) > button').click()

        cy.get('#tn-input-seating-request-notes').type('Automated Test')

        cy.get('body > div.modal.fade.in > div.modal-dialog > div > div.modal-footer > button.modal-btn-confirm.btn.btn-primary').click()

        
      
    })
})