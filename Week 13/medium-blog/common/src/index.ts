import z from "zod";

// TODO: userSchema
export const signupInputSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(8, { message: "Password too short" }),
  name: z.string().optional(),
});

export const signinInputSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(8, { message: "Password too short" }),
});


// TODO: Blog Schema
export const createBlogInputSchema = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean(),
});

export const updateBlogInputSchema = z.object({
  id: z.string(),
  title: z.string().optional(),
  content: z.string().optional(),
  published: z.boolean().optional(),
});


// TODO: For Frontend
// type inferencce in zod
// this was done so that, the in frontend part we can use the User type to infer the type of the user object
export type SignupInput = z.infer<typeof signupInputSchema>;
export type SigninInput = z.infer<typeof signinInputSchema>;
export type CreateBlogInput = z.infer<typeof createBlogInputSchema>;
export type UpdateBlogInput = z.infer<typeof updateBlogInputSchema>;


