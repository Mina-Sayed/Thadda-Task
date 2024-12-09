// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'sequelize';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ValidationError) {
    return res.status(400).json({
      error: 'Validation error',
      details: err.errors.map(e => ({
        field: e.path,
        message: e.message
      }))
    });

    
  }

  console.error(err);
  res.status(500).json({ error: 'Internal server error' });

    next();
};