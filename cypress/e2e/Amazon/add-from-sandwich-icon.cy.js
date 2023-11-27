import { Login } from "../../page-objects/login/login-page-objects";
import { SandWichIcon } from "../../page-objects/sandwich-icon/sandwich-icon-page-objects";
/**
 * Preconditions:
 * - Requires the user to be logged into amazon with a valid user
 * - Requires the user to be on the main page
 *
 * Validations:
 * - Validates that a user can can click on the sandwich icon
 * - Validates that a user can search from the different options
 */
describe("Sandwich Icon - Search", () => {
  before(() => {
    // Login into the website with a valid user
    cy.fixture('users').then((creds) => {
      Login.loginViaUi(creds.users.me, Cypress.env("baseUrl"));
    })
  });

  it("As a user I can click on any option from the Sandwich menu  ", () => {
    // Click on the Sandwich icon
    SandWichIcon.clickSandwichIcon();

    // Selct option from the main menu options
    SandWichIcon.selectMainMenuOption("Fire Tablets");

    // Select option from the sub menu options
    SandWichIcon.selectSubOption("All Fire Tablets");
  
    // Validate that the page exists
    cy.get('h2').should("include.text" , "Fire tablet family")
  });
});
