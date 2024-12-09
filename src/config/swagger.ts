// src/config/swagger.ts
import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Thadda Task API',
      version: '1.0.0',
      description: 'API documentation for Thadda Task',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: [path.join(__dirname, '../routes/*.ts')], // Adjusted the path
};

export const specs = swaggerJsdoc(options);