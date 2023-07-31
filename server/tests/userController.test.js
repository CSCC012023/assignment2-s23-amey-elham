import app from "../server.js";
import supertest from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/User.js";

const request = supertest(app);

beforeAll = async () => {
  dotenv.config();
  mongoose.connect(process.env.MONGO_TEST_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

afterAll = async () => {
  // delete all new users
  await User.deleteMany({});
};

describe("Test user routes", () => {
  // test login route
  it("should login user", async () => {
    // create user that has been verified
    const user = User.create({
      userName: "test",
      email: "test@test.com",
      password: "test",
      isverified: true,
    });

    const response = await request.post("api/users/login").send({
      email: "test",
      password: "test",
    });

    expect(response.status).toBe(200);
  });
});
