import BookRepository from "../repositories/book.repository";
import { IBook, IBookDocument, IBookQuery } from "../interfaces/book.interface";

class BookService {
  private bookRepository: BookRepository;

  constructor() {
    this.bookRepository = new BookRepository();
  }

  async createBook(bookData: IBook): Promise<IBookDocument> {
    return await this.bookRepository.create(bookData);
  }

  async getAllBooks(query: IBookQuery): Promise<IBookDocument[]> {
    return await this.bookRepository.findAll(query);
  }

  async getBookById(id: string): Promise<IBookDocument | null> {
    return await this.bookRepository.findById(id);
  }

  async updateBook(id: string, bookData: Partial<IBook>): Promise<IBookDocument | null> {
    return await this.bookRepository.update(id, bookData);
  }

  async deleteBook(id: string): Promise<boolean> {
    return await this.bookRepository.delete(id);
  }
}

export default BookService;
