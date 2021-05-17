import PrimeNumberCheck from '../pages/components/PrimeNumberCheck';
import primeNumberData from '../fixtures/primeNumberCheck.json'
import CommonFunction from '../pages/global/CommonFunction'

const primeNumberCheck=new PrimeNumberCheck();
const commonFunction=new CommonFunction();
let numberEntered,sum=0;
let textArray =[];

describe('Prime Median Check', function() 
 {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');   // Cy.visit("http://localhost:3000/"); Execute this command if the existing one is not working.

    cy.wait(3000)
  });
////Checking if the page loaded is as expected. " http://localhost:3000/"

  it('Page load check.', () => {
    cy.url().should('eql', Cypress.config().baseUrl);
  });
  
  it('Page load check.', () => {
    cy.get(primeNumberCheck.textAvailable)
    .invoke('text')
    .should('eql', primeNumberData.primenumberHeader);
    });

  it('Median prime check',function(){


      commonFunction.fillTextArea(numberEntered);
      commonFunction.clickSubmit();
      textArray= cy.get(primeNumberCheck.textMedian)
      .invoke('text');
      checkMedian(textArray,numberEntered)
      checkSumMedian(textArray,numberEntered)
    })
 
  });
  
 function checkMedian(textArray,numberEntered){
   textArray.forEach((number)=>{
     except(number).to.be.lessThan(numberEntered)

   });
  }
   function checkSumMedian(textArray,numberEntered){
    textArray.forEach((number)=>{
      sum=sum+number;
 
    });
    except(sum).to.be.lessThan(numberEntered)

  }
