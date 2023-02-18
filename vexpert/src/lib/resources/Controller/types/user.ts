import { ObjectId } from "mongodb";

export interface UserProfile {

	// This is automatically added by mongodb
	_id?: string | ObjectId;

	// The user's name
	name: string;

	// This is the user's email address and is unique
	email: string;

	// This is the image/logo of the user
	image: string;

}

export default UserProfile;