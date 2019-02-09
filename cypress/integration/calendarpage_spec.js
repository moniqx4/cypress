describe('Caledar Page Test', function() {
   
 
    it('Navigates to the Calendar Page', function() {

        var i;
        for(i=0, i < 10; i++;){
        cy.request('http://development-na-tqa2.tn.services/event?view=list').then((response) => {
            expect(response.status).to.eq(200)
            //expect(response.body).to.have.length(500)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
          
            
          })
          
        }
    })

    
    // it('Navigates to the TEST Calendar Page', function() {
    //     cy.request('https://test-na-tqa3.tn.services/events?startdate=2018-09-01&view=calendar').then((response) => {
    //         expect(response.status).to.eq(200)
    //         //expect(response.body).to.have.length(500)
    //         expect(response).to.have.property('headers')
    //         expect(response).to.have.property('duration')
    //       })
    
     
    // })


  })
