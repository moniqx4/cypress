describe('Purchase Test', function() {

    beforeEach(() => {
      cy.visit('/donate/contribute1')
    })
 
    it('Purchases Donation', function() {
      // cy.server()
      // cy.route('GET', '/users/**', 'fixture:users')
      cy.get('#AddContribution_ContributionTypeId').select('10')
      cy.get('#AddContribution_Amount').type('55')
      
      cy.get('#tn-contribution-submit').click()
    
      cy.get('.tn-cart-buttons__primary-action').click()
      
      cy.login('autotester@mailinator.com','Cl0udN1n3!')
    
     //make payment
    //click checkbot to agree
    //cy.get('#Checkout_TANDC_1_Checkbox').click()
    //click checkout
    cy.get('#tn-payment-submit-button').click()

   cy.wait(1000)

   cy.get('#cardNumber').type('4111111111111111')
   cy.get('#expiryMonth').select('02')
   cy.get('#expiryYear').select('21')
   cy.get('#cardHolderName').type('Auto Tester')
   cy.get('#csc').type('100')

   cy.get('#payContainer > div.row.buttonRow > div.col-xs-12.text-right.hidden-xs > button:nth-child(2)').click()
    // cy.get('.iframe[0]').within(($iframe) => {

    // cy.get('#name').type('Auto Tester')
    // cy.get('#paymentMethod').select('5')
    // cy.get('#creditCardNumber').type('4111111111111111')
    // cy.get('#expirationYear').select('2020')  // or maybe object:17
    // cy.get('#cvv').type('010')
    // cy.get('body > form > div.btn-submit-container > button').click()
  //})
     //verify receipt page

     //logout
     //cy.get('#tn-whitelabel-container > main > div > div:nth-child(1) > a').click()

    })


  })
