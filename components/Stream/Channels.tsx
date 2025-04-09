// Sidebar Component with enhanced cyberpunk theme
import React, { useState, useEffect } from 'react';
import { 
  TerminalSquare, Tv, Gamepad2, Zap, ChevronLeft, ChevronRight, 
  Search, Bell, Settings, Wifi, ShieldAlert, Radio, Cpu, Eye
} from 'lucide-react';
import { useRouter } from 'next/navigation';

function Sidebar({ isOpen, setIsOpen, setCurrentSection }) {
  const [hoveredChannel, setHoveredChannel] = useState(null);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  
  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 150);
    }, Math.random() * 10000 + 5000);
    
    // Digital clock
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    
    return () => {
      clearInterval(glitchInterval);
      clearInterval(clockInterval);
    };
  }, []);
  
  const handleSetSection = (section) => {
    setCurrentSection(section);
    // Add glitch effect when changing sections
    setGlitchEffect(true);
    setTimeout(() => setGlitchEffect(false), 200);
  };
  
  return (
    <>
      {/* Mobile overlay when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <aside className={`w-64 bg-[#121212] border-r border-cyan-900/50 fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto z-30 flex flex-col ${glitchEffect ? 'animate-pulse' : ''}`}>
        {/* Sidebar header with logo */}
        <div className="h-16 border-b border-cyan-900/50 px-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Wifi size={16} className="text-gray-900" />
            </div>
            <span className="ml-2 text-cyan-400 font-bold tracking-wider">NEON<span className="text-purple-400">STREAM</span></span>
          </div>
          {/* <div className="text-xs text-cyan-500 font-mono">{currentTime}</div> */}
          <button 
            onClick={() => setIsOpen(false)} 
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
        
        {/* Search bar */}
        <div className="p-4 border-b border-cyan-900/30">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search channels" 
              className="w-full bg-gray-800 text-gray-200 py-2 pl-9 pr-3 rounded-lg border border-cyan-900/30 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 placeholder-gray-500 text-sm"
            />
            <Search size={16} className="absolute left-3 top-2.5 text-gray-500" />
          </div>
          <div className="mt-2 flex justify-between text-xs text-cyan-800">
            <span>DATANET STATUS: <span className="text-green-400">ONLINE</span></span>
            <span className="flex items-center"><Eye size={10} className="mr-1" /> 142.5K</span>
          </div>
        </div>
        
        {/* Main content */}
        <div className="p-4 flex-1 overflow-y-auto custom-scrollbar">
          {/* <div className="mb-6">
            <h3 className="text-xs uppercase tracking-wider text-cyan-400 mb-2 font-bold flex items-center">
              <Cpu size={12} className="mr-1" /> Main Feed
            </h3>
            <ul className="space-y-1">
              <SidebarLink 
                icon={<TerminalSquare size={18} />} 
                onClick={() => handleSetSection('recommended')} 
                active
                notification="8"
              >
                Recommended
              </SidebarLink>
              <SidebarLink 
                icon={<Tv size={18} />} 
                onClick={() => handleSetSection('following')}
              >
                Following
              </SidebarLink>
              <SidebarLink 
                icon={<Gamepad2 size={18} />} 
                onClick={() => handleSetSection('categories')}
              >
                Categories
              </SidebarLink>
              <SidebarLink 
                icon={<Zap size={18} />}
                onClick={() => handleSetSection('live')}
                notification="LIVE"
                notificationType="live"
              >
                Live Now
              </SidebarLink>
              <SidebarLink 
                icon={<ShieldAlert size={18} />}
                onClick={() => handleSetSection('secure')}
                notification="NEW"
                notificationType="new"
              >
                Secure Channel
              </SidebarLink>
            </ul>
          </div> */}
          
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs uppercase tracking-wider text-cyan-400 font-bold flex items-center">
                <Radio size={12} className="mr-1" /> Followed Channels
              </h3>
              <button className="text-gray-500 hover:text-gray-300">
                <ChevronRight size={16} />
              </button>
            </div>
            <ul className="space-y-1">
              <ChannelLink 
                name="NeonHunter" 
                game="Cyberpunk 2078" 
                viewers="12.4K"
                avatar="neon" 
                isLive 
                onHover={() => setHoveredChannel('NeonHunter')}
                onLeave={() => setHoveredChannel(null)}
                isHovered={hoveredChannel === 'NeonHunter'}
                isVerified
                isEncrypted
                isNew={false}
                isVIP={false}
              />
              <ChannelLink 
                name="PixelRiot" 
                game="Night City Racers" 
                viewers="5.2K"
                avatar="pixel" 
                isLive 
                onHover={() => setHoveredChannel('PixelRiot')}
                onLeave={() => setHoveredChannel(null)}
                isHovered={hoveredChannel === 'PixelRiot'}
                isEncrypted={false}
                isNew={false}
                isVIP={false}
                isVerified
              />
              <ChannelLink 
                name="SynthQueen" 
                game="Just Chatting" 
                avatar="synth"
                onHover={() => setHoveredChannel('SynthQueen')}
                onLeave={() => setHoveredChannel(null)}
                isHovered={hoveredChannel === 'SynthQueen'}
                isEncrypted
                isNew={false}
                isVIP={true}
                viewers={0}
                isLive={false}
                isVerified={false}
              />
              <ChannelLink 
                name="DataPirate" 
                game="HackNet Simulator" 
                avatar="data"
                onHover={() => setHoveredChannel('DataPirate')}
                onLeave={() => setHoveredChannel(null)}
                isHovered={hoveredChannel === 'DataPirate'}
                isEncrypted
                isNew={false}
                isVIP={false}
                viewers={0}
                isLive={false}
                isVerified
              />
              <ChannelLink 
                name="GlitchMonk" 
                game="System Shock" 
                avatar="glitch"
                onHover={() => setHoveredChannel('GlitchMonk')}
                onLeave={() => setHoveredChannel(null)}
                isHovered={hoveredChannel === 'GlitchMonk'}
                isEncrypted
                isNew={false}
                isVIP={false}
                viewers={0}
                isLive={false}
                isVerified
              />
            </ul>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs uppercase tracking-wider text-cyan-400 font-bold flex items-center">
                <Eye size={12} className="mr-1" /> Recommended
              </h3>
              <button className="text-gray-500 hover:text-gray-300">
                <ChevronRight size={16} />
              </button>
            </div>
            <ul className="space-y-1">
              <ChannelLink 
                name="CyberNomad" 
                game="Neon Drift" 
                viewers="8.7K"
                avatar="cyber" 
                isLive 
                isNew
                onHover={() => setHoveredChannel('CyberNomad')}
                onLeave={() => setHoveredChannel(null)}
                isHovered={hoveredChannel === 'CyberNomad'}
                isVIP={true}
                isEncrypted={false}
                isVerified={true}
              />
              <ChannelLink 
                name="DigitalGhost" 
                game="Neural Link" 
                avatar="ghost"
                onHover={() => setHoveredChannel('DigitalGhost')}
                onLeave={() => setHoveredChannel(null)}
                isHovered={hoveredChannel === 'DigitalGhost'}
                isEncrypted
                isNew={true}
                isVIP={true}
                viewers={0}
                isVerified={false}
                isLive={false}
              />
              <ChannelLink 
                name="ByteRunner" 
                game="GridWars X" 
                viewers="3.1K"
                avatar="byte" 
                isLive
                onHover={() => setHoveredChannel('ByteRunner')}
                onLeave={() => setHoveredChannel(null)}
                isHovered={hoveredChannel === 'ByteRunner'}
                isVerified
                isNew={true}
                isVIP={true}
                isEncrypted={true}
              />
            </ul>
          </div>
        </div>
        
        {/* User section */}
        {/* <div className="p-3 border-t border-cyan-900/30 bg-gray-800/50">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center">
              <span className="text-xs text-white font-mono">XJ7</span>
            </div>
            <div className="ml-2 flex-1">
              <div className="text-sm font-medium text-gray-200">User_XJ7</div>
              <div className="text-xs text-gray-400 flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                <span>Online</span>
                <span className="ml-2 text-cyan-400">Lvl 42</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="text-gray-400 hover:text-gray-200 relative">
                <Bell size={16} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="text-gray-400 hover:text-gray-200">
                <Settings size={16} />
              </button>
            </div>
          </div>
        </div> */}
      </aside>
      
      {/* Hover previews container - placed outside the sidebar to avoid overflow issues */}
      <div className="fixed pointer-events-none z-40">
      {hoveredChannel === 'NeonHunter' && (
        <ChannelPreview
          name="NeonHunter"
          game="Cyberpunk 2078"
          viewers="12.4K"
          avatar="neon"
          isLive
          isNew={false}
          isVerified
          isVIP={false}
          isEncrypted
        />
      )}
      {hoveredChannel === 'PixelRiot' && (
        <ChannelPreview
          name="PixelRiot"
          game="Night City Racers"
          viewers="5.2K"
          avatar="pixel"
          isLive
          isNew={false}
          isVerified
          isVIP={false}
          isEncrypted={false}
        />
      )}
      {hoveredChannel === 'SynthQueen' && (
        <ChannelPreview
          name="SynthQueen"
          game="Just Chatting"
          viewers={0}
          avatar="synth"
          isLive={false}
          isNew={false}
          isVerified={false}
          isVIP
          isEncrypted
        />
      )}
      {hoveredChannel === 'DataPirate' && (
        <ChannelPreview
          name="DataPirate"
          game="HackNet Simulator"
          viewers={0}
          avatar="data"
          isLive={false}
          isNew={false}
          isVerified
          isVIP={false}
          isEncrypted
        />
      )}
      {hoveredChannel === 'GlitchMonk' && (
        <ChannelPreview
          name="GlitchMonk"
          game="System Shock"
          viewers={0}
          avatar="glitch"
          isLive={false}
          isNew={false}
          isVerified
          isVIP={false}
          isEncrypted
        />
      )}
      {hoveredChannel === 'CyberNomad' && (
        <ChannelPreview
          name="CyberNomad"
          game="Neon Drift"
          viewers="8.7K"
          avatar="cyber"
          isLive
          isNew
          isVerified
          isVIP
          isEncrypted={false}
        />
      )}
      {hoveredChannel === 'DigitalGhost' && (
        <ChannelPreview
          name="DigitalGhost"
          game="Neural Link"
          viewers={0}
          avatar="ghost"
          isLive={false}
          isNew
          isVerified={false}
          isVIP
          isEncrypted
        />
      )}
      {hoveredChannel === 'ByteRunner' && (
        <ChannelPreview
          name="ByteRunner"
          game="GridWars X"
          viewers="3.1K"
          avatar="byte"
          isLive
          isNew
          isVerified
          isVIP
          isEncrypted
        />
      )}

      </div>
      
      {/* Toggle button for mobile */}
      {!isOpen && (
        <button 
          className="fixed bottom-4 left-4 z-30 lg:hidden bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-200 border border-cyan-400/30"
          onClick={() => setIsOpen(true)}
        >
          <ChevronRight size={20} />
        </button>
      )}
    </>
  );
}

// Sidebar Link Component
function SidebarLink({ icon, children, active, onClick, notification, notificationType }) {
  return (
    <li>
      <a 
        href="#" 
        onClick={(e) => { e.preventDefault(); onClick && onClick(); }} 
        className={`flex items-center justify-between px-3 py-2 rounded-lg group transition-all duration-200 ${
          active 
            ? 'bg-gradient-to-r from-purple-900/70 to-cyan-900/40 text-white border-l-2 border-cyan-400' 
            : 'text-gray-300 hover:bg-gray-800/80 hover:text-cyan-400'
        }`}
      >
        <div className="flex items-center space-x-3">
          <span className={`transition-colors duration-200 ${active ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'}`}>
            {icon}
          </span>
          <span>{children}</span>
        </div>
        
        {notification && (
          <span className={`text-xs px-1.5 py-0.5 rounded ${
            notificationType === 'live' 
              ? 'bg-red-500 text-white animate-pulse' 
              : notificationType === 'new' 
                ? 'bg-purple-500 text-white' 
                : 'bg-gray-700 text-cyan-400'
          }`}>
            {notification}
          </span>
        )}
      </a>
    </li>
  );
}

// Channel Link Component
function ChannelLink({ name, game, viewers, avatar, isLive, isNew, onHover, onLeave, isHovered, isVerified, isVIP, isEncrypted }) {
  const router = useRouter();
  return (
    <li 
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="relative"
      onClick={() => router.push(`/live/${name}`)}
    >
      <a href={`/live/${name}`} onClick={(e) => e.preventDefault()} className="flex items-center px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800/80 hover:text-cyan-400 group transition-all duration-200">
        <div className="relative">
          <div className={`w-8 h-8 rounded ${
            avatar === 'neon' ? 'bg-gradient-to-r from-cyan-500 to-blue-600' :
            avatar === 'pixel' ? 'bg-gradient-to-r from-green-500 to-emerald-600' :
            avatar === 'synth' ? 'bg-gradient-to-r from-purple-500 to-pink-600' :
            avatar === 'data' ? 'bg-gradient-to-r from-orange-500 to-red-600' :
            avatar === 'glitch' ? 'bg-gradient-to-r from-blue-500 to-indigo-600' :
            avatar === 'cyber' ? 'bg-gradient-to-r from-yellow-500 to-amber-600' :
            avatar === 'ghost' ? 'bg-gradient-to-r from-purple-500 to-indigo-600' :
            avatar === 'byte' ? 'bg-gradient-to-r from-cyan-500 to-blue-600' :
            'bg-gray-700'
          } flex items-center justify-center`}>
            <span className="text-xs font-bold text-white">{name.substring(0, 1)}</span>
          </div>
          {isLive && (
            <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-gray-900 animate-pulse"></span>
          )}
        </div>
        
        <div className="ml-2 flex-1 min-w-0">
          <div className="flex items-center">
            <div className="font-medium truncate mr-1 max-w-24">{name}</div>
            {isVerified && (
              <span className="text-cyan-400" title="Verified">
                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </span>
            )}
            {isVIP && (
              <span className="text-purple-400" title="VIP">
                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </span>
            )}
            {isEncrypted && (
              <span className="text-red-400" title="Encrypted Channel">
                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </span>
            )}
          </div>
          <div className="text-xs text-gray-500 truncate">{game}</div>
        </div>
        
        {isLive && (
          <div className="text-xs font-medium">
            <span className="flex items-center text-red-400">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1"></span>
              {viewers}
            </span>
          </div>
        )}
      </a>
      
      {/* Hover preview */}
      {/* {isHovered && (
        <div className="absolute left-full ml-2 top-0 w-48 bg-gray-800 rounded-lg border border-cyan-900/50 shadow-xl z-50 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-900/40 to-cyan-900/20 p-3">
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded ${
                avatar === 'neon' ? 'bg-gradient-to-r from-cyan-500 to-blue-600' :
                avatar === 'pixel' ? 'bg-gradient-to-r from-green-500 to-emerald-600' :
                avatar === 'synth' ? 'bg-gradient-to-r from-purple-500 to-pink-600' :
                avatar === 'data' ? 'bg-gradient-to-r from-orange-500 to-red-600' :
                avatar === 'glitch' ? 'bg-gradient-to-r from-blue-500 to-indigo-600' :
                avatar === 'cyber' ? 'bg-gradient-to-r from-yellow-500 to-amber-600' :
                avatar === 'ghost' ? 'bg-gradient-to-r from-purple-500 to-indigo-600' :
                avatar === 'byte' ? 'bg-gradient-to-r from-cyan-500 to-blue-600' :
                'bg-gray-700'
              } flex items-center justify-center`}>
                <span className="text-sm font-bold text-white">{name.substring(0, 1)}</span>
              </div>
              <div className="ml-2">
                <div className="font-medium text-white flex items-center">
                  {name}
                  {isVerified && <span className="ml-1 text-cyan-400"><svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg></span>}
                  {isVIP && <span className="ml-1 text-purple-400"><svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>}
                  {isEncrypted && <span className="ml-1 text-red-400"><svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span>}
                </div>
                <div className="text-xs text-gray-400">{game}</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/90 px-3 py-2">
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>{isLive ? 'LIVE' : 'OFFLINE'}</span>
              <span>Followers: 124K</span>
            </div>
            <div className="text-xs text-gray-300 line-clamp-2">
              {avatar === 'neon' ? 'Exploring Night City with new cyber implants!' : 
               avatar === 'pixel' ? 'Racing through the neon streets of New Tokyo!' :
               avatar === 'synth' ? 'Music production and cyber fashion talk!' :
               avatar === 'data' ? 'Hacking the mainframe, evading Netwatch!' :
               avatar === 'glitch' ? 'Exploring system vulnerabilities and tech talk.' :
               avatar === 'cyber' ? 'High-speed drifting through augmented reality!' :
               avatar === 'ghost' ? 'Building neural interfaces for enhanced gaming.' :
               avatar === 'byte' ? 'Tactical strategy in the digital warzone!' :
               'Streaming the latest content from the net!'}
            </div>
            {isLive && viewers && (
              <div className="mt-2 bg-gray-900/60 rounded-md px-2 py-1 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>Viewers:</span>
                  <span className="text-cyan-400">{viewers}</span>
                </div>
                <div className="w-full h-1 bg-gray-700 rounded-full mt-1 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            )}
          </div>
        </div>
      )} */}
    </li>
  );
}
// Separate Channel Preview Component - positioned in DOM differently
function ChannelPreview({ name, game, viewers, avatar, isLive, isNew, isVerified, isVIP, isEncrypted }) {
  // Calculate position - this is fixed because we are using a fixed container
  // In a real implementation, you might want to dynamically calculate this based on
  // the position of the hovered item to ensure it appears next to it
  
  return (
    <div className="pointer-events-auto fixed left-64 top-1/4 w-48 bg-gray-800 rounded-lg border border-cyan-900/50 shadow-xl overflow-hidden"
         style={{ transform: 'translateX(8px)' }}>
      <div className="bg-gradient-to-r from-purple-900/40 to-cyan-900/20 p-3">
        <div className="flex items-center">
          <div className={`w-10 h-10 rounded ${
            avatar === 'neon' ? 'bg-gradient-to-r from-cyan-500 to-blue-600' :
            avatar === 'pixel' ? 'bg-gradient-to-r from-green-500 to-emerald-600' :
            avatar === 'synth' ? 'bg-gradient-to-r from-purple-500 to-pink-600' :
            avatar === 'data' ? 'bg-gradient-to-r from-orange-500 to-red-600' :
            avatar === 'glitch' ? 'bg-gradient-to-r from-blue-500 to-indigo-600' :
            avatar === 'cyber' ? 'bg-gradient-to-r from-yellow-500 to-amber-600' :
            avatar === 'ghost' ? 'bg-gradient-to-r from-purple-500 to-indigo-600' :
            avatar === 'byte' ? 'bg-gradient-to-r from-cyan-500 to-blue-600' :
            'bg-gray-700'
          } flex items-center justify-center`}>
            <span className="text-sm font-bold text-white">{name.substring(0, 1)}</span>
          </div>
          <div className="ml-2">
            <div className="font-medium text-white flex items-center">
              {name}
              {isVerified && <span className="ml-1 text-cyan-400"><svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg></span>}
              {isVIP && <span className="ml-1 text-purple-400"><svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>}
              {isEncrypted && <span className="ml-1 text-red-400"><svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span>}
            </div>
            <div className="text-xs text-gray-400">{game}</div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800/90 px-3 py-2">
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span>{isLive ? 'LIVE' : 'OFFLINE'}</span>
          <span>Followers: 124K</span>
        </div>
        <div className="text-xs text-gray-300 line-clamp-2">
          {avatar === 'neon' ? 'Exploring Night City with new cyber implants!' : 
           avatar === 'pixel' ? 'Racing through the neon streets of New Tokyo!' :
           avatar === 'synth' ? 'Music production and cyber fashion talk!' :
           avatar === 'data' ? 'Hacking the mainframe, evading Netwatch!' :
           avatar === 'glitch' ? 'Exploring system vulnerabilities and tech talk.' :
           avatar === 'cyber' ? 'High-speed drifting through augmented reality!' :
           avatar === 'ghost' ? 'Building neural interfaces for enhanced gaming.' :
           avatar === 'byte' ? 'Tactical strategy in the digital warzone!' :
           'Streaming the latest content from the net!'}
        </div>
        {isLive && viewers && (
          <div className="mt-2 bg-gray-900/60 rounded-md px-2 py-1 text-xs text-gray-300">
            <div className="flex justify-between">
              <span>Viewers:</span>
              <span className="text-cyan-400">{viewers}</span>
            </div>
            <div className="w-full h-1 bg-gray-700 rounded-full mt-1 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


export default Sidebar;