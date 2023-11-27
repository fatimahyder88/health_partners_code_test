import  { sandwichSelectors } from "./sandwich-icon-selectors";

export class SandWichIcon {
  /**
   * Returns the sandwich icon on the top left of the page
   */
  static getSandwichIcon() {
    return cy.get(sandwichSelectors.sandwichIcon);
  }

  /**
   * Returns the main menu after clicking the sandwich icon
   */
  static getSandwichMainMenu() {
    return cy.get(sandwichSelectors.sandwichMainMenu);
  }

  /**
   * Returns the sub menu
   */
  static getSandwichSubMenu() {
    return cy.get(sandwichSelectors.sandwichSubMenu);
  }

  /**
   * Clicks on the Sandwich Icon
   */
  static clickSandwichIcon() {
    return this.getSandwichIcon().click();
  }
  
  /**
   * Selects the desired Main menu option
   * @param {string} option - name of the option we want to select
   */
  static selectMainMenuOption(option) {
    return this.getSandwichMainMenu().contains(option).click();
  }

  /**
   * Selects the desired Sub menu option
   * @param {string} option - name of the option we want to select
   */
  static selectSubOption(option) {
    return this.getSandwichSubMenu().contains(option).click({ force: true });
  }
}
