describe("Homepage", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it("Brings header", () => {
        cy.getBySel("main-heading").should("contain.text", "superplate");
    });

   
});
