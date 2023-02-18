// Third party imports

import { userSchema } from "@/lib/resources/Controller/shared/schema";
import { NextApiRequest, NextApiResponse } from "next";
// eslint-disable-next-line camelcase

import type { regUser } from "@/lib/resources/Controller/types/userRegular";
import { createUser } from "@/lib/resources/Controller/actions/user";
import { APIErr } from "@/lib/resources/Controller/types/General";
import { authOptions } from "../auth/[...nextauth]";
import { validate } from "@/lib/resources/Controller/shared/validate";

/**
 * @description = a function that handles api request for registering user
 */
async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const session = await unstable_getServerSession(req, res, authOptions);
    if (req.method === "POST") {
        try {

            // Checks if there is no session and throw code 401 and message
            if(!session) {
                throw {
                    code: 401,
                    message: "Unauthorized request"
                };
            }

            // Deconstruct body to get individual properties to be used for validation
            let {
                name,
                image,
                email,
                questions,
            } = req.body as regUser;

            // Converts email to lowercase for uniformity
            email = email.toLowerCase();

            // Converts first letter of the name to capital and the rest is lowercase
            name = name.charAt(0) + name.substring(1).toLowerCase();

            // Define user object to be created in the database
            const user = {
                name,
                email,
                image,
                questions,
            };

            try {

                // Stores the created user into the response
                const response = await createUser(user);

                // Returns the code and the user created
                res.status(200).json(
                    {
                        response,
                        method: req.method
                    }
                );

            //Catches any error and throws code, message and cause
            } catch (error) {
                const { code = 400, message, cause } = error as APIErr;
                throw {
                    code,
                    message,
                    cause
                };
            }

        //Catches any error and throws code, message and cause
        } catch(error) {
            const {
                code = 500,
                message="internal server error",
                cause="internal error"
            } = error as APIErr;
            res.status(code).json(
                {
                    code,
                    message,
                    cause
                }
            );

            return;
        }
    }
}

// Validates before exporting
export default validate(userSchema, handler);


function unstable_getServerSession(_req: NextApiRequest, _res: NextApiResponse<any>, _authOptions: any) {
    throw new Error("Function not implemented.");
}

