describe('v7 URL Parameter Tests', function() {

    //Package Listing Tests
    
    it('Visits the v7 Packages Listing Keyword Page Url', function() {
        cy.visit('/packages?k=dance')
      
        cy.url().should('contains', '/packages?k=dance')
  
      })
  
      it('Visits the v7 Packages Listing Date Page Url', function() {
        cy.visit('/packages?2019-07-06')
      
        cy.url().should('contains', '/packages?2019-07-06')
  
      })

      it('Visits the v7 Packages Listing Production Season Page Url', function() {
        cy.visit('/packages?5184')
      
        cy.url().should('contains', '/packages?5184')
  
      })

      it('Visits the v7 Packages Listing Production Season Page Url', function() {
        cy.visit('/packages?5184&k=dance')
      
        cy.url().should('contains', '/packages?5184&k=dance')
  
      })
  
})
