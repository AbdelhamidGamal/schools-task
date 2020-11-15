import * as Yup from "yup";

const email = Yup.string().email("Invalid email address").required("Required");

const password = Yup.string()
  //   .min(10, "Password Min 10 Characters")
  //   .max(50, "Password Max 50 Characters")
  .required("Required");

export const signInSchema = Yup.object({
  email,
  password,
});
