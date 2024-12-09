import Book from './book';
import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig';

const initModels = () => {
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
      sequelize,
      tableName: 'books'
    }
  );
};

export default initModels;