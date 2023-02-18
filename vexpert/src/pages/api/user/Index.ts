import { NextApiRequest, NextApiResponse } from "next";
import { getUsersByEmail } from "@/lib/resources/Controller/actions/user";
import { APIErr } from "@/lib/resources/Controller/types/General";
import { Email } from "@mui/icons-material";

/**
 * api route for getting users by usernames
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { names } = req.query;

        //guard against invalid usernames
        if (typeof names !== "string") {
            throw {
                code: 400,
                message: "invalid name"
            };
        }

        //get all users with username that in the usernames query
        const users = await getUsersByEmail(names.split(","));
        res.status(200).json(users);
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
    }
}