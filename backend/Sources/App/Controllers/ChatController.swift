import Vapor
import Fluent

struct ChatController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let chats = routes.grouped("chats")
        chats.get(use: getAll)
        chats.post(use: create)
        chats.group(":chatID") { chat in
            chat.delete(use: delete)
            chat.get("messages", use: getMessages)
        }
    }
    
    func getAll(req: Request) throws -> EventLoopFuture<[Chat]> {
        return Chat.query(on: req.db).all()
    }

    func create(req: Request) throws -> EventLoopFuture<Chat> {
        let chat = try req.content.decode(Chat.self)
        return chat.save(on: req.db).map { chat }
    }

    func delete(req: Request) throws -> EventLoopFuture<HTTPStatus> {
        return Chat.find(req.parameters.get("chatID"), on: req.db)
            .unwrap(or: Abort(.notFound))
            .flatMap { $0.delete(on: req.db) }
            .transform(to: .ok)
    }

    func getMessages(req: Request) throws -> EventLoopFuture<[Message]> {
        let chatID = try req.parameters.require("chatID", as: UUID.self)
        return Message.query(on: req.db)
            .filter(\.$chat.$id == chatID)
            .all()
    }
}
