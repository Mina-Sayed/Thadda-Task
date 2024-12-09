import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/dbConfig';

interface BookAttributes {
  id: number;
  title: string;
  author: string;
  publishedDate: Date;
  numberOfPages: number;
}

interface BookCreationAttributes extends Optional<BookAttributes, 'id'> {}

class Book extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
  public id!: number;
  public title!: string;
  public author!: string;
  public publishedDate!: Date;
  public numberOfPages!: number;
}

export default Book;