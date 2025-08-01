// cypress/pages/LoginPage.js
class LoginPage {
  enterUsername(username) {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(username)
  }

  enterPassword(password) {
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(password)
    
  }

  clickLogin() {
    cy.get('.oxd-button').click()
  }
}

module.exports = LoginPage
