describe('v7 to v6 Redirects Auth Page', function() {

    it('Visits the v6 Account Update Page Url', function() {
      cy.visit('/account/update.aspx')

      cy.url().should('contains', '/account/update')

    })

})