describe('Eye Check on Login Page', () => {
    it('works', () => {
      cy.visit('/account/login');
  
      //Start the test
      cy.eyesOpen({
        appName: 'TNEW V7',
        testName: 'Login Page Test',
        browser: { width: 800, height: 600 },
      });
  
      // Add checkpoint #1 (This is test step #1)
      cy.eyesCheckWindow('Log In | TNEW Demo');
  
      cy.login('autotester@mailinator.com','Cl0udN1n3!')
      //cy.get('button').click();
  
      // Add checkpoint #2 (This is test step #2)
      cy.eyesCheckWindow('Events | TNEW Demo');
  
      //End Test
      cy.eyesClose();
    });
  });