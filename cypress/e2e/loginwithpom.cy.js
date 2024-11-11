import Login from "../PageObject/LoginPage"
describe("template spec",()=>{
    it("pom",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const ln = new Login()
        ln.setusername("admin")
        ln.setpassword("admin123")
        ln.clicksubmit()
        ln.verifylogin()
    })
})

// describe("neg spec",()=>{
//     it("pom",()=>{
//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//         const ln = new Login()
//         ln.setusername("admig")
//         ln.setpassword("admin123")
//         ln.clicksubmit()
//         ln.verifylogin()
//     })
// })

// describe("nag spec",()=>{
//     it("pom",()=>{
//         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//         const ln = new Login()
//         ln.setusername("admig")
//         ln.setpassword("admin12")
//         ln.clicksubmit()
//         ln.verifylogin()
//     })
// })