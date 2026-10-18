import jwt from "jsonwebtoken";
// import { env } from "../config/env.js";

const generateAccessToken = (user) => {
  const token = jwt.sign(
    {
      email: user.email,
      roles: user.roles,
      typ: "Bearer",
    },
    env.jwt.secret,
    {
      subject: String(user.id),
      algorithm: "HS512",
      expiresIn: "5m",
      // expiresIn: process.env.JWT_EXPIRES_IN,
      issuer: "http://localhost:5000",
      // issuer: process.env.JWT_ISSUER,
    },
  );

  return token;
};

const generateRefreshToken = (user) => {
  const token = jwt.sign(
    {
      value: generateRandomString(256),
      typ: "refresh-token",
    },
    env.jwt.secret,
    {
      subject: String(user.id),
      algorithm: "HS512",
      expiresIn: "10m",
      // expiresIn: process.env.JWT_EXPIRES_IN,
      issuer: "http://localhost:5000",
      // issuer: process.env.JWT_ISSUER,
    },
  );

  return token;
};

const generateRandomString = (num) => {
  let res = "";
  let characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; //62db

  for (let i = 0; i < num; i++) {
    res += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return res;
};

const verifyToken = (token) => jwt.verify(token, env.jwt.secret);

export { generateAccessToken, generateRefreshToken, verifyToken };
