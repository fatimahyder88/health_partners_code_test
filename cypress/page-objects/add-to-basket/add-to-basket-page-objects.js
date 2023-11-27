import { addToBasketSelectors } from "./add-to-basket-selectors";
import { mainPageSelectors } from "../../page-objects/main-page/main-page-selectors";

export class BasketAndCart {
  /**
   * Returns the Cart item details contains
   */
  static getItemDetailsContainer() {
    return cy.get(addToBasketSelectors.itemDetailsContainer);
  }

  /**
   * Returns the Add to Cart Button
   */
  static getAddToCartButton() {
    return cy.get(addToBasketSelectors.addToCartButton);
  }

  /**
   * Returns the container after the item has been added to the Basket
   */
  static getAddedToBasketContainer() {
    return cy.get(addToBasketSelectors.addedToBasketContainer);
  }

  /**
   * Returns Go to Basket button
   */
  static getGoToBasket() {
    return cy.get(addToBasketSelectors.goToBasket);
  }

  /**
   * Returns the Proceed to Checkout Container
   */
  static getProceedToCheckoutContainer() {
    return cy.get(addToBasketSelectors.proceedToCheckoutContainer);
  }

  /**
   * Returns the Proceed to Checkout Button
   */
  static getProceedToCheckout() {
    return cy.get(addToBasketSelectors.proceedToCheckout);
  }

  /**
   * Returns the Delete from Cart Button
   */
  static getDeletefromCart() {
    return cy.get(addToBasketSelectors.deleteFromCart);
  }
  /**
   * Returns the Active Cart Button
   */
  static getActiveCart() {
    return cy.get(addToBasketSelectors.activeCart);
  }

  /**
   * Clicks on the Add to Cart Button
   */
  static clickAddToCartButton() {
    return this.getAddToCartButton().click();
  }

  /**
   * Clicks on the Proceed to Checkout Button
   */
  static clickProceedToCheckout() {
    return this.getProceedToCheckout().click({ multiple: true });
  }

  /**
   * Adds item to the Cart
   */
  static addItemToCart() {
    return this.getItemDetailsContainer().within(() => {
      this.clickAddToCartButton();
    });
  }

  /**
   * Clicks on the Delete from cart button
   */
  static clickDeleteFromCart() {
    return this.getDeletefromCart().contains("Delete").click();
  }
  /**
   * This function uses if/else block to verify these scenarios
   * If the Recommend More items modal shows up click on the 'No Thanks' button
   * Else validate that the item has been added to basket
   */
  static recommendedItems() {
    // Get the whole page
    cy.get(mainPageSelectors.body).then((bodyElement) => {
      if (bodyElement.find(addToBasketSelectors.recommendModal).length > 0) {
        // Click on the 'No thanks' button if the recommend items modal is visible
        return cy.contains("No thanks").click();
      }
      else {
        // If recommend item page is not found, validate that item has been added
        return this.getAddedToBasketContainer().should("be.visible");
      }
    });
  }
}
