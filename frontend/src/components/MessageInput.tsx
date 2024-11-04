import { useState } from "react";

type MessageInputProps = {
  onSend: (message: string) => void;
};

export default function MessageInput({ onSend }: MessageInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <div className="flex">
      <input
        type="text"
        className="flex-1 border p-2 rounded-lg text-black"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={handleSend}
        className="bg-blue-500 text-white ml-4 p-2 rounded-lg"
      >
        Send
      </button>
    </div>
  );
}
