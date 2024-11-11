describe('dropdown',()=>{
    it('select monaco',function(){
        cy.visit("https://register.rediff.com/register/register.php")
        cy.get('select[id="country"]').select('140').should('have.value','140')
    })
})