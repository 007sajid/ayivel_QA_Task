/// <reference types="cypress" />
describe('QA task Suite', () => {

    it('Broken Link Verification',()=> {
    
        cy.visit('/')
          
        var page = ['/','home','resources','dynamicid','classattr','hiddenlayers','loaddelay','ajax','clientdelay','click','textinput','scrollbars','dynamictable','verifytext','progressbar','visibility','sampleapp','mouseover','nbsp','overlapped']
        
        var anotherpage=[Cypress.config('rob'),Cypress.config('bob'),Cypress.config('git'),Cypress.config('ra'),Cypress.config('ini'),Cypress.config('ap')]
        var i=0;
        var k=0;
      
         
       cy.get('a').each((items)=>{
         
         var texf=items.text()
         if(texf==="CC 4.0 BY-NC" || texf==="Rubik's Cube " || texf==="Fork the website on GitHub"||texf==="Rapise"||texf==="Inflectra Corporation"||texf==="Apache License 2.0")
         {
            
             //cy.forceVisit(anotherpage[k])
            // cy.go('back')
            // k++;
            cy.log("Cross-origin not supported,if you want to see its behaviour please uncomments above line and npx cypress open and run that particular file")
         }
         else{
      
            if(page[i]!=null){
              cy.request(page[i])
              .should((response) => {
                    expect(response.status).to.eq(200)
            }).then(()=>{
              cy.visit(page[i])
              cy.contains(texf).click().should("not.have.attr", "href", "#undefined")
              cy.go('back')
              cy.wait(3000)
              i++;
            })
             
           }
            }
           

           })
        
        
       
    })
    
    })
    
    