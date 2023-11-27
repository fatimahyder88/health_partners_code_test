import { loginSelectors } from "./login-selectors";

export class Login {
  /**
   * Returns  Sign In button
   */
  static getSignIn() {
    return cy.get(loginSelectors.signIn);
  }

  /**
   * Returns the email input field
   */
  static getEmail() {
    return cy.get(loginSelectors.userEmail);
  }

  /**
   * Returns password input field
   */
  static getPassword() {
    return cy.get(loginSelectors.userPassword);
  }

  /**
   * Returns the Continue button
   */
  static getContinueButton() {
    return cy.get(loginSelectors.continueButton);
  }

  /**
   * Returns Submit button
   */
  static getSubmitButton() {
    return cy.get(loginSelectors.submitDetails);
  }

  /**
   * Clicks on the sign in button
   */
  static clickSignIn() {
    return this.getSignIn().click();
  }

  /**
   * Clicks on the Continue button
   */
  static clickContinueButton() {
    return this.getContinueButton().click();
  }

  /**
   * Clicks on the Submit Button
   */
  static clickSubmitButton() {
    return this.getSubmitButton().click();
  }

  /**
   * Logs the user into the Amazon website
   * @param {string} user - The email and password of the user we want to sign in with
   * @param {string} baseUrl - The url we want to visit
   */
  static loginViaUi(user, baseUrl) {
    cy.visit(baseUrl);
    cy.contains("Continue without accepting").click();
    this.clickSignIn();
    this.getEmail().type(user.email);
    this.getContinueButton().click();
    this.getPassword().type(user.password);
    this.clickSubmitButton();
  }
}
