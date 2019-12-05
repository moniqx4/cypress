describe('Adding a New Employee, and then editing changing data', ()  => {

      const LoginPath = '/login.html';
      const UserName = 'testUser';
      const Password = 'Test1234';
      const ExpectedUrl = '/home.html?username=' + UserName;

      const baseBenefit = 1000
      const dependentBenefit = 500
      const GrossPay = '2000'
      const Salary = '52000.00'
      const payPeriods = 26
      const discount = .10

      describe('Valid Login Tests', ()  => {

        beforeEach(() => {
          cy.visit(LoginPath)
        })
     
        it('Navigates to the Login Page valid login', () => {
                
         cy.login(UserName,Password)
    
         cy.url().should('include', ExpectedUrl)
             
        })
      })

      describe('Adding New Employees for Editing', ()  => { 
  
        beforeEach(() => {
        cy.visit(LoginPath)
        cy.fixture('paytestusers.json').as('newemployees')
        })
    
        it('Login Page successful login', () => {
    
        cy.login(UserName,Password)
    
        // Verifies that the user is logged in based on the path
        cy.url().should('include', ExpectedUrl)
    
        // Adds the Employees 
        cy.get('@newemployees')       
        .then((newemployees) => {        
            
            let recs = ['1', '2','3']
            let row = '2'
        
            cy.wrap(recs)
            .each(rec => {

                let newemployee = newemployees[row]
                
                let TableName = '#employee-table'            
    
                cy.clickButton('#btnAddEmployee')
                cy.addEmployee(newemployee.firstname,newemployee.lastname,newemployee.dependents)

                /* Calculates the Benefit Cost and NetPay to use for verification of record entry */
                let totalBenefitCost = baseBenefit + (parseInt(newemployee.dependents)*dependentBenefit)
                let firstNameChar = newemployee.firstname[0].toLowerCase()                
                let newBenefitCost

                /* If the first name of the employee starts with an 'a', then they are given a 10% discount on benefit cost */
                if( firstNameChar == 'a' ) {
                    let benefitDisc = totalBenefitCost * discount                  
                    newBenefitCost =  totalBenefitCost - benefitDisc
                    newBenefitCost = (newBenefitCost / payPeriods)
                    
                } else {
                    newBenefitCost = (totalBenefitCost / payPeriods)                    
                }
                            
                let netPay =  parseInt(GrossPay) - newBenefitCost.toFixed(2)
               
                /* Verify employee added correctly */
                cy.get(TableName).contains('td', newemployee.firstname)
                cy.get(TableName).contains('td', newemployee.lastname)  
                cy.get(TableName).contains('td', Salary)
                cy.get(TableName).contains('td', newemployee.dependents)
                cy.get(TableName).contains('td', GrossPay)
                cy.get(TableName).contains('td', newBenefitCost.toFixed(2))
                cy.get(TableName).contains('td', netPay)
            
                row = parseInt(row) + 1
        }) 

        /* Editing part of Testcase */
        cy.get('@newemployees')       
        .then((newemployees) => {
        
            /* Set to only grab 3 records for this test */
            recs = ['1', '2','3']
            row = '2'
        
            cy.wrap(recs)
            .each(rec => {

                let newemployee = newemployees[row]                
                const TableName = '#employee-table'
                let wrench = ':nth-child(' + row + ') > :nth-child(9) > #btnEdit'

                /* Clicks the wrench icon to edit each record */
                cy.get(wrench).click()               
                cy.editEmployee(newemployee.firstNameChanged,newemployee.lastNameChanged,newemployee.dependents)

                 /* If the first name of the employee starts with an 'a', then they are given a 10% discount on benefit cost */
                let totalBenefitCost = baseBenefit + (parseInt(newemployee.dependents)*dependentBenefit)
                
                let firstNameChar = newemployee.firstNameChanged[0].toLowerCase()               
                let newBenefitCost

                if( firstNameChar == 'a' ) {
                    let benefitDisc = totalBenefitCost * discount                    
                    newBenefitCost =  totalBenefitCost - benefitDisc
                    newBenefitCost = (newBenefitCost / payPeriods)
                    
                } else {
                    newBenefitCost = (totalBenefitCost / payPeriods)
                   
                }
            
                let netPay =  parseInt(GrossPay) - newBenefitCost.toFixed(2)
                    
                /* Verify employee edited correctly */
                cy.get(TableName).contains('td', newemployee.firstNameChanged)
                cy.get(TableName).contains('td', newemployee.lastNameChanged)  
                cy.get(TableName).contains('td', Salary)
                cy.get(TableName).contains('td', newemployee.dependents)
                cy.get(TableName).contains('td', GrossPay)
                cy.get(TableName).contains('td', newBenefitCost.toFixed(2))
                cy.get(TableName).contains('td', netPay)

            
                row = parseInt(row) + 1

          }) 
        })
      })
    })
  })
})
        