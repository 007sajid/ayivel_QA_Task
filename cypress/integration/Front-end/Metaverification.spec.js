it.only("Meta Tags Verification",function(){
      
    cy.visit('/')
    var m=0;  
      var page = ['/','home','resources','dynamicid','classattr','hiddenlayers','loaddelay','ajax','clientdelay','click','textinput','scrollbars','dynamictable','verifytext','progressbar','visibility','sampleapp','mouseover','nbsp','overlapped']  
      var i=0;
      var k=0;
     
       
     cy.get('a').each((items)=>{
       
       var texf=items.text()
       if(texf==="CC 4.0 BY-NC" || texf==="Rubik's Cube " || texf==="Fork the website on GitHub"||texf==="Rapise"||texf==="Inflectra Corporation"||texf==="Apache License 2.0")
       {
           console.log("this is not done due to cross origin issues in cypress. First test handles that")
       }
       else{
          cy.visit(page[i])
          cy.get('head > meta').each((meta)=>{
            if(m==0)
            {
              cy.wrap(meta).should('have.attr','charset',"utf-8")
              m++;
            
            }else{
              cy.wrap(meta).should('have.attr','name',"viewport")
              m=0;
            }
            console.log(meta, texf)
          })
        
          cy.go('back')
          cy.wait(3000)
          i++;
       }

         })
    })
  
  
  