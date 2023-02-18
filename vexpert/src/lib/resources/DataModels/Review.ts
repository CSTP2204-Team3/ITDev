import { models, model, Model, Schema } from "mongoose";
import { Review } from "@/lib/resources/Controller/types/Review";

/**
 * Subdoc schema for questions
 */

/**
 * @description - This is the question schema
 * The full description of each property is referenced in the Question interface
 */

const reviewSchema = new Schema<Review>({

    // The user who asked the question
    reviewWriter: {
        type: String,
        required: true
    },

    // The type of subject
    subject: {
        type: String,
        required: true
    },

    // This is the language the question is in
    userRated: {
        type: String,
        required: true
    },

    // The question's context or details
    description: {
        type: String
    },

    // This is the status of the question
    reviewType: {
        type: String,
        enum: ["EXCELLENT", "GREAT", "DECENT", "OKAY", "BAD"],
        required: true,
        default: "EXCELLENT"
    }
});

/**
 * @description - The model for the Question collection
 */

const ReviewModel = models["review"] as Model<Review> || model<Review>("review", reviewSchema);
export default ReviewModel;