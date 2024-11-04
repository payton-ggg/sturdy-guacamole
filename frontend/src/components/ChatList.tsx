import { useEffect, useState } from "react";
import { getChats } from "../utils/api";

type ChatListProps = {
  onSelectChat: (chatId: number) => void;
};

export default function ChatList({ onSelectChat }: ChatListProps) {
  const [chats, setChats] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    getChats().then(setChats);
  }, []);

  return (
    <div className="w-1/3 bg-gray-100 p-4">
      <button
        onClick={() => onSelectChat(null)}
        className="block w-full text-left text-blue-500 hover:text-blue-700"
      >
        + New Chat
      </button>
      {chats.map((chat) => (
        <div
          key={chat.id}
          onClick={() => onSelectChat(chat.id)}
          className="cursor-pointer text-blue-500 hover:text-blue-700"
        >
          {chat.name}
        </div>
      ))}
    </div>
  );
}
