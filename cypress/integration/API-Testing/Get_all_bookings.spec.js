
describe("Get_all_booking", () => {

      it('Get all bookings',function(){
       cy.request({
           url:'https://restful-booker.herokuapp.com/booking',
           headers:{
            'content-type': 'application/json'
           }

       }).then((response)=>{
           
        expect(response.status).equals(200);
        expect(response.body).to.be.a('array')
        expect(response.body).to.deep.include({
            'bookingid':2
        })
        
       })

      })

    })