import { ObjectId } from "mongodb";

//Namespace to contain the enums used by the questin model.
export namespace Questions {

    /**
     * This is the question's status type
     */

    export type QuestionStatus = "UNANSWERED" | "ANSWERED" | "DELETED";

}

/**
 * Question Type
 * @property status - the status of the question
 */

/**
 * Interface for creating a question
 */
export interface Question {
    /**
     * This is automatically added by mongodb
     */
    _id?: string | ObjectId;

    /**
     * This is the user that created the question
     */

    questionAsker: string;

    /**
     * This is the language
     */

    language: string;

    /**
     * This is the status of the match
     */

    status: Questions.QuestionStatus;

    /**
     * This is the subject of the question
     */
    description: string;

    /**
     * This is the subject of the question
     */
    subject: string;


    /**
     * This is the topic of the question
     */
    topic: string;

}
