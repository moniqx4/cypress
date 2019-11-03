describe('/login', () => {

    beforeEach(() => {
        cy.visit('/#/login')
      })

    it('Description of Test', () => {

        // this tests that a tag has what expected, for ex. tag= h1
        cy.contains('tag', 'what to verify')
        .should('have.attr','#/pagelink')
    })

    it('Description of Test', () => {

        // this tests that if something required is not entered, the proper message is displayed
        cy.get('form').contains('Sign In').click()
        cy.get('.error-messages')
        .should('contain','message to be displayed')
    })


})