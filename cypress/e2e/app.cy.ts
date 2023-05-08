describe("Navigation", () => {
  it("should make fetch call", () => {
    cy.intercept(
      {
        method: "GET",
        url: "**/test.json",
      },
      { fixture: "data.json" }
    ).as("getData");

    cy.visit("/");

    cy.get("h1").contains("Test");

    cy.wait(["@getData"]);

    cy.contains(".item", "Jennifer Connelly").should(
      "have.class",
      "no-children"
    );

    cy.contains(".item", "Ace Ventura: When Nature Calls").should(
      "not.be.visible"
    );

    cy.contains(".item", "Jim Carrey")
      .should("have.class", "collapsed")
      .children(".title")
      .click();

    cy.contains(".item", "1995")
      .should("have.class", "collapsed")
      .children(".title")
      .click();

    cy.contains(".item", "Ace Ventura: When Nature Calls").should(
      "have.class",
      "no-children"
    );
  });
});
