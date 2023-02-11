import { model, models, Model, Schema } from "mongoose";
import type { UserRegProfile } from "@/models/lib/types/UserReg";

/**
 * @description This is the user schema
 * The full description of each property is referenced in the User interface
 */
const userSchema = new Schema<UserRegProfile>({

    // This is the username of the user
    userName: {
        type: String,
        min: [8, "Username should be at least 8 characters"],
        max: [20, "Username should be max of 30 characters"],
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
        required: [true, "User email required"],
        unique: true,
    },

});

/**
 * @description
 * The model for the User collection.
 */
const UserRegModel = models["userRegprofile"] as Model<UserRegProfile> || model<UserRegProfile>("userregprofile", userSchema);
export default UserRegModel;