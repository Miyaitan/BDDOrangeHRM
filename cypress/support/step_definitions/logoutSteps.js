// cypress/support/step_definitions/logoutSteps.js
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const LoginPage = require('../../pages/LoginPage')
const DashboardPage = require('../../pages/DashboardPage');

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

Given('I login into the account', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Admin')
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('admin123')
  cy.get('.oxd-button').click()
})

Given('I on the dashboard', () => {
  cy.url().should('include', 'dashboard/index')
  cy.wait(1000)
})

When('I click the profile menu', () => {
  dashboardPage.clickProfile()
  cy.wait(1000)
})

When('I click the logout button', () => {
  dashboardPage.clickLogout()
})

Then('I should see the login page', () => {
  cy.url().should('include', 'login')
})
