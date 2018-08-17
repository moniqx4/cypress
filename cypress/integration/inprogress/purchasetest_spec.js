describe('Purchase Test', function() {

    beforeEach(() => {
      cy.visit('/account/login')
    })
 
    it('Purchases Gift Certificate', function() {
      // cy.server()
      // cy.route('GET', '/users/**', 'fixture:users')
    
     cy.login('autotester@mailinator.com','Cl0udN1n3!')

     //cy.AddGiftCerticate('10')

     //goto gift cert page
     cy.visit('/gift/add')

     //add to cart
     cy.get('#AddGiftCertificate_Amount')
     .type('10')
     //amount box, id = AddGiftCertificate_Amount
     //click Add to cart id = tn-gift-certificate-submit
     cy.get('#tn-gift-certificate-submit').click()

     //proceed to payment page from the cart
     //click checkout, class=tn-cart-buttons__primary-action btn btn-primary
     cy.get('#tn-whitelabel-container > main > div.tn-cart-buttons > div:nth-child(1) > a').click()

     //make payment
    //click checkbot to agree
    cy.get('#Checkout_TANDC_1_Checkbox').click()
    //click checkout
    cy.get('#tn-payment-submit-button').click()

    //on HPA form (angular form)
    cy.get("iframe").then(function($iframe){
      // query into the iframe
      const $body = $iframe.contents().find('body')
      //var b = $iframe.contents().find("body")
      //var evt = new Event(
         //cy.get('.iframe[0]').within(($iframe) => {
         
          cy
          .wrap($body)
          .find('input:eq(0)')
          .type('Auto Tester')

          cy
          .wrap($body)
          .find('select:eq(1)')
          .get('Card Type')
          .select('Autumn Ridge Preferred Visa')         

          cy
          .wrap($body)
          .find('input:eq(2)')
          .type('4111111111111111')

          cy
          .wrap($body)
          .find('select:eq(3)')
          .get('CVV')          
          .select('2020')  

          cy
          .wrap($body)
          .find('input:eq(4)')
          .type('010')

          cy
          .wrap($body)
          .find('input:eq(5)')
          .click({force : true})       
     
     
    })
    
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
