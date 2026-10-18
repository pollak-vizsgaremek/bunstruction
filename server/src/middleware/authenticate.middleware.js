// JWT ellenőrzése, req.user beállítása
import { verifyToken } from "../utils/jwt.js";

const authenticate = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Missing token",
    });
  }

  try {
    req.user = verifyToken(header.split(" ")[1]);
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

export default authenticate;
