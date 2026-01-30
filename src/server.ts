import "dotenv/config";
import App from "./app";

// Initialize app with empty routes for now
const app = new App([]);
app.startServer();
