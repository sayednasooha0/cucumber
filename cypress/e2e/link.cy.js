describe("template", () => {
 
 
    it("link to blog", () => {
        cy.visit("https://filiphric.com/testing-links-with-cypress"); 
        cy.contains("blog").click(); 
        cy.url().should('eq','https://filiphric.com/blog'); 
        cy.go("back"); 
    });

    it("link to workshop", () => {
        cy.visit("https://filiphric.com/testing-links-with-cypress"); 
        cy.contains("workshop").click(); 
        cy.url().should('eq', 'https://filiphric.com/testing-links-with-cypress'); 
        cy.go("back"); 
    });
 
    it("link to course", () => {
        cy.visit("https://filiphric.com/testing-links-with-cypress"); 
        cy.contains("course").click();
        cy.url().should('eq', 'https://filiphric.com/testing-links-with-cypress');
        cy.go("back");
    });
});
