'use client'
import data from '@/app/data';
import { Activity, AlertTriangle, BarChart2, Calendar, ChevronDown, ChevronRight, ChevronUp, Clock, Database, DollarSign, ExternalLink, Eye, MessageSquare, Play, Shield, Signal, Tag, Terminal, TrendingUp, Trophy, Users, Wifi, Zap } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './Stream/Channels';
import Navbar from './Stream/Navbar';
import { useRouter } from 'next/navigation';
import FeaturedStream from './Browse/FeaturedStream';
// System alerts and messages for the ticker
const systemAlerts = [
    "NET SECTOR 7 EXPERIENCING INCREASED TRAFFIC",
    "CORP PATROL ACTIVITY DETECTED IN SECTORS 3, 8, 12",
    "NEW DATABREACH PROTOCOLS ACTIVATED IN NIGHT CITY",
    "PRIME MEMBERSHIP DISCOUNT: 20% OFF FOR NEXT 24 HOURS",
    "STREAM QUALITY OPTIMIZATIONS AVAILABLE FOR NEURAL LINK USERS",
    "SECURITY ALERT: BLACKWALL BREACH ATTEMPTS DETECTED",
    "NETWATCH ACTIVITY INCREASED IN WESTBROOK DISTRICT",
    "BREAKING: ARASAKA ANNOUNCES NEW CYBERWARE LINE",
    "TRAUMA TEAM DEPLOYING TO WATSON DISTRICT - STREAM DISRUPTIONS POSSIBLE"
  ];
const Browse = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState('recommended');
    const [theme, setTheme] = useState('neon'); // neon, retro, minimal
    return  (
        <div className={`min-h-screen bg-gray-900 text-gray-100 overflow-hidden relative ${theme === 'minimal' ? 'bg-opacity-95' : ''}`}>
          
        {/* Main layout */}
        <div className="flex flex-col h-screen">
            {/* <Navbar setIsMenuOpen={setIsMenuOpen} /> */}
            <Navbar setIsMenuOpen={setIsMenuOpen} />
            
            <div className="flex flex-1 overflow-hidden">
            {/* Sidebar navigation */}
            {/* <Sidebar isOpen={isMenuOpen} setCurrentSection={setCurrentSection} /> */}
            <Sidebar setIsOpen={setIsMenuOpen} isOpen={isMenuOpen} setCurrentSection={setCurrentSection} />
            
            {/* Main content area */}
            <main className="flex-1 overflow-y-auto relative z-10">
                <div className="mx-auto px-4 pt-6">
                {/* <FeaturedStream 
                    isVideoPlaying={isVideoPlaying} 
                    setIsVideoPlaying={setIsVideoPlaying}
                    isMuted={isMuted}
                    setIsMuted={setIsMuted}
                /> */}
                <MainComp/>
                
                </div>
            </main>
            </div>
        </div>
        </div>
    )
}

const MainComp = ()=>{
    const [activeIndex, setActiveIndex] = useState(2); // Center stream is active by default
      const [isPlaying, setIsPlaying] = useState(true);
      const [isGlitching, setIsGlitching] = useState(false);
      const [systemMessage, setSystemMessage] = useState("CONNECTION ESTABLISHED");
      const systemMessageRef = useRef(null);
      const streams = data.carouselStreams;
      // Auto-rotate carousel every 8 seconds if not the center stream
      useEffect(() => {
        if (activeIndex !== 2 && isPlaying) {
          const timer = setTimeout(() => {
            setActiveIndex(2); // Return to center
          }, 8000);
          return () => clearTimeout(timer);
        }
      }, [activeIndex, isPlaying]);
  // Auto-rotate carousel every 8 seconds if not the center stream
  useEffect(() => {
    if (activeIndex !== 2 && isPlaying) {
      const timer = setTimeout(() => {
        setActiveIndex(2); // Return to center
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, isPlaying]);

  // Random glitch effect
  useEffect(() => {
    const startRandomGlitches = () => {
      const glitchInterval = setInterval(() => {
        if (Math.random() > 0.7) {
          setIsGlitching(true);
          setTimeout(() => setIsGlitching(false), 500);
        }
      }, 3000);
      return glitchInterval;
    };
    
    const glitchInterval = startRandomGlitches();
    return () => clearInterval(glitchInterval);
  }, []);

  // System messages
  useEffect(() => {
    const systemMessages = [
      "SIGNAL STRONG: NEURAL LINK ACTIVE",
      "BANDWIDTH OPTIMIZED",
      "REALITY AUGMENTATION ENGAGED",
      "FIREWALL STATUS: SECURE",
      "BRAINDANCE STREAMS AVAILABLE",
      "ENCRYPTED CONNECTION VERIFIED",
      "NETWATCH PRESENCE: UNDETECTED"
    ];
    
    systemMessageRef.current = setInterval(() => {
      setSystemMessage(systemMessages[Math.floor(Math.random() * systemMessages.length)]);
    }, 10000);
    
    return () => clearInterval(systemMessageRef.current);
  }, []);

  // Additional glitch effect when changing streams
  useEffect(() => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 300);
  }, [activeIndex]);
  const formatViewers = (num) => {
    return num > 1000 ? `${(num / 1000).toFixed(1)}K` : num;
  };
  return (
    <div className="bg-black min-h-screen text-white font-mono relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[#121212] bg-opacity-80 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8a2be2] to-[#ff007f] opacity-5"></div>
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-[#00f0ff] border-opacity-10"></div>
          ))}
        </div>
        {/* Scanning line animation */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="h-px w-full bg-[#00f0ff] opacity-20 transform translate-y-0 animate-scan"></div>
        </div>
        
        {/* Data matrix background */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute text-[#00f0ff] text-xs leading-none animate-matrix">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="whitespace-nowrap">
                {Array.from({ length: 100 }).map((_, j) => (
                  <span key={j}>{Math.random() > 0.5 ? '0' : '1'}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Header - mimics Twitch with cyberpunk flair */}
      <div className="relative z-10 mb-6">
        <div className="flex items-center">
          <div className="h-6 w-1 bg-[#ff007f] mr-2 animate-pulse"></div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#00f0ff] to-[#ff007f] bg-clip-text text-transparent inline-block">
            NEURAL_STREAMS
          </h1>
          <div className={`ml-4 px-2 py-1 bg-black/50 border border-[#00f0ff]/30 rounded text-xs ${isGlitching ? 'animate-glitch' : ''}`}>
            v2.0.77
          </div>
        </div>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm text-[#8a8a8a]">Dive into the digital realm. Live streams for netrunners.</p>
          <div className="flex items-center text-xs">
            <div className="h-2 w-2 rounded-full bg-[#00f0ff] animate-pulse mr-1"></div>
            <span className="text-[#00f0ff] mr-4">{systemMessage}</span>
            <div className="px-2 py-1 bg-black/50 border border-[#ff007f]/30 rounded flex items-center">
              <Users className="h-3 w-3 mr-1 text-[#ff007f]" />
              <span>{formatViewers(streams.reduce((sum, s) => sum + s.viewers, 0))}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-2 h-1 mb-6 w-full bg-[#333]">
          <div className="h-full bg-gradient-to-r from-[#00f0ff] to-[#ff007f] w-3/4 relative animate-pulse">
            <div className="absolute top-0 right-0 h-full w-1 bg-white"></div>
          </div>
        </div>
        <FeaturedStream/>
        <Shorts/>
        <LiveStreams/>
        <RecommendedStreams/>
        <div className='mt-12'></div>
        <TopComp/>
        <Clips/>
        <Broadcast/>
        <Stats/>
        {/* New Feature: Current Broadcasts by Category */}
      </div>
      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
        
        @keyframes glitch-1 {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes glitch-2 {
          0% { transform: translateX(100%); }
          50% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-scan {
          animation: scan 8s linear infinite;
        }
        
        .animate-glitch-1 {
          animation: glitch-1 8s linear infinite;
        }
        
        .animate-glitch-2 {
          animation: glitch-2 12s linear infinite;
        }
        
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
        
        .animate-slideRight {
          animation: slideRight 0.3s ease-out forwards;
        }
        
        @keyframes slideRight {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #00f0ff, #8a2be2);
          border-radius: 2px;
        }

        .glitch-effect {
          position: relative;
        }
        
        .glitch-effect:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
                                    transparent 0%, 
                                    rgba(0, 240, 255, 0.1) 2%, 
                                    transparent 3%);
          animation: glitch-scan 1.5s linear forwards;
          pointer-events: none;
        }
        
        @keyframes glitch-scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
        }
        @keyframes flicker {
        0% { opacity: 0.01; }
        5% { opacity: 0.02; }
        10% { opacity: 0.01; }
        15% { opacity: 0.025; }
        20% { opacity: 0.01; }
        100% { opacity: 0.01; }
        }
        .animate-marquee {
        animation: marquee 20s linear infinite;
        }
        .animate-flicker {
        animation: flicker 3s infinite;
        }
        .bg-scanline {
        background-image: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.4) 50%);
        background-size: 100% 4px;
        }
        .glitch-text {
        position: relative;
        animation: glitch 3s infinite;
        }

        @keyframes glitch {
        0% { text-shadow: none; }
        94% { text-shadow: none; }
        95% { text-shadow: -2px 0 #0ff, 2px 0 #f00; }
        96% { text-shadow: none; }
        97% { text-shadow: -2px 0 #0ff, 2px 0 #f00; }
        98% { text-shadow: none; }
        99% { text-shadow: -2px 0 #0ff, 2px 0 #f00; }
        100% { text-shadow: none; }
        }

        .custom-scrollbar::-webkit-scrollbar {
        width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(139, 92, 246, 0.5);
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: rgba(139, 92, 246, 0.7);
        }
      `}</style>
    </div>
  )
}

function Stats() {
    const [systemAlerts] = useState([
        "Security protocols activated",
        "Neural link established",
        "Cyberdeck firmware update available",
        "Synthetic intelligence enhancement detected",
        "Biometric authentication verified",
        "Accessing darknet channels",
        "Quantum encryption enabled"
      ]);
    
      const [currentTime, setCurrentTime] = useState(new Date());
      const [glitchActive, setGlitchActive] = useState(false);
    
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
    
        // Random glitch effect
        const glitchInterval = setInterval(() => {
          setGlitchActive(true);
          setTimeout(() => setGlitchActive(false), 150);
        }, 5000 + Math.random() * 10000);
    
        return () => {
          clearInterval(timer);
          clearInterval(glitchInterval);
        };
      }, []);
    
      return (
        <div className={`mb-10 p-4 border border-cyan-500/30 rounded-md bg-gray-900/70 backdrop-blur-sm relative overflow-hidden ${glitchActive ? 'translate-x-px' : ''}`}>
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/5 to-purple-900/5"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            
            {/* Circuit pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgyMHYyMEgwVjB6bTEgMXYxOGgxOFYxSDV6bTQgNGg2djZIOXYtNnptMSAxdjRoNFY2aC00eiIgZmlsbD0iIzBmZmZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')]"></div>
            
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-500/50"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-purple-500/50"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-500/50"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-purple-500/50"></div>
            
            {/* Pulse effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-cyan-500/5 rounded-full animate-pulse"></div>
          </div>
          
          {/* Header with timestamp */}
          <div className="mb-4 text-xs text-cyan-400 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Activity size={12} className="text-cyan-400" />
              <span>SYS_MONITOR_v2.4</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={12} className="text-cyan-400" />
              <span>{currentTime.toLocaleTimeString()} // {currentTime.toLocaleDateString()}</span>
            </div>
          </div>
          
          {/* Main content */}
          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-6">
              {/* Stat Block 1 */}
              <div className="flex items-center gap-2 group">
                <div className="w-2 h-10 bg-cyan-400 group-hover:h-12 transition-all"></div>
                <div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <Wifi size={10} className="text-cyan-400" />
                    ACTIVE_STREAMS//
                  </div>
                  <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">42,187</div>
                </div>
              </div>
              
              {/* Stat Block 2 */}
              <div className="flex items-center gap-2 group">
                <div className="w-2 h-10 bg-purple-500 group-hover:h-12 transition-all"></div>
                <div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <Database size={10} className="text-purple-500" />
                    ONLINE_USERS//
                  </div>
                  <div className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">1.2M</div>
                </div>
              </div>
              
              {/* Stat Block 3 */}
              <div className="flex items-center gap-2 group">
                <div className="w-2 h-10 bg-pink-500 group-hover:h-12 transition-all"></div>
                <div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <Shield size={10} className="text-pink-500" />
                    NETWORK_STATUS//
                  </div>
                  <div className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">OPTIMAL</div>
                </div>
              </div>
              
              {/* Stat Block 4 */}
              <div className="flex items-center gap-2 group">
                <div className="w-2 h-10 bg-yellow-400 group-hover:h-12 transition-all"></div>
                <div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <Activity size={10} className="text-yellow-400" />
                    BANDWIDTH_USAGE//
                  </div>
                  <div className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">86.4%</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="mt-6 bg-gray-800/50 h-1 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
              style={{ width: '86.4%' }}
            ></div>
          </div>
          
          {/* System message ticker */}
          <div className="mt-3 pt-2 border-t border-cyan-500/20 flex items-center gap-2 overflow-hidden">
            <div className="flex-shrink-0 text-xs text-cyan-400 flex items-center gap-1">
              <AlertTriangle size={12} className="text-yellow-500" />
              SYSTEM//
            </div>
            <div className="relative overflow-hidden w-full">
              <div className="animate-marquee whitespace-nowrap text-xs text-gray-400">
                {systemAlerts.join(" // ")}
              </div>
            </div>
          </div>
          
          {/* Scanline effect */}
          <div className="absolute inset-0 pointer-events-none bg-scanline opacity-5"></div>
          
          {/* CRT flicker effect - very subtle */}
          <div className="absolute inset-0 pointer-events-none animate-flicker bg-white opacity-[0.01]"></div>
        </div>
      );
}

function TopComp(){
    // State for animated counts on tags
  const [tagCounts, setTagCounts] = useState({});
  const [highlightedTag, setHighlightedTag] = useState(null);
  const [highlightedEvent, setHighlightedEvent] = useState(null);
  
  // Simulate random tag counts that change occasionally
  useEffect(() => {
    const initialCounts = {};
    tags.forEach(tag => {
      initialCounts[tag] = Math.floor(Math.random() * 1000) + 100;
    });
    setTagCounts(initialCounts);
    
    const interval = setInterval(() => {
      const tagToUpdate = tags[Math.floor(Math.random() * tags.length)];
      setTagCounts(prev => ({
        ...prev,
        [tagToUpdate]: Math.floor(Math.random() * 1000) + 100
      }));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Generate random "heat" levels for tags
  const getTagHeat = (tag) => {
    // This creates a consistent "heat" level for each tag
    const hash = tag.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return (hash % 5) + 1; // 1-5 heat level
  };
  
  const tags = [
    "Cyberpunk", "Neo-Tokyo", "Hacking", "NetRunner", "Corporate", 
    "Dystopian", "Combat", "RPG", "Shooter", "Strategy", 
    "Open World", "Battle Royale", "Sci-Fi", "Blade Runner", 
    "Night City", "Retro-Future", "Neural-Dive", "Chrome"
  ];
  
  const events = [
    { 
      id: 1,
      title: "ANNUAL NETRUNNER CHAMPIONSHIP", 
      date: "APRIL 15, 2077", 
      time: "18:00 UTC", 
      prize: "₩500,000", 
      participants: 256, 
      maxParticipants: 256,
      image: "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2019/06/cyberpunk-netrunner.jpg", 
      status: "FULL",
      statusType: "warning",
      description: "The biggest NetRunner tournament of the year. Compete in high-stakes hacking challenges across multiple corporate databases.",
      sponsors: ["Arasaka", "Militech", "Kang Tao"]
    },
    { 
      id: 2,
      title: "CORPO WARS: SEASON FINALE", 
      date: "APRIL 20, 2077", 
      time: "20:00 UTC", 
      prize: "₩250,000", 
      participants: 64, 
      maxParticipants: 64,
      image: "https://cdn-s.cdprojektred.com/news/d0d0fc155980a3c11af44df8236c2e38052255de_q90_1280x720.png", 
      status: "FULL",
      statusType: "warning",
      description: "The climactic finale of the Corpo Wars tournament series. Corporate teams battle for supremacy in virtual combat arenas.",
      sponsors: ["Militech", "Biotechnica"]
    },
    { 
      id: 3,
      title: "NIGHT CITY UNDERGROUND", 
      date: "APRIL 22, 2077", 
      time: "22:00 UTC", 
      prize: "₩100,000", 
      participants: 128, 
      maxParticipants: 128,
      image: "https://staticg.sportskeeda.com/editor/2022/09/02886-16639610814337-1920.jpg", 
      status: "FULL",
      statusType: "warning",
      description: "Street-level competition for up-and-coming runners. Prove your skills in the digital underground of Night City.",
      sponsors: ["Afterlife", "Lizzie's Bar"]
    }
  ];
  
  // Status color mapping
  const statusColors = {
    success: "bg-green-500 border-green-400",
    warning: "bg-yellow-500 border-yellow-400",
    danger: "bg-red-500 border-red-400",
    info: "bg-blue-500 border-blue-400"
  };
  
  return (
    <div className="space-y-16 text-gray-300">
      {/* Popular Tags Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white relative pl-4 flex items-center gap-2 before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:h-full before:w-1 before:bg-purple-500 before:shadow-lg before:shadow-purple-500/50">
            <Tag size={16} className="text-purple-400" />
            POPULAR_TAGS<span className="text-purple-500 font-mono">//</span><span className="text-cyan-400 flex items-center"><TrendingUp size={16} className="mr-1" />TRENDING</span>
          </h2>
          
          <div className="flex items-center text-xs text-purple-400 bg-gray-900 px-3 py-1 rounded border border-purple-500/30">
            <Activity size={12} className="mr-1" /> LIVE DATA
            <div className="ml-2 w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
          </div>
        </div>
        
        <div className="border border-purple-500/30 rounded-md bg-gray-900/70 p-6 backdrop-blur-sm relative overflow-hidden shadow-lg shadow-purple-900/20">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          {/* Grid effect overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,_#00000000_1px),_linear-gradient(to_right,transparent_1px,_#00000000_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => {
                const heat = getTagHeat(tag);
                return (
                  <div 
                    key={index} 
                    className={`px-3 py-2 bg-gray-800/80 border border-purple-500/30 rounded text-gray-300 cursor-pointer transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(149,76,233,0.3)] group flex items-center`}
                    onMouseEnter={() => setHighlightedTag(tag)}
                    onMouseLeave={() => setHighlightedTag(null)}
                    style={{
                      borderImage: highlightedTag === tag ? 'linear-gradient(45deg, #6366f1, #d946ef) 1' : '',
                      borderImageSlice: highlightedTag === tag ? 1 : ''
                    }}
                  >
                    <div className="flex items-center gap-2">
                      {/* Heat indicator */}
                      <div className="flex space-x-0.5">
                        {Array(5).fill(0).map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-0.5 h-${i+2} rounded-sm ${i < heat ? 'bg-purple-500' : 'bg-gray-700'}`}
                          ></div>
                        ))}
                      </div>
                      
                      <span className={`text-sm font-mono transition-colors ${highlightedTag === tag ? 'text-purple-400' : 'group-hover:text-cyan-400'}`}>{tag}</span>
                      <span className={`text-xs font-mono ${highlightedTag === tag ? 'text-cyan-400' : 'text-gray-500'} tabular-nums`}>
                        {tagCounts[tag] || 0}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      {/* Events and Tournaments Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white relative pl-4 flex items-center gap-2 before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:h-full before:w-1 before:bg-green-500 before:shadow-lg before:shadow-green-500/50">
            <Trophy size={16} className="text-green-400" />
            EVENTS<span className="text-green-500 font-mono">//</span><span className="text-cyan-400">TOURNAMENTS</span>
          </h2>
          
          <button className="flex items-center gap-1 px-3 py-1 bg-gray-800 border border-green-500/30 rounded text-green-400 hover:bg-gray-700 transition-colors">
            <Calendar size={14} /> Calendar <ChevronRight size={14} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <div 
              key={i} 
              className="border border-green-500/30 rounded-md overflow-hidden transition-all duration-300 bg-gray-900/80 group relative"
              onMouseEnter={() => setHighlightedEvent(event.id)}
              onMouseLeave={() => setHighlightedEvent(null)}
            >
              {/* Highlight border effect */}
              {highlightedEvent === event.id && (
                <div className="absolute inset-0 border border-green-400 rounded-md z-10 animate-pulse pointer-events-none"></div>
              )}
              
              {/* Event image */}
              <div className="relative h-44 overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                
                {/* Data circuit lines overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBmMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIj48L3JlY3Q+PC9zdmc+')] opacity-30 mix-blend-overlay"></div>
                
                {/* Event status */}
                <div className={`absolute top-3 right-3 ${statusColors[event.statusType]} text-black text-xs px-2 py-1 rounded font-bold shadow`}>
                  {event.status}
                </div>
                
                {/* Event details overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="font-bold text-white text-lg tracking-wider">{event.title}</h3>
                  <div className="flex items-center gap-4 text-xs mt-1">
                    <div className="flex items-center text-green-400">
                      <Calendar size={12} className="mr-1" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-green-400">
                      <Clock size={12} className="mr-1" />
                      {event.time}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Event details */}
              <div className="p-4">
                {/* Description */}
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {event.description}
                </p>
                
                <div className="flex justify-between items-center mb-3">
                  <div className="text-sm text-gray-500">Prize Pool</div>
                  <div className="text-lg font-bold text-green-400 font-mono">{event.prize}</div>
                </div>
                
                {/* Progress bar */}
                <div className="mb-3">
                  <div className="flex justify-between items-center mb-1 text-xs">
                    <div className="flex items-center text-gray-500">
                      <Users size={12} className="mr-1" />
                      Participants
                    </div>
                    <div className="text-gray-400 font-mono">{event.participants}/{event.maxParticipants}</div>
                  </div>
                  <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-cyan-400"
                      style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Sponsors */}
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-1">Sponsored by</div>
                  <div className="flex flex-wrap gap-1">
                    {event.sponsors.map((sponsor, idx) => (
                      <span key={idx} className="text-xs px-1.5 py-0.5 bg-gray-800 text-gray-400 rounded">
                        {sponsor}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className={`w-full py-2 border rounded text-sm transition-colors flex items-center justify-center gap-2 ${
                  event.statusType === 'warning' 
                    ? 'bg-gray-800 border-yellow-500/30 text-yellow-400 opacity-75 cursor-not-allowed' 
                    : 'bg-gray-800 border-green-500/30 text-green-400 hover:bg-green-900/30 hover:border-green-500/50'
                }`} disabled={event.statusType === 'warning'}>
                  {event.statusType === 'warning' ? (
                    'REGISTRATION FULL'
                  ) : (
                    <>REGISTER NOW <ExternalLink size={14} /></>
                  )}
                </button>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-green-500/30 pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-green-500/30 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function Broadcast(){
    const [activeCategory, setActiveCategory] = useState("All");
  const [sortColumn, setSortColumn] = useState("viewers");
  const [sortDirection, setSortDirection] = useState("desc");
  const [hoverRow, setHoverRow] = useState(null);
  
  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };
  
  const categories = [
    "All", 
    ...data.broadcastSummary.categories
  ];
  const broadcastData = data.broadcastSummary.topStreams;
  const broadcasts = [
    { 
      id: 1,
      streamer: "CyberV1per", 
      title: "NIGHT CITY NETRUNNER RAID", 
      game: "Cyberpunk 2077", 
      viewers: 12842, 
      uptime: "4:27:12",
      status: "live",
      icon: "terminal"
    },
    { 
      id: 2,
      streamer: "NeonBlade", 
      title: "CORPO WARS: ARASAKA TAKEDOWN", 
      game: "Cyberwire Protocol", 
      viewers: 8721, 
      uptime: "2:13:45",
      status: "live",
      icon: "zap"
    },
    { 
      id: 3,
      streamer: "Gh0st_Runn3r", 
      title: "HACK THE PLANET // DAILY RUNS", 
      game: "DataCrash", 
      viewers: 6549, 
      uptime: "3:42:19",
      status: "live",
      icon: "shield"
    },
    { 
      id: 4,
      streamer: "BitRunner", 
      title: "MIDNIGHT HACKING SESSIONS", 
      game: "Cyberpunk 2077", 
      viewers: 5832, 
      uptime: "1:56:31",
      status: "live",
      icon: "database"
    },
    { 
      id: 5,
      streamer: "NeuroMancer", 
      title: "CORPORATE ESPIONAGE 101", 
      game: "GridRunner", 
      viewers: 4327, 
      uptime: "5:12:07",
      status: "live",
      icon: "terminal"
    }
  ];
  
  const sortedData = [...broadcastData]
    .filter(item => activeCategory === "All" || item.game === activeCategory)
    .sort((a, b) => {
      const factor = sortDirection === "asc" ? 1 : -1;
      if (sortColumn === "viewers") {
        return factor * (a.viewers - b.viewers);
      } else if (sortColumn === "uptime") {
        return factor * a.duration.localeCompare(b.duration);
      } else if (sortColumn === "streamer") {
        return factor * a.channelName.localeCompare(b.channelName);
      } else if (sortColumn === "game") {
        return factor * a.game.localeCompare(b.game);
      }
      return 0;
    });
    
  const getIcon = (iconName) => {
    switch(iconName) {
      case "terminal": return <Terminal size={14} />;
      case "shield": return <Shield size={14} />;
      case "zap": return <Zap size={14} />;
      case "database": return <Database size={14} />;
      default: return <Terminal size={14} />;
    }
  };
  
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("desc");
    }
  };
  
  return (
    <div className="my-10 text-gray-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white relative pl-4 flex items-center gap-2 before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:h-full before:w-1 before:bg-cyan-500 before:shadow-lg before:shadow-cyan-500/50">
          <Signal size={16} className="text-cyan-400" />
          BROADCASTS<span className="text-cyan-500 font-mono">//</span><span className="text-purple-400">BY_CATEGORY</span>
        </h2>
        <div className="flex items-center text-xs text-cyan-500 bg-gray-900 px-3 py-1 rounded-md border border-cyan-500/30">
          <Clock size={12} className="mr-1" /> LIVE FEED
          <div className="ml-2 w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
        </div>
      </div>
      
      <div className="border border-cyan-500/30 rounded-md bg-gray-900/70 p-4 backdrop-blur-sm relative overflow-hidden shadow-lg shadow-cyan-900/20">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        {/* Scanline effect */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent bg-size-200 animate-scan"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((cat, i) => (
              <button 
                key={i} 
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 border rounded text-xs whitespace-nowrap transition-all ${
                  cat === activeCategory 
                    ? 'border-cyan-500 text-cyan-400 bg-cyan-900/20 shadow-sm shadow-cyan-500/30' 
                    : 'border-purple-500/30 text-gray-400 hover:border-cyan-500/60 hover:text-cyan-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="border border-gray-800 rounded-md overflow-hidden">
            <table className="w-full text-gray-300 text-sm">
              <thead className="text-xs uppercase bg-gray-800/80">
                <tr>
                  <th className="px-3 py-3 text-left cursor-pointer" onClick={() => handleSort("streamer")}>
                    <div className="flex items-center gap-1">
                      <span>Streamer</span>
                      {sortColumn === "streamer" && (
                        sortDirection === "asc" ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                      )}
                    </div>
                  </th>
                  <th className="px-3 py-3 text-left">Title</th>
                  <th className="px-3 py-3 text-left cursor-pointer" onClick={() => handleSort("game")}>
                    <div className="flex items-center gap-1">
                      <span>Game</span>
                      {sortColumn === "game" && (
                        sortDirection === "asc" ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                      )}
                    </div>
                  </th>
                  <th className="px-3 py-3 text-right cursor-pointer" onClick={() => handleSort("viewers")}>
                    <div className="flex items-center justify-end gap-1">
                      <Users size={14} />
                      <span>Viewers</span>
                      {sortColumn === "viewers" && (
                        sortDirection === "asc" ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                      )}
                    </div>
                  </th>
                  <th className="px-3 py-3 text-right cursor-pointer" onClick={() => handleSort("uptime")}>
                    <div className="flex items-center justify-end gap-1">
                      <Clock size={14} />
                      <span>Uptime</span>
                      {sortColumn === "uptime" && (
                        sortDirection === "asc" ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                      )}
                    </div>
                  </th>
                  <th className="px-3 py-3 text-right"></th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((row, i) => (
                  <tr 
                    key={i} 
                    className="border-b border-gray-800 hover:bg-cyan-900/10 transition-colors"
                    onMouseEnter={() => setHoverRow(row.streamId)}
                    onMouseLeave={() => setHoverRow(null)}
                  >
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2">
                        <img src={row.channelAvatar} className="w-8 h-8 rounded-md bg-gradient-to-r from-cyan-600 to-purple-600 flex items-center justify-center text-white"/>
                          
                        {/* </div> */}
                        <div>
                          <div className="font-medium text-white">{row.channelName}</div>
                          <div className="flex items-center gap-1 text-xs text-cyan-500">
                            <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
                            LIVE
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3">
                      <div className="truncate max-w-xs font-mono text-cyan-300">{row.title}</div>
                    </td>
                    <td className="px-3 py-3">
                      <span className="px-2 py-0.5 bg-purple-900/30 border border-purple-500/30 rounded text-purple-400 text-xs">
                        {row.game}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-right font-mono">{formatNumber(row.viewers)}</td>
                    <td className="px-3 py-3 text-right font-mono">{row.duration}</td>
                    <td className="px-3 py-3 text-right">
                      <a href={`/live/${row.streamId}`}>
                        <button className={`px-3 py-1.5 text-xs rounded flex items-center gap-1 transition-all ${
                          hoverRow === row.streamId 
                            ? 'bg-cyan-500 text-black font-medium' 
                            : 'bg-cyan-900/30 border border-cyan-500/30 text-cyan-400'
                        }`}>
                          <Play size={14} /> Watch
                        </button>
                      </a>
                    </td>
                  </tr>
                ))}
                {sortedData.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-3 py-8 text-center text-gray-500">
                      No broadcasts found in this category
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 flex justify-between items-center text-sm">
            <div className="text-gray-500">
              <span className="text-cyan-400">{sortedData.length}</span> broadcasts found
            </div>
            {/* <button className="px-4 py-1.5 bg-gray-800/60 border border-cyan-500/30 rounded text-cyan-400 hover:bg-cyan-900/20 transition-colors flex items-center gap-2">
              Load More <ChevronDown size={14} />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
function LiveStreams() {
  return (
    <div className="relative mt-8">
      {/* Decorative cyberpunk element */}
      <div className="absolute -left-4 top-0 w-1 h-8 bg-[#121212] shadow-glow-pink"></div>
      
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">RECOMMENDED_</span>
          <span className="text-cyan-400">STREAMS</span>
          <span className="animate-pulse text-pink-500 ml-1">|</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.recommendedStreams.map((each,index)=>(
          <StreamCard 
            key={each.id}
            avatar={each.avatar}
            id={each.id}
            title={each.title}
            creator={each.channelName} 
            game={each.game}
            viewers={each.viewers} 
            tags={each.tags}
            live={true}
            viewerTrend="up"
            thumbnail={each.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}
function RecommendedStreams() {
  return (
    <div className="relative mt-8">
      {/* Decorative cyberpunk element */}
      <div className="absolute -left-4 top-0 w-1 h-8 bg-[#121212] shadow-glow-pink"></div>
      
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">FOLLOWING_</span>
          <span className="text-cyan-400">STREAMS</span>
          <span className="animate-pulse text-pink-500 ml-1">|</span>
        </h2>
        <a href="/browse" className="text-sm text-cyan-400 hover:text-pink-400 transition-colors flex items-center group">
          <span>VIEW_ALL</span>
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.followingStreams.map((each,index)=>(
          <StreamCard 
            key={each.id}
            avatar={each.avatar}
            id={each.id}
            title={each.title}
            creator={each.channelName} 
            game={each.game}
            viewers={each.viewers} 
            tags={each.tags}
            live={true}
            viewerTrend="up"
            thumbnail={each.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}
function formatNumber(num) {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return num.toString();
}
// Enhanced Stream Card Component
function StreamCard({ id,title, creator, game,avatar, viewers, tags = [], live = false, viewerTrend = "stable",isClip=false, featured = false, thumbnail,streamID = '' }) {
  // Viewer trend indicators
  const router = useRouter();
  const trendIcons = {
    up: <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9v9a1 1 0 01-2 0V8H6a1 1 0 01-1-1V6a1 1 0 011-1h5a1 1 0 011 1v1z" clipRule="evenodd" transform="rotate(45, 10, 10)" /></svg>,
    down: <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9v9a1 1 0 01-2 0V8H6a1 1 0 01-1-1V6a1 1 0 011-1h5a1 1 0 011 1v1z" clipRule="evenodd" transform="rotate(-45, 10, 10)" /></svg>,
    stable: <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
  };

  return (
    <div className={`rounded-lg overflow-hidden bg-[#121212] border ${featured ? 'border-cyan-500 shadow-glow-cyan' : 'border-purple-900'} hover:border-pink-500 transition-all group transform hover:-translate-y-1`}>
      <div onClick={()=>{isClip ? router.push(`/clip/${id}`) : router.push(`/live/${id}`)}} className="aspect-video hover:cursor-pointer bg-[#121212] relative overflow-hidden">
        <img src={thumbnail} alt="Stream thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
        
        {/* Stream information overlay */}
        <div className="absolute top-0 left-0 w-full p-2 flex justify-between items-start">
          {live && (
            <div className="px-1.5 py-0.5 bg-red-600 text-xs font-medium rounded text-white flex items-center">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse mr-1"></span>
              LIVE
            </div>
          )}
          
          {featured && (
            <div className="px-1.5 py-0.5 bg-cyan-600 text-xs font-medium rounded text-white ml-auto">
              FEATURED
            </div>
          )}
        </div>
        
        {/* Futuristic bottom overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-2">
          <div className="flex justify-between items-center">
            <div className="px-1.5 py-0.5 bg-black bg-opacity-70 border border-purple-500 text-xs font-medium rounded text-white">
              {game}
            </div>
            <div className="px-1.5 py-0.5 bg-pink-600 text-xs font-medium rounded text-white flex items-center">
              {trendIcons[viewerTrend]}
              <span className="ml-1">{formatNumber(viewers)}</span>
            </div>
          </div>
        </div>
        
        {/* Decorative cyberpunk corner element */}
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-pink-500 opacity-70 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500 opacity-70 group-hover:opacity-100 transition-opacity"></div>
      </div>
      
      <div className="p-3">
        <div className="flex items-start space-x-2 mb-2">
          {/* <div className="w-8 h-8 rounded-full overflow-hidden border border-cyan-700 flex-shrink-0 bg-gradient-to-r from-purple-600 to-pink-600 p-0.5">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-xs text-cyan-400">{creator.substring(0, 2)}</span>
            </div>
          </div> */}
          <img src={avatar} alt={creator} className="w-8 h-8 rounded-full object-cover overflow-hidden border border-cyan-700 flex-shrink-0" />
          <div>
            <h3 onClick={()=>{isClip ? router.push(`/clip/${id}`) : router.push(`/live/${id}`)}} className="text-sm hover:cursor-pointer font-medium text-white line-clamp-1 group-hover:text-cyan-400 transition-colors">{title}</h3>
            <p onClick={()=>{isClip ? router.push(`/channel/${streamID}`) : router.push(`/channel/${id}`)}} className="text-xs hover:cursor-pointer text-gray-400 hover:text-pink-400 transition-colors">@{creator}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs px-1.5 py-0.5 bg-gray-800 text-gray-300 rounded border border-purple-900 hover:border-cyan-500 hover:text-cyan-400 transition-colors cursor-pointer">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
function Clips() {
  return (
    <div className="relative mt-8">
      {/* Decorative cyberpunk element */}
      <div className="absolute -left-4 top-0 w-1 h-8 bg-[#121212] shadow-glow-pink"></div>
      
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">RECOMMENDED_</span>
          <span className="text-cyan-400">CLIPS</span>
          <span className="animate-pulse text-pink-500 ml-1">|</span>
        </h2>
        <a href="/browse" className="text-sm text-cyan-400 hover:text-pink-400 transition-colors flex items-center group">
          <span>VIEW_ALL</span>
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.clips.map((each,index)=>{
          if(index>3) return;
          const channel = data.channels.find((channel) => channel.id === each.channelId);
          const user = data.users.find((user) => user.id === channel.userId);
          const streams = data.streams.find((user) => user.channelId === channel.id);
          return <StreamCard 
            key={each.id}
            streamID={streams.id}
            isClip={true}
            avatar={user.avatar}
            id={each.id}
            title={each.title}
            creator={channel.name} 
            game={each.game}
            viewers={each.views} 
            tags={["competitive", "esports", "fps"]}
            live={false}
            viewerTrend="up"
            thumbnail={each.thumbnail}
          />
        }
        )}
      </div>
    </div>
  );
}
function Shorts() {
  return (
    <div className="relative my-8">
      {/* Decorative cyberpunk element */}
      <div className="absolute -left-4 top-0 w-1 h-8 bg-black shadow-glow-pink"></div>
      
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">TRENDING_</span>
          <span className="text-cyan-400">SHORTS</span>
          <span className="animate-pulse text-pink-500 ml-1">|</span>
        </h2>
        <a href="/browse" className="text-sm text-cyan-400 hover:text-pink-400 transition-colors flex items-center group">
          <span>VIEW_ALL</span>
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {data.shorts.map((each, index) => {
          if(index > 5) return;

          return <ShortCard 
            key={each.id}
            avatar={each.avatar}
            id={each.id}
            title={each.caption}
            creator={each.username}
            // views={each.views}
            channelId={each.streamID} 
            thumbnail={each.videoUrl}
          />
        })}
      </div>
    </div>
  );
}

// Enhanced Short Video Card Component for portrait videos
function ShortCard({ id, title, creator, avatar,  channelId, thumbnail }) {
  const router = useRouter();
  
  return (
    <a href={`/shorts/${id}`}>
      <div className="rounded-lg overflow-hidden bg-black border border-purple-900 hover:border-pink-500 transition-all group transform hover:-translate-y-1 hover:shadow-glow-pink">
        {/* Portrait video container with cyberpunk aesthetic */}
        <div 
          onClick={() => router.push(`/shorts/${id}`)} 
          className="relative aspect-[9/16] bg-black overflow-hidden hover:cursor-pointer"
        >
          <img 
            src={thumbnail} 
            alt={title} 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          
          {/* Neon glow overlay effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-t from-cyan-500 to-pink-500 mix-blend-overlay transition-opacity"></div>
          
          {/* Top glitch line effect */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
          
          {/* View count overlay */}
          <div className="absolute bottom-0 right-0 m-2 px-1.5 py-0.5 bg-black bg-opacity-70 border border-pink-500 text-xs font-medium rounded text-white flex items-center space-x-1">
            <svg className="w-3 h-3 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            {/* <span>{formatNumber(views)}</span> */}
          </div>
          
          {/* Cyberpunk corner elements */}
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-500 opacity-70 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-pink-500 opacity-70 group-hover:opacity-100 transition-opacity"></div>
        </div>
        
        {/* Info section */}
        <div className="p-2 bg-gradient-to-b from-black to-gray-900">
          <h3 
            onClick={() => router.push(`/short/${id}`)}
            className="text-xs font-medium text-white line-clamp-1 group-hover:text-cyan-400 transition-colors hover:cursor-pointer"
          >
            {title}
          </h3>
          
          <div className="flex items-center mt-1.5 space-x-1.5">
            <img 
              src={avatar} 
              alt={creator} 
              className="w-5 h-5 rounded-full object-cover border border-purple-700"
              onClick={() => router.push(`/channel/${channelId}`)}
            />
            <p 
              onClick={() => router.push(`/channel/${channelId}`)} 
              className="text-xs text-gray-400 hover:text-pink-400 transition-colors truncate hover:cursor-pointer"
            >
              @{creator}
            </p>
          </div>
          
          {/* Play indicator */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 rounded-full bg-black bg-opacity-50 border border-pink-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
export default Browse