import express from "express";
import { connect } from "mongoose";
import { Routes } from "./interfaces/routes.interface";

class App {
  public app: express.Application;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.connectDatabase();
  }

  public startServer(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}`);
    });
  }

  private initializeMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(routes: Routes[]): void {
    routes.forEach((route) => {
      this.app.use("/", route.router);
    });
  }

  private async connectDatabase(): Promise<void> {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI is missing in environment variables");
    }
    try {
      await connect(uri);
      console.log("Database connected successfully");
    } catch (err) {
      console.error("Database connection failed:", err);
      process.exit(1);
    }
  }
}

export default App;
