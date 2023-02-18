import type { regUser } from "@/lib/resources/Controller/types/userRegular";
import UserRegModel from "@/lib/resources/DataModels/userReg";
import Database from "@/lib/resources/DBAccessLayer/database";

/**
 * @description a function that creates the user and saves it to the database
 * @param user accepts a user object
 * @returns QuestionModel from "@/resources/models/Question"
 */

export async function createUser(user: regUser) {
    try {
        // This sets up the app's database
        await Database.setup();

        // Creates a UserRegModel
        const regUser = new UserRegModel(user);

        // Saves the UserRegModel in the database
        await regUser.save();

        return regUser;
    }
    // Catch any errors and throws a message
    catch (error: any) {
        if (error.code === 11000 ) {
            if (error.keyPattern.email) {
                throw new Error("Email already taken", { cause: error });
            }
        }
        throw new Error(error.message);
    }
}

/**
 * @description A function that gets all the users in the database and returns it
 */

export async function getUsers() {
    try {
        // This sets up the app's database
        await Database.setup();

        // Stores all the users in the database
        const users = await UserRegModel.find({});
        
        // Returns all users
        return users;

        // Catches any error and throws it in message
    } catch(error: any) {
        throw new Error("Error getting users", error.message);
    }
}

/**
 * @description Updates a user profile
 * @param {string} name the user's full name to be updated
 * @returns the updated user
 */

export async function UpdateUser(fields: Partial<regUser>, email: string) {
    try {

        // Retrieves the user by email
        const user = await UserRegModel.findOne({ email});

        // Stores and searches for a specific user id and updates it in the database
        const updatedUser = await UserRegModel.findOneAndUpdate({ _id: user?.id},
        fields, 
        {
            new: true,
            name: true,
        });

        // Now we return the updated user
        return updatedUser;

        //Catches any errors and throws it
    } catch (error: any) {
        throw new Error("Error updating the user", error.message);
    }
}

/**
 * add question to user's question history
 */

export async function addQuestionToUserHistory(questionId: string, email: string) {
    try {

        // Sets up the database
        await Database.setup();

        // Adds question to the user's question history
        const updatedUser = await UserRegModel.findByIdAndUpdate(
            { email },
            { $push: { questionHistory: questionId }},
            { new: true }
        );

        // Returns the updated user
        return updatedUser;

    } catch (error: any) {
        throw new Error("Error updating the user's history", error.message);
    }

}

/**
 * @getUserByEmail A function to check is the user exists in the database
 * @param {string} email the user's email
 * @returns the user if it exists
 */

export async function getUserByEmail(email: string) {

    try {
    // Sets up the database connection
    await Database.setup();

    // Stores and looks a specific user through email address
    const user = await UserRegModel.findOne({ email });

    //Checks if user exists
    if (!user) {
        throw new Error("Email does not exist ");
    }

    // Returns the user
    return user;
    
    // Catches and throws error
    } catch(error: any) {
    if (error.message) {
        throw error;
    }
    throw new Error("Error: Something is wrong :(", error);
    }
}

/**
 * Retrieve a list of users by email
 * @param {string[]} emails of users we need to get
 * @returns the list of users inside a document
 */

export async function getUsersByEmail(emails: string[]) {
    try {

        //Sets up the database connection
        await Database.setup();

        //Stores and looks for a specific user by email
        const users = await UserRegModel.find({ email: { $in: emails }});

        // Checks if the user exists
        if (!users) {
            throw new Error("No user with that email exists");
        }

        // Returns the users
        return users;

        // Catches and throws error
    } catch(error: any) {
        if (error.message) {
            throw error;
        }
        throw new Error("Error retrieving users", error);
    }
}

/**
 * Remove a question from the user's question history
 */

export async function removeQuestionFromUserHistory(email: string, questionId: string) {
    try { 
        // Sets up the database connection
        await Database.setup();

        // Stores and looks for a specific user by email
        const user = await UserRegModel.findOne({ email });

        //Checks if the user exists
        if (!user) {
            throw new Error("Email does not exist");

        }

        // Update the user's questions
        const questions = user.questions;
        const newQuestions = questions.filter((question) => question._id !== questionId);
        user.questions = newQuestions;
        await user.save();

        // Returns the user
        return user;

        // Catches any errors and throws it
    } catch (error: any) {
        throw new Error("Error updating the user from remove question from user", { cause: error });
    }
}
