const env = require("../env");

module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: env.dbUsername,
  password: env.dbPassword,
  database: env.dbName,
  define: {
    timestamps: true,
  },
};

/* Conteudo do curso Onebitcode
module.exports = {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "123456",
    database: "curso_sequelize",
    define: {
      timestamps: true,
    },
  };
*/
