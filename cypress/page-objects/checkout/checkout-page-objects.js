import { checkoutSelectors } from "./checkout-selectors";

export class Checkout {
  /**
   * Returns the Header of the Checkout page
   */
  static getHeader() {
    return cy.get(checkoutSelectors.headerPage);
  }
  /**
   * Returns the item count
   */
  static getItemCount() {
    return cy.get(checkoutSelectors.itemCount);
  }
  /**
   * Returns the retention pop-up
   */
  static getRetentionPopUp() {
    return cy.get(checkoutSelectors.retensionPopUp);
  }

  /**
   * Returns the Address Button
   */
  static getAddressButton() {
    return cy.get(checkoutSelectors.shippingAddress);
  }

  /**
   * Returns the Payment Form
   */
  static getPaymentForm() {
    return cy.get(checkoutSelectors.paymentForm);
  }

  /**
   * Clicks on the Address Button
   */
  static clickAddressButton() {
    return this.getAddressButton().click();
  }

  /**
   * Clicks on the retention pop-up
   * @param {string} button - the name of the button we want to select
   */
  static clickRetentionPopUp(button) {
    return this.getRetentionPopUp().contains(button).click({ force: true });
  }
}
