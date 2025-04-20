import React, { useState, useEffect } from "react";
import { 
  Play, Pause, Volume2, VolumeX, Heart, Share2, User, 
  MessageSquare, Settings, MoreVertical, Gift, Star,
  Clock, Users, ChevronDown, Award, ExternalLink,
  Zap, Shield, Terminal, Target, Cpu, Radio
} from "lucide-react";
import CyberpunkVideoPlayer from "./Stream/LiveVideoPlayer";
import CyberpunkChat from "./Stream/Chat";
import { useParams, useRouter } from 'next/navigation'
import data from "@/app/data";
import CyberpunkTwitchChat from "./Stream/Chat";
interface Stream {
  id: string;
  thumbnail: string;
  streamLink:string;
  channelId: string;
  title: string;
  game: string;
  viewers: number;
  startedAt: string;
  duration: string;
  tags: string[];
  securityLevel: "Low" | "Medium" | "High" | "Extreme";
  quality: string;
  ping: number;
  signalQuality: number;
  avatar:string;
  channelName:string;
  channelCredits:number | string;
  subscriptions:number | string;
  isSlow:string;
  chatMode:string;
}
function CyberpunkTwitchStream() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [showEmotes, setShowEmotes] = useState(false);
  const [streamTime, setStreamTime] = useState(5064); // Stream time in seconds (1h 24m 24s)
  const [viewerCount, setViewerCount] = useState(12532);
  const [showGlitch, setShowGlitch] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [audioLevel, setAudioLevel] = useState(75);
  const [showStats, setShowStats] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const params = useParams<{ id:string }>()
  const [Data, setData] = useState<Stream>({
    id: "",
    thumbnail: '/placeholder/1200/675',
    streamLink:'',
    channelId: "", // Ninja
    title: "",
    game: "",
    viewers: 0,
    startedAt: "",
    duration: "",
    tags: [],
    securityLevel: "Low",
    quality: "",
    ping: 0,
    signalQuality: 0,
    channelName:'',
    avatar:'/placeholder/1200/675',
    channelCredits:0,
    subscriptions:0,
    isSlow:'ON',
    chatMode:'Followers Only'
  });

  // Sample chat messages with timestamps
  const [chatMessages, setChatMessages] = useState([
    { id: 1, name: "DataPirate", message: "That last shot was insane!", badge: false, isModerator: false, timestamp: "6:32", credits: 2400 },
    { id: 2, name: "NeonHunter", message: "GG EZ", badge: false, isModerator: false, timestamp: "6:33", credits: 750 },
    { id: 3, name: "ByteRunner", message: "Anyone know when the next match starts?", badge: false, isModerator: false, timestamp: "6:34", credits: 5100 },
    { id: 4, name: "GlitchMonk", message: "CyberNomad is unstoppable today!", badge: false, isModerator: false, timestamp: "6:35", credits: 1300 },
    { id: 5, name: "SynthQueen", message: "That's why I subscribed for 6 months", badge: true, isModerator: false, timestamp: "6:36", credits: 12400 },
    { id: 6, name: "PixelRiot", message: "Let's go!!!", badge: false, isModerator: false, timestamp: "6:37", credits: 840 },
    { id: 7, name: "GridHacker", message: "What gaming chair does CN use?", badge: false, isModerator: false, timestamp: "6:38", credits: 3750 },
    { id: 8, name: "NightCity_Mod", message: "Reminder: Prize pool just increased to 60k credits!", badge: true, isModerator: true, timestamp: "6:39", credits: 18300 },
    { id: 9, name: "CyberHex", message: "That dodge at 0:34 was pixel perfect", badge: false, isModerator: false, timestamp: "6:40", credits: 6200 },
  ]);

  // Random stream stats
  const streamStats = {
    fps: 144,
    bitrate: "12.5 Mbps",
    resolution: "1440p",
    network: "Neural-Link™",
    server: "Night City East",
    ping: "8ms",
    gpu: "NeuroSync RTX 9090",
    viewers: viewerCount.toLocaleString()
  };

  // Random tournament stats to display dynamically
  const tournamentTeams = [
    { name: "DrDisrespect", wins: 6, losses: 1, kdRatio: 4.7, credits: 42500 },
    { name: "Shroud", wins: 5, losses: 2, kdRatio: 3.9, credits: 38400 },
    { name: "Tfue", wins: 4, losses: 3, kdRatio: 3.2, credits: 27800 },
    { name: "Ninja", wins: 3, losses: 4, kdRatio: 2.8, credits: 21300 }
  ];

  // Live updated sponsorship banners
  const sponsors = [
    "ArasaCorp", "NeoMilitech", "StreetSmart Implants", "Kiroshi Optics", "Tsunami Neural Boosters"
  ];
  const [currentSponsor, setCurrentSponsor] = useState(0);

  // Simulated chat activity and viewer count
  useEffect(() => {
    const stream = data.streams.find((each)=>each.id === params.id);
    const channel = data.channels.find((each)=>each.id === stream.channelId);
    const user = data.users.find((each)=>each.id === channel.userId);
    setData({
      id: stream.id,
      thumbnail: stream.thumbnail,
      streamLink:stream.thumbnail,
      channelId: stream.channelId, // Ninja
      title: stream.title,
      game: stream.game,
      viewers: stream.viewers,
      startedAt: stream.startedAt,
      duration: stream.duration,
      tags: stream.tags,
      securityLevel: stream.securityLevel,
      quality: stream.quality,
      ping: stream.ping,
      signalQuality: stream.signalQuality,
      channelName:channel.name,
      avatar:user.avatar,
      channelCredits:channel.credits,
      subscriptions:channel.subscriptions,
      isSlow:channel.isSlowMode ? 'ON' : 'OFF',
      chatMode:'Followers Only'
    })
    // Update stream time every second
    const timeInterval = setInterval(() => {
      setStreamTime(prevTime => prevTime + 1);
    }, 1000);

    // Update viewer count randomly
    const viewerInterval = setInterval(() => {
      setViewerCount(prev => {
        const change = Math.floor(Math.random() * 100) - 50;
        return Math.max(10000, prev + change);
      });
    }, 5000);

    // Add new chat messages periodically
    const chatInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        const botUsers = ["ChromeHead", "NetDiver", "SyndicateX", "WiredMind", "NeonViper", "CyberSnake"];
        const botMessages = [
          "This stream is fire 🔥", 
          "Let's goooo!", 
          "CN with the clutch!", 
          "How does he hit those shots??", 
          "That reaction time is insane",
          "Did you see that headshot?!",
          "Neural-boosted reflexes for sure",
          "POGGERS",
          "🏆🏆🏆",
          "Is CN using illegal implants? Too good!"
        ];
        
        const randomUser = botUsers[Math.floor(Math.random() * botUsers.length)];
        const randomMessage = botMessages[Math.floor(Math.random() * botMessages.length)];
        const hasBadge = Math.random() > 0.7;
        const credits = Math.floor(Math.random() * 20000);
        
        const hours = Math.floor(streamTime / 3600);
        const minutes = Math.floor((streamTime % 3600) / 60);
        const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;
        
        setChatMessages(prev => [
          ...prev,
          {
            id: prev.length + 1,
            name: randomUser,
            message: randomMessage,
            badge: hasBadge,
            isModerator: false,
            timestamp: formattedTime,
            credits: credits
          }
        ]);
      }
    }, 3000);

    // Rotate sponsors
    const sponsorInterval = setInterval(() => {
      setCurrentSponsor(prev => (prev + 1) % sponsors.length);
    }, 8000);

    // Trigger glitch effect occasionally
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        setShowGlitch(true);
        setTimeout(() => setShowGlitch(false), 200);
      }
    }, 10000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(viewerInterval);
      clearInterval(chatInterval);
      clearInterval(sponsorInterval);
      clearInterval(glitchInterval);
    };
  }, [streamTime]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    
    // Add new message to chat
    const hours = Math.floor(streamTime / 3600);
    const minutes = Math.floor((streamTime % 3600) / 60);
    const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;
    
    setChatMessages([
      ...chatMessages,
      { 
        id: chatMessages.length + 1, 
        name: "You", 
        message: chatMessage, 
        badge: isSubscribed, 
        isModerator: false,
        timestamp: formattedTime,
        credits: isSubscribed ? 5000 : 1000
      }
    ]);
    setChatMessage("");
  };

  // Format stream time as HH:MM:SS
  const formatStreamTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  const stylePool = [
    "bg-pink-500/20 text-pink-400 border border-pink-500/30",
    "bg-purple-500/20 text-purple-400 border border-purple-500/30",
    "bg-blue-500/20 text-blue-400 border border-blue-500/30",
    "bg-green-500/20 text-green-400 border border-green-500/30",
    "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    "bg-red-500/20 text-red-400 border border-red-500/30",
    "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30",
  ];
  
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-4 lg:gap-4 mx-auto bg-[#121212] text-white ${showGlitch ? 'animate-pulse' : ''}`}>
        <RainEffect/>
      {/* Main content area (3/4 width on large screens) */}
      <div className={`${isFullscreen ? 'lg:col-span-4' : 'lg:col-span-3'}`}>
        <CyberpunkVideoPlayer/>
        {/* <div className="rounded-lg overflow-hidden border border-purple-900 bg-[#121212] relative">
          <div className="aspect-video bg-black relative overflow-hidden">
            
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
              
              <div className="absolute top-4 left-4 flex items-center">
                <div className="bg-black bg-opacity-70 border border-cyan-500 text-white text-xs font-bold px-2 py-1 rounded flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-1 animate-pulse"></div>
                  <span className="text-red-500 font-mono">LIVE</span>
                </div>
                <div className="ml-2 bg-black bg-opacity-70 border border-cyan-500 text-white text-xs px-2 py-1 rounded flex items-center">
                  <Users size={12} className="mr-1 text-cyan-400" />
                  <span className="text-cyan-400 font-mono">{viewerCount.toLocaleString()}</span>
                </div>
                <div className="ml-2 bg-black bg-opacity-70 border border-cyan-500 text-white text-xs px-2 py-1 rounded flex items-center">
                  <Clock size={12} className="mr-1 text-cyan-400" />
                  <span className="text-cyan-400 font-mono">{formatStreamTime(streamTime)}</span>
                </div>
              </div>
              
              
              <div className="absolute top-4 right-4 bg-black bg-opacity-70 border border-cyan-500 text-white text-xs px-2 py-1 rounded">
                <div className="flex items-center">
                  <Target size={12} className="mr-1 text-pink-400" />
                  <span className="text-pink-400 font-mono">TOURNAMENT FINALS</span>
                </div>
              </div>
              
              
            </div>

            
            <div className={`absolute inset-0 border-2 border-transparent ${showGlitch ? 'border-red-500 animate-pulse' : ''}`}></div>

            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-purple-900/30 via-gray-900/80 to-pink-900/30">
                <div className="flex items-center justify-center h-full">
                  <img src="/api/placeholder/640/360" alt="Stream placeholder" className="mix-blend-overlay opacity-70" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent mix-blend-overlay pointer-events-none"></div>
                  <div className="absolute inset-0 border-t border-b border-cyan-500/30 pointer-events-none h-full" style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 1px, rgba(0, 255, 255, 0.03) 1px, rgba(0, 255, 255, 0.03) 2px)' }}></div>
                  
                  
                  
                  
                  {showStats && (
                    <div className="absolute top-24 right-4 bg-black/50 border border-cyan-500/50 p-2 rounded text-xs font-mono">
                      <div className="text-cyan-400 mb-1 flex items-center">
                        <Terminal size={10} className="mr-1" />
                        STREAM TELEMETRY
                      </div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-gray-300">
                        <div>FPS: <span className="text-pink-400">{streamStats.fps}</span></div>
                        <div>BITRATE: <span className="text-pink-400">{streamStats.bitrate}</span></div>
                        <div>RES: <span className="text-pink-400">{streamStats.resolution}</span></div>
                        <div>NET: <span className="text-pink-400">{streamStats.network}</span></div>
                        <div>SERVER: <span className="text-pink-400">{streamStats.server}</span></div>
                        <div>PING: <span className="text-pink-400">{streamStats.ping}</span></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-4">
              
              <div className="relative w-full h-1 bg-gray-700 rounded-full mb-4 mt-6 overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-3/4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                
                
                <div className="absolute left-0 top-0 h-full w-5/6 bg-white opacity-30 rounded-full"></div>
                
                
                <div className="absolute -top-6 left-3/4 transform -translate-x-1/2 text-xs bg-black bg-opacity-70 px-2 py-0.5 rounded border border-cyan-500/50 text-cyan-400 font-mono">
                  {formatStreamTime(streamTime)}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    className="group"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-800 bg-opacity-70 flex items-center justify-center group-hover:bg-pink-500 transition-colors border border-pink-500/50">
                      {isVideoPlaying ? <Pause size={16} /> : <Play size={16} />}
                    </div>
                  </button>
                  
                  <div className="flex items-center group relative">
                    <button 
                      onClick={() => setIsMuted(!isMuted)} 
                      className="w-8 h-8 rounded-full bg-gray-800 bg-opacity-70 flex items-center justify-center group-hover:bg-gray-700 transition-colors border border-cyan-500/50"
                    >
                      {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>
                    
                    <div className="h-1 w-0 group-hover:w-20 overflow-hidden transition-all duration-300 origin-left ml-1">
                      <div className="h-full w-20 bg-gray-700 rounded-full relative">
                        <div 
                          className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                          style={{ width: `${audioLevel}%` }}
                        ></div>
                        <input 
                          type="range"
                          min="0"
                          max="100"
                          value={audioLevel}
                          onChange={(e) => setAudioLevel(parseInt(e.target.value))}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-cyan-400 font-mono hidden md:block">
                    <span>{formatStreamTime(streamTime)}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => setShowStats(!showStats)}
                    className="w-8 h-8 rounded-full bg-gray-800 bg-opacity-70 flex items-center justify-center hover:bg-gray-700 transition-colors border border-pink-500/50"
                  >
                    <Cpu size={16} className={showStats ? "text-pink-400" : ""} />
                  </button>
                  
                  <button 
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className="w-8 h-8 rounded-full bg-gray-800 bg-opacity-70 flex items-center justify-center hover:bg-gray-700 transition-colors border border-cyan-500/50"
                  >
                    <ExternalLink size={16} className={isFullscreen ? "text-cyan-400" : ""} />
                  </button>
                  
                  <button className="w-8 h-8 rounded-full bg-gray-800 bg-opacity-70 flex items-center justify-center hover:bg-gray-700 transition-colors border border-pink-500/50">
                    <Settings size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        <div className="p-4 bg-[#121212] border-b border-l border-r border-purple-900 rounded-b-lg mb-4 backdrop-blur-md relative overflow-hidden">
          
          <div className="absolute inset-0 opacity-10" 
            style={{ 
              backgroundImage: 'linear-gradient(to right, cyan 1px, transparent 1px), linear-gradient(to bottom, cyan 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-start md:justify-between relative z-10">
            <div className="flex items-start space-x-4 mb-4 md:mb-0">
              <div className="relative">
                
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-0.5 animate-pulse">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden border border-cyan-500/50">
                    <User size={24} className="text-cyan-400" />
                  </div>
                </div>
                
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center border border-pink-500">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-1">
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 mr-2">CyberNomad</h3>
                  <span className="bg-purple-500/20 text-purple-400 px-1.5 py-0.5 rounded text-xs font-medium border border-purple-500/50">Partner</span>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                  <p className="text-gray-300 text-sm mb-1 md:mb-0">
                    <span className="font-medium text-pink-400">Playing:</span> 
                    <span className="ml-1 font-mono">Neon Drift</span>
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 mt-2">
                  <span className="bg-pink-500/20 text-pink-400 px-2 py-0.5 rounded text-xs font-medium border border-pink-500/30">Esports</span>
                  <span className="bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded text-xs font-medium border border-purple-500/30">Competitive</span>
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-xs font-medium border border-blue-500/30">FPS</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <button 
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`px-4 py-2 rounded font-medium transition-all flex items-center border ${
                    isFollowing 
                        ? "bg-gray-800 text-cyan-400 border-cyan-500/50 hover:bg-gray-700" 
                        : "bg-gradient-to-r from-pink-500 to-purple-500 text-white border-transparent hover:shadow-lg hover:shadow-pink-500/20"
                    }`}
                >
                    {isFollowing ? "Following" : "Follow"}
                    {isFollowing && <ChevronDown size={16} className="ml-1" />}
                </button>
                
                <button 
                    onClick={() => setIsSubscribed(!isSubscribed)}
                    className={`px-4 py-2 rounded font-medium transition-all flex items-center border ${
                    isSubscribed 
                        ? "bg-gray-800 text-purple-400 border-purple-500/50 hover:bg-gray-700" 
                        : "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent hover:shadow-lg hover:shadow-purple-500/20"
                    }`}
                >
                    {isSubscribed ? "Subscribed" : "Subscribe"}
                    {isSubscribed && <ChevronDown size={16} className="ml-1" />}
                </button>
                
                <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors border border-pink-500/30 hover:border-pink-500">
                    <Gift size={20} className="text-pink-400" />
                </button>
                
                <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors border border-pink-500/30 hover:border-pink-500">
                    <Heart size={20} className={`${isFollowing ? "text-pink-500" : "text-gray-400"}`} />
                </button>
                
                <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors border border-cyan-500/30 hover:border-cyan-500">
                    <Share2 size={20} className="text-cyan-400" />
                </button>

              </div>
              <div className="flex items-center text-gray-400 text-sm ml-auto">
                <Users size={14} className="mr-1 text-red-500" />
                <span className="text-red-500 font-mono">{viewerCount.toLocaleString()} viewers</span>
                <span className="mx-2">•</span>
                <Clock size={14} className="mr-1 text-cyan-400" />
                <span className="text-cyan-400 font-mono">Started {Math.floor(streamTime / 3600)}h {Math.floor((streamTime % 3600) / 60)}m ago</span>
            </div>
            </div>
          </div>
        </div>  */}
        <div className="rounded-b-lg p-4 overflow-hidden border-b-2 border-x-2 border-purple-900 bg-[#121212] relative">
          <div className="absolute inset-0 opacity-10" 
            style={{ 
              backgroundImage: 'linear-gradient(to right, cyan 1px, transparent 1px), linear-gradient(to bottom, cyan 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}>
          </div>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between relative z-10">
              <div className="flex items-start space-x-4 mb-4 md:mb-0">
                <div className="relative">
                  <a href={`/channel/${Data.id}`}>
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-0.5 animate-pulse">
                      <img src={Data.avatar} className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden border border-cyan-500/50"/>
                        {/* <User size={24} className="text-cyan-400" /> */}
                      {/* </div> */}
                    </div>
                  </a>
                  
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center border border-pink-500">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-1">
                  <a href={`/channel/${Data.id}`}>
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 mr-2">{Data.channelName}</h3>
                  </a>
                    <span className="bg-purple-500/20 text-purple-400 px-1.5 py-0.5 rounded text-xs font-medium border border-purple-500/50">Partner</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                    <p className="text-gray-300 text-sm mb-1 md:mb-0">
                      <span className="font-medium text-pink-400">Playing:</span> 
                      <span className="ml-1 font-mono">{Data.game}</span>
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap items-center space-x-2 mt-2">
                    {/* <span className="bg-pink-500/20 text-pink-400 px-2 py-0.5 rounded text-xs font-medium border border-pink-500/30">Esports</span>
                    <span className="bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded text-xs font-medium border border-purple-500/30">Competitive</span>
                    <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-xs font-medium border border-blue-500/30">FPS</span> */}
                    {Data.tags.map((name, index) => {
                      const style = stylePool[index % stylePool.length];
                      return (
                        <span
                          key={name}
                          className={`px-2 py-0.5 rounded text-xs font-medium ${style}`}
                        >
                          {name}
                        </span>
                      );
                    })}

                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <button 
        onClick={() => setIsFollowing(!isFollowing)}
        className={`px-5 py-2 rounded font-bold tracking-wider uppercase text-sm transition-all flex items-center relative overflow-hidden
        ${isFollowing 
          ? "bg-gray-900 text-cyan-400 border-l-4 border-cyan-500 shadow-lg shadow-cyan-500/20" 
          : "bg-gradient-to-r from-pink-600 to-purple-600 text-white border border-pink-500 shadow-md shadow-pink-500/40 hover:shadow-lg hover:shadow-pink-500/60"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 opacity-50"></div>
        <Zap size={16} className="mr-2" />
        {isFollowing ? "Connected" : "Connect"}
        {isFollowing && <ChevronDown size={16} className="ml-1" />}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      </button>
      
      {/* Subscribe Button */}
      <button 
        onClick={() => setIsSubscribed(!isSubscribed)}
        className={`px-5 py-2 rounded font-bold tracking-wider uppercase text-sm transition-all flex items-center relative overflow-hidden
        ${isSubscribed 
          ? "bg-gray-900 text-purple-400 border-l-4 border-purple-500 shadow-lg shadow-purple-500/20" 
          : "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white border border-blue-500 shadow-md shadow-blue-500/40 hover:shadow-lg hover:shadow-purple-500/60"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-50"></div>
        <Zap size={16} className="mr-2" />
        {isSubscribed ? "Subscribed" : "Subscribe"}
        {isSubscribed && <ChevronDown size={16} className="ml-1" />}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </button>
      
      {/* Gift Button */}
      <button className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-all border border-pink-500/50 shadow-md shadow-pink-500/20 hover:shadow-lg hover:shadow-pink-500/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent"></div>
        <Gift size={20} className="text-pink-400 z-10" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
      </button>
      
      {/* Like Button */}
      <button 
        onClick={() => setIsLiked(!isLiked)}
        className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-all border border-red-500/50 shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/40 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent"></div>
        <Heart 
          size={20} 
          className={`z-10 ${isLiked ? "text-red-500 fill-red-500" : "text-gray-400"}`} 
        />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      </button>
      
      {/* Share Button */}
      <button className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-all border border-cyan-500/50 shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent"></div>
        <Share2 size={20} className="text-cyan-400 z-10" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      </button>

                </div>
                <div className="flex items-center text-gray-400 text-sm ml-auto">
                  <Users size={14} className="mr-1 text-red-500" />
                  <span className="text-red-500 font-mono">{Data.viewers.toLocaleString()} viewers</span>
                  <span className="mx-2">•</span>
                  <Clock size={14} className="mr-1 text-cyan-400" />
                  <span className="text-cyan-400 font-mono">Started {Math.floor(streamTime / 3600)}h {Math.floor((streamTime % 3600) / 60)}m ago</span>
                </div>
              </div>
          </div>
        </div>
        {/* Stream info section with enhanced cyberpunk visual elements */}
        <div className="p-4 bg-[#121212] mt-4 border border-purple-900 rounded-lg mb-4 relative overflow-hidden">
          {/* Tech circuit background pattern */}
          <div className="absolute inset-0 opacity-5" 
            style={{ 
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z\' fill=\'%23009de4\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")'
              }}>
            </div>
            
            {/* Glowing border effect */}
            <div className="absolute inset-0 border border-cyan-500/20 rounded-lg"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2 flex items-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-pulse">
                  Night City Showdown Tournament - Finals!
                </span>
                <span className="ml-2 bg-red-500/20 text-red-400 px-2 py-0.5 rounded text-xs font-medium border border-red-500/30 animate-pulse">LIVE</span>
              </h2>
              
              <div className="mb-4 text-gray-300">
                <p className="leading-relaxed text-sm md:text-base">
                  Watch CyberNomad compete in the final round of the Night City Championship. Winner takes home 60,000 credits and the title of Night City Champion! 
                  <br /><br />
                  <span className="text-pink-400 font-bold">TOURNAMENT BRACKET:</span> Winners: CyberNomad vs NetRunner. Losers: PixelRiot vs DataSlicer.
                </p>
              </div>
              
              {/* Tournament stats panel with enhanced cyberpunk styling */}
              <div className="bg-gray-800/80 rounded-lg p-3 border border-purple-900/50 backdrop-blur-sm relative overflow-hidden">
                {/* Digital noise overlay */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" 
                  style={{ 
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
                  }}>
                </div>
                
                <div className="flex items-center justify-between mb-2 relative z-10">
                  <h3 className="font-medium text-white flex items-center">
                    <Award size={16} className="mr-2 text-yellow-400" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Tournament Stats</span>
                  </h3>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-1"></div>
                    <span className="text-xs text-green-400 font-mono">LIVE DATA</span>
                  </div>
                </div>
                
                {/* Main stats grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                  <div className="bg-[#121212]/80 p-3 rounded border border-purple-900/30 backdrop-blur-sm relative overflow-hidden group transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                    <div className="text-xs text-gray-400 mb-1 font-mono">Prize Pool</div>
                    <div className="text-xl font-bold text-pink-400 flex items-baseline">
                      60,000 <span className="ml-1 text-sm">Credits</span>
                    </div>
                  </div>
                  
                  <div className="bg-[#121212]/80 p-3 rounded border border-purple-900/30 backdrop-blur-sm relative overflow-hidden group transition-all hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                    <div className="text-xs text-gray-400 mb-1 font-mono">CyberNomad's K/D Ratio</div>
                    <div className="text-xl font-bold text-cyan-400">4.7</div>
                  </div>
                  
                  <div className="bg-[#121212]/80 p-3 rounded border border-purple-900/30 backdrop-blur-sm relative overflow-hidden group transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                    <div className="text-xs text-gray-400 mb-1 font-mono">Match Status</div>
                    <div className="text-xl font-bold text-purple-400 flex items-center">
                      Final <span className="ml-2 text-sm text-gray-500">(7 of 7)</span>
                    </div>
                  </div>
                </div>
                
                {/* Expanded tournament bracket */}
                <div className="mt-4 bg-[#121212]/50 p-3 rounded border border-cyan-500/30 backdrop-blur-sm">
                  <h4 className="text-sm font-medium text-cyan-400 mb-2 flex items-center">
                    <Target size={14} className="mr-1" />
                    Tournament Leaderboard
                  </h4>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-gray-400 border-b border-gray-800">
                          <th className="text-left py-2 font-mono font-medium">PLAYER</th>
                          <th className="text-center py-2 font-mono font-medium">W-L</th>
                          <th className="text-center py-2 font-mono font-medium">K/D</th>
                          <th className="text-right py-2 font-mono font-medium">CREDITS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tournamentTeams.map((team, index) => (
                          <tr key={index} className={`border-b border-gray-800/50 ${index === 0 ? 'text-cyan-400' : 'text-gray-300'}`}>
                            <td className="py-2 font-medium flex items-center">
                              {index === 0 && <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2 animate-pulse"></div>}
                              {team.name}
                            </td>
                            <td className="text-center py-2">{team.wins}-{team.losses}</td>
                            <td className="text-center py-2">{team.kdRatio}</td>
                            <td className="text-right py-2 font-mono">{team.credits.toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              {/* Match history with enhanced cyberpunk styling */}
              <div className="mt-4 bg-gray-800/80 rounded-lg p-3 border border-pink-900/50 backdrop-blur-sm">
                <h4 className="text-sm font-medium text-pink-400 mb-2 flex items-center">
                  <Clock size={14} className="mr-1" />
                  Latest Highlights
                </h4>
                
                <div className="space-y-2">
                  <div className="bg-[#121212]/80 p-2 rounded border border-pink-500/20 flex items-center">
                    <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center mr-2 text-pink-500">
                      <Zap size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-200 text-sm">CyberNomad scored a quadruple kill</div>
                      <div className="text-gray-500 text-xs">2 minutes ago</div>
                    </div>
                    <div className="text-xs px-2 py-1 bg-pink-500/20 text-pink-400 rounded-full border border-pink-500/30">
                      +2,400 points
                    </div>
                  </div>
                  
                  <div className="bg-[#121212]/80 p-2 rounded border border-cyan-500/20 flex items-center">
                    <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center mr-2 text-cyan-500">
                      <Shield size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-200 text-sm">CyberNomad secured Zone B</div>
                      <div className="text-gray-500 text-xs">5 minutes ago</div>
                    </div>
                    <div className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                      +1,800 points
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Chat section (1/4 width on large screens) - only shown if not fullscreen */}
        {!isFullscreen && (
          <div className="lg:col-span-1">
            <CyberpunkTwitchChat/>
            
            {/* Chat info panel */}
            <div className="mt-4 rounded-lg border border-cyan-900 overflow-hidden bg-[#121212] p-3">
              <h4 className="text-sm font-medium text-cyan-400 mb-2 flex items-center">
                <Radio size={14} className="mr-1" />
                Channel Info
              </h4>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <div className="text-gray-400">Channel Credits</div>
                  <div className="font-medium text-cyan-400 font-mono">{Data.channelCredits.toLocaleString()}</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-gray-400">Subscriptions</div>
                  <div className="font-medium text-pink-400 font-mono">{Data.subscriptions.toLocaleString()}</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-gray-400">Chat Mode</div>
                  <div className="font-medium text-purple-400 font-mono">{Data.chatMode}</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-gray-400">Slow Mode</div>
                  <div className="font-medium text-green-400 font-mono">{Data.isSlow}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  // Enhanced Chat Message Component with cyberpunk styling
  function ChatMessage({ name, message, badge, isModerator, timestamp, credits }) {
    const getNameColor = () => {
      if (name === "You") return "text-white";
      if (isModerator) return "text-green-400";
      
      // Pseudo-random color based on name for consistent user colors
      const colors = [
        "text-pink-400", "text-purple-400", "text-blue-400", 
        "text-cyan-400", "text-red-400", "text-yellow-400"
      ];
      
      let sum = 0;
      for (let i = 0; i < name.length; i++) {
        sum += name.charCodeAt(i);
      }
      
      return colors[sum % colors.length];
    };
  
    // Credit tier badges
    const getCreditBadge = () => {
      if (credits >= 15000) return { color: "from-yellow-400 to-yellow-600", tier: "ELITE" };
      if (credits >= 10000) return { color: "from-purple-400 to-pink-600", tier: "CYBER" };
      if (credits >= 5000) return { color: "from-blue-400 to-cyan-600", tier: "PRIME" };
      if (credits >= 1000) return { color: "from-green-400 to-teal-600", tier: "BASE" };
      return null;
    };
    
    const creditBadge = getCreditBadge();
  
    return (
      <div className="text-sm group hover:bg-gray-800/50 p-1 rounded transition-colors relative">
        {/* Highlight effect for new messages */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-cyan-500/5 rounded opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <div className="flex items-baseline relative z-10">
          <span className="text-xs text-gray-500 mr-1 font-mono">{timestamp}</span>
          <span className={`font-medium ${getNameColor()}`}>
            {name}
          </span>
          
          {badge && (
            <span className="inline-block mx-1 px-1 py-0.5 bg-gradient-to-r from-pink-500 to-purple-500 text-xs rounded text-white">
              SUB
            </span>
          )}
          
          {isModerator && (
            <span className="inline-block mx-1 px-1 py-0.5 bg-green-500 text-xs rounded text-white">
              MOD
            </span>
          )}
          
          {creditBadge && (
            <span className={`inline-block mx-1 px-1 py-0.5 bg-gradient-to-r ${creditBadge.color} text-xs rounded text-white`}>
              {creditBadge.tier}
            </span>
          )}
          
          <span className="text-gray-300">: {message}</span>
        </div>
        
        {/* Message actions (visible on hover) */}
        <div className="hidden group-hover:flex mt-1 space-x-2 pl-6">
          <button className="text-xs text-gray-500 hover:text-cyan-400 transition-colors">Reply</button>
          <button className="text-xs text-gray-500 hover:text-pink-400 transition-colors">Boost</button>
          <button className="text-xs text-gray-500 hover:text-red-400 transition-colors">Report</button>
        </div>
      </div>
    );
  }
  function RainEffect() {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-px bg-cyan-500 opacity-70"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `-20%`,
                height: `${Math.random() * 30 + 20}%`,
                animation: `rain ${Math.random() * 2 + 1}s linear ${Math.random() * 2}s infinite`,
              }}
            />
          ))}
          <style jsx global>{`
            @keyframes rain {
              0% {
                transform: translateY(0);
              }
              100% {
                transform: translateY(1000%);
              }
            }
          `}</style>
        </div>
      </div>
    );
  }
  
  export default CyberpunkTwitchStream;