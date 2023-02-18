import { model, models, Model, Schema } from "mongoose";
import type { profUser } from "@/lib/resources/Controller/types/userProfessional";
import { EMAIL_REGEX } from "@/lib/helpers/constants";

/**
 * @description This is the user schema
 * The full description of each property is referenced in the User interface
 */
const profUserSchema = new Schema<profUser> ({

    // This is the name of the user
    name: {
        type: String,
        min: [2, "Name should be at least 2 characters"],
        max: [64, "Name should be max of 64 characters"],
        required: [true, "Name is required"],
    },

    // This is the email of the user
    email: {
        type: String,
        validate: {
            validator: function (v: string) {
                return EMAIL_REGEX.test(v);
            },
            message: (props: { value: any; }) => `${props.value} is not a valid email!`
        },
        required: [true, "User email required"],
        unique: true,
    },

    // This is the image/logo of the user
    image: {
        type: String,
        required:[true, "Image is required"]
    },

    // This is where the reviews are contained or referenced
    reviews: [{
        type: [String],
        required: false,
        default: []
    }]
});

/**
 * @description
 * The model for the Professional User collection.
 */
const UserProfModel = models["userprofprofile"] as Model<profUser> || model<profUser>("profUser", profUserSchema);
export default UserProfModel;