// cypress/support/step_definitions/loginSteps.js
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const LoginPage = require('../../pages/LoginPage')

const loginPage = new LoginPage()

Given('I open the OrangeHRM login page', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

When('I fill in username {string} and password {string}', (username, password) => {
  loginPage.enterUsername(username)
  loginPage.enterPassword(password)
})

When('I click the login button', () => {
  loginPage.clickLogin()
})

Then('I should see the login success', () => {
  cy.url().should('include', 'dashboard/index')
})
Then('I should see the login failure', () => {
  cy.url().should('include', '');
  cy.get('.oxd-alert-content > .oxd-text').should('be.visible')
})
