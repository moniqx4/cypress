var repo = function () {
    var db = {};

    var get = function(dataId) {
        console.log('Getting Session DataLayer Data' + dataId)
        return {
            expectedSessionCustomerId: '0',
            expectedSessionCustomerIdMsg: 'Customer Id is Correct',
            expectedSessionIsAnnonymous: true,
            expectedSessionIsAnnonymousMsg: 'Annoymous value is correct',
            expectedSessionIsGuest: false,
            expectedSessionIsGuestMsg: 'Guest value is correct',
            expectedSessionIsRenewalOrder: false,
            expectedSessionIsRenewalOrderMsg: 'Expected Renewal Value Correct',

        }
    }

    return {
        get: get
    }
}

module.exports = repo;


            // assert.equal(win.dataLayer[0].session.modeOfSale, '3', 'MOS is correct');
            // assert.equal(win.dataLayer[0].session.isVersionSevenEnabled, true, 'Version Seven is enabled');
            // assert.isDefined(win.dataLayer[0].session.key, 'Key is defined');
            //  assert.equal(win.dataLayer[0].session.sourceId,'20', 'SourceNo is correct');
            // assert.equal(win.dataLayer[0].session.version,'7.23.0.23', 'Version is correct');