import React, { useState, useEffect, useRef } from 'react';
import { 
  Heart, MessageSquare, Share2, Volume2, VolumeX, 
  ZapOff, Skull, ChevronLeft, ChevronRight, Clock,
  Shield, Zap, BarChart2, Database, AlertTriangle
} from 'lucide-react';

// Sample videos data - add this above your component
const videos = [
  {
    id: 1,
    title: "Netrunner Raid on Arasaka Tower",
    creator: "V_Mercenary",
    verified: true,
    videoUrl: "/api/placeholder/640/360",
    views: "2.4M",
    timeAgo: "6h ago",
    likes: "342K",
    comments: "5.7K",
    description: "Just hacked into the most secure building in Night City. Watch how I bypassed their ICE protocols.",
    tags: ["#netrunner", "#arasaka", "#heist", "#cyberdeck"],
    premium: true
  },
  {
    id: 2,
    title: "Chrome Clinic: New Mantis Blades",
    creator: "RipperDoc",
    verified: true,
    videoUrl: "/api/placeholder/640/360",
    views: "987K",
    timeAgo: "1d ago",
    likes: "124K",
    comments: "2.1K",
    description: "Unboxing the military-grade Arasaka mantis blades. Street price is steep but worth every eddie.",
    tags: ["#cyberware", "#ripperdoc", "#mantisblades", "#combat"]
  },
  {
    id: 3,
    title: "Badlands Nomad Run: Outrunning Corpo AVs",
    creator: "PanzerQueen",
    verified: false,
    videoUrl: "/api/placeholder/640/360",
    views: "453K",
    timeAgo: "3d ago",
    likes: "89K",
    comments: "1.3K",
    description: "Close call with Militech patrols while smuggling tech across the border. New turbo on the Quadra is preem!",
    tags: ["#badlands", "#nomad", "#driving", "#quadra"]
  },
  {
    id: 4,
    title: "Maelstrom Gang Territory: Insider Tour",
    creator: "ChromeHead88",
    verified: false,
    videoUrl: "/api/placeholder/640/360",
    views: "761K",
    timeAgo: "1w ago",
    likes: "156K",
    comments: "4.2K",
    description: "Exclusive look inside Maelstrom territory. Full chrome, no meat, all tech. *WARNING: Graphic cyberpsychosis incident at 3:24*",
    tags: ["#maelstrom", "#gangs", "#cyberpsychosis", "#fullchrome"]
  }
];

// Basic Navbar component
const Navbar = ({ setIsMenuOpen }) => (
  <div className="h-16 border-b border-cyan-600/30 bg-gradient-to-r from-black to-purple-900/30 flex items-center justify-between px-4">
    <div className="flex items-center space-x-4">
      <button 
        onClick={() => setIsMenuOpen(prev => !prev)}
        className="text-cyan-400 hover:text-cyan-300"
      >
        <div className="flex flex-col space-y-1">
          <div className="w-5 h-0.5 bg-cyan-400"></div>
          <div className="w-3 h-0.5 bg-cyan-400"></div>
          <div className="w-4 h-0.5 bg-pink-400"></div>
        </div>
      </button>
      
      <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
        CYBERSTREAM<span className="text-xs align-super text-pink-500">//:shorts</span>
      </div>
    </div>
    
    <div className="relative">
      <input
        type="text"
        placeholder="search_//:cybernet"
        className="bg-gray-900/30 border border-purple-600/30 rounded-sm px-3 py-1 text-sm text-gray-300 w-48 focus:outline-none focus:border-cyan-500 placeholder-gray-500"
      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2">
        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></div>
      </div>
    </div>
    
    <div className="flex items-center space-x-4">
      <div className="relative">
        <div className="text-cyan-400">
          <Database className="w-5 h-5" />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-pink-500 text-[10px] flex items-center justify-center text-white">3</div>
      </div>
      
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 flex items-center justify-center text-black font-bold text-xs">
        V
      </div>
    </div>
  </div>
);

// Custom cyberpunk-themed animated loading indicator
const CyberLoadingIndicator = () => (
  <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/40 z-50">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 border-2 border-cyan-500 rounded-full animate-ping opacity-20"></div>
      <div className="absolute inset-0 border border-cyan-400 rounded-full animate-spin" style={{borderTopColor: 'transparent', animationDuration: '1s'}}></div>
      <div className="absolute inset-2 border border-purple-500 rounded-full animate-spin" style={{borderBottomColor: 'transparent', animationDuration: '1.5s'}}></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs text-cyan-400 animate-pulse">LOADING</span>
      </div>
    </div>
  </div>
);

// Main component
export default function CyberpunkTwitchShorts() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [isLiked, setIsLiked] = useState(Array(videos.length).fill(false));
  const [isFullGlitchMode, setIsFullGlitchMode] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [videoStats, setVideoStats] = useState({
    bufferHealth: 98,
    securityLevel: "MEDIUM",
    netLatency: 42,
    encryptionStatus: true
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHUD, setShowHUD] = useState(true);
  
  const containerRef = useRef(null);
  const videoRefs = useRef([]);
  
  // Initialize video refs
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, []);
  
  // Handle scroll wheel navigation
  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        // Scroll down - go to next video
        navigateToVideo((currentVideoIndex + 1) % videos.length);
      } else if (e.deltaY < 0) {
        // Scroll up - go to previous video
        navigateToVideo(currentVideoIndex === 0 ? videos.length - 1 : currentVideoIndex - 1);
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentVideoIndex]);
  
  // Enhanced glitch effects system
  useEffect(() => {
    // Minor glitches (more frequent, less intense)
    const minorGlitchInterval = setInterval(() => {
      const shouldGlitch = Math.random() < 0.15; // 15% chance
      if (shouldGlitch) {
        const glitchDuration = 50 + Math.random() * 150;
        
        // Create minor visual distortion without full glitch mode
        const videoContainer = document.querySelector('.video-container');
        // if (videoContainer) {
        //   videoContainer.style.filter = `hue-rotate(${Math.random() * 60}deg) brightness(1.2)`;
        //   videoContainer.style.transform = `translateX(${(Math.random() * 4) - 2}px)`;
          
        //   setTimeout(() => {
        //     videoContainer.style.filter = '';
        //     videoContainer.style.transform = '';
        //   }, glitchDuration);
        // }
      }
    }, 3000);
    
    // Major glitches (less frequent, more intense)
    const majorGlitchInterval = setInterval(() => {
      const shouldGlitch = Math.random() < 0.1; // 10% chance of major glitch
      if (shouldGlitch) {
        setIsFullGlitchMode(true);
        setTimeout(() => setIsFullGlitchMode(false), 200 + Math.random() * 300);
      }
    }, 8000);
    
    // Update network stats with fluctuations
    const statsInterval = setInterval(() => {
      setVideoStats(prev => ({
        ...prev,
        bufferHealth: Math.min(100, Math.max(70, prev.bufferHealth + (Math.random() * 10 - 5))),
        netLatency: Math.max(10, Math.min(100, prev.netLatency + (Math.random() * 20 - 10))),
        securityLevel: Math.random() < 0.05 ? 
          (prev.securityLevel === "MEDIUM" ? "HIGH" : "MEDIUM") : 
          prev.securityLevel,
        encryptionStatus: Math.random() < 0.02 ? !prev.encryptionStatus : prev.encryptionStatus
      }));
    }, 5000);
    
    return () => {
      clearInterval(minorGlitchInterval);
      clearInterval(majorGlitchInterval);
      clearInterval(statsInterval);
    };
  }, []);
  
  // Simulate video loading when changing
  const navigateToVideo = (index) => {
    setIsLoading(true);
    
    // Simulate some network delay for cyberpunk feel
    setTimeout(() => {
      setCurrentVideoIndex(index);
      setShowComments(false);
      setIsLoading(false);
      
      // Scroll to the video element
      if (videoRefs.current[index]) {
        videoRefs.current[index].scrollIntoView({ 
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
      
      // Trigger minor glitch during transition
      setIsFullGlitchMode(true);
      setTimeout(() => setIsFullGlitchMode(false), 150);
    }, 800);
  };
  
  const goToNextVideo = () => {
    navigateToVideo((currentVideoIndex + 1) % videos.length);
  };
  
  const goToPreviousVideo = () => {
    navigateToVideo(currentVideoIndex === 0 ? videos.length - 1 : currentVideoIndex - 1);
  };
  
  const toggleLike = (index) => {
    const newLikedStatus = [...isLiked];
    newLikedStatus[index] = !newLikedStatus[index];
    setIsLiked(newLikedStatus);
    
    // Visual feedback for like action
    if (!newLikedStatus[index]) return;
    
    // Create floating pink hearts animation
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
      for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '♥';
        heart.className = 'absolute text-pink-500 opacity-80 text-lg';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.bottom = '20%';
        heart.style.animation = `float-up ${1 + Math.random()}s ease-out forwards`;
        videoContainer.appendChild(heart);
        
        setTimeout(() => {
          videoContainer.removeChild(heart);
        }, 2000);
      }
    }
  };
  
  const toggleComments = () => {
    // Small glitch effect when toggling comments
    setIsFullGlitchMode(true);
    setTimeout(() => setIsFullGlitchMode(false), 100);
    
    setShowComments(!showComments);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };
  
  const toggleHUD = () => {
    setShowHUD(!showHUD);
  };
  
  // Enhanced mock comments with cyberpunk flavor
  const mockComments = [
    { id: 1, user: "Netrunner42", avatar: "N", content: "Those ICE protocols are ancient tech. I could crack them in my sleep with a military-grade deck.", time: "2m ago", likes: 24, verified: true },
    { id: 2, user: "V_from_NC", avatar: "V", content: "Saw this go down in person. The corps never saw it coming. Had to flatline three solos on my way out.", time: "15m ago", likes: 56, verified: true },
    { id: 3, user: "ChromeJunkie", avatar: "C", content: "That's some preem work choomba! What deck were you running? Looks like Militech but with custom overclocks?", time: "37m ago", likes: 11 },
    { id: 4, user: "MaxTac_Officer", avatar: "M", content: "Flagged for illegal cyberware usage. Facial recognition scan complete. Expect a visit.", time: "1h ago", likes: 89, verified: true },
    { id: 5, user: "Corpo_Rat", avatar: "C", content: "This footage is property of Arasaka. Remove immediately or face legal consequences. This is your final warning.", time: "2h ago", likes: 7, verified: true },
    { id: 6, user: "EdgeRunner99", avatar: "E", content: "Been there, done that. Lost three friends on a similar run last month. Chrome don't make you immortal. Be careful out there.", time: "5h ago", likes: 122 },
    { id: 7, user: "BlackICE_Dev", avatar: "B", content: "I coded some of those protection systems. Nice work finding that backdoor - patched in latest version.", time: "7h ago", likes: 67, verified: true },
    { id: 8, user: "NomadPride", avatar: "N", content: "Typical city netrunner thinking they're hot shit. Try doing this with sandstorms and no backup grid access.", time: "12h ago", likes: 34 },
  ];
  
  const currentVideo = videos[currentVideoIndex];
  
  // CSS for floating animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-up {
        0% { transform: translateY(0) scale(1); opacity: 0.8; }
        100% { transform: translateY(-100px) scale(0.5); opacity: 0; }
      }
      
      @keyframes data-scan {
        0% { background-position: 0% 0%; }
        100% { background-position: 200% 0%; }
      }
      
      .cyber-gradient-text {
        background: linear-gradient(90deg, #ff00a0, #00ffff, #ff00a0);
        background-size: 200% auto;
        animation: data-scan 3s linear infinite;
        -webkit-background-clip: text;
        background-clip: text;
      }
      
      .cyber-scan-line {
        background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.2), transparent);
        background-size: 200% 100%;
        animation: data-scan 3s linear infinite;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className={`bg-black min-h-screen font-mono text-gray-300 overflow-hidden ${isFullGlitchMode ? 'animate-pulse' : ''}`}>
      <Navbar setIsMenuOpen={setIsMenuOpen} />
      
      {/* Side menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-16 bottom-0 w-64 bg-black/90 border-r border-cyan-600/30 backdrop-blur-lg z-40 transform transition-transform duration-300 overflow-y-auto">
          <div className="p-4">
            <h3 className="text-cyan-400 font-bold mb-4 border-b border-cyan-800/30 pb-2">CYBERSPACE::NAV</h3>
            
            <div className="space-y-3">
              {['Feed', 'Netrunners', 'Market', 'BlackNet', 'Corp Leaks', 'Combat Footage', 'Tech Reviews'].map((item, i) => (
                <div key={i} className="flex items-center space-x-2 py-2 px-2 hover:bg-cyan-900/20 cursor-pointer rounded-sm group">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover:bg-pink-500"></div>
                  <span className="text-gray-400 group-hover:text-cyan-300">{item}</span>
                </div>
              ))}
              
              <div className="mt-6 border-t border-purple-900/30 pt-4">
                <div className="text-xs text-purple-400 mb-2">SUBSCRIPTIONS</div>
                
                {[
                  { name: 'V_Mercenary', online: true, verified: true },
                  { name: 'RipperDoc', online: true, verified: true },
                  { name: 'PanzerQueen', online: false, verified: false },
                  { name: 'Silverhand', online: false, verified: true },
                  { name: 'ChromeHead88', online: true, verified: false }
                ].map((channel, i) => (
                  <div key={i} className="flex items-center justify-between py-1.5 px-2 hover:bg-cyan-900/20 cursor-pointer rounded-sm">
                    <div className="flex items-center space-x-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${channel.online ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                      <span className="text-gray-400">{channel.name}</span>
                      {channel.verified && (
                        <div className="w-3 h-3 rounded-full bg-cyan-500/30 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Main content */}
      <div ref={containerRef} className="relative w-full h-[calc(100vh-7rem)] overflow-hidden">
        {/* Video container */}
        <div className="h-full w-full flex snap-x snap-mandatory overflow-x-hidden">
          {videos.map((video, index) => (
            <div 
              key={video.id}
            //   ref={el => videoRefs.current[index] = el}
              className="min-w-full h-full flex flex-col snap-center"
            >
              {/* Video area */}
              <div className="relative flex-1 flex items-center justify-center bg-gray-900/50 video-container">
                <div className="relative w-full max-w-6xl aspect-video">
                  <img 
                    src={video.videoUrl} 
                    alt={video.title}
                    className={`w-full h-full object-cover border ${isPlaying ? 'border-purple-500/50' : 'border-red-500/50'} rounded-md ${!isPlaying ? 'opacity-50' : ''}`}
                  />
                  
                  {/* Playback overlay */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <ZapOff className="w-16 h-16 text-red-500 opacity-70" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-red-500/30 rounded-full animate-ping opacity-10"></div>
                    </div>
                  )}
                  
                  {/* Video overlay elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Glitch effect overlay */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIgLz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxIiB5PSI1MCIgZmlsbD0icmdiYSgwLCAyNDAsIDI1NSwgMC4xKSIgLz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxIiB5PSIyNSIgZmlsbD0icmdiYSgxMzgsIDQzLCAyMjYsIDAuMSkiIC8+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMSIgeT0iNzUiIGZpbGw9InJnYmEoMjU1LCAwLCAxMjcsIDAuMSkiIC8+PC9zdmc+')] opacity-20 pointer-events-none"></div>
                  
                  {/* Enhanced scan lines with dynamic movement */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute h-px cyber-scan-line w-full" 
                        style={{ 
                          top: `${Math.floor(Math.random() * 100)}%`, 
                          opacity: 0.2 + (Math.random() * 0.3),
                          transform: `translateY(${i * 50}px)` 
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Premium content badge with enhanced style */}
                  {video.premium && (
                    <div className="absolute top-4 left-4 px-2 py-1 bg-gradient-to-r from-yellow-600 to-amber-500 text-black text-xs font-bold rounded-sm flex items-center space-x-1 border-l-2 border-l-cyan-400 shadow-[0_0_8px_rgba(0,255,255,0.5)]">
                      <Shield className="w-3 h-3 mr-1" />
                      <span>PREMIUM</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                    </div>
                  )}
                  
                  {/* Video info overlay - show only if HUD is enabled */}
                  {showHUD && (
                    <div className="absolute bottom-4 left-4 right-12">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                          {video.title}
                        </h3>
                        {video.verified && (
                          <div className="w-4 h-4 rounded-full bg-cyan-400 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-black"></div>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center text-sm text-cyan-300 mb-2">
                        <span className="mr-2">@{video.creator}</span>
                        {video.verified && (
                          <span className="text-xs px-1 bg-cyan-400/20 text-cyan-300 mr-2 border-l border-l-cyan-500">VERIFIED</span>
                        )}
                        <span className="flex items-center">
                          <BarChart2 className="w-3 h-3 mr-1 text-pink-400" />
                          {video.views} views
                        </span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {video.timeAgo}
                        </span>
                      </div>
                      
                      <p className="text-xs text-gray-300 mb-2 border-l-2 border-pink-500 pl-2">{video.description}</p>
                      
                      <div className="flex flex-wrap gap-1">
                        {video.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs px-2 py-0.5 bg-purple-900/50 text-purple-300 border border-purple-500/30 rounded-sm hover:bg-purple-800/50 hover:text-pink-300 transition-colors cursor-pointer">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* System stats HUD overlay - only show if HUD is enabled */}
                  {showHUD && (
                    <div className="absolute top-4 right-4 text-xs text-cyan-300 bg-black/70 backdrop-blur-sm rounded px-2 py-1 border border-cyan-500/20">
                      <div className="flex flex-col space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-400">BUFFER:</span>
                          <div className="w-24 h-1 bg-gray-800 rounded-full overflow-hidden ml-2">
                            <div 
                              className="h-full bg-gradient-to-r from-cyan-500 to-purple-500" 
                              style={{width: `${videoStats.bufferHealth}%`}}
                            ></div>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">SEC:</span>
                          <span className={`ml-2 ${videoStats.securityLevel === "HIGH" ? 'text-yellow-400' : 'text-green-400'}`}>
                            {videoStats.securityLevel} {videoStats.encryptionStatus ? "✓" : "✗"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">PING:</span>
                          <span className={`ml-2 ${videoStats.netLatency > 60 ? 'text-red-400' : 'text-green-400'}`}>
                            {videoStats.netLatency}ms
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Enhanced side action buttons */}
                <div className="absolute right-4 bottom-20 flex flex-col space-y-6">
                  <button 
                    className="group relative w-10 h-10 flex items-center justify-center" 
                    onClick={() => toggleLike(currentVideoIndex)}
                  >
                    <div className={`absolute inset-0 rounded-full bg-black/50 backdrop-blur-sm border ${isLiked[currentVideoIndex] ? 'border-pink-500 shadow-[0_0_8px_rgba(255,0,127,0.5)]' : 'border-purple-500/30 group-hover:border-purple-500'} transition-colors`}></div>
                    <Heart className={`w-5 h-5 ${isLiked[currentVideoIndex] ? 'text-pink-500 fill-pink-500' : 'text-pink-500'} relative z-10`} />
                    <span className="absolute -bottom-5 text-xs text-pink-400">
                      {isLiked[currentVideoIndex] 
                        ? (parseInt(video.likes.replace(/[^\d]/g, '')) + 1).toLocaleString() + 'K'
                        : video.likes
                      }
                    </span>
                  </button>
                  
                  <button 
                    className="group relative w-10 h-10 flex items-center justify-center"
                    onClick={toggleComments}
                  >
                    <div className={`absolute inset-0 rounded-full bg-black/50 backdrop-blur-sm border ${showComments ? 'border-cyan-500 shadow-[0_0_8px_rgba(0,255,255,0.5)]' : 'border-cyan-500/30 group-hover:border-cyan-500'} transition-colors`}></div>
                    <MessageSquare className="w-5 h-5 text-cyan-400 relative z-10" />
                    <span className="absolute -bottom-5 text-xs text-cyan-400">{video.comments}</span>
                  </button>
                  
                  <button className="group relative w-10 h-10 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-black/50 backdrop-blur-sm border border-purple-500/30 group-hover:border-purple-500 transition-colors"></div>
                    <Share2 className="w-5 h-5 text-purple-400 relative z-10" />
                  </button>
                  
                  <button 
                    className="group relative w-10 h-10 flex items-center justify-center"
                    onClick={toggleMute}
                  >
                    <div className="absolute inset-0 rounded-full bg-black/50 backdrop-blur-sm border border-amber-500/30 group-hover:border-amber-500 transition-colors"></div>
                    {isMuted 
                      ? <VolumeX className="w-5 h-5 text-amber-400 relative z-10" />
                      : <Volume2 className="w-5 h-5 text-amber-400 relative z-10" />
                    }
                  </button>
                  
                  <button 
                    className="group relative w-10 h-10 flex items-center justify-center"
                    onClick={togglePlayback}
                  >
                    <div className={`absolute inset-0 rounded-full bg-black/50 backdrop-blur-sm border ${!isPlaying ? 'border-red-500 shadow-[0_0_8px_rgba(255,0,0,0.5)]' : 'border-green-500/30 group-hover:border-green-500'} transition-colors`}></div>
                    {isPlaying 
                      ? <Zap className="w-5 h-5 text-green-400 relative z-10" />
                      : <Skull className="w-5 h-5 text-red-400 relative z-10" />
                    }
                  </button>
                  
                  {/* New HUD toggle button */}
                  <button 
                    className="group relative w-10 h-10 flex items-center justify-center"
                    onClick={toggleHUD}
                  >
                    <div className={`absolute inset-0 rounded-full bg-black/50 backdrop-blur-sm border ${!showHUD ? 'border-red-500' : 'border-blue-500/30 group-hover:border-blue-500'} transition-colors`}></div>
                    <AlertTriangle className="w-5 h-5 text-blue-400 relative z-10" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Loading indicator - only shown when changing videos */}
        {isLoading && <CyberLoadingIndicator />}
        
        {/* Enhanced navigation buttons with hover effects */}
        <button 
          onClick={goToPreviousVideo}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md bg-black/40 border border-cyan-500/50 hover:bg-black/60 hover:border-cyan-400 transition-colors group hover:shadow-[0_0_8px_rgba(0,255,255,0.5)]"
          aria-label="Previous video"
        >
          <ChevronLeft className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
        </button>
        
        <button 
          onClick={goToNextVideo}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md bg-black/40 border border-pink-500/50 hover:bg-black/60 hover:border-pink-400 transition-colors group hover:shadow-[0_0_8px_rgba(255,0,127,0.5)]"
          aria-label="Next video"
        >
          <ChevronRight className="w-6 h-6 text-pink-400 group-hover:text-pink-300" />
        </button>
        
        {/* Video progress indicator with enhanced visuals */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center space-x-2">
          {videos.map((_, index) => (
            <button 
              key={index} 
              onClick={() => navigateToVideo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentVideoIndex 
                  ? 'w-10 bg-gradient-to-r from-cyan-400 to-fuchsia-500 shadow-[0_0_8px_rgba(236,72,153,0.5)]' 
                  : 'w-6 bg-gray-700 hover:bg-gray-600'
              }`}
            ></button>
          ))}
        </div>
        
        {/* Enhanced comments panel with cyberpunk styling */}
        {showComments && (
          <div className="absolute right-0 top-0 bottom-0 w-full sm:w-96 bg-black/90 border-l border-cyan-600/30 backdrop-blur-lg transform transition-transform duration-300 overflow-y-auto">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 font-bold cyber-gradient-text">NETCITY::COMMENTS</h3>
                <button 
                  onClick={toggleComments}
                  className="text-gray-400 hover:text-cyan-400 w-6 h-6 flex items-center justify-center rounded-full border border-gray-700 hover:border-cyan-500 transition-colors"
                >
                  &times;
                </button>
              </div>
              
              <div className="space-y-4">
                {mockComments.map(comment => (
                  <div key={comment.id} className="border-b border-purple-900/30 pb-3 hover:bg-cyan-900/10 transition-colors p-2 rounded">
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-black font-bold text-xs relative">
                        {comment.avatar}
                        {comment.verified && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 border border-black"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-sm text-cyan-300 font-semibold">{comment.user}</span>
                          <span className="text-xs text-gray-500">{comment.time}</span>
                        </div>
                        <p className="text-sm text-gray-300 mt-1">{comment.content}</p>
                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <button className="flex items-center space-x-1 hover:text-pink-400 transition-colors">
                            <Heart className="w-3 h-3" />
                            <span>{comment.likes}</span>
                          </button>
                          <button className="ml-3 hover:text-cyan-400 transition-colors">Reply</button>
                          {Math.random() > 0.7 && (
                            <span className="ml-3 text-purple-500 text-[10px] border border-purple-500/30 px-1 rounded-sm">ENCRYPTED</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Enhanced comment input with cyberpunk styling */}
              <div className="mt-4 relative">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="w-full bg-gray-900/50 border border-cyan-600/30 rounded-sm px-3 py-2 text-gray-300 focus:outline-none focus:border-cyan-500 placeholder-gray-600"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Enhanced network status indicator with more cyberpunk details */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-xs bg-black/70 backdrop-blur-sm px-2 py-1 rounded-sm border border-purple-500/20">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-green-400">
            NETRUNNING: {Math.floor(Math.random() * 900) + 100} Mbps 
            <span className="text-[9px] text-gray-500 ml-1">{videoStats.encryptionStatus ? '(ENCRYPTED)' : '(OPEN)'}</span>
          </span>
        </div>
      </div>
      
      {/* Enhanced footer with more details */}
      <div className="h-12 border-t border-cyan-500/30 bg-gradient-to-r from-gray-900 to-black flex items-center justify-between px-4">
        <div className="text-xs">
          <span className="text-cyan-400">[SYSTEM]:</span> 
          <span className="text-gray-400 ml-1">
            Cyberdeck connected. 
            <span className="inline-block w-2 animate-pulse"> █</span>
            <span className="hidden md:inline"> Data stream active. Security level: {videoStats.securityLevel}</span>
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></div>
          <div className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            NIGHT_CITY::SECTOR_F3
          </div>
        </div>
        
        <div className="hidden md:block text-xs">
          <span className="text-pink-400">[STATUS]:</span>
          <span className="text-gray-400 ml-1">
            {currentVideoIndex + 1}/{videos.length} · ICE protection: {videoStats.encryptionStatus ? 'ACTIVE' : 'BREACHED'}
          </span>
        </div>
      </div>
      
      {/* Enhanced glitch overlay with more dynamic elements */}
      {isFullGlitchMode && (
        <div className="fixed inset-0 bg-gradient-to-b from-purple-900/10 to-cyan-900/10 mix-blend-overlay pointer-events-none z-50">
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i} 
                className="absolute h-px bg-cyan-500/30 w-full" 
                style={{ 
                  top: `${Math.floor(Math.random() * 100)}%`,
                  opacity: Math.random() * 0.5 + 0.2,
                  height: `${Math.random() > 0.8 ? 2 : 1}px`
                }}
              ></div>
            ))}
            
            {/* RGB split effect */}
            <div className="absolute inset-0 opacity-30 mix-blend-screen" style={{ transform: 'translateX(2px)', backgroundColor: 'rgba(255,0,0,0.05)' }}></div>
            <div className="absolute inset-0 opacity-30 mix-blend-screen" style={{ transform: 'translateX(-2px)', backgroundColor: 'rgba(0,255,255,0.05)' }}></div>
          </div>
        </div>
      )}
    </div>
  );
}