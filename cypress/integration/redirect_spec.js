describe('v7 to v6 Redirects non-Auth Page', function() {

    it('Visits the v6 Login Page Url', function() {
      cy.visit('/account/login.aspx')

      cy.url().should('contains', '/account/login')

    })

    it('Visits the v6 Temp Login Page Url', function() {
      cy.visit('/account/templogin.aspx')

      cy.url().should('contains', '/account/login')

    })

    it('Visits the v6 Contribution Page Url', function() {
      cy.visit('/dev/contribute.aspx')
      
      cy.url().should('contains', '/donate/contribute1')

    })

    it('Visits the v6 Contribution Page Url, pre-selected', function() {
      cy.visit('/dev/contribute.aspx?don=10&fieldAmt=25')
      
      cy.url().should('contains', '/donate/contribute1?ct=10&amount=25')

    })

    it('Visits the v6 Single Event Listing Page Url', function() {
      cy.visit('/single/EventListing.aspx')
     
      cy.url().should('contains', '/events?view=list')

    })

    it('Visits the v6 Membership Page Url', function() {
      cy.visit('/dev/contribute2.aspx')
     
      cy.url().should('contains', '/donate/contribute2')

    })

    it('Visits the v6 Direct Contribution/Membership Page Url, pre-selected', function() {
      cy.visit('/dev/contribute2.aspx?don=17')
     
      cy.url().should('contains', '/donate/contribute2?ct=17')

    })

    it('Visits the v6 Gift Certificate Page Url', function() {
      cy.visit('/gift/add.aspx')
     
      cy.url().should('contains', '/gift/add')

    })

    it('Visits the v6 Single Production Season Listing Page Url', function() {
      cy.visit('/single/psDetail.aspx?psn=' + '5184')
    
      cy.url().should('contains', '/events/'+ '5184')

    })

    it('Visits the v6 Event Details Page Url', function() {
      cy.visit('/single/EventDetail.aspx?p=' + '6964')
    
      cy.url().should('contains', '/5184/'+ '6964')

    })

    
    it('Visits the v6 Select Seating Page Url', function() {
      cy.visit('/single/SelectSeating.aspx?p=' + '6964')
    
      cy.url().should('contains', '/5184/'+ '6964')

    })

    it('Visits the v6 SYOS Page Url', function() {
      cy.visit('/single/SYOS.aspx?p=' + '5288')
    
      cy.url().should('contains', '/5187/'+ '5288')

    })

    it('Visits the v6 Aux Production Season Details Page Url', function() {
      cy.visit('/auxiliary/psDetail.aspx?psn=' + '6933')
    
      cy.url().should('contains', '/6933')

    })

    
    it('Visits the v6 Auxiliary Listing Page Url', function() {
      cy.visit('/auxiliary/Reserve.aspx?p=6940')
    
      cy.url().should('contains', '/6933/6940')

    })

    it('Visits the v6 Auxiliary Packages Page Url', function() {
      cy.visit('/auxpkg/detail.aspx?pkg=751&flex=Y&nfs=N')
    
      cy.url().should('contains', '/packages/flex/751/')

    })

    
    it('Visits the v6 Auxiliary Packages Listing Page Url', function() {
      cy.visit('/auxpkg/listing.aspx')
    
      cy.url().should('contains', '/packages')

    })  

    it('Visits the v6 Forgot Login Page Url', function() {
      cy.visit('/account/forgot.aspx')
    
      cy.url().should('contains', '/account/login?forgot=true')

    })

    it('Visits the v6 Account Lookup Page Url', function() {
      cy.visit('/account/lookup.aspx')
    
      cy.url().should('contains', '/error/notfound')

    })

    it('Visits the v6 Register Page Url', function() {
      cy.visit('/account/register.aspx')
    
      cy.url().should('contains', '/account/create')

    })

    it('Visits the v6 Short Registration Page Url', function() {
      cy.visit('/account/shortreg.aspx')
    
      cy.url().should('contains', '/account/create/brief')

    })

    it('Visits the v6 Mailing List Page Url', function() {
      cy.visit('/account/mailist.aspx')
    
      cy.url().should('contains', '/account/create/brief')

    })

    it('Visits the v6 Calendar Page Url', function() {
      cy.visit('/default.aspx')
    
      cy.url().should('contains', '/events')

    })

    it('Visits the v6 Error Page Url', function() {
      cy.visit('/error.html')
    
      cy.url().should('contains', '/error.html')

    })

    it('Visits the v6 404 Error Page Url', function() {
      cy.visit('/_util/error.aspx?errCode=404')
    
      cy.url().should('contains', '/error/notfound')

    })

    it('Visits the v6 500 Error Page Url', function() {
      cy.visit('/_util/error.aspx?errCode=500')
    
      cy.url().should('contains', '/error')

    })

    it('Visits the v6 Fixed Packages Page Url', function() {
      cy.visit('/subscription/packageDetail.aspx?pkg=734')
    
      cy.url().should('contains', '/packages/fixed/734')

    })

    it('Visits the v6 Fixed Packages 2 Page Url', function() {
      cy.visit('/subscription/packageDetail.aspx?pkg=734&flex=N&nfs=N')
    
      cy.url().should('contains', '/packages/fixed/734')

    })


  })