'use client';
import { MessageCircle, Bell, User, Search } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className="flex items-center justify-around py-3 border-t border-[#0074d8] bg-[#0074d8] shadow-lg" style={{ opacity: 0.5}}>
      {/* Chat Tab */}
      <button
        onClick={() => setActiveTab('chat')}
        className={`flex flex-col items-center transition-transform duration-200 ${
          activeTab === 'chat'
            ? 'text-[#FFFFFF] scale-125'
            : 'text-[#FFFFFF] hover:text-[#043042]'
        }`}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="text-xs mt-1">Chat</span>
      </button>

      {/* Profile Tab */}
      <button
        onClick={() => setActiveTab('profile')}
        className={`flex flex-col items-center transition-transform duration-200 ${
          activeTab === 'profile'
           ? 'text-[#FFFFFF] scale-125'
           : 'text-[#FFFFFF] hover:text-[#043042]'
        }`}
      >
        <User className="w-6 h-6" />
        <span className="text-xs mt-1">Profile</span>
      </button>

      {/* Notifications Tab */}
      <button
        onClick={() => setActiveTab('notifications')}
        className={`flex flex-col items-center transition-transform duration-200 ${
          activeTab === 'notifications'
            ? 'text-[#FFFFFF] scale-125'
            : 'text-[#FFFFFF] hover:text-[#043042]'
        }`}
      >
        <Bell className="w-6 h-6" />
        <span className="text-xs mt-1">Alerts</span>
      </button>

      {/* Search Tab */}
      <button
        onClick={() => setActiveTab('search')}
        className={`flex flex-col items-center transition-transform duration-200 ${
          activeTab === 'search'
            ? 'text-[#FFFFFF] scale-125'
            : 'text-[#FFFFFF] hover:text-[#043042]'
        }`}
      >
        <Search className="w-6 h-6" />
        <span className="text-xs mt-1">Search</span>
      </button>
    </nav>
  );
}
