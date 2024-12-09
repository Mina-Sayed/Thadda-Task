import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const auth = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).send("Authentication required.");
    return; // Ensure the function terminates here
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    res.locals.user = decoded; // Attach user information to res.locals
    next(); // Proceed to the next middleware or route
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};

export default auth;
