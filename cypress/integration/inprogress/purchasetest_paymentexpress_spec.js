describe('Purchase with Payment Express Test', function() {

    beforeEach(() => {
      cy.visit('/account/login')
    })
 
    it('Purchases GC Make Payment V7', function() {
      
    
     cy.login('autotester@mailinator.com','Cl0udN1n3!')

 
     //goto gift cert page
     cy.visit('/gift/add')

     //add to cart
     cy.get('#AddGiftCertificate_Amount').type('10')

     //for tqa2
    cy.get(':nth-child(3) > label > input').click()
    cy.get('#GiftCertificate_RecipientAdr_Address_address1')
      .type('100 Tester Street')

    cy.get('#GiftCertificate_RecipientAdr_Address_city')
      .type('Tucson')

    cy.get('#GiftCertificate_RecipientAdr_Address_postal')
      .type('12121')

     //click Add to cart 
     cy.get('#tn-gift-certificate-submit').click()

     //proceed to payment page from the cart
     cy.get('#tn-whitelabel-container > main > div.tn-cart-buttons > div:nth-child(1) > a').click()

     //make payment
    //click checkbot to agree/ for dev tqa5
    //cy.get('#Checkout_TANDC_1_Checkbox').click()
    //click checkout
    cy.get('#tn-payment-submit-button').click()

    //payment express form
    cy.get('form').within(($form) => {
    cy.get(input[name="CardNumber"]).type('4111111111111111')
    cy.get(input[name="CardHolderName"]).type('Auto Tester')
    cy.get(input[name="Cvc2"]).type('010')
    cy.get(input[name="DateExpiry_2"]).select('21')
    cy.root().submit()
  })

     //verify receipt page

     //logout
     //cy.get('#tn-whitelabel-container > main > div > div:nth-child(1) > a').click()

    })


  })
