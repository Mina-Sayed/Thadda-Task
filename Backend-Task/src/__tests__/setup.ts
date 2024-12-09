import { Sequelize, DataTypes } from 'sequelize';
import Book from '../models/book';

export const testSequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
  logging: false
});

beforeAll(async () => {
  await testSequelize.sync({ force: true });
  Book.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false
      },
      publishedDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      numberOfPages: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize: testSequelize,
      tableName: 'books'
    }
  );
});

afterAll(async () => {
  await testSequelize.close();
});