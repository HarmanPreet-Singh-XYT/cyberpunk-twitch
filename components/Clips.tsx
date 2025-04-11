'use client'
import { useState, useEffect, useRef } from 'react';
import { Play, Heart, Share2, MessageSquare, MoreHorizontal, ChevronLeft, ChevronRight, Clock, Eye, Volume2, Speaker, Maximize, Users, Star, Zap, Shield, ExternalLink, Download, Bookmark, Bell } from 'lucide-react';
import CyberpunkVideoPlayer from './Stream/VideoPlayer';
import Navbar from './Stream/Navbar';
import Sidebar from './Stream/Channels';
import data from '@/app/data';
import { useParams } from 'next/navigation';
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

const recommendedClips = [
  { id: 1, title: "CORPO_TAKEDOWN//Arasaka Infiltration", creator: "V_Merc", views: "98K", thumbnail: "/api/placeholder/320/180", duration: "00:58", createdAgo: "2 days ago" },
  { id: 2, title: "CYBERPSYCHO//Mall Rampage Escape", creator: "ChromeRunner", views: "76K", thumbnail: "/api/placeholder/320/180", duration: "01:24", createdAgo: "5 hours ago" },
  { id: 3, title: "BRAINDANCE//Neural Trip Highlight", creator: "NightCity_Dreamer", views: "103K", thumbnail: "/api/placeholder/320/180", duration: "00:37", createdAgo: "6 hours ago" },
  { id: 4, title: "SANDEVISTAN//Time Dilation Takedown", creator: "TimeSliceR", views: "215K", thumbnail: "/api/placeholder/320/180", duration: "00:45", createdAgo: "1 day ago" },
];



// Glitch effect generator
const generateGlitchEffect = () => {
  return {
    x: Math.random() > 0.5,
    y: Math.random() > 0.7,
    opacity: Math.random() * 0.3 + 0.05,
    duration: Math.random() * 400 + 100
  };
};

// Random noise generator for background
const generateNoise = () => {
  const noise = [];
  for (let i = 0; i < 30; i++) {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    const opacity = Math.random() * 0.4;
    const size = Math.random() * 2 + 1;
    noise.push({ x, y, opacity, size });
  }
  return noise;
};

// Main component
export default function CyberpunkClipPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [noise, setNoise] = useState(generateNoise());
  const [glitchEffect, setGlitchEffect] = useState({ active: false });
  const [showTooltip, setShowTooltip] = useState("");
  const [activeTab, setActiveTab] = useState("comments");
  const [currentViewers, setCurrentViewers] = useState<number>(0);
  const [clipData, setClipData] = useState<any>(data.clips[0]);
  const [channelInfo, setChannelInfo] = useState<any>(data.channels[0]);
  const [userInfo, setUserInfo] = useState<any>(data.users[0]);
  const commentInputRef = useRef(null);
  const params = useParams<{id:string}>();
  // Enhanced HUD-style progress indicators
  const statsProgressBars = [
    { label: "GRAPHICS", value: clipData.ratings.graphics, color: "cyan" },
    { label: "NETRUNNING", value: clipData.ratings.netrunning, color: "pink" },
    { label: "MOVEMENT", value: clipData.ratings.movement, color: "purple" },
    { label: "COMBAT", value: clipData.ratings.combat, color: "green" },
  ];
  function searchChannel(id:string){
    const channel = data.channels.find(c => c.id === id);
    return channel.name
  }
  useEffect(() => {
    const clip = data.clips.find((clip) => clip.id === params.id);
    if (clip) {
      setClipData(clip);
      setCurrentViewers(clip.views);
  
      const channel = data.channels.find((channel) => channel.id === clip.channelId);
      setChannelInfo(channel);
  
      const user = data.users.find((user) => user.id === channel.userId);
      setUserInfo(user);
    }
  }, [params.id, data]);
  
  // Regenerate noise effect periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setNoise(generateNoise());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Random glitch effects
  useEffect(() => {
    const triggerGlitch = () => {
      const effect = generateGlitchEffect();
      setGlitchEffect({ active: true, ...effect });
      
      setTimeout(() => {
        setGlitchEffect({ active: false });
      }, effect.duration);
    };
    
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        triggerGlitch();
      }
    }, 3000);
    
    return () => clearInterval(glitchInterval);
  }, []);

  // Simulate fluctuating viewer count
  useEffect(() => {
    const viewerInterval = setInterval(() => {
      const change = Math.floor(Math.random() * 10) - 4;
      setCurrentViewers(prev => Math.max(prev + change, clipData.views - 50));
    }, 5000);
    
    return () => clearInterval(viewerInterval);
  }, []);

  // Calculate live time
  const [liveTime, setLiveTime] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveTime(prev => prev + 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatLiveTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  const [isMenuOpen, setisMenuOpen] = useState(true);
  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-black opacity-80">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'linear-gradient(rgba(138, 43, 226, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)',
               backgroundSize: '40px 40px',
               transform: 'perspective(500px) rotateX(5deg)',
             }}>
        </div>
        
        {/* Enhanced noise elements */}
        {noise.map((point, index) => (
          <div 
            key={index}
            className="absolute bg-cyan-400"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              width: `${point.size}px`,
              height: `${point.size}px`,
              opacity: point.opacity,
              boxShadow: `0 0 ${8 + point.size * 2}px ${2 + point.size}px rgba(0, 240, 255, 0.8)`,
            }}
          />
        ))}
      </div>

      {/* Screen glitch effect overlay */}
      {/* {glitchEffect.active && (
        <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden">
          <div 
            className="absolute inset-0 bg-cyan-500 mix-blend-lighten"
            style={{
              opacity: glitchEffect.opacity,
              transform: `translateX(${glitchEffect.x ? '5px' : '0'}) translateY(${glitchEffect.y ? '5px' : '0'})`,
            }}
          />
          <div 
            className="absolute inset-0 bg-pink-500 mix-blend-lighten"
            style={{
              opacity: glitchEffect.opacity * 0.7,
              transform: `translateX(${glitchEffect.x ? '-3px' : '0'}) translateY(${glitchEffect.y ? '-3px' : '0'})`,
            }}
          />
        </div>
      )} */}
    <Navbar setIsMenuOpen={setisMenuOpen}/>
      <div className="relative z-10 mx-auto px-4 py-6">
        <header className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <a href="/" className="text-cyan-400 hover:text-pink-500 transition-colors duration-300 mr-4 group">
                <ChevronLeft size={24} className="group-hover:translate-x-[-2px] transition-transform duration-300" />
              </a>
              <h1 className="text-xl md:text-2xl font-bold font-mono relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 blur opacity-70"></span>
                <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent relative">
                  CLIPS//SHOWCASE_
                </span>
              </h1>
            </div>
            <div className="flex space-x-3 items-center">
              <div className="px-3 py-1 bg-gray-900/80 border border-purple-600 rounded flex items-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-purple-900/20 backdrop-blur-sm"></div>
                <Users size={14} className="text-purple-400 mr-2 relative z-10" />
                <span className="text-cyan-400 font-mono relative z-10 group-hover:text-pink-400 transition-colors">
                  {currentViewers.toLocaleString()}
                </span>
              </div>
              <div className="px-3 py-1 bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-pink-600 rounded text-pink-300 text-sm flex items-center group relative overflow-hidden">
                <div className="absolute inset-0 bg-pink-900/20 backdrop-blur-sm"></div>
                <Zap size={14} className="mr-1 relative z-10 group-hover:text-yellow-300 transition-colors" />
                <span className="relative z-10 flex items-center">
                  LIVE <span className="ml-2 font-mono text-xs opacity-70">{formatLiveTime(liveTime)}</span>
                </span>
                {/* Pulsing effect */}
                <div className="absolute top-0 right-0 h-2 w-2">
                  <div className="absolute top-0 right-0 h-2 w-2 bg-pink-500 rounded-full animate-ping"></div>
                  <div className="absolute top-0 right-0 h-2 w-2 bg-pink-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced HUD navigation */}
          {/* <div className="flex overflow-x-auto no-scrollbar pb-2 mt-1 mb-2">
            <div className="flex space-x-1">
              {['HOME', 'EXPLORE', 'SUBSCRIPTIONS', 'LIBRARY', 'SETTINGS'].map((item) => (
                <button key={item} className="px-3 py-1 text-xs font-mono bg-gray-800/50 hover:bg-cyan-900/40 text-gray-400 hover:text-cyan-400 border-b border-transparent hover:border-cyan-500 transition-all">
                  {item}
                </button>
              ))}
            </div>
          </div> */}
        </header>
            
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main clip section */}
          <div className="lg:col-span-2">
            {/* Video player with enhanced cyberpunk HUD elements */}
            <CyberpunkVideoPlayer/>
            
            {/* Enhanced clip info */}
            <div className="mb-6 mt-4 relative">
              <div className="absolute -left-3 top-1 bottom-1 w-1 bg-gradient-to-b from-cyan-500 to-purple-600"></div>
              
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold mb-1 font-mono text-gray-100 relative inline-block group">
                  {clipData.title}
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </h2>
                <div className="flex space-x-1">
                  <button 
                    className="text-gray-400 hover:text-cyan-400 transition-colors w-8 h-8 flex items-center justify-center rounded hover:bg-gray-800/70"
                    onMouseEnter={() => setShowTooltip("save")}
                    onMouseLeave={() => setShowTooltip("")}
                    onClick={() => setIsSaved(!isSaved)}
                  >
                    <Bookmark size={18} fill={isSaved ? "currentColor" : "none"} className={isSaved ? "text-purple-400" : ""} />
                    {showTooltip === "save" && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-gray-200 px-2 py-1 text-xs rounded whitespace-nowrap border border-gray-700">
                        {isSaved ? "Saved" : "Save clip"}
                      </div>
                    )}
                  </button>
                  <button 
                    className="text-gray-400 hover:text-cyan-400 transition-colors w-8 h-8 flex items-center justify-center rounded hover:bg-gray-800/70"
                    onMouseEnter={() => setShowTooltip("download")}
                    onMouseLeave={() => setShowTooltip("")}
                  >
                    <Download size={18} />
                    {showTooltip === "download" && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-gray-200 px-2 py-1 text-xs rounded whitespace-nowrap border border-gray-700">
                        Download clip
                      </div>
                    )}
                  </button>
                  <button 
                    className="text-gray-400 hover:text-cyan-400 transition-colors w-8 h-8 flex items-center justify-center rounded hover:bg-gray-800/70"
                    onMouseEnter={() => setShowTooltip("more")}
                    onMouseLeave={() => setShowTooltip("")}
                  >
                    <MoreHorizontal size={18} />
                    {showTooltip === "more" && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-gray-200 px-2 py-1 text-xs rounded whitespace-nowrap border border-gray-700">
                        More options
                      </div>
                    )}
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center text-sm mb-3">
                <div className="mr-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 mr-2 overflow-hidden border border-gray-700 p-0.5">
                    <img src={userInfo.avatar} alt={channelInfo.name} className="w-full rounded-full h-full object-cover" />
                  </div>
                  <a href={`/channel/${data.streams.find((each)=>each.channelId===clipData.channelId).id}`}>
                    <span className="text-cyan-400 hover:text-pink-400 transition-colors cursor-pointer flex items-center">
                      {channelInfo.name}
                      <Shield size={12} className="ml-1 text-purple-400" aria-description="Verified Creator" />
                    </span>
                  </a>
                </div>
                <div className="text-gray-500 flex items-center space-x-4">
                  <div className="flex items-center">
                    <Eye size={14} className="mr-1 text-purple-400" />
                    <span className="font-mono">{clipData.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1 text-pink-400" />
                    <span className="font-mono">{clipData.createdAt}</span>
                  </div>
                  <div className="px-2 py-0.5 bg-gray-800 rounded text-xs border border-purple-600/50 hover:border-cyan-500 transition-colors cursor-pointer group">
                    <span className="group-hover:text-cyan-400 transition-colors">{clipData.game}</span>
                  </div>
                </div>
              </div>
              
              {/* Clip description */}
              <div className="mb-4 p-3 bg-gray-900/30 border border-gray-800 rounded text-gray-300 text-sm">
                <p>{clipData.description}</p>
              </div>
              
              {/* Enhanced HUD-style stats bars */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {statsProgressBars.map((stat, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-24 text-xs font-mono text-gray-400">{stat.label}</div>
                    <div className="flex-1 h-2 bg-gray-800 rounded-sm overflow-hidden relative">
                      <div 
                        className={`h-full absolute top-0 left-0 bg-${stat.color}-500`}
                        style={{ width: `${stat.value}%` }}
                      ></div>
                      {/* Scanning animation */}
                      <div className="absolute top-0 left-0 w-full h-full">
                        <div className="h-full w-4 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-scan"></div>
                      </div>
                    </div>
                    <div className="w-8 text-right text-xs font-mono text-cyan-400">{stat.value}</div>
                  </div>
                ))}
              </div>
              
              {/* Enhanced Engagement buttons */}
              <div className="flex flex-wrap gap-3 mt-4">
                <button 
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md border transition-all duration-300 ${isLiked ? 'border-pink-500 bg-pink-500/20 text-pink-400' : 'border-gray-700 bg-gray-800/50 text-gray-300 hover:bg-gray-700'}`}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
                  <span>{isLiked ? (clipData.likes + 1).toLocaleString() : clipData.likes.toLocaleString()}</span>
                </button>
                
                <button className="flex items-center space-x-2 px-4 py-2 rounded-md border border-gray-700 bg-gray-800/50 text-gray-300 hover:bg-gray-700 transition-colors duration-300">
                  <MessageSquare size={16} />
                  <span>{clipData.comments.toLocaleString()}</span>
                </button>
                
                <button className="flex items-center space-x-2 px-4 py-2 rounded-md border border-gray-700 bg-gray-800/50 text-gray-300 hover:bg-gray-700 transition-colors duration-300">
                  <Share2 size={16} />
                  <span>{clipData.shares}</span>
                </button>
                
                {/* <button className="flex items-center space-x-2 px-4 py-2 rounded-md border border-gray-700 bg-gray-800/50 text-gray-300 hover:bg-gray-700 transition-colors duration-300 ml-auto">
                  <ExternalLink size={14} className="mr-1" />
                  <span className="text-sm">OPEN FULLSCREEN</span>
                </button> */}
              </div>
              
              {/* Enhanced Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {channelInfo.channelTags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 bg-gray-800 rounded-sm text-xs font-mono text-cyan-400 border-l-2 border-cyan-500 hover:bg-gray-700 cursor-pointer transition-colors relative group overflow-hidden"
                  >
                    {tag}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                ))}
              </div>
            </div>
            
            {/* Enhanced tabbed content */}
            <div>
              <div className="border-b border-gray-800 mb-4">
                <div className="flex">
                  {["comments", "related", "info"].map((tab) => (
                    <button
                      key={tab}
                      className={`px-4 py-2 font-medium text-sm transition-colors relative ${
                        activeTab === tab ? 'text-cyan-400' : 'text-gray-400 hover:text-gray-300'
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.toUpperCase()}
                      {activeTab === tab && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"></span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              {activeTab === "comments" && (
                <>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        COMMENTS//{clipData.comments}
                      </span>
                    </h3>
                    <div className="flex items-center text-xs">
                      <span className="text-gray-500 mr-2">SORT BY:</span>
                      <select className="bg-gray-800 border border-gray-700 text-gray-300 rounded px-2 py-1 focus:border-cyan-500 focus:outline-none">
                        <option>TOP</option>
                        <option>NEWEST</option>
                        <option>CONTROVERSIAL</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Comment input */}
                  <div className="flex mb-4 relative group">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 mr-3 flex items-center justify-center text-xs text-gray-400">
                      YOU
                    </div>
                    <div className="flex-1 relative">
                      <input
                        ref={commentInputRef}
                        type="text"
                        placeholder="Add a comment..."
                        className="w-full bg-gray-900/70 border border-gray-800 focus:border-cyan-500 text-gray-300 rounded py-2 px-3 text-sm focus:outline-none transition-colors"
                      />
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 hidden group-focus-within:flex items-center space-x-2">
                        <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                          <MessageSquare size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {/* Enhanced comments */}
                    <div className="p-3 bg-gray-900/80 border border-purple-600/30 rounded-md transform hover:translate-x-1 transition-transform">
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-700 to-blue-800 mr-3 flex items-center justify-center text-xs text-cyan-300 font-bold">NR</div>
                        <div className="flex-1">
                          <div className="flex items-center mb-1">
                            <span className="text-cyan-400 text-sm mr-2 font-medium">NetRunner_42</span>
                            <span className="text-gray-500 text-xs">2 hours ago</span>
                            <div className="ml-2 px-1 bg-purple-900/50 rounded text-xs text-purple-300 border border-purple-700/50">PRO</div>
                          </div>
                          <p className="text-sm text-gray-300">Sick moves! That quickhack combo at 0:24 was absolutely insane. Mind sharing your cyberdeck specs?</p>
                          <div className="flex items-center mt-2 text-xs space-x-4 text-gray-500">
                            <button className="flex items-center hover:text-cyan-400 transition-colors">
                              <Heart size={12} className="mr-1" /> 
                              <span>42</span>
                            </button>
                            <button className="hover:text-cyan-400 transition-colors">REPLY</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Second comment */}
                    <div className="p-3 bg-gray-900/80 border border-purple-600/30 rounded-md ml-6 relative transform hover:translate-x-1 transition-transform">
                      <div className="absolute -left-6 top-1/2 h-px w-6 bg-gray-700"></div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-700 to-purple-800 mr-3 flex items-center justify-center text-xs text-pink-300 font-bold">CR</div>
                        <div className="flex-1">
                          <div className="flex items-center mb-1">
                            <span className="text-pink-400 text-sm mr-2 font-medium">CyberNinja_2077</span>
                            <Shield size={12} className="mr-1 text-cyan-400" />
                            <span className="text-gray-500 text-xs">1 hour ago</span>
                          </div>
                          <p className="text-sm text-gray-300">@NetRunner_42 Thanks choom! Using a Tetratronic Mk.5 with a RAM upgrade. Three legendary quickhacks linked in sequence - optics jam, memory wipe, then system reset.</p>
                          <div className="flex items-center mt-2 text-xs space-x-4 text-gray-500">
                            <button className="flex items-center hover:text-cyan-400 transition-colors">
                              <Heart size={12} className="mr-1" /> 
                              <span>78</span>
                            </button>
                            <button className="hover:text-cyan-400 transition-colors">REPLY</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Third comment */}
                    <div className="p-3 bg-gray-900/80 border border-purple-600/30 rounded-md transform hover:translate-x-1 transition-transform">
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-700 to-red-800 mr-3 flex items-center justify-center text-xs text-amber-300 font-bold">SS</div>
                        <div className="flex-1">
                          <div className="flex items-center mb-1">
                            <span className="text-amber-400 text-sm mr-2 font-medium">StreetSamurai_55</span>
                            <span className="text-gray-500 text-xs">45 minutes ago</span>
                          </div>
                          <p className="text-sm text-gray-300">All this netrunner nonsense... real edgerunners use mantis blades and sandevistan. Come at me with your deck and I'll slice it in half before your daemon compiles.</p>
                          <div className="flex items-center mt-2 text-xs space-x-4 text-gray-500">
                            <button className="flex items-center hover:text-cyan-400 transition-colors">
                              <Heart size={12} className="mr-1" /> 
                              <span>13</span>
                            </button>
                            <button className="hover:text-cyan-400 transition-colors">REPLY</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full py-2 bg-gray-800/50 border border-gray-700 text-gray-300 hover:text-cyan-400 font-medium text-sm rounded hover:bg-gray-800 transition-colors mt-4">
                    LOAD MORE COMMENTS
                  </button>
                </>
              )}
              
              {activeTab === "related" && (
                <div className="grid grid-cols-2 gap-3">
                {data.clips.map((clip, index) => clip.id !== params.id && (
                  <a key={clip.id} href={`/clip/${clip.id}`}>
                    <div 
                      key={`grid-${clip.id}-${index}`} 
                      className="group bg-gray-900/80 border border-gray-800 hover:border-cyan-500/50 rounded-md overflow-hidden transition-all duration-300 cursor-pointer"
                    >
                      <div className="relative">
                        <img src={clip.thumbnail} alt={clip.title} className="w-full h-24 object-cover" />
                        <div className="absolute bottom-2 right-2 bg-black/70 px-1 py-0.5 text-xs font-mono text-white rounded">
                          {clip.duration}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Play size={24} className="text-white/90" fill="currentColor" />
                        </div>
                
                        {/* Optional cyberpunk tag (can be conditional) */}
                        <div className="absolute top-1 left-1 bg-pink-900/70 backdrop-blur-sm px-1 border-l border-pink-500 text-pink-300 text-[10px]">
                          HOT CLIP
                        </div>
                      </div>
                
                      <div className="p-2">
                        <h4 className="text-xs font-medium mb-1 text-gray-100 line-clamp-1">{clip.title}</h4>
                        <div className="flex justify-between text-[11px]">
                          <span className="text-cyan-400">
                            {/* Replace with dynamic creator name if needed */}
                            {data.channels.find((each)=> each.id === clip.channelId).name || 'DigitalSpectre'}
                          </span>
                          <span className="text-gray-500 flex items-center">
                            <Eye size={10} className="mr-1" />
                            {Intl.NumberFormat().format(clip.views)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              
              )}
              
              {activeTab === "info" && (
                <div className="space-y-4">
                  <div className="p-3 bg-gray-900/50 border border-gray-800 rounded">
                    <h4 className="text-sm font-medium mb-2 text-cyan-400">CLIP INFORMATION</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-gray-500">Posted</p>
                        <p className="text-gray-300">{clipData.createdAt}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Duration</p>
                        <p className="text-gray-300">{clipData.duration}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Game</p>
                        <p className="text-gray-300">{clipData.game}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Resolution</p>
                        <p className="text-gray-300">1080p60</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-gray-900/50 border border-gray-800 rounded">
                    <h4 className="text-sm font-medium mb-2 text-pink-400">LICENSE INFORMATION</h4>
                    <p className="text-sm text-gray-300">
                      This clip is shared under Creative Commons Attribution. You may remix and share with attribution to the original creator.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Enhanced Sidebar */}
          <div className="lg:col-span-1">
            {/* Channel info card with cyberpunk styling */}
            <div className="p-4 bg-gray-900/80 border border-purple-600/50 rounded-lg mb-6 relative overflow-hidden"
                 style={{boxShadow: '0 0 15px rgba(138, 43, 226, 0.2)'}}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-pink-500/10 to-transparent"></div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 mr-3 p-0.5">
                  {/* <div className="w-full h-full rounded-lg bg-gray-900 flex items-center justify-center text-cyan-400 font-bold">
                    CN
                  </div> */}
                  <img src={userInfo.avatar} alt={channelInfo.name} className="w-full h-full rounded-lg object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-purple-400 flex items-center">
                    {channelInfo.name}
                    <Shield size={14} className="ml-1 text-cyan-400" />
                  </h3>
                  <div className="flex items-center">
                    <Star size={12} className="text-pink-500 mr-1" />
                    <span className="text-xs text-gray-400">{formatNumber(channelInfo.followers)} followers</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-4 p-2 bg-gray-800/50 rounded border border-gray-700 text-xs text-gray-300">
                <span className="text-cyan-400 font-mono">STATUS: </span>
                <span className="text-pink-300">ONLINE - </span>
                <span>Currently streaming {channelInfo.game}</span>
              </div>
              
              <div className="flex space-x-2 mb-4">
                <button className="flex-1 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 group relative overflow-hidden">
                  <div className="relative z-10">FOLLOW</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                </button>
                <button className="px-3 py-2 bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition-colors relative group">
                  <Bell size={16} />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-xs px-2 py-1 rounded border border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Get notified
                  </div>
                </button>
              </div>
              
              <div>
                <div className="text-xs font-mono mb-2 text-gray-400 flex items-center">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full mr-1"></div>
                  CATEGORIES
                </div>
                <div className="flex flex-wrap gap-2">
                  {channelInfo.channelTags.map((category, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-gray-800 text-xs text-cyan-400 rounded-sm hover:bg-gray-700 cursor-pointer transition-colors"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Enhanced Recommended Clips */}
            <div>
              <h3 className="text-lg font-semibold mb-4 relative">
                <div className="absolute -left-2 top-0 bottom-0 w-1 bg-pink-500"></div>
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  SIMILAR//CLIPS
                </span>
              </h3>
              
              <div className="space-y-4">
                {data.clips.map((clip) => clip.id !== params.id && (
                  <div 
                    key={clip.id} 
                    className="group bg-gray-900/80 border border-gray-800 hover:border-cyan-500/50 rounded-md overflow-hidden transition-all duration-300 cursor-pointer"
                    style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}
                  >
                    <div className="relative">
                      <img src={clip.thumbnail} alt={clip.title} className="w-full h-32 object-cover" />
                      <div className="absolute bottom-2 right-2 bg-black/70 px-1 py-0.5 text-xs font-mono text-white rounded">
                        {clip.duration}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Play size={30} className="text-white/90" fill="currentColor" />
                      </div>

                      {/* Enhanced cyberpunk overlay */}
                      <div className="absolute top-2 left-2 bg-pink-900/70 backdrop-blur-sm px-1 border-l border-pink-500 text-pink-300 text-xs">
                        TRENDING
                      </div>
                    </div>

                    <div className="p-3">
                      <h4 className="text-sm font-medium mb-1 text-gray-100 line-clamp-1">
                        {clip.title}
                      </h4>
                      <div className="flex justify-between text-xs">
                        <span className="text-cyan-400">
                          {/* You can replace this with actual channel name if available */}
                          {searchChannel(clip.channelId) || 'DigitalSpectre'}
                        </span>
                        <span className="text-gray-500 flex items-center">
                          <Eye size={12} className="mr-1" />
                          {Intl.NumberFormat().format(clip.views)}
                        </span>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-gray-500">
                        <span>{clip.createdAt || "just now"}</span>
                      </div>
                    </div>
                  </div>
                ))}

                <button className="w-full py-2 bg-gray-800 border border-purple-600/30 text-purple-400 font-medium text-sm rounded hover:bg-gray-700 transition-colors mt-4 group relative overflow-hidden">
                  <span className="relative z-10 group-hover:text-white transition-colors">LOAD MORE CLIPS</span>
                  <div className="absolute inset-0 bg-purple-600/30 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
              </div>
            </div>

            
            {/* Active users / live chat preview */}
            <div className="mt-6 p-3 bg-gray-900/80 border border-cyan-600/30 rounded-lg">
              <h4 className="text-sm font-semibold mb-3 text-cyan-400 flex items-center">
                <Users size={14} className="mr-2" />
                ACTIVE VIEWERS
              </h4>
              
              <div className="flex -space-x-2 mb-3">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full border-2 border-gray-900 flex items-center justify-center text-xs font-medium"
                    style={{ 
                      background: `linear-gradient(to bottom right, ${['cyan', 'purple', 'pink', 'blue'][i % 4]}, ${['purple', 'blue', 'cyan', 'pink'][i % 4]})`,
                      opacity: 1 - (i * 0.05)
                    }}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center text-xs text-gray-400">
                  +{currentViewers - 8}
                </div>
              </div>

              <a href={`/live/${data.streams.find((each)=>each.channelId===clipData.channelId).id}`}>
                <button className="w-full py-2 bg-cyan-900/30 border border-cyan-700/30 text-cyan-400 text-sm rounded hover:bg-cyan-900/50 transition-colors">
                  JOIN LIVE CHAT
                </button>
              </a>

            </div>
          </div>
        </main>
        
        {/* Enhanced cyberpunk footer */}
        <footer className="mt-10 pt-6 border-t border-gray-800">
          <div className="flex flex-wrap justify-between items-center text-xs text-gray-500">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-cyan-400 font-mono">NIGHT_CITY::NETWORK</span>
              <span>&copy; 2077 All rights reserved</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Help</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Settings</a>
            </div>
          </div>
        </footer>
      </div>
      
      {/* Custom cyberpunk style */}
      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-scan {
          animation: scan 2s linear infinite;
        }
        
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}