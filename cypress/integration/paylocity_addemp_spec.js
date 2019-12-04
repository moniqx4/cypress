describe('Adding a New Employee, and then editing changing data', ()  => {

    const loginPath = '/login.html';
      const username = 'testUser';
      const password = 'Test1234';
      const expectedUrl = '/home.html?username=' + username;

      const baseBenefit = 1000
      const dependentBenefit = 500
      const baseGrossPay = '2000'
      const baseSalary = '52000.00'

      describe('Valid Login Tests', ()  => {

        beforeEach(() => {
          cy.visit(loginPath)
        })
     
        it('Navigates to the Login Page successful login', () => {
                
         cy.login(username,password)
    
         cy.url().should('include', expectedUrl)
             
        })
    
    
      })

      describe('Adding New Employees for Editing', ()  => { 
  
        beforeEach(() => {
        cy.visit(loginPath)
        cy.fixture('paytestusers.json').as('newemployees')
        })
    
        it('Login Page successful login', () => {
    
        cy.login(username,password)
    
        // Verifies that the user is logged in based on the path
        cy.url().should('include', expectedUrl)
    
        // Adds the Employees 
        cy.get('@newemployees')       
        .then((newemployees) => {
        
            
            const recs = ['1', '2','3']
            let row = '2'
        
            cy.wrap(recs)
            .each(rec => {

                let newemployee = newemployees[row]
                
                const tableName = '#employee-table'
            
    
                cy.clickButton('#btnAddEmployee')
                cy.addEmployee(newemployee.firstname,newemployee.lastname,newemployee.dependents)

                let totalbenefitCost = baseBenefit + (parseInt(newemployee.dependents)*dependentBenefit)
               
                let firstNameChar = newemployee.firstname[0].toLowerCase()
                
                let newBenefitCost

                if(firstNameChar == 'a'){
                    let benefitDisc = totalbenefitCost * .10                   
                    newBenefitCost =  totalbenefitCost - benefitDisc
                    newBenefitCost = (newBenefitCost / 26)
                    
                } else {
                    newBenefitCost = (totalbenefitCost / 26)                    
                }
            
                let netpay =  parseInt(baseGrossPay) - newBenefitCost.toFixed(2)
               
                /* Verify employee added correctly */
                cy.get(tableName).contains('td', newemployee.firstname)
                cy.get(tableName).contains('td', newemployee.lastname)  
                cy.get(tableName).contains('td', baseSalary)
                cy.get(tableName).contains('td', newemployee.dependents)
                cy.get(tableName).contains('td', baseGrossPay)
                cy.get(tableName).contains('td', newBenefitCost.toFixed(2))
                cy.get(tableName).contains('td', netpay)

            
                row = parseInt(row) + 1
        }) 


        cy.get('@newemployees')       
        .then((newemployees) => {
        
            
            const recs = ['1', '2','3']
            let row = '2'
        
            cy.wrap(recs)
            .each(rec => {

                let newemployee = newemployees[row]
                
                const tableName = '#employee-table'
                let wrench = ':nth-child(' + row + ') > :nth-child(9) > #btnEdit'

                cy.get(wrench).click()
               
                cy.editEmployee(newemployee.firstNameChanged,newemployee.lastNameChanged,newemployee.dependents)

                let totalbenefitCost = baseBenefit + (parseInt(newemployee.dependents)*dependentBenefit)
                
                let firstNameChar = newemployee.firstNameChanged[0].toLowerCase()
               
                let newBenefitCost

                if(firstNameChar == 'a'){
                    let benefitDisc = totalbenefitCost * .10                    
                    newBenefitCost =  totalbenefitCost - benefitDisc
                    newBenefitCost = (newBenefitCost / 26)
                    
                } else {
                    newBenefitCost = (totalbenefitCost / 26)
                   
                }
            
                let netpay =  parseInt(baseGrossPay) - newBenefitCost.toFixed(2)
                
    
                /* Verify employee edited correctly */
                cy.get(tableName).contains('td', newemployee.firstNameChanged)
                cy.get(tableName).contains('td', newemployee.lastNameChanged)  
                cy.get(tableName).contains('td', baseSalary)
                cy.get(tableName).contains('td', newemployee.dependents)
                cy.get(tableName).contains('td', baseGrossPay)
                cy.get(tableName).contains('td', newBenefitCost.toFixed(2))
                cy.get(tableName).contains('td', netpay)

            
                row = parseInt(row) + 1
        }) 
        })
    })

  })
})

}) 
        