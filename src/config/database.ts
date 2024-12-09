import { Sequelize, DataTypes } from 'sequelize';
import Book from '../models/book';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

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

sequelize.sync({ force: true })
  .then(() => {
    console.log('Database & tables created!');
  });

export default sequelize;