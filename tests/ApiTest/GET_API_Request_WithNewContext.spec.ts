import{test,expect,request} from '@playwright/test'

let reqContext:any

test.beforeAll("Apply this base url in all test",async()=>{
    reqContext=await request.newContext({
       baseURL: process.env.Base_API_Url,extraHTTPHeaders:{Accept:"application/json"}

})
})
test('GET API reqeust with context',async()=>{
    const apiResponse=await reqContext.get("/booking");
    const jsonapiResponse=await apiResponse.json();
    console.log(jsonapiResponse);

})

test('GET API request with params',async()=>{
    const apiResponse=await reqContext.get("/booking",{
        params:{
            bookingid:2
        }
        
    });
    const jsonapiResponse=await apiResponse.json();
    console.log(jsonapiResponse)


})