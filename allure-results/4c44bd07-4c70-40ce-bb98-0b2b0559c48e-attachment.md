# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ApiTest\POST_API_Request_Static.spec.ts >> create post request with
- Location: tests\ApiTest\POST_API_Request_Static.spec.ts:9:5

# Error details

```
TypeError: apiRequestContext.post: Invalid URL
```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test"
  2  | import postAPIRequest from '../../test-data/api-request/POST_API_Request.json'
  3  | import process from "process"
  4  | 
  5  | test.use({
  6  |     baseURL:process.env.Base_API_Url,
  7  | })
  8  | 
  9  | test("create post request with",async({request})=>{
> 10 |     const postApiResponse=await request.post(`/booking`,{data:postAPIRequest})
     |                                         ^ TypeError: apiRequestContext.post: Invalid URL
  11 |     const jsonPOSTApiResponse=await postApiResponse.json();
  12 |     console.log('POST API Response: '+JSON.stringify(jsonPOSTApiResponse,null,2))
  13 | 
  14 | 
  15 | })
  16 | 
```