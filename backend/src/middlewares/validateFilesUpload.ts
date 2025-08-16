import { Request, Response, NextFunction } from 'express';
import { prisma } from "../db/db"

const superheroExists = async (id:number): Promise<boolean> => {
    const superhero = await prisma.superhero.findUnique({
        where: {id: id}
    })

    return !!superhero;
}

export const validateFileUpload = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    
    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: "Invalid superhero ID" });
    }

    if (!superheroExists(Number(id))){
        return res.status(404).json({ error: "Superhero not found" });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded!" });
    }

    next();
  } catch (error) {
    next(error);
  }
};

