describe('V7 Date Parameter Tests', function() {

    it('List with Start Date', function() {
      cy.visit('/events/?view=list&startDate=2018-09-19')

      cy.url().should('contains', '/account/login')

    })

    it('Start Date with List', function() {
      cy.visit('startDate=2018-09-19&view=list')

      cy.url().should('contains', '/account/login')

    })

    it('Start Date and End Date', function() {
      cy.visit('/events?startDate=2018-09-19&endDate=2018-09-21')
      
      cy.url().should('contains', '/donate/contribute1')

    })

    it('Start Date with Calendar View', function() {
      cy.visit('/events?startDate=2018-09-22&view=calendar')
     
      cy.url().should('contains', '/events?view=list')

    })

    it('Calendar View with Start Date', function() {
      cy.visit('/events?view=calendar&startDate=2018-09-22')
     
      cy.url().should('contains', '/donate/contribute2')

    })

    it('Start Date with Span Week', function() {
      cy.visit('/events?startDate=2018-09-19&span=week')
     
      cy.url().should('contains', '/donate/contribute2?CT=10')

    })

    it('Start Date with Span Day', function() {
      cy.visit('/events?startDate=2018-09-22&span=day')
     
      cy.url().should('contains', '/gift/add')

    })


  })