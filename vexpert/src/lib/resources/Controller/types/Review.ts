import { ObjectId } from "mongodb";

// Namespace to contain the enums used by the review model
export namespace Reviews {

/**
 * This is the review type
*/
	export type ReviewType = "EXCELLENT" | "GREAT" | "DECENT" | "OKAY" | "BAD";
}

/**
 * Review type
 * @property rating - The rating out of 5 stars
 * @property status - The status of the user
 * @property writer - The user that left the review
 * @property user - The user being rated
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
	 * The user being rated
	 */
	userRated: string;

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
