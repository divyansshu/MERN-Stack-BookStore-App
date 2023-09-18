import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    BookName: {
        type: String,
        required: true
    },
    BookAuthor: {
        type: String,
        required: true
    },
    publishYear: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const bookModel = new model("book", bookSchema);

export default bookModel;