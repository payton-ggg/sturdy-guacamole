import Fluent
import Vapor

final class Message: Model, Content {
    static let schema = "messages"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "content")
    var content: String

    @Parent(key: "chat_id")
    var chat: Chat

    init() { }

    init(id: UUID? = nil, content: String, chatID: UUID) {
        self.id = id
        self.content = content
        self.$chat.id = chatID
    }
}
