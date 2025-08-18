import { Request, Response, NextFunction } from 'express';

export const validateFileUpload = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded!" });
    }

    next();
  } catch (error) {
    next(error);
  }
};

