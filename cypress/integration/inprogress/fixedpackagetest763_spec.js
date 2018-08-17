describe('Fixed Package Tests ', function() {

    beforeEach(() => {
      cy.visit('/packages/fixed/763')
    })

    it('add fixed package to cart',() => {
        
        //goes to package page, and selects quantity and goes to selection page
        cy.get('#tn-fixed-package-detail-form > div.tn-ticket-selector__controls-container > fieldset.tn-ticket-selector__zone-selector > ul > li > label > input').click()

        cy.get('#zone-59-select-pricetype-1').select('1')

        cy.get('#tn-add-to-cart-button').click()

        cy.get('#tn-whitelabel-container > main > div.tn-cart-buttons > div:nth-child(1) > a').click()

        cy.login('autotester@mailinator.com', 'Cl0udN1n3!')

        //make payment
    //click checkbot to agree
    cy.get('#Checkout_TANDC_1_Checkbox').click()
    //click checkout
    cy.get('#tn-payment-submit-button').click()

    cy.wait(5000)
    //on HPA form (angular form)
    cy.get('#tn-payment-modal').click()
    //cy.get('iframe')

    cy.get('<input class="form-control ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched" id="name" name="name" ng-model="pfm.name" required="">').first().focus().type('Auto Tester')
    cy.get('#paymentMethod').select('5')
    cy.get('#creditCardNumber').type('4111111111111111')
    cy.get('#expirationYear').select('2020')  // or maybe object:17
    cy.get('#cvv').type('010')
    cy.get('body > form > div.btn-submit-container > button').submit() 
   
      
    })
})