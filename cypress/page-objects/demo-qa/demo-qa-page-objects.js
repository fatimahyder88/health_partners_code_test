import  { demoQaSelectors } from "./demo-qa-selectors";

export class DemoQaProjectObject {
  /**
   * Returns the Categories
   */
  static getCategories() {
    return cy.get(demoQaSelectors.allCategories);
  }

  /**
   * Returns the Element List
   */
  static getElementList() {
    return cy.get(demoQaSelectors.elementList);
  }

  /**
   * Returns the Double Click Button
   */
  static getDoubleClickButton() {
    return cy.get(demoQaSelectors.doubleClickButton);
  }

  /**
   * Clicks on the Element list
   * @param {string} element - the name of the element we want to click
   */
  static clickElementList(element) {
    return this.getElementList().contains(element).click();
  }

  /**
   * Double clicks on the Double Click Button
   */
  static clickDoubleClickButton() {
    return this.getDoubleClickButton().dblclick();
  }

  /**
   * Clicks on the Category
   * @param {string} category- the name of the category we want to select
   */
  static clickCategory(category) {
    return this.getCategories().contains(category).click();
  }
}
