import { Question } from "@/lib/resources/Controller/types/Question";

/**
 * Validate a question
 * @param question - question to validate
 * @throws {Error} if question is invalid
 * return {Question} - validated question
 */

export function validateQuestion(question: Question) {
    const { questionAsker, language, topic, subject, description } = question;

    // Check if all required question properties are defined
    if (!questionAsker || !language || !topic || !subject || !description) {
        throw new Error("Missing required question property");
    } 

        return question;
}