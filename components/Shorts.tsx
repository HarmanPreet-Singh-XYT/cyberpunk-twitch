import { useState, useEffect, useRef } from "react";
import { 
  ChevronUp, 
  ChevronDown, 
  Heart, 
  MessageSquare, 
  Share2, 
  X, 
  User, 
  Menu, 
  Zap, 
  Shield, 
  Database, 
  Eye, 
  Wifi, 
  BarChart2, 
  Cpu, 
  Clock, 
  Terminal, 
  Flag,
  AlertTriangle,
  Battery,
  Bookmark,
  MapPin,
  Send,
  ZapOff
} from "lucide-react";
import CommentsPanel from "./Shorts/Comments";
import data from "@/app/data";
// Enhanced video data with more cyberpunk elements and narrative
const videoData = data.shorts;

export default function CyberpunkVideoShorts() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLiked, setIsLiked] = useState({});
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalText, setTerminalText] = useState("");
  const [dataScan, setDataScan] = useState(false);
  const [securityLevel, setSecurityLevel] = useState("Secure");
  const [nightMode, setNightMode] = useState(true);
  const containerRef = useRef(null);
  const videoRefs = useRef([]);
  const terminalRef = useRef(null);

  // Handle scroll events
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault(); // Keep preventing default scroll behavior

      // Trigger glitch effect regardless of direction first
      triggerGlitchEffect(); 

      let nextIndex;
      const totalVideos = videoData.length;

      if (e.deltaY > 0) {
        // Scroll down: Calculate next index, wrap around using modulo
        nextIndex = (currentVideoIndex + 1) % totalVideos;
      } else {
        // Scroll up: Calculate previous index, handle negative wrap-around
        nextIndex = (currentVideoIndex - 1 + totalVideos) % totalVideos;
      }
      
      // Only update state if the index actually changes (optional but good practice)
      if (nextIndex !== currentVideoIndex) {
        setCurrentVideoIndex(nextIndex);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentVideoIndex, videoData.length]); // Add videoData.length dependency
  // Trigger glitch effect on video transition
  const triggerGlitchEffect = () => {
    setGlitchEffect(true);
    setSecurityLevel(Math.random() > 0.7 ? "Warning" : "Secure");
    setTimeout(() => setGlitchEffect(false), 500);
  };

  // Trigger data scan effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDataScan(true);
      setTimeout(() => setDataScan(false), 800);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  // Play current video, pause others
  // Play current video, pause others
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) { // Check if the video ref exists
        if (index === currentVideoIndex) {
          // Attempt to play the current video
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.then(_ => {
              // Automatic playback started!
            }).catch(error => {
              // Auto-play was prevented
              // You might need to mute the video initially or require user interaction
              console.error("Video playback error:", error);
              // Optionally try playing muted if autoplay fails:
              // video.muted = true;
              // video.play().catch(err => console.error("Muted playback error:", err));
            });
          }
        } else {
          // Pause other videos and reset their time
          video.pause();
          video.currentTime = 0; // Optional: Reset time for non-active videos
        }
      }
    });

    // Simulate terminal typing effect when changing videos (keep this)
    simulateTerminalTyping();

  }, [currentVideoIndex]); // Dependency array is correct

  const simulateTerminalTyping = () => {
    const currentVideo = videoData[currentVideoIndex];
    const terminalCommands = [
      `> ACCESS_GRANTED: NEURAL_LINK_ESTABLISHED`,
      `> LOCATION: ${currentVideo.location}`,
      `> USER_PROFILE: @${currentVideo.username}`,
      `> THREAT_LEVEL: ${currentVideo.threatLevel}`,
      `> IMPLANTS_DETECTED: ${currentVideo.implants.join(", ")}`,
      `> CRYPTO_VALUE: ${currentVideo.cryptoValue} ETH`,
      `> CONNECTION_SECURE: TRUE`,
      `> INITIATING_DATA_STREAM...`
    ];
    
    setShowTerminal(true);
    setTerminalText("");
    
    let i = 0;
    const typeNextLine = () => {
      if (i < terminalCommands.length) {
        setTerminalText(prev => prev + terminalCommands[i] + "\n");
        i++;
        setTimeout(typeNextLine, 150);
      } else {
        setTimeout(() => {
          setShowTerminal(false);
        }, 1000);
      }
    };
    
    typeNextLine();
  };

  const handleNavigation = (direction) => {
    triggerGlitchEffect(); // Trigger glitch effect first

    const totalVideos = videoData.length;
    let nextIndex;

    if (direction === "up") {
      nextIndex = (currentVideoIndex - 1 + totalVideos) % totalVideos;
    } else if (direction === "down") {
      nextIndex = (currentVideoIndex + 1) % totalVideos;
    }

    if (nextIndex !== currentVideoIndex) {
      setCurrentVideoIndex(nextIndex);
    }
  };

  const toggleLike = (id) => {
    setIsLiked(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleComments = () => {
    setIsCommentOpen(!isCommentOpen);
  };

  const toggleNightMode = () => {
    setNightMode(!nightMode);
    triggerGlitchEffect();
  };
  

  return (
    <div 
      ref={containerRef}
      className="relative h-[93.2vh] w-full bg-black overflow-hidden"
      style={{ 
        background: nightMode 
          ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)"
          : "linear-gradient(135deg, #1a1a2a 0%, #2a2a4a 100%)",
        backgroundImage: nightMode
          ? "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGcgZmlsbD0iIzJhMmEyYSIgZmlsbC1vcGFjaXR5PSIwLjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEwMCIgeD0iMjAiLz48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEiIHk9IjIwIi8+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMTAwIiB4PSI0MCIvPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMSIgeT0iNDAiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxMDAiIHg9IjYwIi8+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxIiB5PSI2MCIvPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEwMCIgeD0iODAiLz48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEiIHk9IjgwIi8+PC9nPjwvc3ZnPg==')"
          : "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGcgZmlsbD0iIzRhNGE4YSIgZmlsbC1vcGFjaXR5PSIwLjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEwMCIgeD0iMjAiLz48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEiIHk9IjIwIi8+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMTAwIiB4PSI0MCIvPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMSIgeT0iNDAiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxMDAiIHg9IjYwIi8+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxIiB5PSI2MCIvPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEwMCIgeD0iODAiLz48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEiIHk9IjgwIi8+PC9nPjwvc3ZnPg==')",
      }}
    >
      {/* Terminal Overlay */}
      {showTerminal && (
        <div 
          ref={terminalRef}
          className="absolute inset-0 z-50 bg-black/80 flex items-center justify-center p-8"
        >
          <div className="w-full max-w-lg bg-black border border-cyan-500/50 rounded-md p-4">
            <div className="flex items-center justify-between mb-2 border-b border-cyan-800 pb-2">
              <div className="flex items-center">
                <Terminal className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-xs font-mono text-cyan-400">NEURAL_TERMINAL_V3.7</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-3 h-3 text-pink-400 mr-1" />
                <span className="text-xs font-mono text-pink-400">{new Date().toLocaleTimeString()}</span>
              </div>
            </div>
            <div className="font-mono text-xs text-green-400 whitespace-pre-line h-40 overflow-auto">
              {terminalText}
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
      )}

      {/* Video Container with Glitch Effect */}
      <div 
  className={`video-container h-full w-full ${glitchEffect ? 'glitch-effect' : ''} ${dataScan ? 'data-scan' : ''}`}
  style={{ transform: `translateY(-${currentVideoIndex * 100}%)`, transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)" }}
>
  {videoData.map((video, index) => (
    <div key={video.id} className="h-full w-full relative flex items-center justify-center">
      {/* Video Element */}
      <div className="relative w-full h-full max-w-lg mx-auto overflow-hidden">
        <video
        loop
          ref={(el) => {
            if (videoRefs.current) { // Ensure videoRefs.current exists
               if (el) {
                 // Assign the element when it mounts
                 videoRefs.current[index] = el;
               } else {
                 // Optional: Handle cleanup when it unmounts (e.g., remove/nullify entry)
                 // videoRefs.current[index] = null;
                 // or if it's an object/Map: delete videoRefs.current[index];
               }
            }
          }}
          src={video.streamLink}
          playsInline
          autoPlay
          className={`h-full w-full object-cover ${
            nightMode 
              ? 'brightness-75 contrast-150 saturate-150 hue-rotate-15' 
              : 'brightness-110 contrast-110 saturate-150'
          }`}
        />
        
        {/* Enhanced Overlay Effects */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 mix-blend-overlay pointer-events-none"></div> */}
        
        {/* Dynamic Neon Accents - Animated border that pulses */}
        <div className="absolute inset-0 border-2 border-pink-500/20 rounded-md pointer-events-none animate-pulse"></div>
        <div className="absolute inset-0 border border-cyan-400/30 rounded-md pointer-events-none animate-flicker"></div>
        
        {/* Scanlines effect - improved opacity */}
        <div className="absolute inset-0 pointer-events-none scanlines opacity-15"></div>
        
        {/* Enhanced grain texture */}
        <div className="absolute inset-0 pointer-events-none noise-overlay opacity-10"></div>
        
        {/* Hexagon grid overlay */}
        <div className="absolute inset-0 pointer-events-none hexagon-grid opacity-8"></div>
        
        {/* Data overlay grid that animates occasionally */}
        <div className={`absolute inset-0 pointer-events-none data-grid ${Math.random() > 0.7 ? 'opacity-10 animate-data-scan' : 'opacity-0'}`}></div>
        
        {/* Glitch effect that happens randomly */}
        {Math.random() > 0.9 && (
          <div className="absolute inset-0 pointer-events-none glitch-overlay opacity-50 animate-glitch"></div>
        )}
        
        {/* Header UI with improved cyberpunk aesthetics */}
        <div className="absolute top-12 left-4 right-4 flex justify-between items-center">
          {/* User profile section */}
          <div className="flex items-center backdrop-blur-sm bg-black/30 px-2 py-1 rounded-md border-l-2 border-cyan-500">
            <a href={`/channel/${video.streamID}`}>
            <img src={video.avatar} className="w-7 h-7 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 mr-2 flex items-center justify-center ring-2 ring-cyan-500/50 animate-pulse-slow"/>
              {/* <User className="w-3 h-3 text-black" /> */}
            {/* </div> */}
            </a>
            <div>
              <div className="flex items-center">
                <a href={`/live/${video.streamID}`}>
                  <h3 className="text-white font-mono text-sm tracking-wider">@{video.username}</h3>
                </a>
                <div className="ml-2 px-1 bg-purple-500/20 rounded">
                  <span className="text-purple-400 text-xs font-mono tracking-tighter">{video.userRank}</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-xs font-mono text-gray-400">{video.timestamp}</span>
                <span className="mx-1 text-cyan-500">•</span>
                <div className="flex items-center">
                  <Eye className="w-3 h-3 text-cyan-400 mr-1" />
                  <span className="text-xs font-mono text-cyan-400">{Math.floor(Math.random() * 10000) + 1000}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Network & crypto stats */}
          <div className="flex items-center backdrop-blur-sm bg-black/30 px-2 py-1 rounded-md border-r-2 border-purple-500">
            <div className="flex items-center mr-3">
              <BarChart2 className="w-3 h-3 text-purple-400 mr-1" />
              <span className="text-xs font-mono text-purple-400">{video.cryptoValue} ETH</span>
            </div>
            <div className="flex flex-col items-center">
              <Wifi className="w-3 h-3 text-green-400 animate-pulse" />
              <span className="text-xxs font-mono text-green-300">{Math.floor(Math.random() * 100)}ms</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced system status indicators */}
        
        
        {/* Advanced targeting system with dynamic elements */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="targeting-reticle opacity-15 animate-rotate-slow"></div>
          
          {/* Directional indicators */}
          <div className="absolute top-1/4 left-8 w-6 h-6 border-l-2 border-t-2 border-cyan-500/30 animate-pulse"></div>
          <div className="absolute top-1/4 right-8 w-6 h-6 border-r-2 border-t-2 border-cyan-500/30 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-8 w-6 h-6 border-l-2 border-b-2 border-cyan-500/30 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-8 w-6 h-6 border-r-2 border-b-2 border-cyan-500/30 animate-pulse"></div>
          
          {/* Information indicators that randomly pop up */}
          {Math.random() > 0.7 && (
            <div className="absolute top-1/3 left-1/3 bg-black/40 backdrop-blur-sm border border-cyan-500/40 px-2 py-1 rounded-sm">
              <span className="text-cyan-400 text-xs font-mono">SIGNAL: {Math.floor(Math.random() * 100)}%</span>
            </div>
          )}
          
          {Math.random() > 0.7 && (
            <div className="absolute bottom-1/3 right-1/3 bg-black/40 backdrop-blur-sm border border-pink-500/40 px-2 py-1 rounded-sm">
              <span className="text-pink-400 text-xs font-mono">SYNC: {Math.floor(Math.random() * 100)}%</span>
            </div>
          )}
        </div>
        
        {/* Stylized Video Info with better visuals */}
        <div className="absolute bottom-6 left-4 right-16">
          <div className="bg-black/40 backdrop-blur-sm border-l-2 border-cyan-500/40 rounded-md p-2 mb-4 transform hover:scale-102 transition-all duration-300">
            <div className="flex gap-2">
                <span className="inline-block h-4 w-1 bg-cyan-500 ml-1 animate-blink"></span>
                <p className="text-gray-200 text-sm leading-snug">{video.caption}</p>
            </div>
            {/* Animated typing cursor */}
          </div>
          
          {/* Enhanced Cyberpunk Tags with hover effects */}
          {/* <div className="flex gap-2 flex-wrap">
            {video.caption.split('#').slice(1).map((tag, idx) => (
              <div 
                key={idx} 
                className="px-2 py-1 bg-cyan-900/30 border-b border-cyan-500/40 rounded-sm hover:bg-cyan-900/50 hover:border-cyan-400 transition-all duration-300 cursor-pointer"
              >
                <span className="text-xs font-mono text-cyan-400">#{tag.trim()}</span>
              </div>
            ))}
          </div> */}
        </div>

        {/* Enhanced Interaction Buttons with reactive feedback */}
        <div className="absolute right-4 bottom-20 flex flex-col items-center gap-2">
          <button 
            onClick={() => toggleLike(video.id)} 
            className="flex flex-col items-center group"
          >
            <div 
              className={`w-10 h-10 rounded-full ${
                isLiked[video.id] 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600' 
                  : 'bg-black/50 backdrop-blur-sm border border-pink-500/30'
              } flex items-center justify-center hover:scale-110 transition-all duration-300 group-hover:border-pink-400`}
              style={{ 
                boxShadow: isLiked[video.id] 
                  ? "0 0 15px rgba(236, 72, 153, 0.6)" 
                  : "none" 
              }}
            >
              <Heart 
                className={`w-5 h-5 ${
                  isLiked[video.id] 
                    ? 'text-white fill-current' 
                    : 'text-pink-400 group-hover:text-pink-300'
                }`} 
              />
              
              {/* Like animation effect */}
              {isLiked[video.id] && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="w-10 h-10 text-pink-500 opacity-0 animate-heart-burst" />
                </div>
              )}
            </div>
            <span className="text-white text-xs mt-1 font-mono">
              {isLiked[video.id] ? video.likes + 1 : video.likes}
            </span>
          </button>
          
          <button 
            onClick={toggleComments}
            className="flex flex-col items-center group"
          >
            <div 
              className={`w-10 h-10 rounded-full ${
                isCommentOpen 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600' 
                  : 'bg-black/50 backdrop-blur-sm border border-cyan-500/30'
              } flex items-center justify-center hover:scale-110 transition-all duration-300 group-hover:border-cyan-400`}
              style={{ 
                boxShadow: isCommentOpen 
                  ? "0 0 15px rgba(6, 182, 212, 0.6)" 
                  : "none" 
              }}
            >
              <MessageSquare className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
            </div>
            <span className="text-white text-xs mt-1 font-mono">{video.comments}</span>
          </button>
          
          <button className="flex flex-col items-center group">
            <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center hover:scale-110 transition-all duration-300 group-hover:border-purple-400">
              <Share2 className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
            </div>
            <span className="text-white text-xs mt-1 font-mono">{video.shares}</span>
          </button>
          
          {/* New bookmark button */}
          <button className="flex flex-col items-center group">
            <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-yellow-500/30 flex items-center justify-center hover:scale-110 transition-all duration-300 group-hover:border-yellow-400">
              <Bookmark className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300" />
            </div>
            <span className="text-white text-xs mt-1 font-mono">{Math.floor(Math.random() * 100)}</span>
          </button>
        </div>
        
        {/* Augmented reality overlays that randomly appear */}
        {Math.random() > 0.8 && (
          <div className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black/30 backdrop-blur-sm border-l-2 border-purple-500/40 rounded-sm p-2 animate-fade-in-out">
            <div className="flex items-center">
              <ZapOff className="w-4 h-4 text-purple-400 mr-1" />
              <span className="text-xs font-mono text-purple-400">BLACKMARKET SIGNAL</span>
            </div>
            <div className="h-1 bg-purple-900 rounded-full mt-1 relative overflow-hidden">
              <div className="h-full bg-purple-500 absolute" style={{ width: `${Math.floor(Math.random() * 100)}%` }}></div>
            </div>
          </div>
        )}
        
        {/* System notifications that can appear */}
        {Math.random() > 0.9 && (
          <div className="absolute top-10 left-1/3 right-1/3 bg-red-900/30 backdrop-blur-sm border border-red-500/40 rounded p-2 animate-slide-in-out">
            <div className="flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-red-400 mr-1 animate-pulse" />
              <span className="text-xs font-mono text-red-400">CORP SCAN DETECTED</span>
            </div>
          </div>
        )}
        
        {/* Comments section that slides in from the right when active */}
        
        
        {/* HUD elements to enhance the cyberpunk feel */}
        <div className="absolute bottom-4 right-4 flex items-center space-x-2">
          <div className="h-1 w-20 bg-black/50 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-red-500 to-yellow-500" style={{ width: `${Math.floor(Math.random() * 100)}%` }}></div>
          </div>
          <Battery className="w-4 h-4 text-yellow-400" />
        </div>
        
        {/* Video progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/50">
          <div className="h-full bg-gradient-to-r from-cyan-500 to-pink-500 animate-progress"></div>
        </div>
      </div>
    </div>
  ))}
</div>

      <CommentsPanel 
        isCommentOpen={isCommentOpen} 
        toggleComments={toggleComments}
      />

      {/* Enhanced Navigation Buttons */}
      <button 
        onClick={() => handleNavigation("up")}
        disabled={currentVideoIndex === 0}
        className={`absolute top-1/4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center z-20 border ${currentVideoIndex === 0 ? 'border-gray-600 opacity-30' : 'border-cyan-400 hover:bg-cyan-900/30'}`}
        style={{ boxShadow: currentVideoIndex === 0 ? "none" : "0 0 10px rgba(0, 240, 255, 0.5)" }}
      >
        <ChevronUp className={`w-6 h-6 ${currentVideoIndex === 0 ? 'text-gray-600' : 'text-cyan-400'}`} />
      </button>
      
      <button 
        onClick={() => handleNavigation("down")}
        disabled={currentVideoIndex === videoData.length - 1}
        className={`absolute bottom-1/4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center z-20 border ${currentVideoIndex === videoData.length - 1 ? 'border-gray-600 opacity-30' : 'border-cyan-400 hover:bg-cyan-900/30'}`}
        style={{ boxShadow: currentVideoIndex === videoData.length - 1 ? "none" : "0 0 10px rgba(0, 240, 255, 0.5)" }}
      >
        <ChevronDown className={`w-6 h-6 ${currentVideoIndex === videoData.length - 1 ? 'text-gray-600' : 'text-cyan-400'}`} />
      </button>

      {/* Enhanced Progress Indicator */}
      {/* <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-20">
        {videoData.map((_, index) => (
          <div key={index} className="relative">
            <div 
              className={`w-1 h-6 rounded-full ${index === currentVideoIndex ? 'bg-gradient-to-b from-cyan-400 to-purple-600' : 'bg-white/30'}`}
              style={{ 
                boxShadow: index === currentVideoIndex ? "0 0 8px rgba(0, 240, 255, 0.7)" : "none"
              }}
            ></div>
            {index === currentVideoIndex && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-cyan-400 to-purple-600 animate-pulse opacity-70"></div>
            )}
          </div>
        ))}
      </div> */}

      {/* Night Mode Toggle + System Status Indicators */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-20">
        <button 
          onClick={toggleNightMode}
          className={`px-2 py-1 bg-black/40 backdrop-blur-sm border ${nightMode ? 'border-blue-500/30' : 'border-yellow-500/30'} rounded-md flex items-center transition-all duration-300`}
        >
          <Eye className={`w-3 h-3 ${nightMode ? 'text-blue-400' : 'text-yellow-400'} mr-1`} />
          <span className={`text-xs font-mono ${nightMode ? 'text-blue-400' : 'text-yellow-400'}`}>
            {nightMode ? 'NIGHT VISION' : 'DAY VISION'}
          </span>
        </button>
        
        <div className={`px-2 py-1 bg-black/40 backdrop-blur-sm border ${securityLevel === "Secure" ? 'border-green-500/30' : 'border-red-500/30'} rounded-md flex items-center`}>
          <Shield className={`w-3 h-3 ${securityLevel === "Secure" ? 'text-green-400' : 'text-red-400'} mr-1`} />
          <span className={`text-xs font-mono ${securityLevel === "Secure" ? 'text-green-400' : 'text-red-400'}`}>{securityLevel.toUpperCase()}</span>
        </div>
        
        <div className="px-2 py-1 bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-md flex items-center">
          <Zap className="w-3 h-3 text-yellow-400 mr-1" />
          <span className="text-xs font-mono text-yellow-400">SYSTEM ACTIVE</span>
        </div>
      </div>
      
      {/* Footer Connection Info */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-20 pointer-events-none">
        <div className="px-2 py-1 bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-md flex items-center">
          <span className="text-xs font-mono text-purple-400">CONNECTION: SECURE</span>
        </div>
        
        <div className="px-2 py-1 bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-md flex items-center">
          <span className="text-xs font-mono text-cyan-400">NEURALINK™ v4.2.7</span>
        </div>
      </div>

      {/* Helper functions for dynamic styling */}
      {/* These would normally be placed outside the component, but included here for completeness */}
      {(() => {
        // Helper function to get reputation color
        function getReputationColor(reputation) {
          switch(reputation) {
            case "Renegade": return "text-red-400";
            case "Trusted": return "text-green-400";
            case "Corporate": return "text-blue-400";
            case "Glitched": return "text-red-600";
            default: return "text-gray-400";
          }
        }
        
        // Helper function to get implant icon color
        function getImplantColor(implantType) {
          switch(implantType) {
            case "neural": return "bg-purple-500/50 text-purple-200";
            case "medical": return "bg-green-500/50 text-green-200";
            case "security": return "bg-blue-500/50 text-blue-200";
            case "corrupted": return "bg-red-500/50 text-red-200";
            default: return "bg-gray-500/50 text-gray-200";
          }
        }
        
        // Helper function to get implant icon
        function getImplantIcon(implantType) {
          switch(implantType) {
            case "neural": return "N";
            case "medical": return "M";
            case "security": return "S";
            case "corrupted": return "!";
            default: return "?";
          }
        }
        
        return null;
      })()}

      {/* Enhanced visual effects and animations */}
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        
        .scanlines::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 1px,
            rgba(0, 240, 255, 0.03) 2px,
            rgba(0, 240, 255, 0.03) 3px
          );
        }
        
        .hexagon-grid {
          background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI0MyIgdmlld0JveD0iMCAwIDUwIDQzIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwYmM1ZWEiIHN0cm9rZS13aWR0aD0iMC41IiBkPSJNMjUsNDMgTC0wLjA0LDIxLjUgTC0wLjA0LDIxLjUgTDI1LDAgTDUwLjA0LDIxLjUgTDI1LDQzIFoiPjwvcGF0aD48L3N2Zz4=');
          background-size: 50px 43px;
        }
        
        .targeting-reticle {
          width: 100px;
          height: 100px;
          border: 1px solid rgba(0, 240, 255, 0.3);
          border-radius: 50%;
          position: relative;
        }
        
        .targeting-reticle::before, .targeting-reticle::after {
          content: "";
          position: absolute;
          background-color: rgba(0, 240, 255, 0.3);
        }
        
        .targeting-reticle::before {
          width: 1px;
          height: 100%;
          left: 50%;
          top: 0;
        }
        
        .targeting-reticle::after {
          width: 100%;
          height: 1px;
          top: 50%;
          left: 0;
        }
        
        .data-grid {
          background-image: 
            linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
          transition: opacity 0.3s;
        }
        
        .data-scan .data-grid {
          opacity: 0.2;
          animation: dataScan 0.8s linear;
        }
        
        @keyframes dataScan {
          0% { background-position: 0 0; opacity: 0.3; }
          100% { background-position: 0 20px; opacity: 0; }
        }
        
        @keyframes glitch {
          0% {
            transform: translate(0);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
          20% {
            clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
          }
          40% {
            clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
          }
          60% {
            clip-path: polygon(0 60%, 100% 60%, 100% 61%, 0 61%);
          }
          80% {
            clip-path: polygon(0 80%, 100% 80%, 100% 81%, 0 81%);
          }
          100% {
            transform: translate(0);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }
        
        .glitch-effect::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(236, 72, 153, 0.2);
          mix-blend-mode: overlay;
          animation: glitch 0.3s linear;
          z-index: 25;
        }
        
        .corrupted-text {
          text-shadow: 0 0 5px rgba(255, 0, 0, 0.7);
          animation: textCorruption 2s infinite;
        }
        
        @keyframes textCorruption {
          0% { opacity: 1; }
          5% { opacity: 0.8; }
          10% { opacity: 1; }
          15% { opacity: 0.4; }
          20% { opacity: 1; }
          70% { opacity: 1; }
          80% { opacity: 0.6; }
          90% { opacity: 1; }
          93% { opacity: 0.5; }
          95% { opacity: 1; }
        }
        
        @keyframes blinker {
          50% { opacity: 0; }
        }
        
        /* New digital data readout effect */
        @keyframes dataReadout {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        
        [class*="text-cyan-"] {
          text-shadow: 0 0 5px rgba(6, 182, 212, 0.5);
        }
        
        [class*="text-pink-"] {
          text-shadow: 0 0 5px rgba(236, 72, 153, 0.5);
        }
        
        [class*="text-purple-"] {
          text-shadow: 0 0 5px rgba(168, 85, 247, 0.5);
        }
        
        .glitch-text {
          position: relative;
          overflow: hidden;
        }
        
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
        
        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 red;
          animation: glitch-anim-1 2s infinite linear alternate-reverse;
        }
        
        .glitch-text::after {
          left: -2px;
          text-shadow: 2px 0 blue;
          animation: glitch-anim-2 3s infinite linear alternate-reverse;
        }
        
        @keyframes glitch-anim-1 {
          0% { clip-path: inset(30% 0 50% 0); }
          20% { clip-path: inset(20% 0 60% 0); }
          40% { clip-path: inset(40% 0 40% 0); }
          60% { clip-path: inset(10% 0 70% 0); }
          80% { clip-path: inset(50% 0 30% 0); }
          100% { clip-path: inset(0% 0 80% 0); }
        }
        
        @keyframes glitch-anim-2 {
          0% { clip-path: inset(40% 0 40% 0); }
          20% { clip-path: inset(60% 0 20% 0); }
          40% { clip-path: inset(20% 0 60% 0); }
          60% { clip-path: inset(70% 0 10% 0); }
          80% { clip-path: inset(10% 0 70% 0); }
          100% { clip-path: inset(80% 0 0% 0); }
        }
      `}</style>
    </div>
  );
}