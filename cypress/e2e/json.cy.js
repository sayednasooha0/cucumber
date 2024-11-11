describe("json",()=>{
    it('testing',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture('orangehrm').then((data)=>{
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()
            cy.get('a[class="oxd-main-menu-item active"] span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').should("have.text",data.Expected)
        })
    })
})