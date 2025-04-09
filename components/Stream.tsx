'use client'
import { useState } from 'react';
import { Search, Menu, Bell, User, MessageSquare, Gift, Heart, Share2, Users, BarChart2, Monitor, ChevronDown, Settings, LogOut } from 'lucide-react';
import Channels from './Stream/channels';
import Navbar from './Stream/Navbar';
import MainStream from './Stream/MainStream';
import Chat from './Stream/Chat';

export default function Stream() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-black text-gray-300 font-mono overflow-hidden">
      <Navbar/>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-14 right-0 w-64 bg-gray-900 border-l border-pink-600 h-screen z-20 shadow-lg">
          <div className="p-4 space-y-4">
            <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
              <Bell size={18} className="text-gray-400" />
              <span>Notifications</span>
            </div>
            <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
              <MessageSquare size={18} className="text-gray-400" />
              <span>Whispers</span>
            </div>
            <div className="border-t border-gray-700 my-2"></div>
            <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
              <User size={18} className="text-gray-400" />
              <span>Channel</span>
            </div>
            <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
              <Settings size={18} className="text-gray-400" />
              <span>Settings</span>
            </div>
            <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
              <LogOut size={18} className="text-gray-400" />
              <span>Log Out</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Channels/>
        
        {/* Content */}
        <MainStream/>
        
        {/* Chat */}
        <Chat/>
      </div>
    </div>
  );
}

