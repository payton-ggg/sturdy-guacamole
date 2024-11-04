import Vapor

class OpenAIService {
    func fetchResponse(for message: String, req: Request) -> EventLoopFuture<String> {
        return req.eventLoop.future("Simulated OpenAI response to: \(message)")
    }
}
