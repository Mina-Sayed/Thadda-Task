import { Request, Response } from 'express';
import { addBook, getAllBooks, getBookById } from '../controllers/bookController';
import Book from '../models/book';

jest.mock('../models/book');

describe('Book Controller', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
  });

  test('addBook creates a new book', async () => {
    const bookData = {
      title: 'Test Book',
      author: 'Test Author',
      publishedDate: '2024-01-01',
      numberOfPages: 100
    };
    mockRequest.body = bookData;
    
    (Book.create as jest.Mock).mockResolvedValue(bookData);
    
    await addBook(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.json).toHaveBeenCalledWith(bookData);
  });
});