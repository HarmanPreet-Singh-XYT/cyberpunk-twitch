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
            <main className="flex-1 overflow-y-auto pb-20 relative z-10">
                <div className="mx-auto px-4 py-6">
                {/* <FeaturedStream 
                    isVideoPlaying={isVideoPlaying} 
                    setIsVideoPlaying={setIsVideoPlaying}
                    isMuted={isMuted}
                    setIsMuted={setIsMuted}
                /> */}
                <MainComp/>
                <div className='py-6'></div>
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
        <TopComp/>
        <RecommendedStreams/>
        <div className='mt-12'></div>
        <Stats/>
        <LiveStreams/>
        <Broadcast/>
        <Clips/>
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
// function FeaturedStream() {
//   // State for live chat messages
//   const [chatMessages, setChatMessages] = useState([
//     { user: "CyberNinja", message: "That hack was amazing! How did you bypass the genome signature?", color: "text-cyan-400", time: "22:43:16" },
//     { user: "NetWalker", message: "How did you bypass the ICE so quickly? Been stuck there for hours", color: "text-purple-400", time: "22:43:42" },
//     { user: "Ghost_42", message: "Corporate security is a joke lol. Their firewall version is 2 updates behind.", color: "text-green-400", time: "22:44:05" },
//     { user: "DataWr4ith", message: "Anyone know which deck he's using? Looks like BlackMarket custom?", color: "text-pink-400", time: "22:44:23" },
//     { user: "NeonHex", message: "Those guards never saw it coming. Classic distraction technique.", color: "text-yellow-400", time: "22:44:51" },
//     { user: "Binary_Bloom", message: "Just donated 50 eddies! Worth every penny for this content!", color: "text-green-400", time: "22:45:10" }
//   ]);
  
//   // State for user input
//   const [messageInput, setMessageInput] = useState('');
  
//   // State for stream stats
//   const [streamStats, setStreamStats] = useState({
//     viewers: 24721,
//     followers: 1200000,
//     donations: 4285,
//     duration: '02:28:14',
//   });
  
//   // State for user actions feedback
//   const [feedback, setFeedback] = useState(null);
  
//   // Ref for chat container to auto-scroll
//   const chatContainerRef = useRef(null);
  
//   // Simulated user messages to periodically add to chat
//   const simulatedMessages = [
//     { user: "NetRunner404", message: "Anyone got codes for the east wing security?", color: "text-blue-400" },
//     { user: "SynthWave", message: "That's some serious hardware you're running. Custom mods?", color: "text-purple-400" },
//     { user: "CyberPsycho", message: "Arasaka's gonna be MAD when they see this stream lol", color: "text-red-400" },
//     { user: "DataJack", message: "The subnet masking technique is brilliant!", color: "text-green-400" },
//     { user: "NightCity_V", message: "Checking in from Night City. Local fixers are watching this!", color: "text-yellow-400" },
//     { user: "ChromeEdge", message: "That's the fastest I've seen anyone crack a level 4 ICE", color: "text-cyan-400" },
//     { user: "Netrix", message: "Just shared this with my netrunner group. They're logging in now!", color: "text-pink-400" },
//     { user: "BitShifter", message: "Saving these techniques for my next run. Pure gold.", color: "text-amber-400" },
//   ];
  
//   // Function to format current time as HH:MM:SS
//   const formatTime = () => {
//     const now = new Date();
//     return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
//   };
  
//   // Function to handle sending a message
//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     if (messageInput.trim() === '') return;
    
//     const newMessage = {
//       user: "YOU",
//       message: messageInput,
//       color: "text-white",
//       time: formatTime()
//     };
    
//     setChatMessages(prev => [...prev, newMessage]);
//     setMessageInput('');
//   };
  
//   // Function to handle user actions (donate, follow, subscribe)
//   const handleUserAction = (action) => {
//     let feedbackMessage = '';
//     let feedbackColor = '';
    
//     switch(action) {
//       case 'donate':
//         const amount = Math.floor(Math.random() * 100) + 10;
//         feedbackMessage = `You donated €${amount}!`;
//         feedbackColor = 'text-green-400';
//         setStreamStats(prev => ({...prev, donations: prev.donations + amount}));
        
//         // Add donation message to chat
//         setChatMessages(prev => [...prev, {
//           user: "SYSTEM",
//           message: `USER donated €${amount}! Thank you for your support!`,
//           color: "text-green-400",
//           time: formatTime()
//         }]);
//         break;
//       case 'follow':
//         feedbackMessage = 'You are now following NetKnight!';
//         feedbackColor = 'text-purple-400';
//         setStreamStats(prev => ({...prev, followers: prev.followers + 1}));
//         break;
//       case 'subscribe':
//         feedbackMessage = 'Premium subscription activated!';
//         feedbackColor = 'text-yellow-400';
//         break;
//       default:
//         break;
//     }
    
//     if (feedbackMessage) {
//       setFeedback({
//         message: feedbackMessage,
//         color: feedbackColor
//       });
      
//       // Clear feedback after 3 seconds
//       setTimeout(() => {
//         setFeedback(null);
//       }, 3000);
//     }
//   };
  
//   // Effect to update duration timer every second
//   useEffect(() => {
//     const timer = setInterval(() => {
//       // Parse hours, minutes, seconds from duration string
//       const [hours, minutes, seconds] = streamStats.duration.split(':').map(Number);
      
//       // Calculate new duration
//       let newSeconds = seconds + 1;
//       let newMinutes = minutes;
//       let newHours = hours;
      
//       if (newSeconds >= 60) {
//         newSeconds = 0;
//         newMinutes += 1;
//       }
      
//       if (newMinutes >= 60) {
//         newMinutes = 0;
//         newHours += 1;
//       }
      
//       // Format new duration string
//       const newDuration = `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`;
      
//       setStreamStats(prev => ({...prev, duration: newDuration}));
//     }, 1000);
    
//     return () => clearInterval(timer);
//   }, [streamStats.duration]);
  
//   // Effect to simulate random users joining the chat
//   useEffect(() => {
//     const chatSimulation = setInterval(() => {
//       // Randomly select a message from simulated messages
//       const randomIndex = Math.floor(Math.random() * simulatedMessages.length);
//       const randomMessage = simulatedMessages[randomIndex];
      
//       // Add current time to message
//       const messageWithTime = {
//         ...randomMessage,
//         time: formatTime()
//       };
      
//       // Add to chat
//       setChatMessages(prev => [...prev, messageWithTime]);
      
//       // Randomly increase viewers
//       if (Math.random() > 0.7) {
//         const viewerIncrease = Math.floor(Math.random() * 50) + 1;
//         setStreamStats(prev => ({
//           ...prev,
//           viewers: prev.viewers + viewerIncrease
//         }));
//       }
//     }, 5000); // Add a new message every 5 seconds
    
//     return () => clearInterval(chatSimulation);
//   }, []);
  
//   // Effect to auto-scroll chat to bottom when new messages are added
//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatMessages]);
  
//   // Function to format numbers with commas
//   const formatNumber = (num) => {
//     return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   };
  
//   return (
//     <div className="mb-10">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-xl font-bold text-white relative pl-3 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-yellow-500 flex items-center">
//           <span className="glitch-text">SPOTLIGHT</span>
//           <span className="text-yellow-500 mx-1"></span>
//           <span className="text-cyan-400">FEATURED</span>
//           <span className="ml-2 px-1 py-0.5 bg-yellow-500/20 text-yellow-500 text-xs rounded-sm border border-yellow-500/50 animate-pulse">PRIME</span>
//         </h2>
//       </div>
      
//       {/* Premium featured stream with more details */}
//       <div className="border border-yellow-500/50 rounded-md overflow-hidden bg-gray-900/90 relative">
//         {/* Animated border effect */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/70 to-transparent animate-pulse"></div>
//           <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/70 to-transparent animate-pulse"></div>
//           <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-500/70 to-transparent animate-pulse"></div>
//           <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-500/70 to-transparent animate-pulse"></div>
//         </div>
        
//         {/* Digital noise overlay */}
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20 pointer-events-none"></div>
        
//         <div className="flex flex-col lg:flex-row">
//           {/* Thumbnail */}
//           <div className="relative lg:w-2/3">
//             <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 z-10 flex items-center px-2">
//               <div className="text-xs text-cyan-400 font-mono">FEED://NETSTREAM.GLOBAL/NETKNIGHT/LIVE</div>
//             </div>
            
//             <img src="/api/placeholder/1280/720" alt="Featured Stream" className="w-full h-64 lg:h-96 object-cover" />
            
//             {/* Scanline effect */}
//             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJzY2FubGluZXMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjQiPjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjEwMCUiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7c3Ryb2tlLW9wYWNpdHk6MC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNzY2FubGluZXMpIi8+PC9zdmc+')] opacity-30 pointer-events-none"></div>
            
//             {/* Overlay elements */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
//             {/* Stream status indicators */}
//             <div className="absolute top-8 left-4 flex items-center gap-2">
//               <div className="bg-red-600 text-xs px-2 py-0.5 rounded flex items-center gap-1 backdrop-blur-sm">
//                 <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
//                 LIVE
//               </div>
//               <div className="bg-black/70 text-xs px-2 py-0.5 rounded backdrop-blur-sm flex items-center gap-1 border border-cyan-500/30">
//                 <Eye size={12} className="text-cyan-400" />
//                 <span className="font-mono text-cyan-300">{formatNumber(streamStats.viewers)}</span>
//               </div>
//               <div className="bg-black/70 text-xs px-2 py-0.5 rounded backdrop-blur-sm flex items-center gap-1 border border-yellow-500/30">
//                 <Clock size={12} className="text-yellow-400" />
//                 <span className="font-mono text-yellow-300">{streamStats.duration}</span>
//               </div>
//             </div>
            
//             {/* Featured badge */}
//             <div className="absolute top-8 right-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-black text-xs px-3 py-1 rounded-sm font-bold flex items-center gap-1">
//               <Zap size={12} />
//               FEATURED
//             </div>
            
//             {/* Stream info overlay */}
//             <div className="absolute bottom-0 left-0 right-0 p-4">
//               <div className="mb-1 flex items-center gap-2">
//                 <div className="px-1.5 py-0.5 bg-cyan-500/20 text-cyan-400 text-xs rounded-sm border border-cyan-500/50">
//                   TIER 4
//                 </div>
//                 <div className="px-1.5 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded-sm border border-purple-500/50">
//                   ENCRYPTED
//                 </div>
//               </div>
              
//               <h3 className="text-xl font-bold text-white mb-1 relative">
//                 <span className="text-yellow-500">[</span>
//                 CYBERSPACE REVOLUTION: CORPORATE RAID
//                 <span className="text-yellow-500">]</span>
//               </h3>
              
//               <div className="flex items-center gap-2 mb-2">
//                 <div className="relative">
//                   <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center">
//                     <Shield size={14} className="text-black" />
//                   </div>
//                   <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-cyan-500 flex items-center justify-center text-xs font-bold border-2 border-gray-900">
//                     V
//                   </div>
//                 </div>
//                 <div>
//                   <span className="text-sm text-white font-bold">NetKnight</span>
//                   <div className="flex items-center gap-1">
//                     <span className="text-xs text-gray-400">REPUTATION</span>
//                     <div className="flex">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <div key={star} className="w-2 h-2 bg-yellow-500 rounded-full mx-0.5"></div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <p className="text-sm text-gray-300 max-w-2xl border-l-2 border-yellow-500/50 pl-2">
//                 Join the most anticipated corporate infiltration of the year. Live walkthrough of Arasaka's security systems with real-time hack demonstrations. <span className="text-yellow-400">Premium access includes source code downloads.</span>
//               </p>
//             </div>
            
//             {/* Watch button */}
//             <div className="absolute bottom-4 right-4">
//               <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-black px-4 py-2 rounded-sm font-bold text-sm flex items-center gap-2 hover:from-yellow-400 hover:to-orange-500 transition-all border-2 border-transparent hover:border-yellow-300">
//                 JACK_IN
//                 <ChevronRight size={16} />
//               </button>
//             </div>
//           </div>
          
//           {/* Stream details and chat preview */}
//           <div className="p-4 lg:w-1/3 bg-gray-900 relative">
//             {/* Terminal top bar */}
//             <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-yellow-500"></div>
            
//             <div className="flex items-center justify-between mb-4">
//               <h4 className="text-sm font-bold text-gray-400 font-mono">STREAM_DETAILS<span className="text-yellow-500">//</span></h4>
//               <div className="text-xs text-cyan-400 font-mono flex items-center">
//                 <div className="w-2 h-2 rounded-full bg-cyan-400 mr-1 animate-pulse"></div>
//                 UPTIME: {streamStats.duration}
//               </div>
//             </div>
            
//             {/* Stream stats */}
//             <div className="grid grid-cols-2 gap-4 mb-4">
//               <div className="p-3 bg-gray-800/50 border border-cyan-500/30 rounded-sm relative overflow-hidden group hover:border-cyan-500/60 transition-all">
//                 <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
//                   <Users size={10} className="text-cyan-400" />
//                   VIEWERS
//                 </div>
//                 <div className="text-xl font-bold text-white font-mono">{formatNumber(streamStats.viewers)}</div>
//               </div>
              
//               <div className="p-3 bg-gray-800/50 border border-purple-500/30 rounded-sm relative overflow-hidden group hover:border-purple-500/60 transition-all">
//                 <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
//                   <Users size={10} className="text-purple-400" />
//                   FOLLOWERS
//                 </div>
//                 <div className="text-xl font-bold text-white font-mono">{formatNumber(streamStats.followers)}</div>
//               </div>
              
//               <div className="p-3 bg-gray-800/50 border border-yellow-500/30 rounded-sm relative overflow-hidden group hover:border-yellow-500/60 transition-all">
//                 <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
//                   <BarChart2 size={10} className="text-yellow-400" />
//                   CATEGORY
//                 </div>
//                 <div className="text-sm font-bold text-white font-mono">Cyberpunk 2077</div>
//               </div>
              
//               <div className="p-3 bg-gray-800/50 border border-green-500/30 rounded-sm relative overflow-hidden group hover:border-green-500/60 transition-all">
//                 <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
//                   <DollarSign size={10} className="text-green-400" />
//                   DONATIONS
//                 </div>
//                 <div className="text-sm font-bold text-white font-mono">€{formatNumber(streamStats.donations)}</div>
//               </div>
//             </div>
            
//             {/* Tags */}
//             <div className="mb-4">
//               <div className="text-xs text-gray-500 mb-2 flex items-center">
//                 <span className="font-mono">TAGS</span>
//                 <span className="text-yellow-500 mx-1">//</span>
//                 <span className="text-cyan-400 font-mono text-xs">FILTER.APPLY</span>
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {["Cyberpunk", "Hacking", "Tutorial", "Corporate", "English", "Stealth", "Arasaka", "NetRunning"].map((tag, i) => (
//                   <span key={i} className="text-xs px-2 py-1 bg-gray-800 border border-yellow-500/30 rounded-sm text-gray-300 hover:bg-gray-700 hover:border-yellow-500/60 transition-all flex items-center cursor-pointer">
//                     <span className="text-yellow-500 mr-1">#</span>{tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
            
//             {/* Chat preview */}
//             <div>
//               <div className="text-xs text-gray-500 mb-2 flex items-center justify-between">
//                 <div className="flex items-center">
//                   <span className="font-mono">LIVE_CHAT</span>
//                   <span className="text-yellow-500 mx-1">//</span>
//                 </div>
//                 <span className="text-cyan-400 flex items-center gap-1">
//                   <MessageSquare size={10} />
//                   <span className="font-mono">{formatNumber(Math.floor(streamStats.viewers * 0.17))}</span>
//                 </span>
//               </div>
              
//               <div 
//                 ref={chatContainerRef} 
//                 className="h-40 bg-gray-800/70 border border-purple-500/30 rounded-sm p-2 overflow-y-auto custom-scrollbar mb-2 relative"
//               >
//                 {/* Terminal style overlay */}
//                 <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]"></div>
                
//                 {/* Chat system message */}
//                 <div className="text-xs mb-2 py-1 px-2 bg-yellow-500/10 border border-yellow-500/30 rounded-sm">
//                   <span className="text-yellow-400 font-bold">[SYSTEM]:</span>
//                   <span className="text-gray-300"> Premium stream started. Netrunner protection active. Chat moderation level: MEDIUM.</span>
//                 </div>
                
//                 {/* Chat messages */}
//                 {chatMessages.map((chat, i) => (
//                   <div key={i} className="text-xs mb-1.5 flex items-start group">
//                     <span className="text-gray-500 font-mono text-xs mr-1 opacity-50">{chat.time}</span>
//                     <span className={`font-bold ${chat.color}`}>{chat.user}: </span>
//                     <span className="text-gray-300 ml-1">{chat.message}</span>
//                   </div>
//                 ))}
//               </div>
              
//               {/* Chat input */}
//               <form onSubmit={handleSendMessage} className="relative">
//                 <input 
//                   type="text" 
//                   placeholder="Enter message..." 
//                   className="w-full bg-gray-800 text-gray-300 text-xs rounded-sm py-2 px-3 border border-cyan-500/30 focus:border-cyan-500/60 focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
//                   value={messageInput}
//                   onChange={(e) => setMessageInput(e.target.value)}
//                 />
//                 <button 
//                   type="submit" 
//                   className="absolute right-2 top-1/2 transform -translate-y-1/2 text-cyan-400 hover:text-cyan-300 transition-colors"
//                 >
//                   <MessageSquare size={14} />
//                 </button>
//               </form>
//             </div>
            
//             {/* Stream controls with feedback */}
//             <div className="mt-4 flex gap-2 relative">
//               <button 
//                 className="flex-1 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 p-2 rounded-sm border border-cyan-500/30 hover:border-cyan-500/60 transition-all flex items-center justify-center gap-1"
//                 onClick={() => handleUserAction('donate')}
//               >
//                 <DollarSign size={12} className="text-cyan-400" />
//                 DONATE
//               </button>
//               <button 
//                 className="flex-1 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 p-2 rounded-sm border border-purple-500/30 hover:border-purple-500/60 transition-all flex items-center justify-center gap-1"
//                 onClick={() => handleUserAction('follow')}
//               >
//                 <Users size={12} className="text-purple-400" />
//                 FOLLOW
//               </button>
//               <button 
//                 className="flex-1 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 p-2 rounded-sm border border-yellow-500/30 hover:border-yellow-500/60 transition-all flex items-center justify-center gap-1"
//                 onClick={() => handleUserAction('subscribe')}
//               >
//                 <Shield size={12} className="text-yellow-400" />
//                 SUBSCRIBE
//               </button>
              
//               {/* Action feedback popup */}
//               {feedback && (
//                 <div className="absolute -top-10 left-0 right-0 bg-gray-800 border border-gray-700 text-center py-2 rounded-sm animate-fadeIn">
//                   <span className={`text-sm ${feedback.color}`}>{feedback.message}</span>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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
function StreamCard({ id,title, creator, game,avatar, viewers, tags = [], live = false, viewerTrend = "stable",isClip=false, featured = false, thumbnail }) {
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
            <h3 onClick={()=>{router.push(`/live/${id}`)}} className="text-sm hover:cursor-pointer font-medium text-white line-clamp-1 group-hover:text-cyan-400 transition-colors">{title}</h3>
            <p onClick={()=>{router.push(`/channel/${id}`)}} className="text-xs hover:cursor-pointer text-gray-400 hover:text-pink-400 transition-colors">@{creator}</p>
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
          return <StreamCard 
            key={each.id}
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
export default Browse