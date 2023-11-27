import  { commitQualitySelectors } from "./commit-quality-selectors";

export class CommitQuality {
  /**
   * Returns the Filter Input
   */
  static getFilterInput() {
    return cy.get(commitQualitySelectors.filterInput);
  }

  /**
   * Returns the Filter Button
   */
  static getFilterButton() {
    return cy.get(commitQualitySelectors.filterButton);
  }

  /**
   * Returns the Table
   */
  static getTable() {
    return cy.get(commitQualitySelectors.table);
  }

  /**
   * Returns the Reset Button
   */
  static getResetButton() {
    return cy.get(commitQualitySelectors.resetButton);
  }

  /**
   * Returns No Product found class
   */
  static getNoProductFound() {
    return cy.get(commitQualitySelectors.noProductFound);
  }

  /**
   * Clicks on the Filter Button
   */
  static clickFilterButton() {
    return this.getFilterButton().click();
  }

  /**
   * Clicks on the Reset Button
   */
  static clickResetButton() {
    return this.getResetButton().click();
  }

  /**
   * Types in the search field
   * @param {string} text - the name of the product we want to type
   */
  static fillFilterInput(text) {
    return this.getFilterInput().type(text);
  }
}
