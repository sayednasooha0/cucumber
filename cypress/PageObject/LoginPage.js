class Login{
    setusername(username)
    {
        cy.get("input[placeHolder='Username']").type(username)
    }
    setpassword(password)
    {
        cy.get("input[placeholder='Password']").type(password)
    }
    clicksubmit()
    {
        cy.get("button[type='submit']").click()
    }
    verifylogin()
    {
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text","Dashboard")
    }
}

export default Login