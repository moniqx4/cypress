describe('Payment Express valid Test - V7', function() {

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
        .type('50')
        //amount box, id = AddGiftCertificate_Amount
        //click Add to cart id = tn-gift-certificate-submit
        cy.get('#tn-gift-certificate-submit').click()

            //check required options and then complete purchase
            //click checkbot to agree
            cy.get('#Checkout_TANDC_1_Checkbox').click()
            //click checkout
            cy.get('#tn-payment-submit-button').click()

        //on Payment Express Page, complete form and submit
            cy.get(input[name="CardNumber"]).type('4111111111111111')
            cy.get(input[name="CardHolderName"]).type('Auto Tester')
            cy.get(input[name="Cvc2"]).type('010')
            cy.get(input[name="DateExpiry_2"]).select('21')
            cy.get('#clicked36864108').click()

            //verify payment completed on the receipt page
            //cy.get('#\33 6864054');


    })
})
