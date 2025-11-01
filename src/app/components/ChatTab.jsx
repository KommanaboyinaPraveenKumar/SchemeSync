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
    <div className="flex flex-col items-center justify-center py-6 px-4 min-h-[55vh] bg-gradient-to-t from-[#EAF6FB] via-[#F8FCFF] to-[#FFFFFF] rounded-2xl shadow-inner">
      {/* Chat Box */}
      <div className="flex flex-col bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden h-[50vh] sm:h-[53vh] md:h-[55vh] mx-auto w-[90%] sm:w-[80%] md:w-[55%] border border-[#B3E6FA]/40">
        
        {/* Chat Header */}
        <div className="flex items-center justify-between px-3 py-1 border-b border-[#B3E6FA]/60 bg-white/70 backdrop-blur-md sticky top-0 z-10 rounded-t-2xl">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00C853] rounded-full"></div>
            <span className="text-base font-medium text-gray-800">BharatGPT is online</span>
          </div>
          <select
            className="text-sm border border-[#B3E6FA]/80 rounded-full px-2 py-0.5 focus:outline-none bg-transparent text-gray-800"
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
        <div ref={scrollRef} className="flex-1 px-3 py-0.5 overflow-y-auto">
          {/* Intro message */}
          <div className="flex items-start gap-2 mb-1">
            <div className="p-1 bg-[#0098D8]/15 rounded-full">
              <MessageCircle className="w-5 h-5 text-[#0098D8]" />
            </div>
            <div className="max-w-sm px-3 py-1.5 bg-white/70 backdrop-blur-sm rounded-2xl border border-[#B3E6FA]/40 shadow-sm">
              <p className="text-sm text-gray-800 leading-snug">
                Hello! I’m BharatGPT — your guide for government schemes. Ask me anything!
              </p>
            </div>
          </div>

          {/* Chat messages */}
          {chat.map((msg, i) => (
            <div key={i} className={flex mb-1 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}}>
              {msg.sender === 'bot' && (
                <div className="p-1 mr-1 bg-[#0098D8]/15 rounded-full">
                  <MessageCircle className="w-5 h-5 text-[#0098D8]" />
                </div>
              )}
              <div
                className={`max-w-sm px-3 py-1.5 rounded-2xl text-base leading-snug ${
                  msg.sender === 'user'
                    ? 'bg-[#0098D8] text-white'
                    : 'bg-white/80 border border-[#B3E6FA]/40 text-gray-900 backdrop-blur-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input bar */}
        <div className="sticky bottom-0 bg-white/70 backdrop-blur-lg border-t border-[#B3E6FA]/60 px-2 py-0.5 rounded-b-2xl">
          <div className="flex items-center gap-2">
            <button className="p-1 text-[#0098D8] hover:text-[#007BBF] transition">
              <Mic className="w-5 h-5" />
            </button>

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about a government scheme..."
              className="flex-1 px-3 py-3 text-base border border-[#B3E6FA]/70 rounded-full bg-white/80 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#0098D8]"
            />

            <button
              onClick={handleSend}
              className="p-1.5 text-white bg-[#0098D8] rounded-full hover:bg-[#007BBF] transition"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}