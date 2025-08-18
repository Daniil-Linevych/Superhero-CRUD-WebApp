import { z } from "zod";

const idSchema = z.string().regex(/^\d+$/, "ID must be a positive integer!");

const superheroBaseSchema = z.object({
  nickname: z.string().min(2, "Nickname must be at least 2 characters"),
  realName: z.string().min(2, "Real name must be at least 2 characters"),
  originDescription: z.string().optional(),
  superpowers: z.string().optional(),
  catchPhrase: z.string().optional(),
  images: z.array(z.string()).optional()
});

const superheroCreateSchema = superheroBaseSchema;
const superheroUpdateSchema = superheroBaseSchema.partial();

export const superheroSchemas = {
  updateSchema: z.object({
    params: z.object({ id: idSchema }),
    body: superheroUpdateSchema
  }),
  createSchema: z.object({
    body: superheroCreateSchema
  })
};
