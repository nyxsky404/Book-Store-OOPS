import { Router } from "express";
import { Routes } from "../interfaces/routes.interface";
import BookController from "../controllers/book.controller";

class BookRoutes implements Routes {
  path = "/books";
  router: Router = Router();
  private bookController: BookController;

  constructor() {
    this.bookController = new BookController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(this.path, this.bookController.createBook);
    this.router.get(this.path, this.bookController.getAllBooks);
    this.router.get(`${this.path}/:id`, this.bookController.getBookById);
    this.router.put(`${this.path}/:id`, this.bookController.updateBook);
    this.router.delete(`${this.path}/:id`, this.bookController.deleteBook);
  }
}

export default BookRoutes;
