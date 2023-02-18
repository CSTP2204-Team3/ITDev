import { models, model, Model, Schema } from "mongoose";
import { Question } from "@/lib/resources/Controller/types/Question";

/**
 * Subdoc schema for questions
 */

/**
 * @description - This is the question schema
 * The full description of each property is referenced in the Question interface
 */

const questionSchema = new Schema<Question>({

    // The user who asked the question
    questionAsker: {
        type: String,
        required: true
    },

    // The type of subject
    subject: {
        type: String,
        required: true
    },

    // This is the language the question is in
    language: {
        type: String,
        required: true
    },

    // The question's context or details
    description: {
        type: String
    },

    // This is the topic of the question
    topic: {
        type: String
    },

    // This is the status of the question
    status: {
        type: String,
        enum: ["UNANSWERED", "ANSWERED", "DELETED"],
        required: true,
        default: "UNANSWERED"
    }
});

/**
 * @description - The model for the Question collection
 */

const QuestionModel = models["question"] as Model<Question> || model<Question>("question", questionSchema);
export default QuestionModel;