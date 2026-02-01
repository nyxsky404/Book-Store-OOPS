import { Request, Response } from "express";
import BookService from "../services/book.service";
import { IBookQuery } from "../interfaces/book.interface";

class BookController {
  private bookService: BookService;

  constructor() {
    this.bookService = new BookService();
  }

  createBook = async (req: Request, res: Response): Promise<void> => {
    try {
      const book = await this.bookService.createBook(req.body);
      res.status(201).json(book);
    } catch (error) {
      res.status(500).json({ message: "Failed to create book" });
    }
  };

  getAllBooks = async (req: Request, res: Response): Promise<void> => {
    try {
      const query: IBookQuery = req.query;
      const books = await this.bookService.getAllBooks(query);
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch books" });
    }
  };

  getBookById = async (req: Request, res: Response): Promise<void> => {
    try {
      const book = await this.bookService.getBookById(req.params.id);
      if (!book) {
        res.status(404).json({ message: "Book not found" });
        return;
      }
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch book" });
    }
  };

  updateBook = async (req: Request, res: Response): Promise<void> => {
    try {
      const book = await this.bookService.updateBook(req.params.id, req.body);
      if (!book) {
        res.status(404).json({ message: "Book not found" });
        return;
      }
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ message: "Failed to update book" });
    }
  };

  deleteBook = async (req: Request, res: Response): Promise<void> => {
    try {
      const deleted = await this.bookService.deleteBook(req.params.id);
      if (!deleted) {
        res.status(404).json({ message: "Book not found" });
        return;
      }
      res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete book" });
    }
  };
}

export default BookController;
