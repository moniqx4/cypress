describe('Add and Remove Donation from Cart', function() {

    beforeEach(() => {
      cy.visit('/donate/contribute1')
    })

    it('Adds Donation to Cart', function() {

        //select Contribution - 10 = Simple GIft
        cy.get('#AddContribution_ContributionTypeId').select('10')

        //add amount
        cy.get('#AddContribution_Amount').type('25.00')

        //click add to cart
        cy.get('#tn-contribution-submit').click()

        //in cart check for aria-described-by on remove button

    }

    )}


)
