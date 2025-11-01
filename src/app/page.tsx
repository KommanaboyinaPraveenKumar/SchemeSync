'use client';
import { useState } from 'react';
import { MessageCircle, Bell, User } from 'lucide-react';
import ChatTab from './components/ChatTab';
import ProfileTab from './components/CreateProfile';
import NotificationsTab from './components/NotificationsTab';
import Navbar from './components/Navbar';
import Search from './components/find';
import languages from './locales/languages.json';
import './globals.css';

export default function BharatGPT() {
  const [activeTab, setActiveTab] = useState('chat');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [language, setLanguage] = useState<
    'en' | 'hi' | 'te' | 'ta' | 'ml' | 'kn' | 'mr' | 'gu' | 'bn' | 'as' | 'or' | 'pa' | 'ur'
  >('en');
const t = languages[language] || languages["en"];

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#FFFFFF] via-[#EAF6FB] to-[#B3E6FA]">
      {/* Header */}
      <header className="px-6 py-3 text-center bg-gradient-to-t from-[#B3E6FA]/30 via-[#EAF6FB]/40 to-[#FFFFFF]/80 rounded-b-3xl shadow-sm">
        <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 text-sm font-medium text-[#0098D8] bg-[#0098D8]/10 rounded-full">
          <div className="w-2 h-2 bg-[#0098D8] rounded-full" />
          {t.tagline}
        </div>

        <h1 className="text-5xl font-bold text-[#1A1A1A] mb-2 tracking-tight">
          {t.title}
        </h1>

        <p className="text-xl text-[#0098D8] mb-2">{t.subtitle}</p>
        <p className="text-gray-700">{t.description}</p>
        <p className="text-gray-600 font-devanagari">{t.hindiText}</p>

        {/* Language Selector */}
        <div className="mt-4">
          <select
            value={language}
            onChange={(e) =>
              setLanguage(
                e.target.value as
                  | 'en'
                  | 'hi'
                  | 'te'
                  | 'ta'
                  | 'ml'
                  | 'kn'
                  | 'mr'
                  | 'gu'
                  | 'bn'
                  | 'as'
                  | 'or'
                  | 'pa'
                  | 'ur'
              )
            }
            className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0098D8] text-[#0098D8] bg-white cursor-pointer transition hover:bg-[#E6F7FF]"
          >
            <option value="en">🇬🇧 English</option>
            <option value="hi">🇮🇳 हिन्दी</option>
            <option value="te">🇮🇳 తెలుగు</option>
            <option value="ta">🇮🇳 தமிழ்</option>
            <option value="ml">🇮🇳 മലയാളം</option>
            <option value="kn">🇮🇳 ಕನ್ನಡ</option>
            <option value="mr">🇮🇳 मराठी</option>
            <option value="gu">🇮🇳 ગુજરાતી</option>
            <option value="bn">🇮🇳 বাংলা</option>
            <option value="as">🇮🇳 অসমীয়া</option>
            <option value="or">🇮🇳 ଓଡ଼ିଆ</option>
            <option value="pa">🇮🇳 ਪੰਜਾਬੀ</option>
            <option value="ur">🇮🇳 اُردُو</option>
          </select>
        </div>
      </header>

      {/* Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} language={language} />

      {/* Main content */}
      <div className="flex-grow overflow-y-auto bg-white rounded-t-2xl shadow-inner">
        {activeTab === 'chat' && <ChatTab language={language} />}
        {activeTab === 'profile' && <ProfileTab language={language} />}
        {activeTab === 'notifications' && <NotificationsTab language={language} />}
        {activeTab === 'search' && <Search language={language} />}
      </div>
    </div>
  );
}
