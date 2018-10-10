describe('v7 Package Listing page Parameter Tests', function() {

    //Package Listing Tests
    
    it('Visits the v7 Packages Listing Keyword Page parameter', function() {
        cy.visit('/packages?k=dance')
      
        cy.url().should('contains', '/packages?k=dance')
  
      })
  
      it('Visits the v7 Packages Listing StartDate Page parameter', function() {
        cy.visit('/packages?startdate=2018-12-31')
      
        cy.url().should('contains', '/packages?startdate=2018-12-31')
  
      })

      it('Visits the v7 Packages Listing Start and EndDate Page parameter', function() {
        cy.visit('/packages?startDate=2019-06-06&endDate=2019-07-06')
      
        cy.url().should('contains', '/packages?startDate=2019-06-06&endDate=2019-07-06')
  
      })

      it('Visits the v7 Packages Listing Specific Day Page parameter', function() {
        cy.visit('/packages?day=2018-12-31')
      
        cy.url().should('contains', '/packages?day=2018-12-31')
  
      })

      it('Visits the v7 Packages Listing Production Season Page parameter', function() {
        cy.visit('/packages?5184')
      
        cy.url().should('contains', '/packages?5184')
  
      })

      it('Visits the v7 Packages Listing Production Season Page and Keyword parameter', function() {
        cy.visit('/packages?5184&k=dance')
      
        cy.url().should('contains', '/packages?5184&k=dance')
  
      })

      it('Visits the v7 Packages Listing Today parameter', function() {
        cy.visit('/packages?day=today')
      
        cy.url().should('contains', '/packages?day=today')
  
      })
  
})
