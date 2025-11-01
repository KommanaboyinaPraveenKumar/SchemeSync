'use client';
import { useState } from 'react';
import { MessageCircle, Bell, User } from 'lucide-react';
import ChatTab from './components/ChatTab';
import ProfileTab from './components/CreateProfile';
import NotificationsTab from './components/NotificationsTab';
import Navbar from './components/Navbar';
import Search from './components/find';
import './globals.css';

export default function BharatGPT() {
  const [activeTab, setActiveTab] = useState('chat');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#FFFFFF] via-[#EAF6FB] to-[#B3E6FA]">
      {/* Header */}
      <header className="px-6 py-3 text-center bg-gradient-to-t from-[#B3E6FA]/30 via-[#EAF6FB]/40 to-[#FFFFFF]/80 rounded-b-3xl shadow-sm">
  <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 text-sm font-medium text-[#0098D8] bg-[#0098D8]/10 rounded-full">
    <div className="w-2 h-2 bg-[#0098D8] rounded-full" />
    Empowering Citizens with Knowledge
  </div>

  <h1 className="text-5xl font-bold text-[#1A1A1A] mb-2 tracking-tight">
    SchemeSync
  </h1>
  <p className="text-xl text-[#0098D8] mb-2">
    Your AI Assistant for Government Schemes
  </p>
  <p className="text-gray-700">
    Access information about 900+ Central and State schemes in your language.
  </p>
  <p className="text-gray-600 font-devanagari">
    सरकारी योजनाओं की जानकारी अपनी भाषा में प्राप्त करें।
  </p>
</header>


      {/* Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main content */}
      <div className="flex-grow overflow-y-auto bg-white rounded-t-2xl shadow-inner">
        {activeTab === 'chat' && <ChatTab />}
        {activeTab === 'profile' && <ProfileTab />}
        {activeTab === 'notifications' && <NotificationsTab />}
        {activeTab === 'search' && <Search />}
      </div>

      
    </div>
  );
}
