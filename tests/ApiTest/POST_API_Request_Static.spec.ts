import{test,expect} from "@playwright/test"
import postAPIRequest from '../../test-data/api-request/POST_API_Request.json'

test.use({
    baseURL:process.env.Base_API_Url
})

test("create post request with",async({request})=>{
    const postApiResponse=await request.post(`/booking`,{data:postAPIRequest})
    const jsonPOSTApiResponse=await postApiResponse.json();
    console.log('POST API Response: '+JSON.stringify(jsonPOSTApiResponse,null,2))
    expect(postApiResponse.status()).toBe(200);
    expect(postApiResponse.statusText()).toBe("OK");
    expect(postApiResponse.headers()['content-type']).toContain('application/json')

    //validation propery or key name
    expect(jsonPOSTApiResponse.booking).toHaveProperty('firstname');
    expect(jsonPOSTApiResponse.booking).toHaveProperty('lastname');

    expect(jsonPOSTApiResponse.booking.bookingdates).toHaveProperty('checkin')


    //validate  API response body
    expect(jsonPOSTApiResponse.bookingid).toBeGreaterThan(0);
    expect(jsonPOSTApiResponse.booking.firstname).toBe('playwrightTest')


})
