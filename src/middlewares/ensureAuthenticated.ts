import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../repositories/UsersRepository";

interface IPayload {
  sub: string,
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.json({ message: "Token is missing!" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, "8edb164dffe2b7066c410e45f3d20bb4") as IPayload;

    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(user_id);

    if (!user) {
      return response.json({ message: "User not found!" });
    }

    request.user = {
      id: user_id,
    }

    next();
  }
  catch {
    return response.json({ message: "Invalid token" });
  }
}
