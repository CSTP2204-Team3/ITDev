import QuestionModel from "@/lib/resources/Models/Question";
import type { Question, Questions } from "@/lib/types/Question";
import Database from "@/lib/resources/DBAccessLayer/database";
import { getUserByEmail } from "./user";

/**
 * Adds a new question to the database
 * @param {Question} question new question data
 * @returns {Promise<data>} promise that resolves to the new question
 * @throws {Error} if the questions creation process fails
 */

export async function createQuestion(question: Question): Promise<Question> {
    try {
        // Create new question
        const createdQuestion = await QuestionModel.create(question);

        // Returns the nelwy created question
        return createdQuestion;
    } catch (error: any) {
        throw new Error("Error when creating question", { cause: error });
    }
}

/**
 * Retrieves all the matches from the database
 * @returns {Promise<Question[]>} promise that resolves to an array of questions
 */

export async function getQuestions(): Promise<Question[]> {
    try {
        await Database.setup();

        // Retrieve all questions
        const questions = await QuestionModel.find({});

        // Return questions
        return questions;
    } catch (error: any) {
        throw new Error("Error retrieving questions", { cause: error });
    }
}

/**
 * Find question by _id
 * @param {string} id of question to find
 * @returns {Promise<Question>} promise that resolves to a question
 */

export async function getQuestionById(_id: string): Promise<Question> {
    try {
        // Find question by id in database
        const question = await QuestionModel.findById(_id);

        //If question is not found, throw error
        if (!question) {
            throw new Error("Question not found");
        }

        // Return qustion that question the _id
        return question;
    } catch (error: any) {
        
        // Database error
        if (error.code) {
            throw new Error("Database server error", { cause: error });
        }

        //Question not found error
        throw new Error("Error finding question", { cause: error });
    }
}

/**
 * Update a question's data
 * @param questionId the id of the match to update
 * @param question new question data
 * @returns {Promise<Question>} promise that resolves to updated question
 */

export async function updateQuestion(questionId: string, question: Question) {
    try {
        // Reference: https://www.geeksforgeeks.org/mongoose-findbyidandupdate-function/
        const updatedQuestion = await QuestionModel.findByIdAndUpdated(questionId, question, { new: true });

        return updatedQuestion;
    } catch (error: any) {
        throw new Error("Error updating question", { cause: error });
    }
}

/**
 * Update fields of a question
 * @param questionId id of a question to update
 * @param fields fields to update
 * @returns {Promise<Question>} promise that resolves to updated question
 * @throws {"Error"} if something goes wrong
 */

export async function updateQuestionFields(questionId: string, fields: Partial<Question>) {
    try {
        const updatedQuestion = await QuestionModel.findByIdAndUpdate(questionId, fields, { new: true });

        return updatedQuestion;
    } catch (error: any) {
        throw new Error("Error updating question fields", { cause: error });
    }
}

/**
 * Update question status
 * @param questionId id of a question to update
 * @param status new status
 * @returns {Promise<Question>} promise that resolves to updated question
 * @throws {Error} if question is not found
 */

export async function updateQuestionStatus(questionId: string, status: Questions.QuestionStatus){
    try {
        const question = await QuestionModel.findById(questionId);
        if (!question) {
            throw new Error("Question not found");
        } 

        question.status = status;
        await question.save();

        return question;
    } catch (error: any) {
        throw new Error("Error updating question status", { cause: error });
    }
}

/**
 * Remove a question by id from database
 * @param {string} questionId - id of a question to delete
 * @throws {Error} - if question deletion process is unsuccessful
 */

export async function deleteQuestion(questionId: string) {
    try {
        await QuestionModel.findByIdAndDelete(questionId);
    } catch (error: any) {
        throw new Error("Error deleting question", { cause: error });
    }
    return true;
}

// /**
//  * Checks if the user can ask/create a new question
//  * @param {string} questionAsker - the id of the question asker
//  * @param {string} status - status of the question
//  * @returns if it does exist
//  */

// export async function findUserActiveQuestions(questionAsker: string) {
//     try {
        
//         //Stores and searches for existing id from a user and if they currently have 5 active questions
//         const exists = 
//     }
// }

