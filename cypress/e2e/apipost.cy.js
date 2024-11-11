describe("http",()=>{
    it("post",()=>{
        cy.request({
            method:"POST",
            url :"https://jsonplaceholder.typicode.com/posts",
            body : {
                title : "post call",
                body : "call",
                userID : 1
            }
        })
        .its("status")
        .should("equal",201)
    })
})