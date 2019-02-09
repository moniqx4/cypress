describe('Add and Remove Gift Cert from Cart', function() {

    beforeEach(() => {
      cy.visit('https://development-na-tdev.tn.services/gift/add')
    })

    it('Adds Gift Cert to Cart', function() {
     //add to cart
     cy.get('#AddGiftCertificate_Amount')
     .type('10')

     //select , required
     //cy.get('#GiftCertificate_RecipientInfo_Select')
     

    //  cy.get('GiftCertificate_GC_Textbox1_Text')
    //  .type('Moni Tester')

    //  cy.get('#GiftCertificate_RecipientAdr_Address_address1')
    //  .type('100 Tester Street')

    //  cy.get('#GiftCertificate_RecipientAdr_Address_city')
    //  .type('Tucson')

    //  //select from dropdown
    //  cy.get('#GiftCertificate_RecipientAdr_Address_state')
    //  .select('')

    //  cy.get('select').select('user-1') // Select the 'user-1' option

    //  cy.get('#GiftCertificate_RecipientAdr_Address_postal')
    //  .type('89898')

     //click Add to cart id = tn-gift-certificate-submit
     cy.get('#tn-gift-certificate-submit').click()

     //Click Checkout button
     
     //#tn-whitelabel-container > main > div.tn-cart-buttons > div:nth-child(1) > a

     //class - tn-cart-buttons__primary-action btn btn-primary

     //login
     cy.login('autotester@mailinator.com','Cl0udN1n3!')

     //on payment page, check view page source for "isEligible": false,
     cy.get('#tn-payment-plans-eligible').should.expect('isEligible').contains(false)

   
  })
})
