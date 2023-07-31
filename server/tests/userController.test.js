import app from "../server.js";
import supertest from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const request = supertest(app);

beforeAll = async () => {
  await mongoose.disconnect();
  dotenv.config();
  await mongoose.connect(process.env.MONGO_TEST_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

afterAll = async () => {
  // delete all new users
  await User.deleteMany({});
  await mongoose.disconnect();
};

describe("Test user routes", () => {
  // test login route
  it("should login user", async () => {
    const email = "test@test.com";
    const password = "testPassword";

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user that has been verified
    await User.create({
      userName: "test",
      email: email,
      password: hashedPassword,
      isverified: true,
    });

    const response = await request.post("/api/users/login").send({
      email: email,
      password: password,
    });

    console.log(JSON.stringify(response.body));
    expect(response.status).toBe(200);
  });
});