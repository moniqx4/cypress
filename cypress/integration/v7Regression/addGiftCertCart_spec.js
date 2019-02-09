describe('Add and Remove Gift Cert from Cart', function() {

    beforeEach(() => {
      cy.visit('/gift/add')
    })

    it('Adds Gift Cert to Cart', function() {
     //add to cart
     cy.get('#AddGiftCertificate_Amount')
     .type('10')

     //select , required
     cy.get('#GiftCertificate_RecipientInfo_Select')
     

     cy.get('#GiftCertificate_RecipientAdr_Name_Text')
     .type('Moni Tester')

     cy.get('#GiftCertificate_RecipientAdr_Address_address1')
     .type('100 Tester Street')

     cy.get('#GiftCertificate_RecipientAdr_Address_city')
     .type('Tucson')

     //select from dropdown
     cy.get('#GiftCertificate_RecipientAdr_Address_state')
     .select('')

     cy.get('select').select('user-1') // Select the 'user-1' option

     cy.get('#GiftCertificate_RecipientAdr_Address_postal')
     .type('89898')

     //click Add to cart id = tn-gift-certificate-submit
     cy.get('#tn-gift-certificate-submit').click()

         //Remove Gift Cert from Cart
     cy.get('#tn-whitelabel-container > main > section.tn-cart-component > section.tn-cart__section.tn-cart__section--gift-certificates > div > div > button').click()

     //click Remove Modal
     cy.get('body > div.modal.fade.in > div.modal-dialog > div > div.modal-footer > button.modal-btn-confirm.btn.btn-primary').click()

     //verify on the empty cart page
    cy.get('.tn-empty-cart-message').then(($carttext) => {

      // store the cart's text
      const txt = $carttext.text()

      //check for empty cart message
      cy.get('.tn-empty-cart-message')     
        .should(($carttext) => {
        expect($carttext.text()).contains('our cart is currently empty.')
      })

    })
  })
})
