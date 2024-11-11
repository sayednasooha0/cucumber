describe("assertion", () => {
    it("tests", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.url().should("include","orangehrmlive.com")
      cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      
      cy.url().should("contain","orangehrm")
      })
    })

describe("assertion", () => {
        it("tests", () => {
          cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
          cy.url().should("include","orangehrmlive.com")
          
          .should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
          
          .should("contain","orangehrm")})
        })

describe("assertion", () => {
    it("tests", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.url().should("include","orangehrmlive.com")
              
            .and("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
              
            .and("contain","orangehrm")
            .and("not.contain","orangehrm1")
            .and("not.include","orangehrmlive1.com")
            .and("not.eq","https://opensource-demo1.orangehrmlive.com/web/index.php/auth/login")})
            })
describe("assertion", () => {
    it("tests", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should("include","Orange")
              .and("eq","OrangeHRM")
              .and("contain","HRM")})
    })
describe("assertion", () => {
    it("tests", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should("include","Orange")
                .and("eq","OrangeHRM")
                .and("contain","HRM")})

describe("assertion", () => {
    it("tests", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    })
})
describe("Assertions", () => {
    it('Checking Assertions', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
        let expName="xyz"
        cy.get(".oxd-userdropdown-name").then(   (x) => {
            let actName=x.text()
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)
            assert.equal(actName,expName)
        }  
        )
    })
})
})