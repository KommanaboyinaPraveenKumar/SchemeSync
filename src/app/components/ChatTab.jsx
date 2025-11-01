'use client';
import { useRef, useState, useEffect } from 'react';
import { MessageCircle, Mic, Send } from 'lucide-react';

export default function ChatTab() {
  const scrollRef = useRef(null);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chat]);

  const handleSend = () => {
    if (!message.trim()) return;

    setChat((prev) => [...prev, { text: message, sender: 'user' }]);
    setTimeout(() => {
      setChat((prev) => [
        ...prev,
        { text: 'I’m looking up the scheme for you…', sender: 'bot' },
      ]);
    }, 800);
    setMessage('');
  };

  return (
    <div className="flex flex-col bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden h-[75vh] mx-auto w-[90%] sm:w-[80%] md:w-[60%] border border-[#B3E6FA]/40">
      {/* Chat Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-[#B3E6FA]/60 bg-white/50 backdrop-blur-md sticky top-0 z-10 rounded-t-2xl">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#00C853] rounded-full" />
          <span className="text-xs font-medium text-gray-800">
            BharatGPT is online
          </span>
        </div>
        <select
          className="text-xs border border-[#B3E6FA]/80 rounded-full px-2 py-1 focus:outline-none bg-transparent text-gray-800"
          defaultValue="English"
        >
          <option>English</option>
          <option>हिन्दी</option>
          <option>తెలుగు</option>
          <option>বাংলা</option>
          <option>मराठी</option>
          <option>தமிழ்</option>
        </select>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 p-3 overflow-y-auto">
        {/* Intro message */}
        <div className="flex items-start gap-2 mb-3">
          <div className="p-1.5 bg-[#0098D8]/15 rounded-full">
            <MessageCircle className="w-4 h-4 text-[#0098D8]" />
          </div>
          <div className="max-w-xs p-2 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#B3E6FA]/40 shadow-sm">
            <p className="text-xs text-gray-800 leading-snug">
              Hello! I am BharatGPT. I can help you with government schemes.
              Please ask me anything!
            </p>
          </div>
        </div>

        {/* Chat messages */}
        {chat.map((msg, i) => (
          <div
            key={i}
            className={`flex mb-2 ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.sender === 'bot' && (
              <div className="p-1.5 mr-1 bg-[#0098D8]/15 rounded-full">
                <MessageCircle className="w-4 h-4 text-[#0098D8]" />
              </div>
            )}
            <div
              className={`max-w-xs p-2 rounded-2xl text-xs leading-snug ${
                msg.sender === 'user'
                  ? 'bg-[#0098D8] text-white'
                  : 'bg-white/70 border border-[#B3E6FA]/40 text-gray-900 backdrop-blur-sm'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div className="sticky bottom-0 bg-white/60 backdrop-blur-lg border-t border-[#B3E6FA]/60 p-2 rounded-b-2xl">
        <div className="flex items-center gap-2">
          <button className="p-1.5 text-[#0098D8] hover:text-[#007BBF] transition">
            <Mic className="w-4 h-4" />
          </button>

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about a government scheme..."
            className="flex-1 px-3 py-1.5 text-xs border border-[#B3E6FA]/70 rounded-full bg-white/70 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#0098D8]"
          />

          <button
            onClick={handleSend}
            className="p-1.5 text-white bg-[#0098D8] rounded-full hover:bg-[#007BBF] transition"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
