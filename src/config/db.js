const { Pool } = require("pg")

module.exports = new Pool({
    user: 'postgres',
    password: "b54025c25e1b4914a4cea69437e0aab3",
    host: "localhost",
    port: 5432,
    database: "gymmanager"
})