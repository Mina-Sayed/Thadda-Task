import request from 'supertest';
import express from 'express';
import bookRoutes from '../routes/bookRoutes';
import authRoutes from '../routes/authRoutes';

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', bookRoutes);

describe('Routes Integration', () => {
  let authToken: string;

  beforeAll(async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ username: 'admin', password: 'password' });
    authToken = response.body.token;
  });

  test('GET /api/books returns books list', async () => {
    await request(app)
      .get('/api/books')
      .set('Authorization', `Bearer ${authToken}`)
      .expect(200);
  }, 10000); // Increase timeout to 10 seconds
});