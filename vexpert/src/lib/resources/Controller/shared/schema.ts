//  Third-party imports 
import { object, string } from "yup";

// Local imports
import { EMAIL_REGEX, NAME_REGEX } from "@/lib/helpers/constants";

//https://www.youtube.com/watch?v=ZG7sLbI8kL8&t=710s
//Yup validation criteria for user
export const userSchema = object({
    name: string().required("Please enter a name")
    .min(8, "name should be at least 8 characters")
    .max(30, "name should be at max 30 characters"),
    email: string()
    .required("Please enter your email")
    .matches(EMAIL_REGEX, "invalid input for email"),
    image: string().required(),
});

// Yup validation criteria for name
export const nameSchema =  object({
    name: string()
    .required("Please enter your name")
    .min(2, "Name should at least be 2 characters")
    .max(50, "Name should be at most 50 characters")
    .matches(NAME_REGEX, "Invalid input for name")
});