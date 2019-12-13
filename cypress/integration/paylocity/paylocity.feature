Feature: Add new Employee record without a discount

   Background: I have logged into the Dashboard successfully

   @focus
   Scenario: Add Employee no Discount
      Given An Employer      
      When I click Add Employee button
      Then I should be able to enter employee firstname, lastname and number of dependents
      And First Name does not begin with “A” or “a”
      And the employee record should save when Submit button is clicked
      And I should see the employee in the table
      And the benefit cost calculations are correct

      |Firstname |Lastname |NumberofDependents|
      |Tom|Onetester|0|
      |Paul|Twotester|1|
      |Sally|ThreeTester|2|
      |Sally|Autry|2|

   @focus
   Scenario: Add Employee with Discount
      Given An Employer
      When I click Add Employee button
      Then I should be able to enter employee firstname, lastname and number of dependents
      And First Name does begins with “A” or “a”
      And the employee record should save when Submit button is clicked
      And I should see the employee in the table
      And a 20% discount should be applied to BenefitCost
      And the benefit cost calculations are correct for Benefit Cost
      And the benefit cost calculations are correct for NetPay


      |Firstname |Lastname |NumberofDependents|
      |Alice|Onetester|0|
      |allen|Twotester|1|
      