describe('Registration Tests', function() {

    beforeEach(() => {
      cy.visit('/account/create')
    })
 
    it('Register Account', function() {
      //Fill out form and submit
      cy.get('#PatronRegister_Username').type('')  //email address
      cy.get('#PatronRegister_Password').type('')
      cy.get('#PatronRegister_ConfirmPassword').type('')

      cy.get('#Patron_FirstName').type('')
      cy.get('#Patron_LastName').type('')
      cy.get('#Phone_Number').type('')
      cy.get('#Address_Address1').type('')
      cy.get('#Address_PostalCode')  //optional??
      //cy.get('')

      cy.get('#tn-account-register-button-register')
      //check for user being logged in as new account

    })

    //can have multiple test, by duplicating the test section

  })
