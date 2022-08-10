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
  it("GET /post/id", () => {
    return request(app)
      .get("/api/1")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            title: expect.any(String),
            nickname: expect.any(String),
          })
        );
      });
  });
  it("GET /post/id -> 404 if not found", () => {
    return request(app).get("/post/999999").expect(404);
  });
});