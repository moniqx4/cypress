describe('/login', () => {

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

      describe('Adding New Employees', ()  => {

        beforeEach(() => {
          cy.visit(loginPath)
          cy.fixture('paytestusers.json').as('employees')
        })
     
        it('Logs in, and adds employee, checks for valid employee record', () => {

         cy.login(username,password)
    
         // Verifies that the user is logged in based on the path
         cy.url().should('include', expectedUrl)

         // Adds the Employees 
          cy.get('@employees')       
         .then((employees) => {
          

          const recs = ['1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15','16','17']

          let row = '2' 
      

          cy.wrap(recs)
          .each(rec => {

                    
          let employee = employees[row]

          const tableName = '#employee-table'
          

            cy.clickButton('#btnAddEmployee')
            cy.addEmployee(employee.firstname,employee.lastname,employee.dependents)

            let totalBenefitCost = baseBenefit + (parseInt(employee.dependents)*dependentBenefit)
            //console.log("Total Benefit Cost: " + totalbenefitCost)
            let firstNameChar = employee.firstname[0].toLowerCase()
            //console.log(firstNameChar)
            let newBenefitCost

            if(firstNameChar == 'a'){
             
                let benefitDisc = totalBenefitCost * .10
                //console.log("Discount: " + benefitDisc)
                //console.log("Total Benefit Cost: " + totalBenefitCost)
                newBenefitCost =  totalBenefitCost - benefitDisc
                newBenefitCost = (newBenefitCost / 26)
                //console.log("New Benefit Cost: " + newBenefitCost.toFixed(2))
            } else {
                newBenefitCost = (totalBenefitCost / 26)
                //console.log("Discounted Benefit Cost: " + newBenefitCost.toFixed(2))
            }
        
            let netpay =  parseInt(baseGrossPay) - newBenefitCost.toFixed(2)
            //console.log("NetPay: " + netpay)
            
            cy.get(tableName).contains('td', employee.firstname)
            cy.get(tableName).contains('td', employee.lastname)  
            cy.get(tableName).contains('td', baseSalary)
            cy.get(tableName).contains('td', employee.dependents)
            cy.get(tableName).contains('td', baseGrossPay)
            cy.get(tableName).contains('td', newBenefitCost.toFixed(2))
            cy.get(tableName).contains('td', netpay)


            row = parseInt(row) + 1          
        

          }) 
         
          })
      
        })
      })
   
}) 

