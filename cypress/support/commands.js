// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


    /* -- Logout command -- */
    Cypress.Commands.add("logout", () => {

        let logoutElementName = '';
        let urlPath = '';

        cy.get(logoutElementName).click()

        /* -- verification they have logged out -- */
        cy.url().should('contains', urlPath)

    })

    /* -- Open a new tab, and open new page in tab  -- */
    Cypress.Commands.add("NewTab",(win)  => {
    
            cy.stub(win, 'open').as('windowOpen')
            cy.get('#open-window').click()
            //cy.get('@windowOpen').should('be.calledWith', urlpath)
    })

    /* ---check metadata on page */
    Cypress.Commands.add("checkMetadata",(tagname, expvalue) => {

        it('look inside page source code',() => {
            cy.document();
        
        })

        it('looks inside <meta> tag for metadata', () => {
            cy.get(tagname).should("have.attr","content",expvalue)
        })

    })

    /* --- Check Metadata on page -- */
    Cypress.Commands.add("getMetadata",(tagname, metadata) => {

        it('look inside page source code',() => {
            cy.document();
        
        })

        //Get Specified Metadata
        it('looks inside <meta> tag for metadata', () => {
            cy.get(tagname).should("have.attr","content",metadata).then(($value) => {
                const valuetext = $value.text()
        })

    })


    /* -- Navigate To a Page -- */
    Cypress.Commands.add("navigateTo", (pathToPage) => {

        // Visits Page
        cy.visit(pathToPage)

    })

    /* -- Login command - Generic -- */
    Cypress.Commands.add("LoginGeneric", (email, password, emailElementName, passwordElementName, buttonElementName,elementName) => {

        cy.FillTextBox(emailElementName,email)
        // cy.get(emailElementName)
        //.type(email)
        .should('have.value', email)

        //cy.get(passwordElementName)
        //.type(password)
        cy.FillTextBox(passwordElementName,password)
        
        // cy.get('#tn-login-button').click()
        cy.ClickButton(buttonElementName)

        /* -- check that user is logged in  -- */
        cy.get(elementName)
        .contains(email).should('be.visible')

    })

     /* -- Login command - ElementHardCode -- */
     Cypress.Commands.add("login", (email, password) => {

        // enter in the element names for these items
        let emailElementName = '';
        let passwordElementName = '';
        let buttonElementName = '';
        let elementName = '';

        cy.FillTextBox(emailElementName,email)
        // cy.get(emailElementName)
        //.type(email)
        .should('have.value', email)

        //cy.get(passwordElementName)
        //.type(password)
        cy.FillTextBox(passwordElementName,password)
        
        // cy.get('#tn-login-button').click()
        cy.ClickButton(buttonElementName)

        /* -- check that user is logged in  -- */
        cy.get(elementName)
        .contains(email).should('be.visible')

    })

    /* Get the window.document of the page that is currently active. */
    Cypress.Commands.add("getDocument",(elementText) => {

    cy.document().contains(elementText)
    
    })

})