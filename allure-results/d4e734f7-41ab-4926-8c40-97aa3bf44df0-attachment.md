# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ApiTest\Get_API_Request.spec.ts >> GET API request
- Location: tests\ApiTest\Get_API_Request.spec.ts:9:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: [Function status]
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | 
  3  | test.use({
  4  |     baseURL:process.env.Base_API_Url
  5  | })
  6  | 
  7  | 
  8  | 
  9  | test('GET API request',async({request})=>{
  10 |     const getResponse=await request.get(`/booking`)
  11 |     const jsongetResponse=await getResponse.json();
  12 |     console.log(jsongetResponse)
> 13 |    await expect(getResponse.status).toBe(200);
     |                                     ^ Error: expect(received).toBe(expected) // Object.is equality
  14 | 
  15 | })
```