describe('DataLayer Tests - Calendar page', function () {

    beforeEach(function () {
        cy.visit('/events')
    });

    it('Data Layer Loaded', function () {
        cy.window().then((win) => {

            assert.isDefined(win.dataLayer, 'Data Layer is defined');

            assert.equal(win.dataLayer[0].session.customer.id, '0', 'Customer Id is Correct');
            assert.equal(win.dataLayer[0].session.customer.isAnonymous, true, 'Annoymous value is correct');
            assert.equal(win.dataLayer[0].session.customer.isGuest, false, 'Guest value is correct');
            assert.equal(win.dataLayer[0].session.isRenewalOrder, false, 'Expected Renewal Value Correct');
            assert.equal(win.dataLayer[0].session.modeOfSale, '3', 'MOS is correct');
            assert.equal(win.dataLayer[0].session.isVersionSevenEnabled, true, 'Version Seven is enabled');
            assert.isDefined(win.dataLayer[0].session.key, 'Key is defined');
             assert.equal(win.dataLayer[0].session.sourceId,'20', 'SourceNo is correct');
            assert.equal(win.dataLayer[0].session.version,'7.23.0.23', 'Version is correct');

            assert.equal(win.dataLayer[1].product.packageId, '0', 'Package Id is correct');
            assert.equal(win.dataLayer[1].product.productTypeDescription, null, 'Product Type Description is Correct');
            assert.equal(win.dataLayer[1].product.contributionTypeId, '0', 'Contribution Type is correct');
            assert.equal(win.dataLayer[1].product.fundId, '0', 'FundId is correct');
            assert.equal(win.dataLayer[1].product.giftCertificatePaymentMethodId, '0', 'giftCertificatePaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.onAccountPaymentMethodId, '0', 'onAccountPaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.performanceId, '0', 'Performance Id is correct');
            assert.equal(win.dataLayer[1].product.productionSeasonId, '0', 'Production Season Id is correct');
           
        });             
    });
    
});

describe('DataLayer Tests - Login Page - Not Logged in', function () {

    beforeEach(function () {
        cy.visit('/account/login')
    });

    it('Data Layer Loaded', function () {
        cy.window().then((win) => {

            //assert.isDefined(win.dataLayer, 'Data Layer is defined');

            assert.equal(win.dataLayer[0].session.customer.id, '0', 'Customer Id is Correct');
            assert.equal(win.dataLayer[0].session.customer.isAnonymous, true, 'Annoymous value is correct');
            assert.equal(win.dataLayer[0].session.customer.isGuest, false, 'Guest value is correct');
            assert.equal(win.dataLayer[0].session.isRenewalOrder, false, 'Expected Renewal Value Correct');
            assert.equal(win.dataLayer[0].session.modeOfSale, '3', 'MOS is correct');
            assert.equal(win.dataLayer[0].session.isVersionSevenEnabled, true, 'Version Seven is enabled');
            assert.isDefined(win.dataLayer[0].session.key, 'Key is defined');        
            assert.equal(win.dataLayer[0].session.sourceId,'20', 'SourceNo is correct');
            assert.equal(win.dataLayer[0].session.version,'7.23.0.23', 'Version is correct');

            assert.equal(win.dataLayer[1].product.packageId, '0', 'Package Id is correct');
            assert.equal(win.dataLayer[1].product.productTypeDescription, null, 'Product Type Description is Correct');
            assert.equal(win.dataLayer[1].product.contributionTypeId, '0', 'Contribution Type is correct');
            assert.equal(win.dataLayer[1].product.fundId, '0', 'FundId is correct');
            assert.equal(win.dataLayer[1].product.giftCertificatePaymentMethodId, '0', 'giftCertificatePaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.onAccountPaymentMethodId, '0', 'onAccountPaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.performanceId, '0', 'Performance Id is correct');
            assert.equal(win.dataLayer[1].product.productionSeasonId, '0', 'Production Season Id is correct');
           
        });             
    });
    
});

describe('DataLayer Tests - Register - Not Logged in', function () {

    beforeEach(function () {
        cy.visit('/account/create')
    });

    it('Data Layer Loaded', function () {
        cy.window().then((win) => {

            assert.isDefined(win.dataLayer, 'Data Layer is defined');

            assert.equal(win.dataLayer[0].session.customer.id, '0', 'Customer Id is Correct');
            assert.equal(win.dataLayer[0].session.customer.isAnonymous, true, 'Annoymous value is correct');
            assert.equal(win.dataLayer[0].session.customer.isGuest, false, 'Guest value is correct');
            assert.equal(win.dataLayer[0].session.isRenewalOrder, false, 'Expected Renewal Value Correct');
            assert.equal(win.dataLayer[0].session.modeOfSale, '3', 'MOS is correct');
            assert.equal(win.dataLayer[0].session.isVersionSevenEnabled, true, 'Version Seven is enabled');
            assert.isDefined(win.dataLayer[0].session.key, 'Key is defined');          
            assert.equal(win.dataLayer[0].session.sourceId,'20', 'SourceNo is correct');
            assert.equal(win.dataLayer[0].session.version,'7.23.0.23', 'Version is correct');

            assert.equal(win.dataLayer[1].product.packageId, '0', 'Package Id is correct');
            assert.equal(win.dataLayer[1].product.productTypeDescription, null, 'Product Type Description is Correct');
            assert.equal(win.dataLayer[1].product.contributionTypeId, '0', 'Contribution Type is correct');
            assert.equal(win.dataLayer[1].product.fundId, '0', 'FundId is correct');
            assert.equal(win.dataLayer[1].product.giftCertificatePaymentMethodId, '0', 'giftCertificatePaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.onAccountPaymentMethodId, '0', 'onAccountPaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.performanceId, '0', 'Performance Id is correct');
            assert.equal(win.dataLayer[1].product.productionSeasonId, '0', 'Production Season Id is correct');
           
        });             
    });
    
});

describe('DataLayer Tests - Short Reg - Not Logged in', function () {

    beforeEach(function () {
        cy.visit('/account/create/brief')
    });

    it('Data Layer Loaded', function () {
        cy.window().then((win) => {           

            assert.equal(win.dataLayer[0].session.customer.id, '0', 'Customer Id is Correct');
            assert.equal(win.dataLayer[0].session.customer.isAnonymous, true, 'Annoymous value is correct');
            assert.equal(win.dataLayer[0].session.customer.isGuest, false, 'Guest value is correct');
            assert.equal(win.dataLayer[0].session.isRenewalOrder, false, 'Expected Renewal Value Correct');
            assert.equal(win.dataLayer[0].session.modeOfSale, '3', 'MOS is correct');
            assert.equal(win.dataLayer[0].session.isVersionSevenEnabled, true, 'Version Seven is enabled');
            assert.isDefined(win.dataLayer[0].session.key, 'Key is defined');          
            assert.equal(win.dataLayer[0].session.sourceId,'20', 'SourceNo is correct');
            assert.equal(win.dataLayer[0].session.version,'7.23.0.23', 'Version is correct');

            assert.equal(win.dataLayer[1].product.packageId, '0', 'Package Id is correct');
            assert.equal(win.dataLayer[1].product.productTypeDescription, null, 'Product Type Description is Correct');
            assert.equal(win.dataLayer[1].product.contributionTypeId, '0', 'Contribution Type is correct');
            assert.equal(win.dataLayer[1].product.fundId, '0', 'FundId is correct');
            assert.equal(win.dataLayer[1].product.giftCertificatePaymentMethodId, '0', 'giftCertificatePaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.onAccountPaymentMethodId, '0', 'onAccountPaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.performanceId, '0', 'Performance Id is correct');
            assert.equal(win.dataLayer[1].product.productionSeasonId, '0', 'Production Season Id is correct');
           
        });             
    });
    
});

describe('DataLayer Tests - Calendar List Page - Not Logged in', function () {

    beforeEach(function () {
        cy.visit('/events?view=list')
    });

    it('Data Layer Loaded', function () {
        cy.window().then((win) => {

            assert.equal(win.dataLayer[0].session.customer.id, '0', 'Customer Id is Correct');
            assert.equal(win.dataLayer[0].session.customer.isAnonymous, true, 'Annoymous value is correct');
            assert.equal(win.dataLayer[0].session.customer.isGuest, false, 'Guest value is correct');
            assert.equal(win.dataLayer[0].session.isRenewalOrder, false, 'Expected Renewal Value Correct');
            assert.equal(win.dataLayer[0].session.modeOfSale, '3', 'MOS is correct');
            assert.equal(win.dataLayer[0].session.isVersionSevenEnabled, true, 'Version Seven is enabled');
            assert.isDefined(win.dataLayer[0].session.key, 'Key is defined');          
            assert.equal(win.dataLayer[0].session.sourceId,'20', 'SourceNo is correct');
            assert.equal(win.dataLayer[0].session.version,'7.23.0.23', 'Version is correct');

            assert.equal(win.dataLayer[1].product.packageId, '0', 'Package Id is correct');
            assert.equal(win.dataLayer[1].product.productTypeDescription, null, 'Product Type Description is Correct');
            assert.equal(win.dataLayer[1].product.contributionTypeId, '0', 'Contribution Type is correct');
            assert.equal(win.dataLayer[1].product.fundId, '0', 'FundId is correct');
            assert.equal(win.dataLayer[1].product.giftCertificatePaymentMethodId, '0', 'giftCertificatePaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.onAccountPaymentMethodId, '0', 'onAccountPaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.performanceId, '0', 'Performance Id is correct');
            assert.equal(win.dataLayer[1].product.productionSeasonId, '0', 'Production Season Id is correct');
           
        });             
    });
    
});

describe('DataLayer Tests - Cart Page - Not Logged in', function () {

    //TODO: Add code here to add item to the cart first
    beforeEach(function () {
        cy.visit('/cart')
    });

    it('Data Layer Loaded', function () {
        cy.window().then((win) => {

            assert.equal(win.dataLayer[0].session.customer.id, '0', 'Customer Id is Correct');
            assert.equal(win.dataLayer[0].session.customer.isAnonymous, true, 'Annoymous value is correct');
            assert.equal(win.dataLayer[0].session.customer.isGuest, false, 'Guest value is correct');
            assert.equal(win.dataLayer[0].session.isRenewalOrder, false, 'Expected Renewal Value Correct');
            assert.equal(win.dataLayer[0].session.modeOfSale, '3', 'MOS is correct');
            assert.equal(win.dataLayer[0].session.isVersionSevenEnabled, true, 'Version Seven is enabled');
            assert.isDefined(win.dataLayer[0].session.key, 'Key is defined');          
            assert.equal(win.dataLayer[0].session.sourceId,'20', 'SourceNo is correct');
            assert.equal(win.dataLayer[0].session.version,'7.23.0.23', 'Version is correct');

            assert.equal(win.dataLayer[1].product.packageId, '0', 'Package Id is correct');
            assert.equal(win.dataLayer[1].product.productTypeDescription, null, 'Product Type Description is Correct');
            assert.equal(win.dataLayer[1].product.contributionTypeId, '0', 'Contribution Type is correct');
            assert.equal(win.dataLayer[1].product.fundId, '0', 'FundId is correct');
            assert.equal(win.dataLayer[1].product.giftCertificatePaymentMethodId, '0', 'giftCertificatePaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.onAccountPaymentMethodId, '0', 'onAccountPaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.performanceId, '0', 'Performance Id is correct');
            assert.equal(win.dataLayer[1].product.productionSeasonId, '0', 'Production Season Id is correct');
           
        });             
    });
    
});

describe('DataLayer Tests - Package Listing Page - Not Logged in', function () {

    beforeEach(function () {
        cy.visit('/packages')
    });

    it('Data Layer Loaded', function () {
        cy.window().then((win) => {           

            assert.equal(win.dataLayer[0].session.customer.id, '0', 'Customer Id is Correct');
            assert.equal(win.dataLayer[0].session.customer.isAnonymous, true, 'Annoymous value is correct');
            assert.equal(win.dataLayer[0].session.customer.isGuest, false, 'Guest value is correct');
            assert.equal(win.dataLayer[0].session.isRenewalOrder, false, 'Expected Renewal Value Correct');
            assert.equal(win.dataLayer[0].session.modeOfSale, '3', 'MOS is correct');
            assert.equal(win.dataLayer[0].session.isVersionSevenEnabled, true, 'Version Seven is enabled');
            assert.isDefined(win.dataLayer[0].session.key, 'Key is defined');          
            assert.equal(win.dataLayer[0].session.sourceId,'20', 'SourceNo is correct');
            assert.equal(win.dataLayer[0].session.version,'7.23.0.23', 'Version is correct');

            assert.equal(win.dataLayer[1].product.packageId, '0', 'Package Id is correct');
            assert.equal(win.dataLayer[1].product.productTypeDescription, null, 'Product Type Description is Correct');
            assert.equal(win.dataLayer[1].product.contributionTypeId, '0', 'Contribution Type is correct');
            assert.equal(win.dataLayer[1].product.fundId, '0', 'FundId is correct');
            assert.equal(win.dataLayer[1].product.giftCertificatePaymentMethodId, '0', 'giftCertificatePaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.onAccountPaymentMethodId, '0', 'onAccountPaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.performanceId, '0', 'Performance Id is correct');
            assert.equal(win.dataLayer[1].product.productionSeasonId, '0', 'Production Season Id is correct');
           
        });             
    });
    
});