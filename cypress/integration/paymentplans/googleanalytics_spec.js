describe('Google Analytic Tests - ', function () {

    beforeEach(function () {
        cy.visit('/packages/fixed/780')
    });

    //need to add a package to the cart, login, and complete purchase, then on the confirmation page, can check these items
    var testData = { 
        expectedName:'',
        expectedTotal : '',
        expectedShipping : '',
        expectedPrice : '',
        expectedQuantity : '',
        expectedSku : '',
        expectedTax : '',
        expectedVersion :'',
        expectedCustomerId : '',
        expectedIsAnon : false ,
        expectedGuest : false,
        expectedRenewal : false,
        expectedMOS : '3',
        expectedVersion : true,
        expectedSourceNo : '',
        expectedCategory :''
    };

    // var testdata = new TestData();
    var expectedTransactionId = ''; //order number
    var expectedTransactionAff = '22'; //MOS

    it('Data Layer Loaded', function () {
        cy.window().then((win) => {

            assert.isDefined(win.dataLayer, 'GA Data Layer is defined');

            assert.equal(win.dataLayer[0].session.customer.id, this.testData.expectedCustomerId, 'Customer Id is Correct');
            assert.equal(win.dataLayer[0].session.customer.isAnonymous, this.testData.expectedIsAnon, 'Annoymous value is correct');
            assert.equal(win.dataLayer[0].session.customer.isGuest, this.testData.expectedGuest, 'Guest value is correct');
            assert.equal(win.dataLayer[0].session.isRenewalOrder, this.testData.expectedRenewal, 'Expected Renewal Value Correct');
            
            assert.equal(win.dataLayer[0].session.modeOfSale, this.testData.expectedMOS, 'MOS is correct');
            assert.equal(win.dataLayer[0].session.isVersionSevenEnabled, this.testData.expectedVersion, 'Version Seven is enabled');
            assert.isDefined(win.dataLayer[0].session.key, 'Key is defined');
             assert.equal(win.dataLayer[0].session.sourceId,this.testData.expectedSourceNo, 'SourceNo is correct');
            assert.equal(win.dataLayer[0].session.version,this.testData.expectedVersion, 'Version is correct');
            assert.equal(win.dataLayer[2].transactionAfiliation, this.expectedTransactionAff, 'Mode of Sale is correct');
            assert.equal(win.dataLayer[2].transactionId, this.expectedTransactionId, 'Transaction Id is Correct');
            assert.equal(win.dataLayer[2].transactionProducts.category, this.testData.expectedCategory, 'Category is correct');
            assert.equal(win.dataLayer[2].transactionProducts.name, this.testData.expectedName, 'Name is correct');
            assert.equal(win.dataLayer[2].transactionProducts.price, this.testData.expectedPrice, 'Price is correct');
            assert.equal(win.dataLayer[2].transactionProducts.quantity, this.testData.expectedQuantity, 'Quantity is correct');
            assert.equal(win.dataLayer[2].transactionProducts.sku, this.testData.expectedSku, 'SKU is correct');
            assert.equal(win.dataLayer[2].transactionShipping, this.testData.expectedShipping, 'Shipping is correct');
            assert.equal(win.dataLayer[2].transactionTax, this.testData.expectedTax, 'Tax is correct');
            assert.equal(win.dataLayer[2].transactionTotal, this.testData.expectedTotal, 'Total is correct');
           
        });             
    });
    
});