describe('PackageListing Meta Data Tests', function() {

    beforeEach(() => {
      cy.visit('/packages')
    })
 
    //it('Navigates to the Package Listing Page', function() {
      // cy.server()
      // cy.route('GET', '/users/**', 'fixture:users')
    it('look inside <meta> tag',() => {
        cy.document();
    
    })
    //check meta description , Monica TEST package listing page
    it('looks inside <meta> tag for description', () => {
        cy.get('head meta[name="description"]').should("have.attr","content","Monica TEST package listing page")
    })

    //check meta keywords, package listing
    it('looks inside <meta> tag for keywords', () => {
        cy.get('head meta[name="keywords"]').should("have.attr","content","package listing")
    })

    //check author, Monica
    it('looks inside <meta> tag for author', () => {
        cy.get('head meta[name="author"]').should("have.attr","content","Monica")
    })

    //check title, Subscription Packages | TNEW Performing Arts Demo 
    it('looks inside <title> tag',() => {
         cy.get('head title')
         .should('contain', 'Subscription Packages | TNEW Performing Arts Demo')
     })
      
    //check the alt tag for promo box
    it('looks inside promo code element to check alt text',() => {
        cy.get('#tn-subnav-promo-code')
        .should('have.attr','alt','You can enter a promotion code here for additional discounts.  You may also enter a promotion code at login.  Logging in early will offer you the best prices.')
    })
     
    })

