import Fluent
import FluentPostgresDriver
import Vapor

func configureDatabase(_ app: Application) {
    app.databases.use(.postgres(
        hostname: "localhost",
        port: 5432,
        username: "admin",
        password: "admin",
        database: "chatdb"
    ), as: .psql)
}
