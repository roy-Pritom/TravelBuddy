import { z } from "zod";

const FileSchema = z.object({
    lastModified: z.number(),
    lastModifiedDate: z.date(),
    name: z.string(),
    size: z.number(),
    type: z.string(),
    webkitRelativePath: z.string().optional(),
  });

export const UserValidation=z.object({
    name:z.string().nonempty({message:"name is required"}).optional(),
    email:z.string().email().nonempty({message:"email is required"}).optional(),
    bio:z.string().nonempty({message:"bio is required"}).optional(),
    age:z.number().optional(),
    file:FileSchema.optional(),
    location:z.string().optional()
})