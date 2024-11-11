require("cypress-xpath")
describe("action",()=>{
    it("hover",()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.xpath("//span[@class='context-menu-one btn btn-neutral']").rightclick()
        cy.xpath("//span[normalize-space()='Copy']").click()
    })
})
describe("action",()=>{
    it("hover",()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.xpath("//span[@class='context-menu-one btn btn-neutral']").trigger("contextmenu")
        cy.xpath("//span[normalize-space()='Copy']").should("be.visible")
    })
})