class Login{
    setusername(username)
    {
        cy.xpath("//input[@id='user-name']").type(username)
    }
    setpassword(password)
    {
        cy.xpath("//input[@id='password']").type(password)
    }
    clicksubmit()
    {
        cy.xpath("//input[@id='login-button']").click()
    }
    verifylogin()
    {
        cy.xpath("//div[@class='app_logo']").should("have.text","Swag Labs")
    }
}

export default Login