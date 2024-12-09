import Book from '../models/book';
import { testSequelize } from './setup';

describe('Book Model', () => {
  beforeEach(async () => {
    await testSequelize.sync({ force: true });
  });

  test('can create a book', async () => {
    const book = await Book.create({
      title: 'Test Book',
      author: 'Test Author',
      publishedDate: new Date('2024-01-01'),
      numberOfPages: 100
    });

    expect(book.id).toBeTruthy();
    expect(book.title).toBe('Test Book');
  });

  test('validates required fields', async () => {
    try {
      await Book.create({
        title: '',
        author: '',
        publishedDate: new Date(),
        numberOfPages: 0
      });
      fail('Should have thrown validation error');
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});