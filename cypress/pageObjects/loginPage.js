class loginPage {
  
  visit(){
    return cy.visit('/')
  }
  
    usernameInp(){
       return cy.get('#usernameOrEmail')
    }
   
    passwordInp(){
        return cy.get('#password')
    }

    loginBtn(){

        return cy.get(':nth-child(3) > .MuiButtonBase-root')
    }

       
       typeInUserCredentials(){
        return cy.fixture("user").then((data) => {
            this.usernameInp().type(data.username)
            this.passwordInp().type(data.password)
       })
}

}
module.exports = new loginPage();