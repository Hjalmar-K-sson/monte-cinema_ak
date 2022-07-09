import * as Yup from "yup";

export const authFormValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address!")
    .required("Please enter an e-mail address!"),
  password: Yup.string()
    .required("Please enter a password")
    .matches(/[a-zA-Z]/, "At least one letter")
    .matches(/[0-9]/, "At least one digit")
    .min(8, "At least 8 characters"),
});

export const personalFormValidationSchema = Yup.object({
  firstName: Yup.string().required("Please enter Your first name"),
  lastName: Yup.string().required("Please enter Your last name"),
  // dateOfBirth: Yup.date("Please enter Your date of birth")
  //   .required("Please enter Your date of birth")
  //   .nullable()
  //   .test("age", "You should be minimum 18 years old", (dateOfBirth) => {
  //     const cutoff = new Date();
  //     cutoff.setFullYear(cutoff.getFullYear() - 18);
  //     return dateOfBirth <= cutoff;
  //   }),
  // acceptPrivacyPolicy: Yup.boolean().required(
  //   "You need to accept our privacy policy to proceed."
  // ),
});
