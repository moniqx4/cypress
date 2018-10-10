describe('MOS Tests - Single Item/Package', function() {

    beforeEach(() => {
      cy.visit('/5184/6965?z=ba')
    })

    it('add single item to cart, then attempt to add package',() => {
     

        //add single item to cart, then attempt to add package
        cy.get('#zone-59-select-pricetype-1').select('1')
        cy.get('#KW_22_Shirt_Label_Text').type('Medium')
        cy.get('#tn-add-to-cart-button').click()

        //get mos
        //cy.wait(1000)
        //cy.document().contains('Session MOS: 3')

        //goto add package page and add
        cy.visit('/packages/fixed/763')
        cy.document().contains('You cannot make a subscription reservation as you already have a shopping cart started. You may view your cart and either complete your existing order prior to beginning a subscription reservation or you may delete the contents of your cart before adding a subscription to your cart. PACKAGE MSG')
    })

    
    
   
})  
