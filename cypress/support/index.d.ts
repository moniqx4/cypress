declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM elements for login page.
       * @example cy.login('email', 'password')
      */
      login(email: string, password: string): Chainable<Element>
    }

    interface Chainable {
      /**
       * Custom command to add an employee.
       * @example cy.addEmployee('firstname', 'lastname', 'dependents')
      */
     addEmployee(firstname: string, lastname: string,dependents:string ): Chainable<Element>
    }

    interface Chainable {
      /**
       * Custom command to edit an employee.
       * @example cy.editEmployee('firstname', 'lastname', 'dependents')
      */
     editEmployee(firstname: string, lastname: string,dependents:string ): Chainable<Element>
    }


    interface Chainable {
        /**
         * Custom command to click a button on a page.
         * @example cy.clickButton('btnElementName')
        */
       clickButton(btnElementName: string): Chainable<Element>
      }

      interface Chainable {
        /**
         * Custom command to fill out a text box on form
         * @example cy.FillTextBox('elementName','value')
        */
       FillTextBox(elementName: string,value:string): Chainable<Element>
      }

      interface Chainable {
        /**
         * Custom command to clear field then fill out a text box on form
         * @example cy.ClearFillTextBox('elementName','value')
        */
       ClearFillTextBox(elementName: string,value:string): Chainable<Element>
      }

  }