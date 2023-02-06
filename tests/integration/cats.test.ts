import supertest from "supertest";
import { cleanDb } from "../helpers";
import app from "../../src/index";
import httpStatus from "http-status";
import {
  createCat,
  createCatsWithId,
  createCatWithInvalidId,
  createManyCats,
  createTheSameCat,
} from "../factories/cats-factories";
import { Cat } from "@prisma/client";

beforeAll(async () => {
  await cleanDb();
});

const server = supertest(app);

describe("tests route GET '/cats'", () => {
  it("tries to get a all the cats, but there is none", async () => {
    const result = await supertest(app).get("/cats");
    const status = result.status;
    const body = result.body as Cat[];

    expect(status).toBe(200);
    expect(body).toHaveLength(0);
  });
  it("should return status 200 when the app gets cats", async () => {
    const cats = await createManyCats();
    const result = await server.get("/cats");
    expect(result.status).toBe(200);
    expect(result.body.length).toBeGreaterThanOrEqual(10);
  });
});

describe("tests route GET'/cats/:id'", () => {
  it("should return status 200 when the app gets the a recomendation by its id", async () => {
    const cat = await createCatsWithId();
    const result = await server.get(`/cats/${cat.id}`);
    expect(result.status).toBe(200);
    expect(result.body).not.toBeUndefined();
    expect(result.body.id).toBe(cat.id);
  });

  it("should return status 500 when the id is not valid", async () => {
    const result = await supertest(app).get("/cats/100000");
    expect(result.status).toBe(500);
  });
});

describe("tests route DELETE '/cats/:id' ", () => {
  it("should return status 200 when the app deletes a certain cat", async () => {
    const cat = await createCat();
    const response = await server.delete(`/cats/${cat.id}`);
    expect(response.status).toBe(httpStatus.OK);
  });
  it("should respond with status 404 if the id does not exist", async () => {
    const response = await server.delete("/cats?catId=1");
    expect(response.status).toBe(httpStatus.NOT_FOUND);
  });
});
