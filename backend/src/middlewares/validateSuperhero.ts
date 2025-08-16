import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { superheroSchemas } from "../schemas/superheroSchema";

const handleValidationError = (err: ZodError, res: Response) => {
  return res.status(400).json({
    errors: err.issues.map(e => ({
      path: e.path.join("."),
      message: e.message,
    })),
  });
};

export const validateCreateSuperhero = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await superheroSchemas.createSchema.parseAsync({ body: req.body });
    next();
  } catch (err) {
    if (err instanceof ZodError) return handleValidationError(err, res);
    next(err);
  }
};

export const validateUpdateSuperhero = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await superheroSchemas.updateSchema.parseAsync({ params: req.params, body: req.body });
    next();
  } catch (err) {
    if (err instanceof ZodError) return handleValidationError(err, res);
    next(err);
  }
};
