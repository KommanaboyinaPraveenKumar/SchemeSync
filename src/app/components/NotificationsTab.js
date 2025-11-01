'use client';
import { Bell, PartyPopper } from 'lucide-react';

export default function NotificationsTab() {
  return (
    <div className="bg-[#1C2B48] rounded-2xl shadow-lg p-6 text-center text-white border border-[#30456C]">
      <Bell className="mx-auto w-12 h-12 text-[#F8A23B] mb-3 drop-shadow-md" />
      <h2 className="text-xl font-semibold text-white mb-2">Notifications</h2>
      <p className="text-sm text-gray-300 mb-6">
        You’ll see scheme updates and alerts here soon.
      </p>

      {/* Dummy Notification */}
      <div className="bg-[#243C64] border border-[#36537D] rounded-xl p-4 text-left flex items-start gap-3 shadow-md hover:shadow-lg transition-all duration-200">
        <PartyPopper className="text-[#F8A23B] w-6 h-6 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-white">
            🎉 You’ve unlocked the “Early Bird” badge!
          </p>
          <p className="text-xs text-gray-300 mt-1">
            Thanks for checking out notifications before they’re live 😄
          </p>
        </div>
      </div>
    </div>
  );
}
