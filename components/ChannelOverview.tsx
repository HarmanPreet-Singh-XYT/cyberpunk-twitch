'use client'
import { useState, useEffect } from 'react';
import { Users, Eye, Clock, Bookmark, Info, Video, Layout, MessageSquare, Heart, Share2, ChevronDown, Play, ExternalLink, Terminal, Shield, Zap, Code, Hexagon, AlertTriangle, Database } from 'lucide-react';
import { useParams } from 'next/navigation'
export default function CyberpunkTwitchChannel() {
  const [activeTab, setActiveTab] = useState('videos');
  const [isLive, setIsLive] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [hackerMode, setHackerMode] = useState(false);
  const [activeChatMessages, setActiveChatMessages] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const params = useParams<{ id:string }>()
  // Enhanced glitch effects with different intensities
  useEffect(() => {
    // Regular minor glitches
    const minorGlitchInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, 8000);

    // Simulate active chat with periodic messages
    const chatInterval = setInterval(() => {
      const newMessage = {
        id: Date.now(),
        user: cyberpunkUsernames[Math.floor(Math.random() * cyberpunkUsernames.length)],
        message: cyberpunkMessages[Math.floor(Math.random() * cyberpunkMessages.length)],
        color: cyberpunkColors[Math.floor(Math.random() * cyberpunkColors.length)],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setActiveChatMessages(prev => {
        const updated = [newMessage, ...prev];
        if (updated.length > 8) updated.pop();
        return updated;
      });
    }, 3000);

    return () => {
      clearInterval(minorGlitchInterval);
      clearInterval(chatInterval);
    };
  }, []);

  const cyberpunkUsernames = [
    "0xDEADBEEF", "CyberWitch_404", "NetSlice", "ChromeKid", "Ghostware", "ICE_BR34KER", 
    "MeatSpace99", "SynthRat", "Proxy_VII", "D4rkM0on", "BitShift", "NullSignal"
  ];

  const cyberpunkMessages = [
    "Just scored a mil eddies on that last run!",
    "Anyone tried the new cyberware from Arasaka?",
    "This stream's encryption is weak...",
    "Got any black ICE tips?",
    "Night City cops on high alert tonight",
    "Need a fixer for west side job",
    "That netrun was preem!",
    "Nova tactic with the quickhacks!",
    "Found backdoor into Militech",
    "Anyone selling tech shards?",
    "Stream lagging or just my ware?",
    "Ripperdoc recommendations?",
  ];

  const cyberpunkColors = [
    "text-cyan-400", "text-pink-500", "text-purple-400", "text-yellow-300", 
    "text-green-400", "text-red-500", "text-blue-400"
  ];

  const channelData = {
    name:params.id ? params.id : "NETRUNNER_X",
    avatar: "/api/placeholder/80/80",
    banner: "/banner.jpg",
    followers: "245.8K",
    views: "12.4M",
    about: "Hacking the mainframe and breaking the system one stream at a time. Night City's top netrunner bringing you daily cyber content, hardware mods, and digital mayhem. Join the resistance.",
    schedule: "Mon-Fri 20:00-24:00 NC Time",
    categories: [
      { name: "Cyberpunk 2077", image: "/api/placeholder/120/160", viewers: "125K" },
      { name: "Hardware Hacking", image: "/api/placeholder/120/160", viewers: "84K" },
      { name: "System Infiltration", image: "/api/placeholder/120/160", viewers: "60K" },
      { name: "Neural Networking", image: "/api/placeholder/120/160", viewers: "38K" },
    ],
    videos: [
      { title: "Breaking ARASAKA's New Security Protocol LIVE", views: "1.2M", date: "2 days ago", duration: "4:23:15", thumbnail: "/api/placeholder/320/180" },
      { title: "Ultimate Cyberdeck Build Guide 2077", views: "895K", date: "1 week ago", duration: "2:12:08", thumbnail: "/api/placeholder/320/180" },
      { title: "Night City Underground: Secret Locations", views: "743K", date: "2 weeks ago", duration: "3:05:32", thumbnail: "/api/placeholder/320/180" },
      { title: "How to Bypass Corporate AI Detection", views: "1.5M", date: "3 weeks ago", duration: "1:58:47", thumbnail: "/api/placeholder/320/180" },
      { title: "Advanced Quickhacking Techniques", views: "631K", date: "1 month ago", duration: "2:47:21", thumbnail: "/api/placeholder/320/180" },
      { title: "Building a Military Grade Neural Interface", views: "1.1M", date: "1 month ago", duration: "5:12:03", thumbnail: "/api/placeholder/320/180" },
    ],
    clips: [
      { title: "Perfect Hack Under Pressure", views: "342K", date: "3 days ago", duration: "0:58", thumbnail: "/api/placeholder/240/135" },
      { title: "Unexpected System Reaction", views: "219K", date: "1 week ago", duration: "0:43", thumbnail: "/api/placeholder/240/135" },
      { title: "Insane Neural Reflex Moment", views: "501K", date: "2 weeks ago", duration: "1:12", thumbnail: "/api/placeholder/240/135" },
      { title: "That Was Close! Security Breach", views: "287K", date: "3 weeks ago", duration: "0:37", thumbnail: "/api/placeholder/240/135" },
    ],
    currentViewers: "24.8K",
    streamUptime: "03:45:27",
    streamTitle: "LIVE: BYPASSING MAXIMUM SECURITY NET ARCHITECTURE",
    events: [
      { type: "donation", user: "ByteShifter", amount: "5,000 eddies", message: "Keep fighting the good fight!" },
      { type: "subscription", user: "Cortex_Ripper", tier: "Chrome Tier", months: 6 },
      { type: "raid", user: "TechnoMancer", viewers: 1200 }
    ]
  };

  // Cyberpunk terminal commands for hacker mode
  const terminalCommands = [
    { command: "bypass_auth.exe --target=stream", output: "Authentication bypass successful. Admin privileges acquired." },
    { command: "netmap -scan", output: "Network scan complete. 3 vulnerabilities detected." },
    { command: "decrypt 0xFE324A91", output: "Decryption in progress... 32%... 67%... 89%... Complete." },
    { command: "ICE_break.sh --force", output: "WARNING: Defensive systems engaged. Counter-intrusion measures active." },
    { command: "sudo escalate_privs", output: "Privilege escalation successful. Root access granted." }
  ];

  return (
    <div className={`min-h-screen bg-black text-gray-300 font-mono ${glitchEffect ? 'opacity-95' : ''}`}>
      {/* Enhanced Scanner Line Animation */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-cyan-400 opacity-30 animate-[scanline_6s_linear_infinite]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-pink-500 opacity-20 animate-[scanline_8s_linear_infinite]" style={{animationDelay: '3s'}}></div>
      </div>
      
      {/* Enhanced Noise Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] pointer-events-none opacity-20"></div>
      
      {/* Glitch Overlay - Only visible during glitch effect */}
      {glitchEffect && (
        <div className="fixed inset-0 bg-cyan-900 opacity-5 z-50 pointer-events-none"></div>
      )}

      {/* Digital Circuit Background Effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-5">
        <svg width="100%" height="100%" className="opacity-5">
          <pattern id="circuitPattern" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="scale(0.5)">
            <path d="M10 10 H90 V90 H10 Z" fill="none" stroke="rgba(0, 255, 255, 0.2)" strokeWidth="0.5"/>
            <circle cx="10" cy="10" r="2" fill="rgba(0, 255, 255, 0.2)"/>
            <circle cx="90" cy="10" r="2" fill="rgba(0, 255, 255, 0.2)"/>
            <circle cx="90" cy="90" r="2" fill="rgba(0, 255, 255, 0.2)"/>
            <circle cx="10" cy="90" r="2" fill="rgba(0, 255, 255, 0.2)"/>
            <line x1="10" y1="50" x2="50" y2="50" stroke="rgba(0, 255, 255, 0.2)" strokeWidth="0.5"/>
            <line x1="50" y1="10" x2="50" y2="50" stroke="rgba(0, 255, 255, 0.2)" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuitPattern)"/>
        </svg>
      </div>
      
      {/* Hacker Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setHackerMode(!hackerMode)}
          className={`flex items-center gap-2 px-3 py-2 rounded text-sm ${
            hackerMode 
              ? 'bg-red-900/70 text-red-300 border border-red-700' 
              : 'bg-cyan-900/30 text-cyan-400 border border-cyan-800/50 hover:bg-cyan-900/50'
          } transition-all duration-300`}
        >
          <Terminal size={14} />
          <span>{hackerMode ? 'EXIT NETRUN' : 'NETRUN MODE'}</span>
        </button>
      </div>
      
      {/* Channel Banner with Enhanced Effects */}
      <div className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 z-0 ${glitchEffect ? 'opacity-70' : 'opacity-40'}`}></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJjeWFuIiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20 z-1"></div>
        <img src={channelData.banner} alt="Channel Banner" className="w-full h-48 md:h-64 object-cover" />
        {isLive && (
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm border border-red-800 rounded p-3 z-10">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 bg-red-600 rounded-full animate-pulse"></div>
              <div>
                <div className="text-white font-bold tracking-wider">{channelData.streamTitle}</div>
                <div className="flex gap-4 text-xs mt-1">
                  <div className="flex items-center gap-1">
                    <Eye size={12} className="text-pink-500" />
                    <span>{channelData.currentViewers}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} className="text-cyan-400" />
                    <span>{channelData.streamUptime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      
      {/* Channel Info Bar */}
      <div className="relative mx-4 md:mx-12 -mt-16 z-20">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-8">
          {/* Avatar with enhanced cyberpunk effects */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full animate-pulse opacity-50 blur-lg"></div>
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 p-0.5 shadow-lg shadow-cyan-500/20">
              <img 
                src={channelData.avatar} 
                alt="Channel Avatar" 
                className="w-full h-full rounded-full object-cover border-2 border-black"
              />
              
              {/* Hexagon overlay */}
              <svg className="absolute inset-0 opacity-40" viewBox="0 0 100 100">
                <polygon points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25" fill="none" stroke="cyan" strokeWidth="0.5"/>
              </svg>
            </div>
            {isLive && (
              <div className="absolute -top-2 -right-2 flex items-center bg-red-600 text-white text-xs px-2 py-1 rounded animate-pulse">
                <span className="mr-1 h-2 w-2 bg-white rounded-full inline-block"></span>
                LIVE
              </div>
            )}
            <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-xs text-black font-bold px-2 py-0.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
              VERIFIED
            </div>
          </div>
          
          {/* Channel Title & Stats */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${glitchEffect ? 'from-pink-500 to-cyan-400' : 'from-cyan-400 to-purple-500'} mb-2 text-shadow-glow relative`}>
                  {/* Glitch effect on text */}
                  <span className={`relative ${!glitchEffect ? 'before:content-[attr(data-text)] before:absolute before:text-white before:left-[0.5px] before:top-[-2px] before:h-full before:w-full before:opacity-30' : ''}`} data-text={channelData.name}>
                    {channelData.name}
                  </span>
                  {/* Security badge */}
                  <span className="inline-flex items-center ml-2 bg-gradient-to-r from-cyan-900 to-blue-900 text-xs px-2 py-0.5 rounded border border-cyan-700 text-cyan-300">
                    <Shield size={10} className="mr-1" />
                    SECURED
                  </span>
                </h1>
                <div className="flex items-center text-sm gap-4">
                  <div className="flex items-center gap-1">
                    <Users size={14} className="text-cyan-400" />
                    <span>{channelData.followers}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye size={14} className="text-pink-500" />
                    <span>{channelData.views}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-gray-900/70 px-2 py-0.5 rounded-sm border border-gray-800">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="text-green-400 text-xs">NETWORK STABLE</span>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons with Enhanced Effects */}
              <div className="flex gap-2">
                <button 
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={`px-4 py-2 rounded font-bold transition-all duration-300 ${isFollowing ? 
                    'bg-purple-900/70 text-white border border-purple-500 hover:bg-purple-800/70' : 
                    'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-all before:duration-700'}`}
                >
                  {isFollowing ? 'Following' : 'Follow'}
                </button>
                <button 
                  onClick={() => setIsSubscribed(!isSubscribed)}
                  className={`px-4 py-2 rounded font-bold transition-all duration-300 ${isSubscribed ? 
                    'bg-cyan-900/70 text-cyan-300 border border-cyan-600 hover:bg-cyan-800/70' : 
                    'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-all before:duration-700'}`}
                >
                  {isSubscribed ? 'Subscribed' : 'Subscribe'}
                </button>
                <div className="relative">
                  <button 
                    className="w-10 h-10 flex items-center justify-center rounded bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                  >
                    <Share2 size={18} />
                  </button>
                  {showTooltip && (
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-xs py-1 px-2 rounded border border-gray-700 whitespace-nowrap">
                      Share Channel
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Tabs with Enhanced Styling */}
      <div className="mt-8 border-b border-gray-800 mx-4 md:mx-12">
        <div className="flex gap-1 overflow-x-auto scrollbar-hide">
          {['videos', 'categories', 'about', 'clips', 'chat'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm uppercase tracking-wider transition-all relative ${
                activeTab === tab 
                  ? 'text-cyan-400 bg-gradient-to-t from-cyan-900/20 to-transparent' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-cyan-400 animate-pulse"></div>
                </>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Content Area */}
      <div className="p-4 md:p-12 pt-6">
        {/* Main Content Area - Show when not in hacker mode */}
        {!hackerMode && (
          <>
            {/* Videos Tab */}
            {activeTab === 'videos' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Latest Streams</h2>
                  <div className="flex items-center gap-2 bg-gray-900 rounded px-3 py-1 border border-gray-700">
                    <span className="text-sm">Sort by: Recent</span>
                    <ChevronDown size={16} className="text-cyan-400" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {channelData.videos.map((video, index) => (
                    <div 
                      key={index} 
                      className="group relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-cyan-900 transition-all"
                    >
                      <div className="relative">
                        <img src={video.thumbnail} alt={video.title} className="w-full aspect-video object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-cyan-500/80 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                            <Play size={24} fill="white" className="ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 text-xs rounded">{video.duration}</div>
                        
                        {/* Top Border Animation */}
                        <div className="absolute top-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-500"></div>
                        <div className="absolute top-0 right-0 h-0 w-0.5 bg-purple-500 group-hover:h-full transition-all duration-500 delay-100"></div>
                        <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-500 delay-200"></div>
                        <div className="absolute bottom-0 left-0 h-0 w-0.5 bg-cyan-500 group-hover:h-full transition-all duration-500 delay-300"></div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{video.title}</h3>
                        <div className="flex justify-between text-xs text-gray-400">
                          <div className="flex items-center gap-2">
                            <Eye size={14} />
                            <span>{video.views}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={14} />
                            <span>{video.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Categories Tab */}
            {activeTab === 'categories' && (
              <div className="space-y-8">
                <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Most Streamed Categories</h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {channelData.categories.map((category, index) => (
                    <div 
                      key={index} 
                      className="group relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-cyan-900 transition-all"
                    >
                      <div className="relative">
                        <img src={category.image} alt={category.name} className="w-full aspect-[3/4] object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                        
                        {/* HUD-style overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
                            <div className="bg-black/70 backdrop-blur-sm rounded px-2 py-0.5 text-xs border border-cyan-900">
                              <span className="text-cyan-400">CAT-ID:</span> {index + 1001}
                            </div>
                            <div className="bg-black/70 backdrop-blur-sm rounded px-2 py-0.5 text-xs border border-pink-900">
                              <span className="text-pink-400">USERS:</span> {category.viewers.replace("K", "")}K
                            </div>
                          </div>
                          <div className="absolute bottom-16 left-3 right-3 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                        </div>
                        
                        <div className="absolute bottom-3 left-3 right-3">
                          <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors">{category.name}</h3>
                          <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                            <Eye size={12} />
                            <span>{category.viewers} viewers</span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* About Tab */}
            {activeTab === 'about' && (
              <div className="space-y-8">
                <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">About {channelData.name}</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 relative overflow-hidden group hover:border-cyan-900 transition-all">
                      {/* Decorative circuit lines */}
                      <div className="absolute top-0 left-0 w-16 h-16 opacity-20">
                        <svg viewBox="0 0 100 100">
                          <path d="M0 20 H40 V60 H80 V100" stroke="cyan" fill="none" strokeWidth="2" />
                          <circle cx="40" cy="20" r="3" fill="cyan" />
                          <circle cx="40" cy="60" r="3" fill="cyan" />
                          <circle cx="80" cy="60" r="3" fill="cyan" />
                        </svg>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Info size={18} className="text-cyan-400" />
                        <span>Channel Info</span>
                      </h3>
                      <p className="text-gray-300 leading-relaxed">{channelData.about}</p>
                      
                      {/* Data stats */}
                      <div className="mt-6 grid grid-cols-3 gap-2 pt-4 border-t border-gray-800">
                        <div className="text-center">
                          <div className="text-xs text-gray-500 uppercase">Channel Age</div>
                          <div className="text-cyan-400 font-bold">3.7 Years</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 uppercase">Content Rating</div>
                          <div className="text-pink-400 font-bold">A+ Tier</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 uppercase">Trust Score</div>
                          <div className="text-green-400 font-bold">97.4%</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 relative overflow-hidden group hover:border-pink-900 transition-all">
                      {/* Decorative hex pattern */}
                      <div className="absolute top-0 right-0 w-16 h-16 opacity-20">
                        <svg viewBox="0 0 100 100">
                          <polygon points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25" fill="none" stroke="magenta" strokeWidth="2"/>
                          <polygon points="50,20 79.3,35 79.3,65 50,80 20.7,65 20.7,35" fill="none" stroke="magenta" strokeWidth="1"/>
                        </svg>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Shield size={18} className="text-pink-500" />
                        <span>Channel Rules</span>
                      </h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-3 group/item p-2 hover:bg-gray-800/50 rounded transition-colors">
                          <span className="text-cyan-400 font-bold text-lg leading-tight">01</span>
                          <div>
                            <div className="font-bold text-white group-hover/item:text-cyan-400 transition-colors">Respect all netrunners</div>
                            <div className="text-sm text-gray-400">Zero tolerance for corp shills or rival crew attacks.</div>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 group/item p-2 hover:bg-gray-800/50 rounded transition-colors">
                          <span className="text-cyan-400 font-bold text-lg leading-tight">02</span>
                          <div>
                            <div className="font-bold text-white group-hover/item:text-cyan-400 transition-colors">No backdoor exploits</div>
                            <div className="text-sm text-gray-400">System breaches result in permanent blacklisting from the network.</div>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 group/item p-2 hover:bg-gray-800/50 rounded transition-colors">
                          <span className="text-cyan-400 font-bold text-lg leading-tight">03</span>
                          <div>
                            <div className="font-bold text-white group-hover/item:text-cyan-400 transition-colors">Share tech knowledge freely</div>
                            <div className="text-sm text-gray-400">We rise against the corps together through open source intel.</div>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 group/item p-2 hover:bg-gray-800/50 rounded transition-colors">
                          <span className="text-cyan-400 font-bold text-lg leading-tight">04</span>
                          <div>
                            <div className="font-bold text-white group-hover/item:text-cyan-400 transition-colors">Keep sensitive intel secure</div>
                            <div className="text-sm text-gray-400">Use encrypted DMs for classified info. Main stream is monitored.</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 relative overflow-hidden group hover:border-cyan-900 transition-all">
                      <div className="absolute top-2 right-2 w-16 h-16 opacity-10">
                        <svg viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" fill="none" stroke="cyan" strokeWidth="0.5"/>
                          <circle cx="12" cy="12" r="6" fill="none" stroke="cyan" strokeWidth="0.5"/>
                          <line x1="12" y1="2" x2="12" y2="22" stroke="cyan" strokeWidth="0.5" />
                          <line x1="2" y1="12" x2="22" y2="12" stroke="cyan" strokeWidth="0.5" />
                        </svg>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Clock size={18} className="text-purple-500" />
                        <span>Stream Schedule</span>
                      </h3>
                      <p className="text-cyan-400 font-bold mb-2">{channelData.schedule}</p>
                      <div className="grid grid-cols-7 gap-1 mt-4">
                        {['M','T','W','T','F','S','S'].map((day, i) => (
                          <div key={i} className={`h-8 flex items-center justify-center rounded relative ${
                            i < 5 ? 'bg-cyan-900/30 text-cyan-400 border border-cyan-800' : 'bg-gray-800 text-gray-500'
                          } ${i === 2 ? 'ring-1 ring-pink-500 ring-offset-1 ring-offset-gray-900' : ''}`}>
                            {day}
                            {i === 2 && (
                              <div className="absolute -top-2 -right-2 bg-black text-xs px-1 rounded border border-pink-500 text-pink-400">
                                LIVE
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 relative overflow-hidden group hover:border-purple-900 transition-all">
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Database size={18} className="text-cyan-400" />
                        <span>Panel Links</span>
                      </h3>
                      <div className="space-y-3">
                        {[
                          {name: 'Discord Server', icon: <MessageSquare size={14} />},
                          {name: 'Tech Blog', icon: <Code size={14} />},
                          {name: 'Mod Downloads', icon: <Download size={14} />},
                          {name: 'Support Channel', icon: <Heart size={14} />}
                        ].map((link, i) => (
                          <a 
                            key={i}
                            href="#" 
                            className="flex items-center justify-between w-full p-3 bg-gray-800 rounded border border-gray-700 hover:border-cyan-800 hover:bg-gray-800/70 transition-all group/link relative overflow-hidden"
                          >
                            <span className="group-hover/link:text-cyan-400 flex items-center gap-2">
                              {link.icon}
                              <span>{link.name}</span>
                            </span>
                            <ExternalLink size={14} className="text-gray-500 group-hover/link:text-cyan-400" />
                            
                            {/* Background effect on hover */}
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transform translate-y-0.5 group-hover/link:translate-y-0 transition-transform"></div>
                          </a>
                        ))}
                      </div>
                      
                      {/* Verification section */}
                      <div className="mt-6 pt-4 border-t border-gray-800">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1">
                            <Shield size={12} className="text-green-400" />
                            <span className="text-green-400">Verified Channel</span>
                          </div>
                          <div className="text-gray-500">ID: NTRN-X-7734</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* New component: Social proof */}
                    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Zap size={18} className="text-yellow-400" />
                        <span>Latest Events</span>
                      </h3>
                      <div className="space-y-3">
                        {channelData.events.map((event, i) => (
                          <div key={i} className="bg-gray-800/60 rounded-lg p-3 border border-gray-700">
                            {event.type === 'donation' && (
                              <div>
                                <div className="flex justify-between items-center">
                                  <span className="font-bold text-pink-400">{event.user}</span>
                                  <span className="text-yellow-300 font-bold">{event.amount}</span>
                                </div>
                                <p className="text-sm text-gray-400 mt-1">"{event.message}"</p>
                              </div>
                            )}
                            {event.type === 'subscription' && (
                              <div className="flex justify-between items-center">
                                <span className="font-bold text-cyan-400">{event.user}</span>
                                <span className="bg-purple-900/60 text-purple-300 text-xs rounded px-2 py-1">
                                  {event.tier} · {event.months} month{event.months !== 1 ? 's' : ''}
                                </span>
                              </div>
                            )}
                            {event.type === 'raid' && (
                              <div className="flex justify-between items-center">
                                <span className="font-bold text-green-400">{event.user} Raid</span>
                                <span className="text-green-300">{event.viewers} viewers</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Clips Tab */}
            {activeTab === 'clips' && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Popular Clips</h2>
                  <div className="flex items-center gap-2 bg-gray-900 rounded px-3 py-1 border border-gray-700">
                    <span className="text-sm">Sort by: Most Viewed</span>
                    <ChevronDown size={16} className="text-cyan-400" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {channelData.clips.map((clip, index) => (
                    <div 
                      key={index} 
                      className="group relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-pink-900 transition-all"
                    >
                      <div className="relative">
                        <img src={clip.thumbnail} alt={clip.title} className="w-full aspect-video object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-pink-500/80 flex items-center justify-center">
                            <Play size={16} fill="white" className="ml-1" />
                          </div>
                        </div>
                        
                        {/* Clip highlight marker */}
                        <div className="absolute top-2 left-2 bg-pink-600/80 backdrop-blur-sm text-xs px-2 py-1 rounded font-bold">
                          CLIP
                        </div>
                        
                        <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 text-xs rounded">{clip.duration}</div>
                      </div>
                      <div className="p-3">
                        <h3 className="font-bold text-white text-sm mb-2 group-hover:text-pink-400 transition-colors">{clip.title}</h3>
                        <div className="flex justify-between text-xs text-gray-400">
                          <div className="flex items-center gap-1">
                            <Eye size={12} />
                            <span>{clip.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={12} />
                            <span>{clip.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Live Chat Tab */}
            {activeTab === 'chat' && (
              <div className="space-y-8">
                <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Live Chat</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Chat Window */}
                  <div className="lg:col-span-3 bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
                    {/* Chat Header */}
                    <div className="px-4 py-3 border-b border-gray-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        <span className="font-bold">LIVE CHAT</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Users size={12} />
                          <span>1,324 chatting</span>
                        </div>
                        <span>|</span>
                        <div className="flex items-center gap-1">
                          <Shield size={12} className="text-cyan-400" />
                          <span className="text-cyan-400">ENCRYPTED</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Chat Messages */}
                    <div className="h-96 overflow-y-auto px-4 py-3 space-y-3">
                      {activeChatMessages.map((msg) => (
                        <div key={msg.id} className="flex items-start gap-2 animate-fadeIn">
                          <div className="font-bold whitespace-nowrap flex items-center gap-1">
                            <span className={msg.color}>{msg.user}</span>
                            <span className="text-gray-600">:</span>
                          </div>
                          <div className="text-gray-300 break-words flex-1">{msg.message}</div>
                          <div className="text-gray-600 text-xs self-end">
                            {msg.timestamp}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Chat Input */}
                    <div className="px-4 py-3 border-t border-gray-800">
                      <div className="flex gap-2">
                        <div className="flex-1 relative">
                          <input 
                            type="text" 
                            placeholder="Send a message..." 
                            className="w-full bg-gray-800 border border-gray-700 rounded text-gray-300 px-3 py-2 focus:border-cyan-600 focus:outline-none focus:ring-1 focus:ring-cyan-600"
                          />
                          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-2">
                            <button className="text-gray-500 hover:text-gray-300">
                              <Smile size={16} />
                            </button>
                          </div>
                        </div>
                        <button className="bg-cyan-700 hover:bg-cyan-600 text-white font-bold px-4 py-2 rounded transition-colors">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Info Sidebar */}
                  <div className="space-y-6">
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                      <h3 className="text-lg font-bold mb-3">Chat Rules</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center gap-2">
                          <AlertTriangle size={12} className="text-yellow-400" />
                          <span>No spamming or flooding chat</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertTriangle size={12} className="text-yellow-400" />
                          <span>Be respectful to all netrunners</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <AlertTriangle size={12} className="text-yellow-400" />
                          <span>No corp recruitment allowed</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                      <h3 className="text-lg font-bold mb-3">Top Chatters</h3>
                      <div className="space-y-2">
                        {[
                          {name: "SynthRat", level: 42, badge: "OG Runner"},
                          {name: "ChromeKid", level: 36, badge: "Mod"},
                          {name: "ICE_BR34KER", level: 29, badge: "Sub 12+"},
                          {name: "NetSlice", level: 27, badge: "Sponsor"},
                        ].map((chatter, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                              <span className={`font-bold ${i === 0 ? 'text-cyan-400' : i === 1 ? 'text-purple-400' : 'text-gray-300'}`}>{chatter.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs bg-gray-800 px-1 rounded text-gray-400">Lv{chatter.level}</span>
                              <span className="text-xs bg-cyan-900/50 text-cyan-300 px-1 rounded border border-cyan-900">{chatter.badge}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        
        {/* Hacker Mode Terminal - Show when in hacker mode */}
        {hackerMode && (
          <div className="relative p-4 bg-black border border-red-900 rounded-lg">
            <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-red-900/30 to-black flex items-center px-3">
              <span className="text-xs text-red-500 font-bold">NETRUNNER TERMINAL v2.77</span>
              <div className="ml-auto flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-xs text-red-500">SECURED CONNECTION</span>
              </div>
            </div>
            
            <div className="mt-6 mb-4 text-red-500 text-sm font-mono">
              {'>'} Initializing neural interface...
              <br />
              {'>'} Connecting to secured node...
              <br />
              {'>'} Access granted. Welcome, NETRUNNER_X.
              <br />
              {'>'} ICE protocol active. Security level: MAXIMUM
              <br />
              {'>'} Warning: This terminal is monitored. All activities are logged.
            </div>
            
            <div className="space-y-4 text-green-500 text-sm font-mono leading-relaxed">
              {terminalCommands.map((cmd, i) => (
                <div key={i}>
                  <div className="flex items-center">
                    <span className="text-red-400 mr-2">NETRUNNER_X@nightcity:~$</span>
                    <span className="text-gray-100">{cmd.command}</span>
                  </div>
                  <div className="pl-6 pt-1 text-cyan-400">{cmd.output}</div>
                </div>
              ))}
              
              <div className="flex items-center animate-pulse">
                <span className="text-red-400 mr-2">NETRUNNER_X@nightcity:~$</span>
                <span className="text-gray-100">_</span>
              </div>
            </div>
            
            {/* Terminal Grid Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwIDAgTCAwIDAgTCAwIDEwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30 -z-10"></div>
            
            <div className="absolute bottom-0 left-0 w-full h-px bg-red-900"></div>
            <div className="absolute top-0 left-0 w-px h-full bg-red-900"></div>
            <div className="absolute top-0 right-0 w-px h-full bg-red-900"></div>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <div className="mt-12 py-6 border-t border-gray-800 text-center text-sm text-gray-500">
        <div className="flex justify-center gap-6 mb-4">
          {['Terms', 'Privacy', 'Security', 'Status', 'Help'].map((item, i) => (
            <a key={i} href="#" className="hover:text-cyan-400 transition-colors">{item}</a>
          ))}
        </div>
        <p>© 2077 NETRUNNER_X • Powered by CyberStream</p>
      </div>
      
      {/* Style elements */}
      <style jsx global>{`
        @keyframes scanline {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        .text-shadow-glow {
          text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

// Missing component imports added
function Smile(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
}

function Download(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}