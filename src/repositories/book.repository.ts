import BookModel from "../models/book.model";
import { IBook, IBookDocument, IBookQuery } from "../interfaces/book.interface";

class BookRepository {
  async create(bookData: IBook): Promise<IBookDocument> {
    const book = await BookModel.create(bookData);
    return book;
  }

  async findAll(query: IBookQuery): Promise<IBookDocument[]> {
    const filter: any = {};

    if (query.search) {
      filter.$or = [
        { title: { $regex: query.search, $options: "i" } },
        { author: { $regex: query.search, $options: "i" } },
      ];
    }

    if (query.genre) {
      filter.genre = query.genre;
    }

    if (query.inStock !== undefined) {
      filter.inStock = query.inStock === "true";
    }

    let queryBuilder = BookModel.find(filter);

    if (query.sortBy) {
      const order = query.order === "desc" ? -1 : 1;
      queryBuilder = queryBuilder.sort({ [query.sortBy]: order });
    }

    const books = await queryBuilder.exec();
    return books;
  }

  async findById(id: string): Promise<IBookDocument | null> {
    const book = await BookModel.findById(id);
    return book;
  }

  async update(id: string, bookData: Partial<IBook>): Promise<IBookDocument | null> {
    const book = await BookModel.findByIdAndUpdate(id, bookData, { new: true });
    return book;
  }

  async delete(id: string): Promise<boolean> {
    const result = await BookModel.findByIdAndDelete(id);
    return result !== null;
  }
}

export default BookRepository;
