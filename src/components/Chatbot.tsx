import React, { useState } from 'react';
import { MessageSquare, SendHorizonal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();

      const botMessage: Message = {
        sender: 'bot',
        text: data.reply.trim(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching chat response:', error);
      const botMessage: Message = {
        sender: 'bot',
        text: 'Oops, something went wrong. Please try again.',
      };
      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 bg-white shadow-lg rounded-lg border flex flex-col h-[400px] overflow-hidden">
          <div className="bg-career-blue text-white px-4 py-2 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Career Assistant</h2>
            <button onClick={toggleChat}>×</button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`text-sm p-2 rounded-lg max-w-[75%] ${
                  msg.sender === 'user'
                    ? 'bg-blue-100 self-end ml-auto'
                    : 'bg-gray-200 self-start mr-auto'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="text-sm p-2 rounded-lg max-w-[75%] bg-gray-200 self-start mr-auto italic">
                Typing...
              </div>
            )}
          </div>

          <div className="p-2 border-t bg-white flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question..."
              disabled={isLoading}
            />
            <Button onClick={handleSend} size="icon" disabled={isLoading}>
              <SendHorizonal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        <Button
          onClick={toggleChat}
          size="icon"
          className="rounded-full bg-career-blue hover:bg-career-blue/90 text-white"
        >
          <MessageSquare className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default Chatbot;
