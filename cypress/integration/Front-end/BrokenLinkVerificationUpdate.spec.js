/// <reference types="cypress" />
describe('a suite', () => {
    it('google test',()=> {
        cy.visit('/')
        var texf; 
       cy.get('a').each((items)=>{
         console.log(items)
          texf=items.text()
          cy.log(texf)
         if(texf==="CC 4.0 BY-NC" || texf==="Rubik's Cube " || texf==="Fork the website on GitHub"||texf==="Rapise"||texf==="Inflectra Corporation"||texf==="Apache License 2.0")
         {
            console.log('cross origin issue different sites')
            cy.go('back')
         }
         else{
             if(texf!=null){
            cy.contains(texf).click().should("not.have.attr", "href", "#undefined")
            cy.get(items).invoke('attr','href').then((newPage)=>{
            cy.request(newPage)
          .should((response) => {
                expect(response.status).to.eq(200)
              })
              cy.visit(newPage)
              cy.wait(3000)
              cy.visit('/')
        })
           }
        }           
           }) 
        
        }) })