import ChatList from "../components/ChatList";
import ChatBox from "../components/ChatBox";
import { useState } from "react";

export default function HomePage() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  return (
    <div className="flex h-screen">
      <ChatList onSelectChat={setSelectedChat} />
      {selectedChat !== null && <ChatBox chatId={selectedChat} />}
    </div>
  );
}
