export async function getChats() {
  const res = await fetch("/api/chats");
  return await res.json();
}

export async function getMessages(chatId: number) {
  const res = await fetch(`/api/chats/${chatId}/messages`);
  return await res.json();
}

export async function sendMessage(chatId: number, content: string) {
  const res = await fetch(`/api/chats/${chatId}/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });
  return await res.json();
}
