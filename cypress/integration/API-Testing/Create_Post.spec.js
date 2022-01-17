const tData = require('../../fixtures/testdata')
describe("Get_all_booking", () => {

    it('Create a Booking',function(){

    cy.request({
         method:'POST',
         url:'https://restful-booker.herokuapp.com/booking',
         headers:{
          'content-type': 'application/json'
         },
         body:{
            
                "firstname" : tData.post.firstname,
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
             console.log(response.body)
             expect(response.status).equals(200);
             expect(response.body.booking.firstname).equals(tData.post.firstname);
        })
     })
     })
