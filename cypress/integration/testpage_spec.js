describe('Search Box entry', function() {

    beforeEach(() => {
      cy.visit('https://www.bergfreunde.eu/')
    })
 
    it('Navigates to the Main Page', function() {

         // cy.viewport(1200, 768)

        // good challenge testcase

        // cy.visit('https://www.bergfreunde.eu/')
        // cy.viewport(1200, 768) 
        // cy.get('.show-for-large-up').contains('Search gear & clothing').click({force:true})
        // cy.xpath('//div[@id=\'search\']')
       
        // cy.contains('Search gear & clothing')
        // cy.xpath('//input[@name=\'searchparam\']')      
        // .type('shorts')

        Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
        })

        cy.viewport(1440, 900) 
        cy.visit('https://www.bergfreunde.eu/')
        cy.viewport(1440, 900) 
        cy.get('.show-for-large-up').contains('Search gear & clothing').click({force:true})
        cy.xpath('//div[@id=\'search\']')
        cy.contains('Search gear & clothing')
        cy.xpath('//input[@name=\'searchparam\']').type('LUNDHAGS')
        cy.xpath('//*[@id="9"]')
        cy.contains('LUNDHAGS').click()
        cy.url().should('include','/brands/lundhags/')
        cy.xpath('//*[@id="18bf37f89e28119e06b4b3c28f54e77a"]/a[1]/div[1]/img')
        cy.contains('Authentic Pant - Walking trousers').scrollIntoView().click()      
        //cy.xpath('//*[@id="js-varlist-color"]/li[2]')
        //cy.contains('Tea Green').click({force:true})
        //cy.get('[data-varsel="Tea Green Solid"] > .js-product-image > img').click({force:true})
        //cy.get('[data-varsel="Tea Green Solid"] > .js-active .js-product-image > img').click({force:true})
        // cy.get('.js-active > .js-product-image > img').click({force:true})
        //cy.get('//img[@src = "https://www.bfgcdn.com/out/pictures/generated/product/1/50_50_90/sol_010-0105-1511_pic1_1.jpg"]').click({force:true})
        //cy.get('[data-id="fc12e6c3da8afb66414a104550a31dfd"]').click({force:true})

        cy.get('ul>li')
          .each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            if ($el.contains === '/out/pictures/generated/product/1/100_100_90/sol_510-1469-0311_pic1_1.jpg') {
              // wrap this element so we can
              // use cypress commands on it
              console.log("Found it, trying to click");
              cy.wrap($el).click()
            } else {
              console.log("Invalid element is not visible");
            }
          })
         
        
    })


  })
