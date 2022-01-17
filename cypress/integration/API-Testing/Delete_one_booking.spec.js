
describe("Update_one_booking", () => {
    var Token;
       
    before(() => {
       
        cy.auth();
        cy.saveLocalStorage();
        cy.getLocalStorage('jwt').then((jwt)=>{
            Token=jwt;
        })
      });
      
      beforeEach(() => {
        cy.restoreLocalStorage();
      });
    it('Delete booking by id',function(){
     
     cy.request({
         method:'DELETE',
         url:'https://restful-booker.herokuapp.com/booking/1',
         headers:{
          'content-type': 'application/json',
          'Cookie':"token="+Token+""
         }        
     

     }).then((response)=>{
         
        //This test case is failed as it is not working according to expectations. 
      expect(response.status).equals(200);
      expect(response.body).equals('Deleted')
      
      })
      
     })

    })

