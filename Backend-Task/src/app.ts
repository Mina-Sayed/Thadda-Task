// src/app.ts
import express from 'express';
import sequelize from './config/dbConfig';
import initModels from './models/init';
import bookRoutes from './routes/bookRoutes';
import authRoutes from './routes/authRoutes';
import swaggerUi from 'swagger-ui-express';
import { specs as swaggerSpecs } from './config/swagger';

const app = express();
app.use(express.json());

// Initialize models
initModels();

// Sync database
sequelize.sync({ force: true }).then(() => {
  console.log('Database synced');
});

// Setup routes
app.use('/api/auth', authRoutes);
app.use('/api', bookRoutes);

// Swagger setup (after routes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;