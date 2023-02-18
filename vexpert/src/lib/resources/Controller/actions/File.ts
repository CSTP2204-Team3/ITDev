//import cloudinary
import cloudinary from "@/lib/resources/cloudinary/index";

//Get the uploader in the cloudinary
const { uploader } = cloudinary;

/**
 * @description function that handles file to be uploaded in the cloudinary
 * @params acepts a string which is the path of the file
 */
export async function uploadFile(path: string) {
    try {
        // Stores the filename
        const response = await uploader.upload(path,
            {
                //eslint-disable-next-line camelcase
                unique_filename: true
            });

            // If there's no file then it'll throw an error
            if (!response) {
                throw new Error("Upload to cloudinary process has failed");
            }

            // Returns the filename
            return response;

            // Catches and throws the error
    } catch (error: any) {
        throw new Error("Error uploadingn file", { cause: error });
    }
}