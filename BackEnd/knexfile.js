require('dotenv').config();

module.exports = {
    client: "mysql2",
    connection: {
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    },
    migrations: {
        tableName: "migrations",
        directory: `${__dirname}/src/database/migrations`
    }
}