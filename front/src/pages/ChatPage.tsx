import { useState } from 'react';
import MySend from '../components/UI/button/MySend'

export default function ChatPage() {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Создание нового сообщения пользователя
    const userMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');

    try {
      const response = await fetch('', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response from AI');
      }

      const data = await response.json();
      const aiMessage = { text: data.reply || 'No response from AI', sender: 'ai' };

      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setMessages((prevMessages) => [...prevMessages, { text: 'Error: Unable to fetch response.', sender: 'ai' }]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white-100 dark:bg-gray-900">
      <div className="flex-grow overflow-auto p-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-3 rounded-lg max-w-xs ${
              msg.sender === 'user'
                ? 'bg-blue-500 text-white self-end ml-auto'
                : 'bg-gray-300 dark:bg-gray-700 self-start'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="p-4 bg-white dark:bg-gray-800 shadow-md flex">
        <input
          type="text"
          className="flex-grow p-2 border-red-500 rounded-lg text-gray-900 dark:text-gray-200 dark:bg-gray-700"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
        ><MySend/>
  
        </button>
      </div>
    </div>
  );
}