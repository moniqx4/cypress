describe('v7 to v6 Redirects Keyword Descriptions and Ids', function() {

    //redirects are  301
    // default.aspx?filter=<id or description> → events/?k=<descriptions csv>&kid=<keyword id csv>
    it('Visits the v6 keyword filter Url for Events Keywords using keyword id', function() {
      cy.visit('/default.aspx?filter=138')         
      cy.url().should('contains', '/events?filter=138&kid=138')

    })
    // cy.get('.description').find('div.text')  //document.querySelector("#detailed-events > li:nth-child(2) > div > div.text > div.description")
    it('Visits the v6 keyword filter Url for Events Keywords using description', function() {
      cy.visit('/default.aspx?filter=Ballet')         
      cy.url().should('contains', '/events?filter=Ballet&k=Ballet')

    })

    // subscription/packages.aspc?k=<ids> → packages/?k=<descriptions csv>&kid=<keyword id csv>
     it('Visits the v6 keyword filter Url for Packages Keywords using description ', function() {
      cy.visit('/subscription/packages.aspx?k=Ballet')

      cy.url().should('contains', '/packages?k=Ballet')

    })

     // subscription/packages.aspc?k=<ids> → packages/?k=<descriptions csv>&kid=<keyword id csv>
     it('Visits the v6 keyword filter Url for Packages Keywords using keyword id', function() {
      cy.visit('/subscription/packages.aspx?k=138')

      cy.url().should('contains', '/packages?kid=138')

    })

     // single/EventListing.aspx?k=<ids> → events?view=list&kid=<ids>
     it('Visits the v6 keyword filter Url for Event Listing Keywords', function() {
      cy.visit('/single/EventListing.aspx?k=138')

      cy.url().should('contains', '/events?view=list&kid=138')

    })

    // single/weekcalendar.aspx → events?k=<descriptions csv>&kid=<keyword id csv>&span=week 
     it('Visits the v6 keyword filter Url for Weekly Calendar Keywords', function() {
      cy.visit('/single/weekcalendar.aspx')

      cy.url().should('contains', '/events?span=week')

    })

      // single/weekcalendar.aspx → events?k=<descriptions csv>&kid=<keyword id csv>&span=week 
     it('Visits the v6 keyword filter Url for Weekly Calendar Keywords', function() {
      cy.visit('/single/weekcalendar.aspx?k=Ballet')

      cy.url().should('contains', '/events?span=week&k=Ballet')

    })

     // single/weekcalendar.aspx → events?k=<descriptions csv>&kid=<keyword id csv>&span=week 
     it('Visits the v6 keyword filter Url for Weekly Calendar Keywords', function() {
      cy.visit('/single/weekcalendar.aspx?kid=138')

      cy.url().should('contains', '/events?span=week&kid=138')

    })

})