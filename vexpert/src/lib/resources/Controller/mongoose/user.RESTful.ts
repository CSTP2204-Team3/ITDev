import mongoose from "mongoose";
import User from "./User";

mongoose.connect(process.env.DATABASE_URL|| "")

export async function addItem(query: any, Schema: mongoose.Model<mongoose.Document> | any) {
    const {email, password}:{email: string, password: string} = query
    console.log(email)
    const user = await Schema.create({
        email: email,
        password: password
    })
    await user.save()
}

export async function getItem(query: string, Schema: mongoose.Model<mongoose.Document> | any) {
    return Schema.findOne({ query }).exec();
    // return item;
}

async function updateItem<T>(params:T) {
    
}

async function deleteItem<T>(params:T) {
    
}