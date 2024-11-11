import Login from "../PageObject/sauce"
require("cypress-xpath")
describe("template spec",()=>{
    it("pom",()=>{
        cy.visit("https://www.saucedemo.com/")
        const ln = new Login()
        ln.setusername("standard_user")
        ln.setpassword("secret_sauce")
        ln.clicksubmit()
        ln.verifylogin()
    })
})