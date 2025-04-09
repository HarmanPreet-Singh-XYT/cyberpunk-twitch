import { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Users, ChevronLeft, ChevronRight, Zap, Eye, Shield } from "lucide-react";

export default function CyberpunkTwitchCarousel() {
  const [activeIndex, setActiveIndex] = useState(2); // Center stream is active by default
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovering, setIsHovering] = useState(null);
  const [isGlitching, setIsGlitching] = useState(false);
  const [systemMessage, setSystemMessage] = useState("CONNECTION ESTABLISHED");
  const glitchTimerRef = useRef(null);
  const systemMessageRef = useRef(null);

  const streams = [
    {
      id: 1,
      title: "NIGHT CITY NETRUNNING // Infiltrating Arasaka",
      streamer: "CyberV1per",
      game: "Cyberpunk 2077",
      viewers: 14826,
      tags: ["FPS", "RPG", "Stealth"],
      thumbnail: "/api/placeholder/640/360",
      securityLevel: "High",
      streamQuality: "8K Neural"
    },
    {
      id: 2,
      title: "CORPO WARS: Militech vs Arasaka [Hard Mode]",
      streamer: "NeonSamurai",
      game: "Cyberpunk 2077",
      viewers: 8762,
      tags: ["RPG", "Story", "Violence"],
      thumbnail: "/api/placeholder/640/360",
      securityLevel: "Medium",
      streamQuality: "4K HDR"
    },
    {
      id: 3,
      title: "LIVE: Neo-Tokyo Drift Championships",
      streamer: "DriftQueen",
      game: "NeoRacer 2077",
      viewers: 22341,
      tags: ["Racing", "Competitive", "Esports"],
      thumbnail: "/api/placeholder/640/360",
      securityLevel: "Low",
      streamQuality: "8K Neural"
    },
    {
      id: 4,
      title: "NEURAL HACKING // Breaking ICE Protocols",
      streamer: "GhostInTheNet",
      game: "ShadowNet Simulator",
      viewers: 7532,
      tags: ["Strategy", "Hacking", "PvP"],
      thumbnail: "/api/placeholder/640/360",
      securityLevel: "Ultra",
      streamQuality: "VR-Enhanced"
    },
    {
      id: 5,
      title: "MIDNIGHT BLADE // Cyber-ninja assassination run",
      streamer: "SliceOfNight",
      game: "Ghost Protocol",
      viewers: 11438,
      tags: ["Stealth", "Action", "Speedrun"],
      thumbnail: "/api/placeholder/640/360",
      securityLevel: "Medium",
      streamQuality: "4K HDR"
    }
  ];

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

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? streams.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === streams.length - 1 ? 0 : prev + 1));
  };

  const formatViewers = (num) => {
    return num > 1000 ? `${(num / 1000).toFixed(1)}K` : num;
  };

  const getSecurityColor = (level) => {
    switch(level) {
      case "Low": return "text-green-400";
      case "Medium": return "text-yellow-400";
      case "High": return "text-orange-500";
      case "Ultra": return "text-red-500";
      default: return "text-gray-400";
    }
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
        
        {/* Cybernetic progress bar */}
        <div className="mt-2 h-1 w-full bg-[#333]">
          <div className="h-full bg-gradient-to-r from-[#00f0ff] to-[#ff007f] w-3/4 relative animate-pulse">
            <div className="absolute top-0 right-0 h-full w-1 bg-white"></div>
          </div>
        </div>
      </div>

      {/* Main Carousel Component */}
      <div className={`relative z-10 mb-6 ${isGlitching ? 'animate-glitch-minor' : ''}`}>
        {/* Featured Streams Text */}
        <div className="flex items-center mb-4">
          <div className="h-6 w-1 bg-[#00f0ff] mr-2 animate-pulse"></div>
          <h2 className="text-xl font-bold">FEATURED_STREAMS</h2>
          <div className="h-px flex-grow ml-4 bg-gradient-to-r from-[#00f0ff] to-transparent"></div>
          <button className="ml-2 px-3 py-1 border border-[#00f0ff]/30 text-[#00f0ff] text-xs rounded hover:bg-[#00f0ff]/10 transition-colors">
            REFRESH
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center overflow-hidden h-96 rounded-md bg-[#1a1a1a] border border-[#8a2be2] shadow-lg shadow-[#8a2be2]/10">
          {/* Left Control */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 z-20 p-2 rounded-full bg-black/70 backdrop-blur-sm text-[#00f0ff] hover:bg-[#00f0ff]/20 hover:text-white transition-all duration-300 border border-[#00f0ff]/30 group"
            aria-label="Previous stream"
          >
            <ChevronLeft className="w-6 h-6 group-hover:animate-pulse" />
          </button>

          {/* Streams */}
          <div className="flex w-full h-full relative">
            {streams.map((stream, index) => {
              // Calculate position and size based on distance from activeIndex
              const distance = Math.abs(index - activeIndex);
              const isActive = index === activeIndex;
              
              // Determine width of each item
              let width = "w-1/5";
              let zIndex = 10 - distance;
              let opacity = 1;
              let scale = "scale-100";
              
              if (isActive) {
                width = "w-2/5";
                zIndex = 30;
              } else if (distance === 1) {
                opacity = 0.7;
                scale = "scale-95";
                zIndex = 20;
              } else {
                opacity = 0.4;
                scale = "scale-90";
              }

              return (
                <div
                  key={stream.id}
                  className={`${width} h-full p-1 transition-all duration-500 ease-in-out ${scale}`}
                  style={{ zIndex, opacity }}
                  onMouseEnter={() => setIsHovering(index)}
                  onMouseLeave={() => setIsHovering(null)}
                >
                  <div 
                    className={`h-full rounded overflow-hidden relative group
                      ${isActive ? 'border-2 border-[#00f0ff] shadow-lg shadow-[#00f0ff]/20' : 'border border-[#8a2be2]/50'}
                      ${isGlitching && isActive ? 'animate-glitch-shift' : ''}
                    `}
                  >
                    {/* Thumbnail */}
                    <img 
                      src={stream.thumbnail} 
                      alt={stream.title} 
                      className={`w-full h-full object-cover ${isActive && isGlitching ? 'animate-color-shift' : ''}`}
                    />
                    
                    {/* Digital noise overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent mix-blend-overlay"></div>
                    {isGlitching && isActive && (
                      <div className="absolute inset-0 bg-[#00f0ff]/10 z-10 mix-blend-overlay animate-flicker"></div>
                    )}
                    
                    {/* Stream info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
                      {/* Streamer info */}
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-[#ff007f] mr-2 overflow-hidden flex items-center justify-center border border-[#00f0ff]/50 shadow-md shadow-[#00f0ff]/20">
                          <span className="text-xs font-bold">{stream.streamer.substring(0, 2)}</span>
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-white flex items-center">
                            {stream.streamer}
                            {isActive && (
                              <span className="ml-2 px-1 bg-[#ff007f]/20 border border-[#ff007f]/50 text-[#ff007f] text-xs rounded">
                                VERIFIED
                              </span>
                            )}
                          </h3>
                          <p className="text-xs text-[#00f0ff]">{stream.game}</p>
                        </div>
                        <div className="ml-auto flex items-center">
                          <Eye className="w-3 h-3 text-[#ff007f] mr-1" />
                          <span className="text-xs">{formatViewers(stream.viewers)}</span>
                        </div>
                      </div>
                      
                      {/* Stream title */}
                      <h4 className="text-sm font-bold mb-2 line-clamp-2">
                        {isActive && <span className="inline-block w-2 h-2 bg-[#ff007f] rounded-full mr-2 animate-pulse"></span>}
                        {stream.title}
                      </h4>
                      
                      {/* Tags and metadata */}
                      <div className="flex justify-between items-center">
                        <div className="flex gap-1 flex-wrap">
                          {stream.tags.map(tag => (
                            <span key={tag} className="px-2 py-0.5 bg-[#1a1a1a]/80 text-[#00f0ff] border border-[#00f0ff]/30 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        {isActive && (
                          <div className="flex items-center">
                            <div className="flex items-center mr-2">
                              <Shield className="w-3 h-3 mr-1" />
                              <span className={`text-xs ${getSecurityColor(stream.securityLevel)}`}>
                                {stream.securityLevel}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Zap className="w-3 h-3 text-[#ff007f] mr-1" />
                              <span className="text-xs">{stream.streamQuality}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* "Playing Now" indicator for active stream */}
                    {isActive && (
                      <div className="absolute top-3 left-3 flex items-center bg-black/70 border border-[#ff007f] rounded-full px-2 py-1 z-20">
                        <div className="w-2 h-2 rounded-full bg-[#ff007f] mr-1 animate-pulse"></div>
                        <span className="text-xs font-bold text-white">LIVE</span>
                      </div>
                    )}
                    
                    {/* Control overlay that shows on hover or active */}
                    {(isHovering === index || isActive) && (
                      <div className="absolute top-3 right-3 flex space-x-2 z-20">
                        <button 
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="p-1.5 rounded-full bg-black/70 hover:bg-[#ff007f]/80 text-white border border-[#ff007f]/50 transition-all"
                          aria-label={isPlaying ? "Pause stream" : "Play stream"}
                        >
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </button>
                        <button 
                          onClick={() => setIsMuted(!isMuted)}
                          className="p-1.5 rounded-full bg-black/70 hover:bg-[#00f0ff]/80 text-white border border-[#00f0ff]/50 transition-all"
                          aria-label={isMuted ? "Unmute stream" : "Mute stream"}
                        >
                          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                      </div>
                    )}
                    
                    {/* Center stream highlight effect */}
                    {isActive && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00f0ff] via-[#ff007f] to-[#00f0ff] animate-gradient-x"></div>
                    )}
                    
                    {/* Glitch effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 to-[#ff007f]/5 mix-blend-overlay pointer-events-none"></div>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMGYwZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPjwvc3ZnPg==')] opacity-10 pointer-events-none"></div>
                    
                    {/* Subtle scan line effect */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJzY2FubGluZXMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjMiPjxsaW5lIHgxPSIwIiB5MT0iMC41IiB4Mj0iMTAwJSIgeTI9IjAuNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc2NhbmxpbmVzKSIvPjwvc3ZnPg==')] opacity-20 pointer-events-none mix-blend-overlay"></div>
                    
                    {/* Animated border for active stream */}
                    {isActive && (
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00f0ff]"></div>
                        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00f0ff]"></div>
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#00f0ff]"></div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#00f0ff]"></div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Control */}
          <button 
            onClick={handleNext}
            className="absolute right-4 z-20 p-2 rounded-full bg-black/70 backdrop-blur-sm text-[#00f0ff] hover:bg-[#00f0ff]/20 hover:text-white transition-all duration-300 border border-[#00f0ff]/30 group"
            aria-label="Next stream"
          >
            <ChevronRight className="w-6 h-6 group-hover:animate-pulse" />
          </button>
        </div>

        {/* Stream progress indicator */}
        <div className="flex justify-center mt-4 gap-2">
          {streams.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'w-10 bg-gradient-to-r from-[#00f0ff] to-[#ff007f]' 
                  : 'w-6 bg-[#333333] hover:bg-[#00f0ff]/50'
              }`}
              aria-label={`Select stream ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Technical info display in futuristic style */}
      <div className="relative z-10 border border-[#8a2be2]/30 rounded bg-black/80 p-3 backdrop-blur-sm">
        <div className="flex justify-between items-center text-xs">
          <div className="flex items-center">
            <div className="mr-4">
              <span className="text-[#8a8a8a]">ACTIVE_STREAM:</span> <span className="text-[#00f0ff]">{streams[activeIndex].streamer}</span>/<span className="text-[#ff007f]">{streams[activeIndex].game}</span>
            </div>
            <div>
              <span className="text-[#8a8a8a]">SIGNAL:</span> <span className="text-green-400">98%</span>
            </div>
          </div>
          <div className="flex items-center">
            <span className={`inline-block w-2 h-2 rounded-full ${isPlaying ? 'bg-[#00f0ff] animate-pulse' : 'bg-[#ff007f]'} mr-1`}></span>
            <span className="text-[#00f0ff]">STATUS: {isPlaying ? 'STREAMING' : 'PAUSED'}</span>
            <span className="mx-2 text-[#8a8a8a]">|</span>
            <span className={`${isMuted ? 'text-[#ff007f]' : 'text-[#00f0ff]'}`}>AUDIO: {isMuted ? 'MUTED' : 'ENABLED'}</span>
            <span className="mx-2 text-[#8a8a8a]">|</span>
            <span className="text-[#00f0ff]">PING: 23ms</span>
          </div>
        </div>
        
        {/* Connection status bar */}
        <div className="mt-2 h-1 w-full bg-[#333]">
          <div className="h-full bg-gradient-to-r from-[#00f0ff] to-[#ff007f] w-full scale-x-98 origin-left transform-gpu animate-pulse-slow relative">
            {/* Simulate data packet transfer */}
            <div className="absolute top-0 h-full w-1 bg-white animate-data-packet"></div>
            <div className="absolute top-0 h-full w-1 bg-white animate-data-packet-2" style={{ animationDelay: "1.5s" }}></div>
            <div className="absolute top-0 h-full w-1 bg-white animate-data-packet-3" style={{ animationDelay: "3s" }}></div>
          </div>
        </div>
      </div>

      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
        
        @keyframes matrix {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-matrix {
          animation: matrix 60s linear infinite;
        }
        
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-5px, 5px); }
          40% { transform: translate(-5px, -5px); }
          60% { transform: translate(5px, 5px); }
          80% { transform: translate(5px, -5px); }
          100% { transform: translate(0); }
        }
        .animate-glitch {
          animation: glitch 0.5s cubic-bezier(.25, .46, .45, .94) both;
        }
        
        @keyframes glitch-minor {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        .animate-glitch-minor {
          animation: glitch-minor 0.2s cubic-bezier(.25, .46, .45, .94) both;
        }
        
        @keyframes glitch-shift {
          0% { clip-path: inset(0 0 0 0); }
          5% { clip-path: inset(10% 0 80% 0); }
          10% { clip-path: inset(40% 0 40% 0); }
          15% { clip-path: inset(80% 0 10% 0); }
          20% { clip-path: inset(0 0 0 0); }
          100% { clip-path: inset(0 0 0 0); }
        }
        .animate-glitch-shift {
          animation: glitch-shift 0.4s ease-in-out forwards;
        }
        
        @keyframes color-shift {
          0% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(180deg); }
          100% { filter: hue-rotate(0deg); }
        }
        .animate-color-shift {
          animation: color-shift 0.2s linear;
        }
        
        @keyframes flicker {
          0% { opacity: 0.1; }
          25% { opacity: 0.3; }
          50% { opacity: 0.1; }
          75% { opacity: 0.3; }
          100% { opacity: 0.1; }
        }
        .animate-flicker {
          animation: flicker 0.2s linear infinite;
        }
        
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        @keyframes data-packet {
          0% { transform: translateX(-10px); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
        .animate-data-packet {
          animation: data-packet 4s cubic-bezier(0.5, 0, 0.75, 0) infinite;
        }
        .animate-data-packet-2 {
          animation: data-packet 5s cubic-bezier(0.5, 0, 0.75, 0) infinite;
        }
        .animate-data-packet-3 {
          animation: data-packet 7s cubic-bezier(0.5, 0, 0.75, 0) infinite;
        }
      `}</style>
      
      {/* Connection interface elements for cyberpunk feel */}
      <div className="fixed bottom-4 right-4 z-20">
        <div className="flex flex-col items-end space-y-2">
          <button 
            className="p-2 rounded-full bg-black/70 border border-[#ff007f] text-[#ff007f] hover:bg-[#ff007f]/20 transition-all"
            onClick={() => {
              setIsGlitching(true);
              setTimeout(() => setIsGlitching(false), 500);
            }}
          >
            <Zap className="w-4 h-4" />
          </button>
          <div className="p-2 rounded-lg bg-black/70 border border-[#00f0ff]/30 text-xs text-[#00f0ff] flex items-center">
            <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse mr-2"></div>
            NEURAL LINK ACTIVE
          </div>
        </div>
      </div>
      <RecommendedStreams/>
      <CategoriesSection/>
      <FollowingStreams/>
    </div>
  );
}



// Recommended Streams Component with enhanced cyberpunk styling
function RecommendedStreams() {
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
        <a href="#" className="text-sm text-cyan-400 hover:text-pink-400 transition-colors flex items-center group">
          <span>VIEW_ALL</span>
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <StreamCard 
          title="Late Night Hacking Session" 
          creator="DataPirate" 
          game="HackNet Simulator" 
          viewers="8.2K" 
          tags={["Hacking", "Cybersecurity"]}
          live={true}
          viewerTrend="up"
        />
        <StreamCard 
          title="Speed Running Night City" 
          creator="PixelRiot" 
          game="Night City Racers" 
          viewers="15.7K" 
          tags={["Racing", "Speedrun"]}
          live={true}
          viewerTrend="stable"
        />
        <StreamCard 
          title="Neural Link Tournament" 
          creator="SynthQueen" 
          game="Neural Link" 
          viewers="23.1K" 
          tags={["Tournament", "Esports"]}
          live={true}
          viewerTrend="up"
          featured={true}
        />
        <StreamCard 
          title="System Shock Playthrough" 
          creator="GlitchMonk" 
          game="System Shock" 
          viewers="5.3K" 
          tags={["Horror", "Retro"]}
          live={true}
          viewerTrend="down"
        />
      </div>
      
      <div className="mt-16 relative">
        {/* Decorative cyberpunk element */}
        <div className="absolute -left-4 top-0 w-1 h-8 bg-cyan-500 shadow-glow-cyan"></div>
        
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">CATEGORIES_</span>
            <span className="text-pink-400">YOU_MIGHT_LIKE</span>
            <span className="animate-pulse text-cyan-500 ml-1">|</span>
          </h2>
          <a href="#" className="text-sm text-cyan-400 hover:text-pink-400 transition-colors flex items-center group">
            <span>VIEW_ALL</span>
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          <CategoryCard name="Cyberpunk 2078" viewers="105.2K" trending={true} />
          <CategoryCard name="Night City Racers" viewers="78.6K" trending={true} />
          <CategoryCard name="Neural Link" viewers="45.3K" />
          <CategoryCard name="GridWars X" viewers="67.8K" trending={true} />
          <CategoryCard name="HackNet Simulator" viewers="32.1K" />
          <CategoryCard name="System Shock" viewers="18.9K" />
        </div>
      </div>
    </div>
  );
}

// Enhanced Stream Card Component
function StreamCard({ title, creator, game, viewers, tags = [], live = false, viewerTrend = "stable", featured = false }) {
  // Viewer trend indicators
  const trendIcons = {
    up: <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9v9a1 1 0 01-2 0V8H6a1 1 0 01-1-1V6a1 1 0 011-1h5a1 1 0 011 1v1z" clipRule="evenodd" transform="rotate(45, 10, 10)" /></svg>,
    down: <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9v9a1 1 0 01-2 0V8H6a1 1 0 01-1-1V6a1 1 0 011-1h5a1 1 0 011 1v1z" clipRule="evenodd" transform="rotate(-45, 10, 10)" /></svg>,
    stable: <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
  };

  return (
    <div className={`rounded-lg overflow-hidden bg-[#121212] border ${featured ? 'border-cyan-500 shadow-glow-cyan' : 'border-purple-900'} hover:border-pink-500 transition-all group transform hover:-translate-y-1`}>
      <div className="aspect-video bg-[#121212] relative overflow-hidden">
        <img src="/api/placeholder/320/180" alt="Stream thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
        
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
              <span className="ml-1">{viewers}</span>
            </div>
          </div>
        </div>
        
        {/* Decorative cyberpunk corner element */}
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-pink-500 opacity-70 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500 opacity-70 group-hover:opacity-100 transition-opacity"></div>
      </div>
      
      <div className="p-3">
        <div className="flex items-start space-x-2 mb-2">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-cyan-700 flex-shrink-0 bg-gradient-to-r from-purple-600 to-pink-600 p-0.5">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-xs text-cyan-400">{creator.substring(0, 2)}</span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-white line-clamp-1 group-hover:text-cyan-400 transition-colors">{title}</h3>
            <p className="text-xs text-gray-400 hover:text-pink-400 transition-colors">@{creator}</p>
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

// Enhanced Category Card Component
function CategoryCard({ name, viewers, trending = false }) {
  return (
    <div className="rounded-lg overflow-hidden bg-[#121212] border border-purple-900 hover:border-cyan-500 transition-all transform hover:-translate-y-1 group">
      <div className="aspect-video bg-gradient-to-br from-purple-900 to-[#121212] relative overflow-hidden">
        <img src="/api/placeholder/160/90" alt="Category thumbnail" className="w-full h-full object-cover opacity-50 mix-blend-overlay group-hover:opacity-70 transition-opacity" />
        
        {/* Diagonal line decoration */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div className="absolute top-0 right-0 w-16 h-px bg-gradient-to-r from-transparent to-cyan-500"></div>
          <div className="absolute top-0 right-0 w-px h-16 bg-gradient-to-b from-cyan-500 to-transparent"></div>
        </div>
        
        {/* Trending indicator */}
        {trending && (
          <div className="absolute top-2 right-2">
            <div className="text-xs bg-pink-600 px-1 py-0.5 rounded-sm text-white animate-pulse">
              TRENDING
            </div>
          </div>
        )}
      </div>
      
      <div className="p-2 border-t border-purple-900 group-hover:border-cyan-500 transition-colors">
        <h3 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">{name}</h3>
        <p className="text-xs text-gray-400 flex items-center">
          <svg className="w-3 h-3 mr-1 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          {viewers} viewers
        </p>
      </div>
    </div>
  );
}

// Enhanced Categories Section Component
function CategoriesSection() {
  return (
    <div className="relative mt-8">
      {/* Decorative cyberpunk element */}
      <div className="absolute -left-4 top-0 w-1 h-8 bg-cyan-500 shadow-glow-cyan"></div>
      
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">TOP_</span>
          <span className="text-cyan-400">CATEGORIES</span>
          <span className="animate-pulse text-pink-500 ml-1">|</span>
        </h2>
        
        <div className="flex space-x-2">
          <CategoryFilterButton label="GAMES" active={true} />
          <CategoryFilterButton label="IRL" />
          <CategoryFilterButton label="MUSIC" />
          <CategoryFilterButton label="ESPORTS" />
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <CategoryDetailCard 
          name="Cyberpunk 2078" 
          viewers="105.2K" 
          tags={["FPS", "RPG", "Open World"]}
          trending={true}
          channels={856}
        />
        <CategoryDetailCard 
          name="Night City Racers" 
          viewers="78.6K" 
          tags={["Racing", "Arcade", "Multiplayer"]}
          trending={true}
          channels={742}
        />
        <CategoryDetailCard 
          name="Neural Link" 
          viewers="45.3K" 
          tags={["Strategy", "Competitive", "Esports"]}
          channels={534}
          official={true}
        />
        <CategoryDetailCard 
          name="GridWars X" 
          viewers="67.8K" 
          tags={["MOBA", "Esports", "Team-based"]}
          trending={true}
          channels={683}
        />
        <CategoryDetailCard 
          name="HackNet Simulator" 
          viewers="32.1K" 
          tags={["Simulation", "Cybersecurity", "Puzzle"]}
          channels={419}
        />
        <CategoryDetailCard 
          name="System Shock" 
          viewers="18.9K" 
          tags={["Horror", "FPS", "Classic"]}
          channels={267}
          retro={true}
        />
        <CategoryDetailCard 
          name="Just Chatting" 
          viewers="250.4K" 
          tags={["IRL", "Talk Show", "Commentary"]}
          trending={true}
          channels={3452}
        />
        <CategoryDetailCard 
          name="Neon Drift" 
          viewers="95.2K" 
          tags={["Racing", "Arcade", "Futuristic"]}
          trending={true}
          channels={795}
        />
        <CategoryDetailCard 
          name="NetRunner" 
          viewers="42.6K" 
          tags={["Card Game", "Strategy", "Deck Builder"]}
          channels={487}
        />
        <CategoryDetailCard 
          name="MetaVerse Connection" 
          viewers="28.7K" 
          tags={["VR", "Social", "Simulation"]}
          channels={356}
          newContent={true}
        />
      </div>
    </div>
  );
}

// Category Filter Button Component
function CategoryFilterButton({ label, active = false }) {
  return (
    <button className={`px-3 py-1 rounded-lg text-sm transition-all relative overflow-hidden group
      ${active ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
      {label}
      {active && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
      )}
      <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></span>
    </button>
  );
}

// Enhanced Category Detail Card Component
function CategoryDetailCard({ name, viewers, tags = [], trending = false, channels, official = false, retro = false, newContent = false }) {
  return (
    <div className="rounded-lg overflow-hidden bg-[#121212] border border-purple-900 hover:border-cyan-500 transition-all group transform hover:-translate-y-1">
      <div className="aspect-video bg-gradient-to-br from-purple-900 to-gray-900 relative overflow-hidden">
        <img src="/api/placeholder/240/135" alt="Category thumbnail" className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity mix-blend-overlay" />
        
        {/* Content status indicators */}
        <div className="absolute top-2 right-2 flex flex-col gap-1 items-end">
          {trending && (
            <div className="text-xs bg-pink-600 px-1.5 py-0.5 rounded-sm text-white flex items-center">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              TRENDING
            </div>
          )}
          
          {official && (
            <div className="text-xs bg-blue-600 px-1.5 py-0.5 rounded-sm text-white flex items-center">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              OFFICIAL
            </div>
          )}
          
          {retro && (
            <div className="text-xs bg-purple-600 px-1.5 py-0.5 rounded-sm text-white flex items-center">
              RETRO
            </div>
          )}
          
          {newContent && (
            <div className="text-xs bg-green-600 px-1.5 py-0.5 rounded-sm text-white flex items-center animate-pulse">
              NEW
            </div>
          )}
        </div>
        
        {/* Decorative cyberpunk elements */}
        <div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-6 h-px bg-gradient-to-r from-pink-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-px h-6 bg-gradient-to-t from-pink-500 to-transparent"></div>
        </div>
        
        <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
          <div className="absolute top-0 right-0 w-6 h-px bg-gradient-to-l from-cyan-500 to-transparent"></div>
          <div className="absolute top-0 right-0 w-px h-6 bg-gradient-to-b from-cyan-500 to-transparent"></div>
        </div>
      </div>
      
      <div className="p-3">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">{name}</h3>
          <svg className="w-4 h-4 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </div>
        
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs text-gray-400 flex items-center">
            <svg className="w-3 h-3 mr-1 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            {viewers} viewers
          </p>
          
          <p className="text-xs text-gray-400 flex items-center">
            <svg className="w-3 h-3 mr-1 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            {channels} channels
          </p>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs px-1.5 py-0.5 bg-gray-800 text-gray-300 rounded border border-gray-700 hover:border-purple-500 transition-colors cursor-pointer">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Recommended Streams Component with enhanced cyberpunk styling
function FollowingStreams() {
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
        <a href="#" className="text-sm text-cyan-400 hover:text-pink-400 transition-colors flex items-center group">
          <span>VIEW_ALL</span>
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <StreamCard 
          title="Late Night Hacking Session" 
          creator="DataPirate" 
          game="HackNet Simulator" 
          viewers="8.2K" 
          tags={["Hacking", "Cybersecurity"]}
          live={true}
          viewerTrend="up"
        />
        <StreamCard 
          title="Speed Running Night City" 
          creator="PixelRiot" 
          game="Night City Racers" 
          viewers="15.7K" 
          tags={["Racing", "Speedrun"]}
          live={true}
          viewerTrend="stable"
        />
        <StreamCard 
          title="Neural Link Tournament" 
          creator="SynthQueen" 
          game="Neural Link" 
          viewers="23.1K" 
          tags={["Tournament", "Esports"]}
          live={true}
          viewerTrend="up"
          featured={true}
        />
        <StreamCard 
          title="System Shock Playthrough" 
          creator="GlitchMonk" 
          game="System Shock" 
          viewers="5.3K" 
          tags={["Horror", "Retro"]}
          live={true}
          viewerTrend="down"
        />
      </div>
    </div>
  );
}