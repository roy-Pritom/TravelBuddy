import { z } from "zod";

const dayjsObjectSchema = z.object({
  $D: z.number(),
  $H: z.number(),
  $L: z.string(),
  $M: z.number(),
  $W: z.number(),
  $d: z.date(),
  $isDayjsObject: z.boolean(),
  $m: z.number(),
  $ms: z.number(),
  $s: z.number(),
  $u: z.any().optional(),
  $x: z.object({}).optional(),
  $y: z.number(),
});

export const travelSchema = z.object({
    // activities: z.union([z.string(), z.array(z.string())]).optional(),  // Allow a string or an array of strings
    budget: z.string().nonempty({ message: "Budget is required" }).refine(val => !isNaN(Number(val)), { message: "Budget must be a valid number" }),
    description: z.string().nonempty({ message: "Description cannot be empty" }),
    destination: z.string().nonempty({ message: "Destination cannot be empty" }),
    startDate: dayjsObjectSchema,
    endDate:   dayjsObjectSchema,
    file: z.string().optional(), 
    travelType: z.enum(['By Road','By Train','By Bus','By Plane','By Bike','By Cycle','By Metro']),  // Specify allowed travel types
  });