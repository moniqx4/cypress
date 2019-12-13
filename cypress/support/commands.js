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
// Cypress.Commands.add('login', (email, password) => { ... })
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
        .should('have.value', email)

        cy.FillTextBox(passwordElementName,password)

        cy.ClickButton(buttonElementName)

        /* -- check that user is logged in  -- */
        cy.get(elementName)
        .contains(email).should('be.visible')

    })

     /* -- Login command - ElementHardCode -- */
     Cypress.Commands.add('login', (email, password) => {

        // enter in the element names for these items
        let emailElementName = '.form-username';
        let passwordElementName = '.form-password';
        let buttonElementName = '#btnLogin';        

        cy.FillTextBox(emailElementName,email)        
        .should('have.value', email)

        cy.FillTextBox(passwordElementName,password)
               
        cy.ClickButton(buttonElementName)

        /* -- check that user is logged in  -- */
        //cy.get(elementName)
        //.contains(email).should('be.visible')

    })

    /* Get the window.document of the page that is currently active. */
    Cypress.Commands.add("getDocument",(elementText) => {

    cy.document().contains(elementText)
    
    })

    
/*calculate Expected Benefits and Net Pay*/
Cypress.Commands.add('CalculatePay',(firstname,dependents) => {
    
    const baseBenefit = 1000
    const dependentBenefit = 500
    const baseGrossPay = '2000'
    const payPeriods = 26
    const discount = .10
    //let payValues = []

    let totalBenefitCost = baseBenefit + (parseInt(dependents)*dependentBenefit)

            //Gets the first letter of the firstname, and forces it to lowercase ( if not already lowercase)
            let firstNameChar = firstname[0].toLowerCase()
            let newBenefitCost

            // If the first name of the employee starts with an 'a', then they are given a 10% discount on benefit cost
            if(firstNameChar == 'a'){
                //Takes the total benefit cost and multiplies it by 10%
                let benefitDisc = totalBenefitCost * discount
                
                //Takes the total Benefit Cost, and subtracts the benefit discount
                newBenefitCost =  totalBenefitCost - benefitDisc

                //To figure out the benefit cost per paycheck, divides the total benefit cost by the number of pay periods
                newBenefitCost = (newBenefitCost / payPeriods)
                
            } else {
                //For employees with a firstname that does NOT start with 'a', they do not get the discount and this calculates the benefit cost without the discount
                newBenefitCost = (totalBenefitCost / payPeriods)
                
            }
            // This calculates the NetPay for verification. 
            netPay =  parseInt(baseGrossPay) - newBenefitCost.toFixed(2)
          

    
})

})