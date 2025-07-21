// cypress/pages/Dashboard.js
class DashboardPage {
  clickProfile() {
    cy.get('.oxd-userdropdown-tab').click()
  }

  clickLogout() {
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
  }

  clickMyInfo(){
    cy.get(':nth-child(6) > .oxd-main-menu-item').click()
  }
}

module.exports = DashboardPage