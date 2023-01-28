import { ObjectId } from "mongodb";

// Namespace to contain the enums used by the question model
export namespace Questions {

/**
 * this is the question type
*/
	export type QuestionType = "COOKING" | "ARTS" | "";

    // Matches status type
	export type MatchStatus = "ANSWERED" | "UNANSWERED" | "DELETED";
}


/**
 * Question type
 * @property subject - The subject 
 * @property status - The status of the question
 * @property writer - The user that asked the question
 */


/**
 * Interface for creating a match
 */
export interface Review {

	/**
	 * This is automatically added by mongodb
	 */
	_id?: string | ObjectId;

	/**
	 * This is the user who created the QUESTION
	 */
	reviewWriter: string;

	/**
	 * this is the type of subject
	 */
	subject: string;

	/**
	 * this is the question type
	 */
	questionType: Questions.QuestionType;

}