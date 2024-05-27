describe("Test Suite 1", () => {
  it("My First Test 1", () => {
    cy.log("Test1 is started");
    cy.visit("https://www.aol.com");
    cy.log("Test1 is completed");
  });
});
