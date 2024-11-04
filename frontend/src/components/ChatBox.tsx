import { useState, useEffect } from "react";
import { getMessages, sendMessage } from "../utils/api";
import MessageInput from "./MessageInput";

type ChatBoxProps = {
  chatId: number;
};

export default function ChatBox({ chatId }: ChatBoxProps) {
  const [messages, setMessages] = useState<{ id: number; content: string }[]>(
    []
  );

  useEffect(() => {
    getMessages(chatId).then(setMessages);
  }, [chatId]);

  const handleSendMessage = (message: string) => {
    sendMessage(chatId, message).then((newMessage) =>
      setMessages([...messages, newMessage])
    );
  };

  return (
    <div className="flex-1 p-4">
      <div className="overflow-y-auto">
        {messages.map((msg) => (
          <div key={msg.id} className="my-2">
            {msg.content}
          </div>
        ))}
      </div>
      <MessageInput onSend={handleSendMessage} />
    </div>
  );
}
