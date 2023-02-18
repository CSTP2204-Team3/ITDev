import { model, models, Model, Schema } from "mongoose";
import type { UserProfProfile } from "@/lib/types/UserProf";
import { EMAIL_REGEX } from "@/lib/helpers/constants";

/**
 * @description This is the user schema
 * The full description of each property is referenced in the User interface
 */
const userSchema = new Schema<UserProfProfile> ({

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
            message: props => `${props.value} is not a valid email!`
        },
        required: [true, "User email required"],
        unique: true,
    },

    // This is the image/logo of the user
    profilePic: {
        type: String,
        required:[true, "Image is required"]
    },

    // This is where the reviews are contained or referenced
    review: [{
        type: String,
        required: false,
        default: []
    }]
});

/**
 * @description
 * The model for the Professional User collection.
 */
const UserProfModel = models["userprofprofile"] as Model<UserProfProfile> || model<UserProfProfile>("userprofprofile", userSchema);
export default UserProfModel;