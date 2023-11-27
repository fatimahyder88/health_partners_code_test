import { Login } from "../../page-objects/login/login-page-objects";
import { MainPage } from "../../page-objects/main-page/main-page-objects";
import { BasketAndCart } from "../../page-objects/add-to-basket/add-to-basket-page-objects";
import { TodaysDeals } from "../../page-objects/todays-deals/todays-deals-page-objects";
import  { Checkout } from "../../page-objects/checkout/checkout-page-objects";

/**
 * Preconditions:
 * - Requires the user to be logged into amazon with a valid user
 *
 * Validations:
 * - Validates that a user can click on the Todays Deals page
 * - Validates that a category can be selected from that page
 * - Validates that an item can be selected from the categegory result pa
 * - Validates that an item can be added to the cart
 * - Validates that a user can proceed to checkout
 * - Validates the address page
 * - Validates the Payment options page
 * - Validates that the item has been deleted from the cart
 */
describe("Main page - Search for something", () => {
  before(() => {
    // Login into the website with a valid user
    cy.fixture('users').then((creds) => {
      Login.loginViaUi(creds.users.me, Cypress.env("baseUrl"));
    })

    // Search for the desired item on the main amazon page
    MainPage.fillInput("samsung buds");
    MainPage.clickSearchButton();
  });

  after(() => {
    // Click on the items link on the top of the page
    Checkout.getItemCount().contains("item").click();

    // Click on the Return to Basket Button
    Checkout.clickRetentionPopUp("Return to Basket");

    // Delete the item from the Cart
    BasketAndCart.clickDeleteFromCart();
  });

  it("As a user I can add an item to the cart and proceed to checkout from the Today's deal page", () => {
    // Click on the Todays Deals option from the sub headings
    TodaysDeals.clickSubMenuHeading("Today's Deals");

    // Click on the first category
    TodaysDeals.clickFirstCategory();

    // Click on the first result card
    TodaysDeals.clickFirstResultCard();

    // Add the item to the cart
    BasketAndCart.addItemToCart();

    // Clicks on 'No thanks' if the Recomment item modal shows up
    BasketAndCart.recommendedItems();

    // Clicks on the Proceed to Checkout Button
    BasketAndCart.clickProceedToCheckout();

    // Validates the Checkout page
    Checkout.getHeader().should("include.text", "Checkout");

    // Clicks on the Address Button
    Checkout.clickAddressButton();

    // Validates that the address button does not exist
    Checkout.getAddressButton().should("not.exist");

    // Validates the payment form
    Checkout.getPaymentForm().should("be.visible");
    Checkout.getPaymentForm().should(
      "include.text",
      "Add a credit or debit card",
    );
  });
});
