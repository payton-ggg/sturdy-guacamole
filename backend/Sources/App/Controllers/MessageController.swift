import Vapor
import Fluent

struct MessageController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let messages = routes.grouped("messages")
        messages.post(use: create)
    }

    func create(req: Request) throws -> EventLoopFuture<Message> {
        let message = try req.content.decode(Message.self)
        return message.save(on: req.db).map { message }
    }
}
