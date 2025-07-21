// cypress/support/step_definitions/logoutSteps.js
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const LoginPage = require('../../pages/LoginPage')
const DashboardPage = require('../../pages/DashboardPage');

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

Given('I login into the account for view info', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Admin')
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('admin123')
  cy.get('.oxd-button').click()
})

Given('I on the dashboard to see the main menu', () => {
  cy.url().should('include', 'dashboard/index')
  cy.wait(2000)
})

When('I click the MyInfo menu', () => {
  dashboardPage.clickMyInfo()
  cy.wait(3000)
})

Then('I should see the MyInfo page', () => {
  cy.get('.employee-image').should('be.visible')
  cy.get('.orangehrm-edit-employee-name > .oxd-text').should('be.visible')
})
