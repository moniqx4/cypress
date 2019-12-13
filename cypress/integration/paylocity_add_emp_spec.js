describe('Paylocity Test Exercise', () => {

    const LoginPath = '/login.html';
    const UserName = 'testUser';
    const Password = 'Test1234';
    const ExpectedUrl = '/home.html?username=' + UserName;

    const baseBenefit = 1000
    const dependentBenefit = 500
    const GrossPay = '2000'
    const Salary = '52000.00'
    const discount = .10
    const payPeriods = 26
    
    describe('Valid Login Tests', ()  => {

        beforeEach(() => {
          cy.visit(LoginPath)
        })
     
        it('Navigates to the Login Page successful login', () => {
                
          cy.login(UserName,Password)
          cy.url().should('include', ExpectedUrl)
             
        })
      })

      describe('Adding New Employees', ()  => {

        beforeEach(() => {
          cy.visit(LoginPath)
          cy.fixture('paytestusers.json').as('employees')
        })
     
        it('Logs in, and adds employee, checks for valid employee record.', () => {

         cy.login(UserName,Password)
    
         // Verifies that the user is logged in based on the path
         cy.url().should('include', ExpectedUrl)

         // Adds the Employees 
          cy.get('@employees')       
         .then((employees) => { 
          
          /* this is just a list of the ids for each testcase, all are listed, but could run specific ones based on the id */
          const recs = ['1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15','16','17']
          let row = '2'

          cy.wrap(recs)
          .each(rec => {
                    
            let employee = employees[row]
            const TableName = '#employee-table'            

              cy.clickButton('#btnAddEmployee')
              cy.addEmployee(employee.firstname,employee.lastname,employee.dependents)

              /* Calculates the Benefits and Net Pay amounts */
              let totalBenefitCost = baseBenefit + (parseInt(employee.dependents)*dependentBenefit)                              
              let firstNameChar = employee.firstname[0].toLowerCase()              
              let newBenefitCost

              if( firstNameChar == 'a') {              
                
                  let benefitDisc = totalBenefitCost * discount               
                  newBenefitCost =  totalBenefitCost - benefitDisc
                  newBenefitCost = (newBenefitCost / payPeriods)
                 
              } else {
                  newBenefitCost = (totalBenefitCost / payPeriods)                 
              }
          
              let netPay =  parseInt(GrossPay) - newBenefitCost.toFixed(2)             
              
              cy.get(TableName).contains('td', employee.firstname)
              cy.get(TableName).contains('td', employee.lastname)  
              cy.get(TableName).contains('td', Salary)
              cy.get(TableName).contains('td', employee.dependents)
              cy.get(TableName).contains('td', GrossPay)
              cy.get(TableName).contains('td', newBenefitCost.toFixed(2))
              cy.get(TableName).contains('td', netPay)

              row = parseInt(row) + 1

        })
      })
    })
  })
})

