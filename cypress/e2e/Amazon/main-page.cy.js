import { Login } from "../../page-objects/login/login-page-objects";
import { MainPage } from "../../page-objects/main-page/main-page-objects";
import { BasketAndCart } from "../../page-objects/add-to-basket/add-to-basket-page-objects";

const item = "Samsung Galaxy Buds FE Wireless Earbuds, Active Noise Cancelling, Comfort Fit, 2 Year Extended Manufacturer";
/**
 * Preconditions:
 * - Requires the user to be logged into amazon with a valid user
 * - Requires the user to be on the main page
 *
 * Validations:
 * - Validates that a search can be made from the search bar
 * - Validates that an item can be be added to cart
 * - Validates that an item can be removed from the cart
 */
describe("Main page - Search for something", () => {
  before(() => {
    // Login into the website with a valid user
    cy.fixture('users').then((creds) => {
      Login.loginViaUi(creds.users.me, Cypress.env("baseUrl"));
    })
  });

  it("As a user I can search for a product, add it to a cart and remove it", () => {
    // Search for the desired item on the main amazon page and then click search
    MainPage.fillInput("samsung buds");
    MainPage.clickSearchButton();

    // Select the desired item from the results
    MainPage.selectProduct(item);

    // Add the selected item to the cart
    BasketAndCart.addItemToCart();

    // Validate that if the warrantly modal exists the user clicks on the 'No thanks' Button
    MainPage.warrantyModal();

    // Validate that the item has been added to the basket
    BasketAndCart.getAddedToBasketContainer().should(
      "contain",
      "Added to Basket",
    );
    // Navigate back to the basket
    BasketAndCart.getGoToBasket().contains("Go to basket").click();

    // Delete the Item from the cart
    BasketAndCart.clickDeleteFromCart();

    // Validate that the item has been removed from the basket
    BasketAndCart.getActiveCart().should(
      "include.text",
      "Your Amazon Cart is empty.",
    );
    BasketAndCart.getActiveCart().should(
      "include.text",
      "was removed from Shopping Basket.",
    );
  });
});
