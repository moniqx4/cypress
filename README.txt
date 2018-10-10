Why use Cypress.io?

       So far I have found Cypress.io to be a great aid with manual testing. 
          - The tests are easy to write and run quite fast (must faster then me doing it) and work the first time.
          - Saves me from running a bunch of repetive actions with low overhead. I've been able to create these tests that run a set of steps or complete test on the fly for a manual testing sesssion. For example, may take 15 minutes to create the test(s), or group of steps, which is the time it take to step through it once and get the elements. Then after that, I focus more on the results of each test then the testing now. Click, run test, review outcome, make any changes to setup ( like enable or disabling something to see how thing behave) and repeat. 

         - It supports reusablity of these steps, making it even faster to throw together a set of tests.

         - The way it allows you to work with the tests and review steps as needed, work perfectly for this usage.

Would you use as a fully automated testing tool?

            Probably not now. Without understanding the advanced features of the tool better, I can't really say how well it would function in that capacity.

Cons: 
 - Chrome, as far as I can tell limited to Chrome.

 Pros: 
 - 1 package to install, has everything you need. No need to go and grab or update various pieces seperately
 - Javascript, familar with that, well this is easier than that even. Because its javascript based, if you do want to use any outside libraries with it, like for example Chance you can, install and import into project like you would in javascript.
 - Fast, the slowest thing about it, is the initial opening of the tool, but once your in it runs really fast.
 - If you run a test and something is wrong you can update it, and it automatically does re-runs. Great for when creating new test or updating an old one. You'll know immediately when test is working. No re-compiling and building each time.
 

---------------------------------------------------------------

To run Cypress: 

npx cypress open

or

node_modules\.bin\cypress open

Identifying page elements: 
# for Id 
. for classes

Reusable modules: 
 - cy.add_fixedpackage(pricetype_selector,num_pkgs)
 - cy.login(email, password)
 - cy.logout()
 - cy.adminlogin(email, password)