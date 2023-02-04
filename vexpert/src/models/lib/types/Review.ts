import { ObjectId } from "mongodb";

// Namespace to contain the enums used by the match model
export namespace Reviews {

/**
 * this is the match type
*/
	export type ReviewType = "GOOD" | "POOR";
}

/**
 * Review type
 * @property rating - The rating of the user
 * @property status - The status of the user
 * @property writer - The user that left the review
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
	 * This is the user who created the review
	 */
	reviewWriter: string;

	/**
	 * this is the type of subject
	 */
	subject: string;

	/**
	 * this is the rating to choose
	 */
	reviewType: Reviews.ReviewType;

	/**
	 * The additional details for the review 
	 */
	description: string;

}
