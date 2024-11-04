import Fluent
import FluentPostgresDriver
import Vapor

public func configure(_ app: Application) throws {
    configureDatabase(app)

    app.migrations.add(CreateChat())
    app.migrations.add(CreateMessage())

    try routes(app)
}
