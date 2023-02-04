import { ObjectId } from "mongodb";
import { Review } from "./Review";

/**
 * Interface for creating a user
 */
export interface UserRegProfile {

	// This is automatically added by mongodb
	_id?: string | ObjectId;

	// This the unique for every user
	userName: string;

	// This is the user's first name
	firstName: string;

	// This is the user's last name
	lastName: string;

	// This is the user's email address and is unique
	email: string;

	// This is the image/logo of the user
	image: string;

}