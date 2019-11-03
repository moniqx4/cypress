describe('Url Redirect Tests', () => {

    it('Visits the Url', (urlPath,redirectUrlPath) => {
      cy.visit(urlPath)

      cy.url().should('contains', redirectUrlPath)

    })

    /* example */
    it('Visits the v6 Temp Login Page Url', () => {
      cy.visit('/account/templogin.aspx')

      cy.url().should('contains', '/account/login')

    })

  })