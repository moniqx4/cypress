describe('DataLayer Tests - Not Logged in', function () {

context('Add Data', function(){
    beforeEach(function () {
        cy.visit('/packages/fixed/780')
    });

//})
   
    it('Data Layer Loaded', function () {
       
            cy.fixture('datalayer.json').as('datalayer')
            cy.get('@datalayer')
           
            .each( function ( datalayer ) {
                
                var fields =  Object.keys( datalayer );
 
                cy.log( datalayer.datalayer );
                cy.log( datalayer.value );
                cy.log( datalayer.message );

                
                cy.window().then((win) => {
                    fields.forEach( function( field ) {
                    assert.equal(win.dataLayer + datalayer[field]);
                    }
                    //assert.equal(win.dataLayer[0].session.customer.id, '0', 'Customer Id is Correct');
                );
            
            }); 
            //assert.isDefined(win.dataLayer, 'Data Layer is defined');
            // fields.forEach( function( field ) {
              
            //         cy.log(datalayer[field]);
            //         cy.window().then((win) => {

            // assert.equal(win.dataLayer + datalayer[field], datalayer[field], datalayer[field]);
            //assert.equal(win.dataLayer[0].session.customer.id, '0', 'Customer Id is Correct');
        })
        });             
    });
});
//});
//});
