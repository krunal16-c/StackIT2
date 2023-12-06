const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: process.env.DATABASE_HOST || "localhost",
  username: process.env.MYSQL_DATABASE || "krunal",
  password: process.env.MYSQL_PASSWORD || "test_123",
  database: process.env.MYSQL_DATABASE || "chat_db",
  dialect: "mysql",
  socketPath: "/var/run/mysqld/mysqld.sock",
});
module.exports = sequelize;
