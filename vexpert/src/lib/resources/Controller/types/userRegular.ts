import User from "./user";
import { Question } from "@/lib/resources/Controller/types/Question";

export interface regUser extends User {

	// This is the questions that the user has created
	questions: Question[];

}
