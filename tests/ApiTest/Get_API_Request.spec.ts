import{test,expect} from '@playwright/test'

test.use({
    baseURL:process.env.Base_API_Url
})



test('GET API request',async({request})=>{
    const getResponse=await request.get(`/booking`)
    const jsongetResponse=await getResponse.json();
    console.log(jsongetResponse)
   await expect(getResponse.status()).toBe(200);

})