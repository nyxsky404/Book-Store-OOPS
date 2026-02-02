# Book Store CRUD API

A full-fledged TypeScript/Express/MongoDB backend implementing clean OOP architecture.

## Architecture

```
Controllers → Services → Repositories → Models
```

| Layer            | Responsibility                 |
| ---------------- | ------------------------------ |
| **Controllers**  | Handle HTTP requests/responses |
| **Services**     | Business logic                 |
| **Repositories** | Database operations            |
| **Models**       | Mongoose schemas               |

## Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose

## Project Structure

```
src/
├── controllers/     # HTTP request handlers
├── services/        # Business logic layer
├── repositories/    # Data access layer
├── models/          # Mongoose schemas
├── routes/          # API route definitions
├── interfaces/      # TypeScript interfaces
├── app.ts           # Express app configuration
└── server.ts        # Entry point
```

## Installation

```bash
# Clone the repository
git clone https://github.com/nyxsky404/Book-Store-OOPS.git
cd Book-Store-OOPS

# Install dependencies
npm install

# Create environment
touch .env

# Run development server
npm run dev
```

## Environment Variables

```env
MONGODB_URI=mongodb://localhost:27017/bookstore
PORT=8080
```

## API Endpoints

### Books CRUD

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| POST   | `/books`     | Create a new book |
| GET    | `/books`     | Get all books     |
| GET    | `/books/:id` | Get a single book |
| PUT    | `/books/:id` | Update a book     |
| DELETE | `/books/:id` | Delete a book     |

### Query Parameters

| Parameter | Description            | Example          |
| --------- | ---------------------- | ---------------- |
| `search`  | Search in title/author | `?search=harry`  |
| `genre`   | Filter by genre        | `?genre=fantasy` |
| `inStock` | Filter by availability | `?inStock=true`  |
| `sortBy`  | Sort by field          | `?sortBy=price`  |
| `order`   | Sort order             | `?order=desc`    |

## Usage Examples

```bash
# Create a book
curl -X POST http://localhost:8080/books \
  -H "Content-Type: application/json" \
  -d '{"title":"Harry Potter","author":"J.K. Rowling","genre":"fantasy","year":1997,"price":25,"inStock":true}'

# Get all books
curl http://localhost:8080/books

# Search books
curl "http://localhost:8080/books?search=harry"

# Filter by genre
curl "http://localhost:8080/books?genre=fantasy"

# Sort by price (descending)
curl "http://localhost:8080/books?sortBy=price&order=desc"

# Update a book
curl -X PUT http://localhost:8080/books/{id} \
  -H "Content-Type: application/json" \
  -d '{"price":30}'

# Delete a book
curl -X DELETE http://localhost:8080/books/{id}
```

## Book Schema

```typescript
{
  title: string; // Required
  author: string; // Required
  genre: string; // Required
  year: number; // Required
  price: number; // Required
  inStock: boolean; // Default: true
}
```

## Scripts

```bash
npm run dev    # Start development server with hot reload
npm run build  # Build for production
npm start      # Start production server
```