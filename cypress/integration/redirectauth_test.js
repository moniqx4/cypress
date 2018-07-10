describe('v7 to v6 Redirects non-Auth Page', function() {

    it('Visits the v6 Login Page Url', function() {
      cy.visit('/account/login.aspx')

      cy.url().should('contains', '/account/login')

    })

})