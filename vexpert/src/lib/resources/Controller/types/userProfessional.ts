import User from "./user";
import { Review } from "@/lib/resources/Controller/types/Review";

export interface profUser extends User {

	// This is the reviews that the user has gotten
	reviews: Review[];

	// This is the rating the user has 
	rating: string;
}

