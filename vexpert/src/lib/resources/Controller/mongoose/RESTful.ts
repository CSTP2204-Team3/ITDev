import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE_URL|| "")

export async function addItem(query: any, Schema: mongoose.Model<mongoose.Document> | any) {
    const keys = Object.keys(query);
    const values = Object.values(query);
    const properties = keys.reduce((acc: any, key, index) => {
        acc[key] = values[index];
        return acc;
    }, {})

    const item = await Schema.create(properties);
    await item.save();
}

export async function getItem(query: any, Schema: mongoose.Model<mongoose.Document> | any) {
    try {
        console.log(query)
        const item = await Schema.findOne(query);
        console.log(item)
        return item;
    } catch (error: any) {
        console.error(`Error while retrieving item: ${error.message}`);
        throw error;
    }
}


export async function updateItem<T>(query: any, Schema: mongoose.Model<mongoose.Document> | any) {
    const id = query._id;
    delete query._id;

    const updatedItem = await Schema.findByIdAndUpdate(id, query, { new: true });
    if (!updatedItem) throw new Error("Item not found");

    return updatedItem;
}

export async function findMany<T>(query: any, Schema: mongoose.Model<mongoose.Document> | any) {
    const items = await Schema.find({ query });
    return items;
}

export async function deleteItem<T>(query: any, Schema: mongoose.Model<mongoose.Document> | any) {
    
}