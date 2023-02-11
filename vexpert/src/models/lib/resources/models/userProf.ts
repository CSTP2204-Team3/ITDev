import { model, models, Model, Schema } from "mongoose";
import type { UserProfProfile } from "@/models/lib/types/UserProf";
import { EMAIL_REGEX } from "@/models/lib/helpers/constants";

/**
 * @description This is the user schema
 * The full description of each property is referenced in the User interface
 */
const userSchema = new Schema<UserProfProfile> ({

    // This is the username of the user
    userName: {
        type: String,
        min: [8, "Username should be at least 8 characters"],
        max: [30, "Username should be max of 30 characters"],
        required: [true, "Username is required"],
        unique: true
    },

    // This is the firstname of the user
    firstName: {
        type: String,
        min: [2, "Firstname should be at least 2 characters"],
        max: [64, "Firstname should be max of 64 characters"],
        required: [true, "Firstname is required"],
    },

    // This is the lastname of the user
    lastName: {
        type: String,
        min: [2, "Lastname should be at least 2 characters"],
        max: [64, "Lastname should be max of 64 characters"],
        required: [true, "Lastname is required"],
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
    image: {
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