    /* -- Check to be sure ckeditor is not loaded -- */
    Cypress.Commands.add("no_ckeditor", (urlPath) => {
        
        cy.visit(urlPath)

        cy.get('script').should('not.have.value','ckeditor.js')
        cy.get('script').should('not.have.value','/libs/ckeditor/adapters/jquery.js')
        cy.get('script').should('not.have.value','/tnew-content-editor')
    })

    /* -- Check to be sure ckeditor is not loaded, workaround for cross origin frame error -- */
    Cypress.Commands.add("no_ckeditor2", (urlPath) => {

        cy.request(urlPath)
    
        cy.get('script').should('not.have.value','ckeditor.js')
        cy.get('script').should('not.have.value','/libs/ckeditor/adapters/jquery.js')
        cy.get('script').should('not.have.value','/tnew-content-editor')
    })

    /* -- Check to be sure ckeditor is loaded, workaround for cross origin frame error -- */
    Cypress.Commands.add("ckeditor_loaded", (urlPath,ckElementName) => {
        
        cy.visit(urlPath)
        cy.get(ckElementName).click
        cy.get('script').contains('ckeditor')
        //cy.contains('script','ckeditor')
        //cy.contains('script','/resources/js/libs/ckeditor/adapters/jquery.js')
        //cy.contains('script','/tnew-content-editor')

        // cy.get('script').contains('contain','ckeditor.js')
        // cy.get('script').contains('contain','/libs/ckeditor/adapters/jquery.js')
        // cy.get('script').contains('contain','/tnew-content-editor')
    })

 