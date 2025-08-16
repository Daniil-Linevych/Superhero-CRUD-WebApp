import { Request, Response, NextFunction } from "express";
import { nicknameExists } from "../services/superhero.service";

export const checkNicknameUnique = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { nickname } = req.body;
    const { id } = req.params;

    if (!nickname) return next();

    const exists = await nicknameExists(nickname, id ? Number(id) : undefined);
    
    if (exists) {
      return res.status(400).json({ error: "Nickname must be unique!" });
    }

    next();
  } catch (err) {
    next(err);
  }
};
