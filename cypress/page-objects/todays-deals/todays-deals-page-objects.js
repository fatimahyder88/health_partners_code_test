import { todaysDealsSelectors } from "./todays-deals-selectors";

export class TodaysDeals {
  /**
   * Returns the SubMenu
   */
  static getSubMenu() {
    return cy.get(todaysDealsSelectors.subMenu);
  }
  /**
   * Returns All the Categories
   */
  static getAllDealCategories() {
    return cy.get(todaysDealsSelectors.allDealCategories);
  }

  /**
   * Returns the results of one category
   */
  static getCategoryResults() {
    return cy.get(todaysDealsSelectors.categoryResults);
  }

  /**
   * Clicks on the Desired Sub Menu heading
   * @param {string} heading - the name of the heading
   */
  static clickSubMenuHeading(heading) {
    return this.getSubMenu().contains(heading).click();
  }

  /**
   * Clicks the First Category on the page
   */
  static clickFirstCategory() {
    return this.getAllDealCategories().eq(0).click();
  }

  /**
   * Clicks the First result card of the selected Category
   */
  static clickFirstResultCard() {
    return this.getCategoryResults().eq(0).click({ multiple: true });
  }
}
