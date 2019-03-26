describe('DataLayer Tests - Logged in', function () {

    beforeEach(function () {
        cy.visit('/account/login')
        cy.login('autotester@mailinator.com','Cl0udN1n3!')
    });

    it('Data Layer Loaded - Fixed Package', function () {      

        cy.visit('/packages/fixed/780')

        cy.window().then((win) => {

            assert.isDefined(win.dataLayer, 'Data Layer is defined');

            assert.equal(win.dataLayer[0].session.customer.id, '4123', 'Customer Id is Correct');
            assert.equal(win.dataLayer[0].session.customer.isAnonymous, false, 'Annoymous value is correct');
            assert.equal(win.dataLayer[0].session.customer.isGuest, false, 'Guest value is correct');
            assert.equal(win.dataLayer[0].session.isRenewalOrder, false, 'Expected Renewal Value Correct');
            
            assert.equal(win.dataLayer[0].session.modeOfSale, '3', 'MOS is correct');
            assert.equal(win.dataLayer[0].session.isVersionSevenEnabled, true, 'Version Seven is enabled');
            assert.isDefined(win.dataLayer[0].session.key, 'Key is defined');
            assert.isDefined(win.dataLayer[0].session.version, 'Version is defined');
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

    it('Data Layer Loaded - Single Performance', function () {
        cy.window().then((win) => {
            
            cy.visit('/7774/14647')

            //assert.isDefined(win.dataLayer, 'Data Layer is defined');

            assert.equal(win.dataLayer[0].session.customer.id, '4123', 'Customer Id is Correct');
            assert.equal(win.dataLayer[0].session.customer.isAnonymous, false, 'Annoymous value is correct');
            assert.equal(win.dataLayer[0].session.customer.isGuest, false, 'Guest value is correct');
            assert.equal(win.dataLayer[0].session.isRenewalOrder, false, 'Expected Renewal Value Correct');
            
            assert.equal(win.dataLayer[0].session.modeOfSale, '3', 'MOS is correct');
            assert.equal(win.dataLayer[0].session.isVersionSevenEnabled, true, 'Version Seven is enabled');
            assert.isDefined(win.dataLayer[0].session.key, 'Key is defined');
            assert.isDefined(win.dataLayer[0].session.version, 'Version is defined');
            assert.equal(win.dataLayer[0].session.sourceId,'20', 'SourceNo is correct');
            assert.equal(win.dataLayer[0].session.version,'7.20.0.17', 'Version is correct');

            assert.equal(win.dataLayer[1].product.packageId, '0', 'Package Id is correct');
            assert.equal(win.dataLayer[1].product.productTypeDescription, 'PAC - Standard Event', 'Product Type Description is Correct');
            assert.equal(win.dataLayer[1].product.contributionTypeId, '0', 'Contribution Type is correct');
            assert.equal(win.dataLayer[1].product.fundId, '0', 'FundId is correct');
            assert.equal(win.dataLayer[1].product.giftCertificatePaymentMethodId, '0', 'giftCertificatePaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.onAccountPaymentMethodId, '0', 'onAccountPaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.performanceId, '14647', 'Performance Id is correct');
            assert.equal(win.dataLayer[1].product.productionSeasonId, '7774', 'Production Season Id is correct');
           
        });             
    });

    it('Data Layer Loaded - Single Performance/Best Available page', function () {
        cy.window().then((win) => {
            
            cy.visit('/7774/14647?z=0')

            //assert.isDefined(win.dataLayer, 'Data Layer is defined');

            assert.equal(win.dataLayer[0].session.customer.id, '4123', 'Customer Id is Correct');
            assert.equal(win.dataLayer[0].session.customer.isAnonymous, false, 'Annoymous value is correct');
            assert.equal(win.dataLayer[0].session.customer.isGuest, false, 'Guest value is correct');
            assert.equal(win.dataLayer[0].session.isRenewalOrder, false, 'Expected Renewal Value Correct');
            
            assert.equal(win.dataLayer[0].session.modeOfSale, '3', 'MOS is correct');
            assert.equal(win.dataLayer[0].session.isVersionSevenEnabled, true, 'Version Seven is enabled');
            assert.isDefined(win.dataLayer[0].session.key, 'Key is defined');
            assert.isDefined(win.dataLayer[0].session.version, 'Version is defined');
            assert.equal(win.dataLayer[0].session.sourceId,'20', 'SourceNo is correct');
            assert.equal(win.dataLayer[0].session.version,'7.20.0.17', 'Version is correct');

            assert.equal(win.dataLayer[1].product.packageId, '0', 'Package Id is correct');
            assert.equal(win.dataLayer[1].product.productTypeDescription, 'PAC - Standard Event', 'Product Type Description is Correct');
            assert.equal(win.dataLayer[1].product.contributionTypeId, '0', 'Contribution Type is correct');
            assert.equal(win.dataLayer[1].product.fundId, '0', 'FundId is correct');
            assert.equal(win.dataLayer[1].product.giftCertificatePaymentMethodId, '0', 'giftCertificatePaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.onAccountPaymentMethodId, '0', 'onAccountPaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.performanceId, '14647', 'Performance Id is correct');
            assert.equal(win.dataLayer[1].product.productionSeasonId, '7774', 'Production Season Id is correct');
           
        });             
    });

    it('Data Layer Loaded - Gift Cert', function () {

        cy.visit('/gift/add')

        cy.window().then((win) => {

            assert.equal(win.dataLayer[0].session.customer.id, '4123', 'Customer Id is Correct');
            assert.equal(win.dataLayer[0].session.customer.isAnonymous, false, 'Annoymous value is correct');
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

    it('Data Layer Loaded - Contribution1', function () {

        cy.visit('/donate/contribution1')

        cy.window().then((win) => {

            //assert.isDefined(win.dataLayer, 'Data Layer is defined');

            assert.equal(win.dataLayer[0].session.customer.id, '4123', 'Customer Id is Correct');
            assert.equal(win.dataLayer[0].session.customer.isAnonymous, false, 'Annoymous value is correct');
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

    it('Data Layer Loaded - Contribution1 - Simple Gift', function () {

        cy.visit('/donate/i/10')

        cy.window().then((win) => {

            //assert.isDefined(win.dataLayer, 'Data Layer is defined');

            assert.equal(win.dataLayer[0].session.customer.id, '4123', 'Customer Id is Correct');
            assert.equal(win.dataLayer[0].session.customer.isAnonymous, false, 'Annoymous value is correct');
            assert.equal(win.dataLayer[0].session.customer.isGuest, false, 'Guest value is correct');
            assert.equal(win.dataLayer[0].session.isRenewalOrder, false, 'Expected Renewal Value Correct');
            
            assert.equal(win.dataLayer[0].session.modeOfSale, '3', 'MOS is correct');
            assert.equal(win.dataLayer[0].session.isVersionSevenEnabled, true, 'Version Seven is enabled');
            assert.isDefined(win.dataLayer[0].session.key, 'Key is defined');          
            assert.equal(win.dataLayer[0].session.sourceId,'20', 'SourceNo is correct');
            assert.equal(win.dataLayer[0].session.version,'7.20.0.17', 'Version is correct');

            assert.equal(win.dataLayer[1].product.packageId, '0', 'Package Id is correct');
            assert.equal(win.dataLayer[1].product.productTypeDescription, 'Contribution1', 'Product Type Description is Correct');
            assert.equal(win.dataLayer[1].product.contributionTypeId, '10', 'Contribution Type is correct');
            assert.equal(win.dataLayer[1].product.fundId, '0', 'FundId is correct');
            assert.equal(win.dataLayer[1].product.giftCertificatePaymentMethodId, '0', 'giftCertificatePaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.onAccountPaymentMethodId, '27', 'onAccountPaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.performanceId, '0', 'Performance Id is correct');
            assert.equal(win.dataLayer[1].product.productionSeasonId, '0', 'Production Season Id is correct');
           
        });             
    });

    it('Data Layer Loaded - Contribution2', function () {

        cy.visit('/donate/contribution2')

        cy.window().then((win) => {

            //assert.isDefined(win.dataLayer, 'Data Layer is defined');

            assert.equal(win.dataLayer[0].session.customer.id, '4123', 'Customer Id is Correct');
            assert.equal(win.dataLayer[0].session.customer.isAnonymous, false, 'Annoymous value is correct');
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

    it('Data Layer Loaded - Contribution2 - Membership/Individual', function () {

        cy.visit('/donate/contribution2')

        cy.window().then((win) => {

            //assert.isDefined(win.dataLayer, 'Data Layer is defined');

            assert.equal(win.dataLayer[0].session.customer.id, '4123', 'Customer Id is Correct');
            assert.equal(win.dataLayer[0].session.customer.isAnonymous, false, 'Annoymous value is correct');
            assert.equal(win.dataLayer[0].session.customer.isGuest, false, 'Guest value is correct');
            assert.equal(win.dataLayer[0].session.isRenewalOrder, false, 'Expected Renewal Value Correct');
            
            assert.equal(win.dataLayer[0].session.modeOfSale, '3', 'MOS is correct');
            assert.equal(win.dataLayer[0].session.isVersionSevenEnabled, true, 'Version Seven is enabled');
            assert.isDefined(win.dataLayer[0].session.key, 'Key is defined');          
            assert.equal(win.dataLayer[0].session.sourceId,'20', 'SourceNo is correct');
            assert.equal(win.dataLayer[0].session.version,'7.20.0.17', 'Version is correct');

            assert.equal(win.dataLayer[1].product.packageId, '0', 'Package Id is correct');
            assert.equal(win.dataLayer[1].product.productTypeDescription, 'Contribution2', 'Product Type Description is Correct');
            assert.equal(win.dataLayer[1].product.contributionTypeId, '15', 'Contribution Type is correct');
            assert.equal(win.dataLayer[1].product.fundId, '2', 'FundId is correct');
            assert.equal(win.dataLayer[1].product.giftCertificatePaymentMethodId, '0', 'giftCertificatePaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.onAccountPaymentMethodId, '0', 'onAccountPaymentMethodId is correct');
            assert.equal(win.dataLayer[1].product.performanceId, '0', 'Performance Id is correct');
            assert.equal(win.dataLayer[1].product.productionSeasonId, '0', 'Production Season Id is correct');
           
        });             
    });

    it('Data Layer Loaded - Flex Package', function () {

        cy.visit('/packages/flex/818')

        cy.window().then((win) => {

            //assert.isDefined(win.dataLayer, 'Data Layer is defined');

            assert.equal(win.dataLayer[0].session.customer.id, '4123', 'Customer Id is Correct');
            assert.equal(win.dataLayer[0].session.customer.isAnonymous, false, 'Annoymous value is correct');
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
