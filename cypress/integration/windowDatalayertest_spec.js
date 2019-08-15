describe('DataLayer Tests - Package - Fixed Not Logged in', function () {

    beforeEach(function () {
        cy.visit('/packages/fixed/780')
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
            assert.equal(win.dataLayer[0].session.version,'7.20.0.17', 'Version is correct');
            assert.equal(win.dataLayer[1].product.packageId, '780', 'Package Id is correct');
            assert.equal(win.dataLayer[1].product.productTypeDescription, 'StandardLegacyProductType', 'Product Type Description is Correct');
            assert.equal(win.dataLayer[1].product.contributionTypeId, '0', 'Contribution Type is correct');
            assert.equal(win.dataLayer[1].product.fundId, '0', 'FundId is correct');
            assert.equal(win.dataLayer[1].product.giftCertificatePaymentMethodId, '0', 'giftCertificatePaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.onAccountPaymentMethodId, '0', 'onAccountPaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.performanceId, '0', 'Performance Id is correct');
            assert.equal(win.dataLayer[1].product.productionSeasonId, '0', 'Production Season Id is correct');
           
        });             
    });
    
});

describe('DataLayer Tests - Single Performance - Not Logged in', function () {

    beforeEach(function () {
        cy.visit('/6954/6964')
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
            assert.equal(win.dataLayer[0].session.version,'7.20.0.17', 'Version is correct');
            assert.equal(win.dataLayer[1].product.packageId, '0', 'Package Id is correct');
            assert.equal(win.dataLayer[1].product.productTypeDescription, 'PAC - Standard Event', 'Product Type Description is Correct');
            assert.equal(win.dataLayer[1].product.contributionTypeId, '0', 'Contribution Type is correct');
            assert.equal(win.dataLayer[1].product.fundId, '0', 'FundId is correct');
            assert.equal(win.dataLayer[1].product.giftCertificatePaymentMethodId, '0', 'giftCertificatePaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.onAccountPaymentMethodId, '0', 'onAccountPaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.performanceId, '6964', 'Performance Id is correct');
            assert.equal(win.dataLayer[1].product.productionSeasonId, '6954', 'Production Season Id is correct');
           
        });             
    });
    
});

describe('DataLayer Tests - Gift Cert - Not Logged in', function () {

    beforeEach(function () {
        cy.visit('/gift/add')
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
            assert.equal(win.dataLayer[0].session.version,'7.20.0.17', 'Version is correct');

            assert.equal(win.dataLayer[1].product.packageId, '0', 'Package Id is correct');
            assert.equal(win.dataLayer[1].product.productTypeDescription, 'Default TR_PMT_METHOD_GROUP', 'Product Type Description is Correct');
            assert.equal(win.dataLayer[1].product.contributionTypeId, '0', 'Contribution Type is correct');
            assert.equal(win.dataLayer[1].product.fundId, '0', 'FundId is correct');
            assert.equal(win.dataLayer[1].product.giftCertificatePaymentMethodId, '31', 'giftCertificatePaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.onAccountPaymentMethodId, '0', 'onAccountPaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.performanceId, '0', 'Performance Id is correct');
            assert.equal(win.dataLayer[1].product.productionSeasonId, '0', 'Production Season Id is correct');
           
        });             
    });
    
});

describe('DataLayer Tests - Contribution - Not Logged in', function () {

    beforeEach(function () {
        cy.visit('/donate/contribute1')
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
            assert.equal(win.dataLayer[0].session.version,'7.20.0.17', 'Version is correct');

            assert.equal(win.dataLayer[1].product.packageId, '0', 'Package Id is correct');
            assert.equal(win.dataLayer[1].product.productTypeDescription, 'Contribution1', 'Product Type Description is Correct');
            assert.equal(win.dataLayer[1].product.contributionTypeId, '0', 'Contribution Type is correct');
            assert.equal(win.dataLayer[1].product.fundId, '0', 'FundId is correct');
            assert.equal(win.dataLayer[1].product.giftCertificatePaymentMethodId, '0', 'giftCertificatePaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.onAccountPaymentMethodId, '0', 'onAccountPaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.performanceId, '0', 'Performance Id is correct');
            assert.equal(win.dataLayer[1].product.productionSeasonId, '0', 'Production Season Id is correct');
           
        });             
    });
    
});

describe('DataLayer Tests - Contribution - Not Logged in', function () {

    beforeEach(function () {
        cy.visit('/donate/contribute2')
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
            assert.equal(win.dataLayer[0].session.version,'7.20.0.17', 'Version is correct');

            assert.equal(win.dataLayer[1].product.packageId, '0', 'Package Id is correct');
            assert.equal(win.dataLayer[1].product.productTypeDescription, 'Contribution2', 'Product Type Description is Correct');
            assert.equal(win.dataLayer[1].product.contributionTypeId, '0', 'Contribution Type is correct');
            assert.equal(win.dataLayer[1].product.fundId, '0', 'FundId is correct');
            assert.equal(win.dataLayer[1].product.giftCertificatePaymentMethodId, '0', 'giftCertificatePaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.onAccountPaymentMethodId, '0', 'onAccountPaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.performanceId, '0', 'Performance Id is correct');
            assert.equal(win.dataLayer[1].product.productionSeasonId, '0', 'Production Season Id is correct');
           
        });             
    });
    
});

describe('DataLayer Tests - Flex Package - Not Logged in', function () {

    beforeEach(function () {
        cy.visit('/packages/flex/818')
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
            assert.equal(win.dataLayer[0].session.version,'7.20.0.17', 'Version is correct');

            assert.equal(win.dataLayer[1].product.packageId, '818', 'Package Id is correct');
            assert.equal(win.dataLayer[1].product.productTypeDescription, 'StandardLegacyProductType', 'Product Type Description is Correct');
            assert.equal(win.dataLayer[1].product.contributionTypeId, '0', 'Contribution Type is correct');
            assert.equal(win.dataLayer[1].product.fundId, '0', 'FundId is correct');
            assert.equal(win.dataLayer[1].product.giftCertificatePaymentMethodId, '0', 'giftCertificatePaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.onAccountPaymentMethodId, '0', 'onAccountPaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.performanceId, '0', 'Performance Id is correct');
            assert.equal(win.dataLayer[1].product.productionSeasonId, '0', 'Production Season Id is correct');
           
        });             
    });
    
});

describe('DataLayer Tests - Super Package - Not Logged in', function () {

    beforeEach(function () {
        cy.visit('/packages/fixed/778')
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
            assert.equal(win.dataLayer[0].session.version,'7.20.0.17', 'Version is correct');

            assert.equal(win.dataLayer[1].product.packageId, '778', 'Package Id is correct');
            assert.equal(win.dataLayer[1].product.productTypeDescription, 'StandardLegacyProductType', 'Product Type Description is Correct');
            assert.equal(win.dataLayer[1].product.contributionTypeId, '0', 'Contribution Type is correct');
            assert.equal(win.dataLayer[1].product.fundId, '0', 'FundId is correct');
            assert.equal(win.dataLayer[1].product.giftCertificatePaymentMethodId, '0', 'giftCertificatePaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.onAccountPaymentMethodId, '0', 'onAccountPaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.performanceId, '0', 'Performance Id is correct');
            assert.equal(win.dataLayer[1].product.productionSeasonId, '0', 'Production Season Id is correct');
           
        });             
    });
    
});

describe('DataLayer Tests - NFS Package - Not Logged in', function () {

    beforeEach(function () {
        cy.visit('/packages/fixed/812')
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
            assert.equal(win.dataLayer[0].session.version,'7.20.0.17', 'Version is correct');

            assert.equal(win.dataLayer[1].product.packageId, '812', 'Package Id is correct');
            assert.equal(win.dataLayer[1].product.productTypeDescription, 'StandardLegacyProductType', 'Product Type Description is Correct');
            assert.equal(win.dataLayer[1].product.contributionTypeId, '0', 'Contribution Type is correct');
            assert.equal(win.dataLayer[1].product.fundId, '0', 'FundId is correct');
            assert.equal(win.dataLayer[1].product.giftCertificatePaymentMethodId, '0', 'giftCertificatePaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.onAccountPaymentMethodId, '0', 'onAccountPaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.performanceId, '0', 'Performance Id is correct');
            assert.equal(win.dataLayer[1].product.productionSeasonId, '0', 'Production Season Id is correct');
           
        });             
    });
    
});

describe('DataLayer Tests - Production Season Listing (new) - Not Logged in', function () {

    beforeEach(function () {
        cy.visit('/overview/7777')
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
            assert.equal(win.dataLayer[0].session.version,'7.23.0.22', 'Version is correct');

            assert.equal(win.dataLayer[1].product.packageId, '0', 'Package Id is correct');
            assert.equal(win.dataLayer[1].product.productTypeDescription, 'null', 'Product Type Description is Correct');
            assert.equal(win.dataLayer[1].product.contributionTypeId, '0', 'Contribution Type is correct');
            assert.equal(win.dataLayer[1].product.fundId, '0', 'FundId is correct');
            assert.equal(win.dataLayer[1].product.giftCertificatePaymentMethodId, '0', 'giftCertificatePaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.onAccountPaymentMethodId, '0', 'onAccountPaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.performanceId, '0', 'Performance Id is correct');
            assert.equal(win.dataLayer[1].product.productionSeasonId, '7777', 'Production Season Id is correct');
           
        });             
    });
    
});