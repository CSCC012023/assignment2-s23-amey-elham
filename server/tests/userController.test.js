import app from "../server.js";
import supertest from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const request = supertest(app);

describe("Test user routes", () => {
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

    await User.deleteOne({ email: email });

    expect(response.status).toBe(200);
  });

  it("should prevent unverified user login", async () => {
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
      isverified: false,
    });

    const response = await request.post("/api/users/login").send({
      email: email,
      password: password,
    });

    await User.deleteOne({ email: email });
    
    expect(response.status).toBe(403);
    expect(response.body.message).toBe("Email not verified");
  });

  it("should prevent login when password is incorrect", async () => {
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
      password: "123",
    });

    await User.deleteOne({ email: email });
    
    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Invalid credentials");
  });
});