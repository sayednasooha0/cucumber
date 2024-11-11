describe("http",()=>{
    it('get',()=>{
        cy.request("GET","https://jsonplaceholder.typicode.com/posts/1")
        .its("status")
        .should("equal",200)
    })
})