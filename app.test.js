const { json } = require("express");
const request = require("supertest");
const app = require("./app");

describe("Testing API ", () => {
  it("GET /api", () => {
    return request(app)
      .get("/api")
      .expect("Content-type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              title: expect.any(String),
              nickname: expect.any(String),
            }),
          ])
        );
      });
  });
});
