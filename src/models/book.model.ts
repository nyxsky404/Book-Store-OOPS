import { Schema, model } from "mongoose";
import { IBookDocument, IBookModel } from "../interfaces/book.interface";

const bookSchema = new Schema<IBookDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const BookModel = model<IBookDocument, IBookModel>("Book", bookSchema);

export default BookModel;
