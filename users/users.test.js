import {test, expect} from "vitest";
import request from "supertest";
import app from "../app.js";

test('GET /api/health works', async () => {
    const response = await request(app).get('/api/health');
    expect(response.body).toEqual ({
        success: true,
        payload: "API is running correctly",
   
  });
    expect(response.status).toEqual(200);
    expect(response.headers["content-type"]).toMatch(/json/);
  });



  // Assertion 1 - response body is object with correct structure ✅

  // Assertion 2  - response status code of 200 ✅

  // Assertion 3 - content-Type response header contains application/json. ✅
