describe("scroll",()=>{
    it("scrolldown",()=>{
        cy.visit("http://www.countries-ofthe-world.com/flags-of-the-world.html")
        cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(86) > td:nth-child(2)").scrollIntoView()
    })
})