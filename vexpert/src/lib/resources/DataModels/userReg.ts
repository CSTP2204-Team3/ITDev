import { model, models, Model, Schema } from "mongoose";
import type { regUser } from "@/lib/resources/Controller/types/userRegular";
import { EMAIL_REGEX } from "@/lib/helpers/constants";

/**
 * @description This is the user schema
 * The full description of each property is referenced in the User interface
 */
const regUserSchema = new Schema<regUser>({

    // This is the username of the user
    name: {
        type: String,
        min: [8, "Name should be at least 8 characters"],
        max: [20, "Name should be max of 30 characters"],
        required: [true, "Name is required"],
        unique: true
    },

    // This is the email of the user
    email: {
        type: String,
        validate: {
            validator: function (v: string) {
                return EMAIL_REGEX.test(v);
            },
            message: (props: { value: string; }) => `${props.value} is not a valid email!`
        },
        required: [true, "User email required"],
        unique: true,
    },

});

/**
 * @description
 * The model for the User collection.
 */
const UserRegModel = models["regUser"] as Model<regUser> || model<regUser>("regUser", regUserSchema);
export default UserRegModel;