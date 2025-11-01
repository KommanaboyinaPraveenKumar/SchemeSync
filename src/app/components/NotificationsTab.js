'use client';
import { Bell, PartyPopper } from 'lucide-react';

export default function NotificationsTab() {
  return (
    <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl p-6 text-center text-[#043042] border border-[#B3E6FA]/60 mx-auto w-[90%] sm:w-[80%] md:w-[60%] mt-6">
      <Bell className="mx-auto w-12 h-12 text-[#0074D8] mb-3 drop-shadow-md" />
      <h2 className="text-xl font-semibold text-[#0074D8] mb-2">
        Notifications
      </h2>
      <p className="text-sm text-[#4A6374] mb-6">
        You’ll see scheme updates and alerts here soon.
      </p>

      {/* Dummy Notification */}
      <div className="bg-[#EAF6FB]/80 border border-[#B3E6FA] rounded-xl p-4 text-left flex items-start gap-3 shadow-md hover:shadow-lg hover:bg-[#FFFFFF]/90 transition-all duration-300">
        <PartyPopper className="text-[#0074D8] w-6 h-6 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-[#043042]">
            🎉 You’ve unlocked the “Early Bird” badge!
          </p>
          <p className="text-xs text-[#4A6374] mt-1">
            Thanks for checking out notifications before they’re live 😄
          </p>
        </div>
      </div>
    </div>
  );
}
