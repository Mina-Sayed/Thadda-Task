import { Request, Response } from "express";
import Book from "../models/book";

export const addBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, author, publishedDate, numberOfPages } = req.body;

    // Log the request body for debugging
    console.log("Request Body:", req.body);

    // Validate required fields
    if (!title || !author || !publishedDate || !numberOfPages) {
      res.status(400).json({
        error: "Missing required fields",
        required: ["title", "author", "publishedDate", "numberOfPages"],
      });
      return;
    }

    // Create book
    const book = await Book.create({
      title,
      author,
      publishedDate: new Date(publishedDate),
      numberOfPages: Number(numberOfPages),
    });

    res.status(201).json(book);
  } catch (error) {
    console.error("Error creating book:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getAllBooks = async (req: Request, res: Response) => {
  const books = await Book.findAll();
  res.json(books);
};

export const getBookById = async (req: Request, res: Response) => {
  const book = await Book.findByPk(req.params.id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).send("Book not found");
  }
};

export const updateBook = async (req: Request, res: Response) => {
  const book = await Book.findByPk(req.params.id);
  if (book) {
    const { title, author, publishedDate, numberOfPages } = req.body;
    await book.update({ title, author, publishedDate, numberOfPages });
    res.json(book);
  } else {
    res.status(404).send("Book not found");
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  const book = await Book.findByPk(req.params.id);
  if (book) {
    await book.destroy();
    res.send("Book deleted");
  } else {
    res.status(404).send("Book not found");
  }
};
