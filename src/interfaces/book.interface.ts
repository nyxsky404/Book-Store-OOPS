import { Document, Model } from "mongoose";

export interface IBook {
  title: string;
  author: string;
  genre: string;
  year: number;
  price: number;
  inStock: boolean;
}

export interface IBookDocument extends Document, IBook {}

export type IBookModel = Model<IBookDocument>;

export interface IBookQuery {
  search?: string;
  genre?: string;
  inStock?: string;
  sortBy?: string;
  order?: "asc" | "desc";
}
