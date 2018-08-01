describe('Add and Remove Contribution from Cart', function() {

    beforeEach(() => {
      cy.visit('donate/contribute1')
    })

    it('Adds contribution to Cart', function() {
     //add to cart
     cy.get('#AddContribution_ContributionTypeId')
     .select('11')
     //amount box, id = AddGiftCertificate_Amount
     //click Add to cart id = tn-gift-certificate-submit
     cy.get('#AddContribution_Amount').clear()
     cy.get('#AddContribution_Amount').type('5000.00')
    cy.wait(1000)
      cy.get('.tn-contribution-type-form-container')
        .find('#CT_11_Address_2_Address_address1').type('100 Tester Street')
        .find('#CT_11_Address_2_Address_postal').type('12121')
      cy.get('.tn-contribution-type-form-container').submit()
        .next().should('contain', 'Shopping Cart')
    

    //  //Enter address
    //  cy.get('#CT_11_Address_2_Address_address1').type('100 Tester Street')

    //  //Enter in postal code
    //  cy.get('#CT_11_Address_2_Address_postal').type('12121')

    //  //click Donate Now button
    //  cy.get('#tn-contribution-submit').click()

     //click Remove Modal
     cy.get('body > div.modal.fade.in > div.modal-dialog > div > div.modal-footer > button.modal-btn-confirm.btn.btn-primary').click()

     //verify on the empty cart page
    //  cy.get('#tn-whitelabel-container > main > section.tn-cart-component > div').then(())

    })


})
