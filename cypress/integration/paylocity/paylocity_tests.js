import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
Given(/^I'm Logged In$/, () => {
   ...
});
Given(/^The following employees$/, () => {
   the_following_employees(Lastname, Firstname, NumberofDependents) {
        this.Lastname = lastname;
        this.Firstname = firstaname;
        this.dependents = NumberofDependents;
   }
});
When(/^Some other when step$/, () => {
  ...
});

Then(/^I have some results$/, () => {
  ...
});