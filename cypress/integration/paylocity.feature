Feature: Add Employee

   Add Employee no Discount

@focus
Scenario: Add Employee no Discount
   Given An Employer
   And I am on the Benefits Dashboard page
   When I select Add Employee
   Then I should be able to enter employee details
   And First Name does not begin with “A” or “a”
   And the employee should save
   And I should see the employee in the table
   And the benefit cost calculations are correct