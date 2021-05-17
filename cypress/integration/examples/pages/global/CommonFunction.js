///  <reference types="Cypress"/>
class GlobalFunction{

    fillTextArea(value){
    const number= cy.get('input') 
    number.clear();
    number.value(value)
  }
  clickSubmit(){
     const submit= cy.get('button[type="submit"]') 
     submit.click();                    
  }
}
  export default GlobalFunction

