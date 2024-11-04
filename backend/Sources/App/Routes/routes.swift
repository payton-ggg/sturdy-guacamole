import Vapor

func routes(_ app: Application) throws {
    let chatController = ChatController()
    let messageController = MessageController()
    
    try app.register(collection: chatController)
    try app.register(collection: messageController)
}
