import { CommitQuality } from "../../page-objects/commit-quality/commit-quality-page-objects";

describe("Cross Domain Testing", () => {
  it("As a user I can navigate and perform actions on two websites that have different domains ", () => {
    // Naviagte to the commit quality website
    cy.visit("https://commitquality.com/");
    
    // Validate that the table is visible
    CommitQuality.getTable().should("be.visible");

    // Type in the search field and click filter
    CommitQuality.fillFilterInput("Product 1");
    CommitQuality.clickFilterButton();

    // Validate that the table shows the searched product
    CommitQuality.getTable().should("contain", "Product 1");

    // Click the Reset Button
    CommitQuality.clickResetButton();

    // Vist the second domain
    cy.visit("https://demoqa.com/");

    cy.origin("https://demoqa.com/", () => {
      cy.url().should("equal", "https://demoqa.com/");

      // Get the necessary imports
      const { DemoQaProjectObject } = require("../../page-objects/demo-qa/demo-qa-page-objects");
      
      // Perform actions on the website
      DemoQaProjectObject.clickCategory("Elements");
      DemoQaProjectObject.clickElementList("Buttons");
      DemoQaProjectObject.clickDoubleClickButton() 
    });

    // Navigate back to the first domain 
    cy.visit("https://commitquality.com/");

    // Perform some more actions on the first domain
    CommitQuality.fillFilterInput("QA test");
    CommitQuality.clickFilterButton();
    CommitQuality.getNoProductFound().should("include.text", "No products found");
  });
});
