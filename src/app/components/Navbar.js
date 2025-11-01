'use client';
import { MessageCircle, Bell, User, Search } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className="flex items-center justify-around py-3 border-t border-[#2E3F70] bg-[#1A2A5A] shadow-lg">
      {/* Chat Tab */}
      <button
        onClick={() => setActiveTab('chat')}
        className={`flex flex-col items-center transition-transform duration-200 ${
          activeTab === 'chat'
            ? 'text-[#F79D65] scale-110'
            : 'text-[#C6C6C6] hover:text-[#F4EDE4]'
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
            ? 'text-[#F79D65] scale-110'
            : 'text-[#C6C6C6] hover:text-[#F4EDE4]'
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
            ? 'text-[#F79D65] scale-110'
            : 'text-[#C6C6C6] hover:text-[#F4EDE4]'
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
            ? 'text-[#F79D65] scale-110'
            : 'text-[#C6C6C6] hover:text-[#F4EDE4]'
        }`}
      >
        <Search className="w-6 h-6" />
        <span className="text-xs mt-1">Search</span>
      </button>
    </nav>
  );
}
