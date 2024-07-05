// TODO: Type inference in ZOD

import { z } from 'zod';
import express from "express";

const app = express();

const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),     // by this we can give the cleaner error message by the ZOD
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

export type FinalUserSchema = z.infer<typeof userProfileSchema>;    // this is how we assign types to updateBody
// and using the export at the staring states that, we can also use the same type in the fontend folder also

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: FinalUserSchema = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }

  res.json({
    message: "User updated"
  })
});

app.listen(3000);