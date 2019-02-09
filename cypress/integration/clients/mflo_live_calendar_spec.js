describe('Calendar Page Test', function() {
   
    
    it('Navigates to the Calendar Page', function() {
        
        for (var i = 1; i < 100; i++) {
        cy.request('https://test-eu-sgth.tn.services?view=list').then((response) => {
            expect(response.status).to.eq(200)
            //expect(response.body).to.have.length(500)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
          })

          cy.wait(200)
    
        }
    })


    
    // it('Navigates to the TEST Calendar Page', function() {
    //     cy.request('https://test-eu-sgth.tn.services/events?startdate=2018-10-23&view=calendar').then((response) => {
    //         expect(response.status).to.eq(200)
    //         //expect(response.body).to.have.length(500)
    //         expect(response).to.have.property('headers')
    //         expect(response).to.have.property('duration')
    //       })
    
     
    // })


  })
