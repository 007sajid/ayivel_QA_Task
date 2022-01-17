
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
    it('Update one booking by id',function(){
     
     cy.request({
         method:'PUT',
         url:'https://restful-booker.herokuapp.com/booking/2',
         headers:{
          'content-type': 'application/json',
          'Cookie':"token="+Token+""
         },
         body:{
            
            "firstname" : "sss",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        
     }

     }).then((response)=>{
         
      expect(response.status).equals(201);
      
      })
      
     })

    })

