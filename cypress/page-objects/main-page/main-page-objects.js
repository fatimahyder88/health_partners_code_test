import  { mainPageSelectors } from "./main-page-selectors";

export class MainPage {
  /**
   * Returns search input on the main page
   */
  static getSearchInput() {
    return cy.get(mainPageSelectors.mainTextBoxSearch);
  }

  /**
   * Returns the search button on the input field
   */
  static getSearchButton() {
    return cy.get(mainPageSelectors.searchButton);
  }

  /**
   * Returns All the Search Results
   */
  static getAllSearchResults() {
    return cy.get(mainPageSelectors.allSearchResults);
  }

  /**
   * Clicks on the magnifying search button
   */
  static clickSearchButton() {
    return this.getSearchButton().click();
  }

  /**
   * Fills the input field
   * @param {string} input - the input we add to the search field
   */
  static fillInput(input) {
    return this.getSearchInput().type(input);
  }

  /**
   * Selects the desired Product
   * @param {string} item - the name of the item we want to select
   */
  static selectProduct(item) {
    return this.getAllSearchResults().within(() => {
      cy.contains(item).click();
    });
  }

  /**
   * Validates if the warrantly modal shows up the user clicks on 'No thanks' button
   * Validates the Add to Basket container if the warranty modal does not pop up v
   */
  static warrantyModal() {
    // Get the whole page
    cy.get(mainPageSelectors.body).then((bodyElement) => {
      if (bodyElement.find(mainPageSelectors.attachWarrentyPanel)) {
        // Click on the 'No thanks' button if the items modal is visible, apply force to ignore the animation of the model.
        return cy.contains(" No thanks ").click({ force: true })
      }
      else {
        // If warranty modal page is not found, validate that the Added to Basket page exists
        return this.getAddedToBasketContainer().should("be.visible");
      }
    });
  }
}
