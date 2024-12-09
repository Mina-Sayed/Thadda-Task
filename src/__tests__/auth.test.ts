import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import auth from '../middleware/auth';

describe('Auth Middleware', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction = jest.fn();

  beforeEach(() => {
    mockRequest = {
      headers: {},
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
  });

  test('should return 401 if no token provided', () => {
    auth(mockRequest as Request, mockResponse as Response, nextFunction);
    expect(mockResponse.status).toHaveBeenCalledWith(401);
  });

  test('should return 403 for invalid token', () => {
    mockRequest.headers = { authorization: 'Bearer invalid_token' };
    auth(mockRequest as Request, mockResponse as Response, nextFunction);
    expect(mockResponse.status).toHaveBeenCalledWith(403);
  });
});