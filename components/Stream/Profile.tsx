'use client'
import { useState, useEffect } from 'react';
import { Search, Bell, MessageSquare, ChevronDown, Gift, Heart, Share2, Settings, Users, Play, Clock, Calendar, Zap, Award, Shield, Eye, Lock, Radio, Flame, Terminal, Cpu, Monitor, Download, Coffee } from 'lucide-react';
import Navbar from './Navbar';

export default function CyberpunkTwitchProfile() {
  const [isLive, setIsLive] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);
  const [viewCount, setViewCount] = useState(2347);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [glitchText, setGlitchText] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [showNotification, setShowNotification] = useState(false);

  // Simulated view count increment
  useEffect(() => {
    const interval = setInterval(() => {
      setViewCount(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Random glitch effects
  useEffect(() => {
    // Screen glitch
    // const glitchInterval = setInterval(() => {
    //   setGlitchEffect(true);
    //   setTimeout(() => setGlitchEffect(false), 150);
    // }, Math.random() * 10000 + 4000);
    
    // Text glitch
    const textGlitchInterval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 200);
    }, Math.random() * 15000 + 8000);

    // Random notification
    const notificationInterval = setInterval(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }, Math.random() * 20000 + 15000);
    
    return () => {
    //   clearInterval(glitchInterval);
      clearInterval(textGlitchInterval);
      clearInterval(notificationInterval);
    };
  }, []);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
    if (!isFollowing) {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };
  const [IsMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <div className={`min-h-screen bg-gray-950 text-gray-100 relative ${glitchEffect ? 'opacity-95' : ''}`}>
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/10 via-gray-950 to-cyan-900/10 z-0"></div>
      
      {/* Grid overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNjZmZiIgb3BhY2l0eT0iMC4wNCIgc3Ryb2tlLXdpZHRoPSIxcHgiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30 z-0"></div>
      
      {/* Scan lines */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMiIgaGVpZ2h0PSIyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJzY2FubGluZXMiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMCAxIEwgMiAxIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIG9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMC41cHgiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc2NhbmxpbmVzKSIvPjwvc3ZnPg==')] opacity-70 z-0 pointer-events-none"></div>
      
      {/* Glitch overlay */}
      {glitchEffect && (
        <div className="fixed inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent z-30 pointer-events-none"></div>
      )}
      
      {/* Noise texture */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giIHNlZWQ9IjIwMTIiIHJlc3VsdD0ibm9pc2UiLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMSAwIDAgMCAwIDAgMSAwIDAgMCAwIDAgMSAwIDAgMCAwIDAgMC4wNSAwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIvPjwvc3ZnPg==')] opacity-20 mix-blend-overlay z-0 pointer-events-none"></div>
      
      <div className="relative z-10">
        <Navbar setIsMenuOpen={setIsMenuOpen}/>

        {/* Profile Header */}
        <div className="relative">
          <div className="h-52 bg-gradient-to-r from-gray-900 via-purple-900/40 to-gray-900 relative overflow-hidden">
            {/* Animated scan line */}
            <div className="absolute inset-0 opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400/80 animate-pulse"></div>
            
            {/* Digital circuit pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZyBzdHJva2U9IiM2NmJmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0xMCwxMCBMMzAsMTAgTDMwLDMwIEw1MCwzMCBMNTAsNTAgTDMwLDUwIEwzMCw3MCBMMTAsNzAgTDEwLDUwIEw1MCw1MCIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiIGZpbGw9IiM2NmJmZmYiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjMwIiByPSIyIiBmaWxsPSIjNjZiZmZmIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
            
            {/* Glitch effect */}
            <div className={`absolute inset-0 bg-pink-500/20 ${glitchEffect ? 'animate-pulse' : ''}`}></div>
            
            {/* Header content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
              <div className="flex items-end">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 shadow-lg shadow-purple-500/30">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center relative overflow-hidden">
                      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">NX</span>
                      
                      {/* Animated rings */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full border-2 border-cyan-500/30 rounded-full animate-ping opacity-20"></div>
                      </div>
                    </div>
                  </div>
                  {/* {isLive && (
                    <div className="absolute -top-2 -right-2 bg-red-500 px-2 py-0.5 rounded text-xs font-bold animate-pulse shadow-lg shadow-red-500/30">
                      LIVE
                    </div>
                  )} */}
                </div>
                <div className="ml-4 mb-1">
                  <h1 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 ${glitchText ? 'opacity-90 translate-x-0.5' : ''} transition-all duration-100`}>
                    Cyber<span className="text-white">User</span>
                  </h1>
                  <div className="flex items-center text-sm mt-1">
                    <span className="text-gray-300">{viewCount.toLocaleString()} followers</span>
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-gray-300">271 following</span>
                  </div>
                </div>
              </div>
              
              {/* <div className="flex space-x-2">
                <button 
                  className={`flex items-center px-4 py-2 rounded transition-all duration-300 ${
                    isFollowing 
                    ? 'bg-gray-800 border border-cyan-500/70 text-cyan-400 hover:bg-gray-700' 
                    : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-400 hover:to-purple-500'
                  }`}
                  onClick={handleFollowClick}
                >
                  {isFollowing ? 'Following' : 'Follow'}
                  {!isFollowing && <Heart size={16} className="ml-2" />}
                </button>
                <button className="flex items-center px-3 py-2 rounded bg-gray-800 border border-purple-500/50 text-purple-400 hover:bg-gray-700 hover:border-purple-400 transition-all duration-300">
                  <Bell size={16} />
                </button>
                <button className="flex items-center px-3 py-2 rounded bg-gray-800 border border-pink-500/50 text-pink-400 hover:bg-gray-700 hover:border-pink-400 transition-all duration-300">
                  <Share2 size={16} />
                </button>
              </div> */}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-screen-xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
          {/* Left Column - Profile Info */}
          <div className="md:col-span-1 space-y-4">
            {/* About Panel */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg border border-purple-500/40 overflow-hidden shadow-lg shadow-purple-500/5 transition-all duration-300 hover:border-purple-500/60">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-2 flex justify-between items-center border-b border-purple-500/30">
                <h3 className="font-bold text-cyan-400">ABOUT CyberUser</h3>
                <Settings size={16} className="text-gray-400 cursor-pointer hover:text-cyan-400 transition-colors duration-300" />
              </div>
              <div className="p-4 space-y-3 text-sm">
                <p className="text-gray-300">Netrunner, hardware modder, and digital nomad streaming from the depths of Night City. Specializing in neural hacking and interface overrides.</p>
                
                <div className="flex items-center">
                  <Users size={16} className="text-purple-400 mr-2" />
                  <span className="text-gray-300">Affiliated with <span className="text-pink-400">CyberDeck_Collective</span></span>
                </div>
                
                <div className="flex items-center">
                  <Calendar size={16} className="text-purple-400 mr-2" />
                  <span className="text-gray-300">Streaming since March 2023</span>
                </div>
                
                <div className="flex items-center">
                  <Clock size={16} className="text-purple-400 mr-2" />
                  <span className="text-gray-300">
                    <span className="text-cyan-400">ONLINE</span> • Last seen 23 minutes ago
                  </span>
                </div>
                
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="bg-gray-800 p-2 rounded border border-cyan-500/30 flex flex-col items-center hover:border-cyan-500/70 transition-all duration-300">
                    <span className="text-xs text-gray-400">LEVEL</span>
                    <span className="text-lg font-bold text-cyan-400">42</span>
                  </div>
                  <div className="bg-gray-800 p-2 rounded border border-purple-500/30 flex flex-col items-center hover:border-purple-500/70 transition-all duration-300">
                    <span className="text-xs text-gray-400">XP</span>
                    <span className="text-lg font-bold text-purple-400">3.2K</span>
                  </div>
                  <div className="bg-gray-800 p-2 rounded border border-pink-500/30 flex flex-col items-center hover:border-pink-500/70 transition-all duration-300">
                    <span className="text-xs text-gray-400">RANK</span>
                    <span className="text-lg font-bold text-pink-400">ELITE</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Skills Panel */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg border border-cyan-500/40 overflow-hidden shadow-lg shadow-cyan-500/5 transition-all duration-300 hover:border-cyan-500/60">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-2 border-b border-cyan-500/30">
                <h3 className="font-bold text-cyan-400">SKILLS & ABILITIES</h3>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-purple-400">Neural Interface</span>
                    <span className="text-cyan-400">92%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 relative overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-400 h-2 rounded-full w-11/12 relative">
                      <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-purple-400">Code Injection</span>
                    <span className="text-cyan-400">87%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 relative overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-400 h-2 rounded-full w-10/12 relative">
                      <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-purple-400">Hardware Modding</span>
                    <span className="text-cyan-400">76%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 relative overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-400 h-2 rounded-full w-3/4 relative">
                      <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-purple-400">Cryptography</span>
                    <span className="text-cyan-400">81%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 relative overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-400 h-2 rounded-full w-4/5 relative">
                      <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Augmentations Panel */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg border border-pink-500/40 overflow-hidden shadow-lg shadow-pink-500/5 transition-all duration-300 hover:border-pink-500/60">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-2 border-b border-pink-500/30">
                <h3 className="font-bold text-pink-400">AUGMENTATIONS</h3>
              </div>
              <div className="p-4 space-y-3 text-sm">
                <div className="flex items-center hover:bg-gray-800/50 p-2 rounded transition-colors duration-300 cursor-pointer group">
                  <div className="w-8 h-8 rounded bg-gray-800 border border-cyan-500/50 flex items-center justify-center mr-3 group-hover:border-cyan-400 transition-all duration-300 relative overflow-hidden">
                    <Shield size={16} className="text-cyan-400 relative z-10" />
                    <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors duration-300"></div>
                  </div>
                  <div>
                    <div className="text-cyan-400 flex items-center">
                      Firewall x3.7
                      <Lock size={12} className="ml-1 text-cyan-300/70" />
                    </div>
                    <div className="text-xs text-gray-400">Advanced security protocols</div>
                  </div>
                </div>
                
                <div className="flex items-center hover:bg-gray-800/50 p-2 rounded transition-colors duration-300 cursor-pointer group">
                  <div className="w-8 h-8 rounded bg-gray-800 border border-purple-500/50 flex items-center justify-center mr-3 group-hover:border-purple-400 transition-all duration-300 relative overflow-hidden">
                    <Cpu size={16} className="text-purple-400 relative z-10" />
                    <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300"></div>
                  </div>
                  <div>
                    <div className="text-purple-400 flex items-center">
                      Neural Co-Processor
                      <Radio size={12} className="ml-1 text-purple-300/70 animate-pulse" />
                    </div>
                    <div className="text-xs text-gray-400">Enhanced multitasking</div>
                  </div>
                </div>
                
                <div className="flex items-center hover:bg-gray-800/50 p-2 rounded transition-colors duration-300 cursor-pointer group">
                  <div className="w-8 h-8 rounded bg-gray-800 border border-pink-500/50 flex items-center justify-center mr-3 group-hover:border-pink-400 transition-all duration-300 relative overflow-hidden">
                    <Zap size={16} className="text-pink-400 relative z-10" />
                    <div className="absolute inset-0 bg-pink-500/10 group-hover:bg-pink-500/20 transition-colors duration-300"></div>
                  </div>
                  <div>
                    <div className="text-pink-400 flex items-center">
                      Overclock Module
                      <Flame size={12} className="ml-1 text-pink-300/70" />
                    </div>
                    <div className="text-xs text-gray-400">+45% processing speed</div>
                  </div>
                </div>
                
                <div className="flex items-center hover:bg-gray-800/50 p-2 rounded transition-colors duration-300 cursor-pointer group">
                  <div className="w-8 h-8 rounded bg-gray-800 border border-cyan-500/50 flex items-center justify-center mr-3 group-hover:border-cyan-400 transition-all duration-300 relative overflow-hidden">
                    <Eye size={16} className="text-cyan-400 relative z-10" />
                    <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors duration-300"></div>
                  </div>
                  <div>
                    <div className="text-cyan-400 flex items-center">
                      Optic Scanner
                      <Terminal size={12} className="ml-1 text-cyan-300/70" />
                    </div>
                    <div className="text-xs text-gray-400">Real-time data analysis</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Gear Panel */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg border border-cyan-500/40 overflow-hidden shadow-lg shadow-cyan-500/5 transition-all duration-300 hover:border-cyan-500/60">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-2 border-b border-cyan-500/30">
                <h3 className="font-bold text-cyan-400">TOP GEAR</h3>
              </div>
              <div className="p-4 space-y-3 text-sm">
                <div className="flex items-center hover:bg-gray-800/50 p-2 rounded transition-colors duration-300 cursor-pointer group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/50 flex items-center justify-center mr-3 group-hover:border-purple-400 transition-all duration-300">
                    <Cpu size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <div className="text-purple-400 font-medium">Quantum Processor</div>
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div key={star} className="text-pink-500 text-xs">★</div>
                        ))}
                      </div>
                      <span className="text-xs text-gray-400 ml-2">Ultra Rare</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center hover:bg-gray-800/50 p-2 rounded transition-colors duration-300 cursor-pointer group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-cyan-500/20 border border-pink-500/50 flex items-center justify-center mr-3 group-hover:border-pink-400 transition-all duration-300">
                    <Monitor size={20} className="text-pink-400" />
                  </div>
                  <div>
                    <div className="text-pink-400 font-medium">Holographic Display</div>
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4].map((star) => (
                          <div key={star} className="text-pink-500 text-xs">★</div>
                        ))}
                        <div className="text-gray-500 text-xs">★</div>
                      </div>
                      <span className="text-xs text-gray-400 ml-2">Rare</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center hover:bg-gray-800/50 p-2 rounded transition-colors duration-300 cursor-pointer group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 flex items-center justify-center mr-3 group-hover:border-cyan-400 transition-all duration-300">
                    <Coffee size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-cyan-400 font-medium">Neural Stimulant</div>
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3].map((star) => (
                          <div key={star} className="text-pink-500 text-xs">★</div>
                        ))}
                        {[1, 2].map((star) => (
                          <div key={star} className="text-gray-500 text-xs">★</div>
                        ))}
                      </div>
                      <span className="text-xs text-gray-400 ml-2">Common</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Center and Right Columns - Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Stream Panel */}
            {/* {isLive && (
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg border border-red-500/40 overflow-hidden shadow-lg shadow-red-500/10 transition-all duration-300 hover:border-red-500/60">
                <div className="relative">
                  <div className="aspect-video bg-gray-800 flex items-center justify-center">
                    <img src="/api/placeholder/800/450" alt="Stream thumbnail" className="opacity-60" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-500/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500/40 transition-all duration-300 cursor-pointer group">
                        <Play size={36} className="text-white opacity-90 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>
                    <div className="absolute bottom-4 left-4 bg-red-500 px-2 py-0.5 rounded text-xs font-bold shadow-lg shadow-red-500/30">
                      LIVE
                    </div>
                    <div className="absolute bottom-4 right-4 bg-gray-900/80 backdrop-blur-sm px-2 py-0.5 rounded text-xs flex items-center">
                      <Users size={12} className="mr-1" />
                      {viewCount.toLocaleString()} viewers
                    </div>
                    
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                      <div className="h-full w-2/3 bg-red-500"></div>
                      
                      
                      <div className="absolute left-1/4 top-0 w-1 h-2 bg-white rounded-full"></div>
                      <div className="absolute left-1/2 top-0 w-1 h-2 bg-white rounded-full"></div>
                      <div className="absolute left-3/4 top-0 w-1 h-2 bg-white rounded-full"></div>
                    </div>
                    
                    
                    <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxcHgiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-300 cursor-pointer">Cracking the New Corporate ICE - Interactive Demo</h2>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm">
                    <span className="text-pink-400">Cyberpunk 2077</span>
                    <span className="text-gray-300">Started 2h 17m ago</span>
                    <div className="flex items-center text-yellow-400">
                      <Award size={14} className="mr-1" />
                      <span>Premium Stream</span>
                    </div>
                    <div className="flex items-center ml-auto">
                      <button className="flex items-center px-2 py-1 rounded bg-gray-800 border border-purple-500/30 text-purple-400 hover:bg-gray-700 hover:border-purple-400 transition-all duration-300 mr-2">
                        <Heart size={14} className="mr-1" />
                        <span>2.5K</span>
                      </button>
                      <button className="flex items-center px-2 py-1 rounded bg-gray-800 border border-pink-500/30 text-pink-400 hover:bg-gray-700 hover:border-pink-400 transition-all duration-300">
                        <Share2 size={14} className="mr-1" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
             */}
            {/* Tabs */}
            {/* <div className="border-b border-purple-500/30 flex text-sm overflow-x-auto scrollbar-hide">
              {['Home', 'Videos', 'Clips', 'Collections', 'Schedule', 'About'].map((tab) => (
                <div 
                  key={tab}
                  className={`px-4 py-2 cursor-pointer whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab 
                      ? 'border-b-2 border-cyan-400 text-cyan-400 font-semibold' 
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </div>
              ))}
            </div> */}
            
            {/* Recent Videos */}
            {/* <div>
              <h3 className="text-lg font-bold text-purple-400 mb-3 flex items-center">
                RECENT BROADCASTS
                <span className="ml-2 text-xs font-normal text-gray-400 bg-gray-800 px-2 py-0.5 rounded">4 videos</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-gray-900/80 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-purple-500/60 transition-all duration-300 cursor-pointer group shadow-lg shadow-purple-500/5">
                    <div className="relative">
                      <img src={`/api/placeholder/400/${300 + item * 10}`} alt={`Stream ${item}`} className="w-full transform group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded text-xs">
                        2:34:17
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 bg-cyan-500/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play size={24} className="text-white" />
                        </div>
                      </div>
                      
                      
                      <div className="absolute top-2 left-2 flex gap-1">
                        {item === 1 && (
                          <div className="bg-purple-500/80 backdrop-blur-sm px-1.5 py-0.5 rounded text-xs font-medium">
                            TUTORIAL
                          </div>
                        )}
                        {item === 3 && (
                          <div className="bg-pink-500/80 backdrop-blur-sm px-1.5 py-0.5 rounded text-xs font-medium">
                            ADVANCED
                          </div>
                        )}
                        {item === 4 && (
                          <div className="bg-cyan-500/80 backdrop-blur-sm px-1.5 py-0.5 rounded text-xs font-medium">
                            EXCLUSIVE
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="p-3">
                      <h4 className="text-cyan-400 font-semibold truncate group-hover:text-cyan-300 transition-colors duration-300">{
                        ["Breaking Corporate Firewalls Live", 
                         "Custom Cyberdeck Build Tutorial", 
                         "Neural Pathway Hacking: Advanced Techniques", 
                         "Night City's Underground Data Markets"][item-1]
                      }</h4>
                      <div className="flex justify-between text-xs mt-1">
                        <span className="text-gray-400">{["2 days ago", "5 days ago", "1 week ago", "2 weeks ago"][item-1]}</span>
                        <span className="text-purple-400">{[14.2, 9.7, 22.1, 16.8][item-1]}K views</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
            
            {/* Status Updates */}
            <div>
              <h3 className="text-lg font-bold text-pink-400 mb-3 flex items-center">
                STATUS UPDATES
                <span className="ml-2 text-xs font-normal text-gray-400 bg-gray-800 px-2 py-0.5 rounded">2 updates</span>
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-gray-800 hover:border-pink-500/40 transition-all duration-300 shadow-lg shadow-pink-500/5">
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center">
                        <span className="text-xs font-bold">NX</span>
                      </div>
                      <div className="ml-3">
                        <div className="text-cyan-400 font-semibold">CyberUser</div>
                        <div className="text-xs text-gray-400">12 hours ago</div>
                      </div>
                    </div>
                    <div className="text-gray-500 cursor-pointer hover:text-gray-300 transition-colors duration-300">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                  <div className="mt-3 text-gray-300">
                    Just got my hands on a new prototype neural interface. Expect some wild streams this week as I test the limits. Might even attempt to crack Arasaka's new security protocol. Join me tomorrow at 20:00 NET.
                  </div>
                  <div className="mt-3 flex items-center text-sm space-x-4">
                    <div className="flex items-center text-pink-400 cursor-pointer hover:text-pink-300 transition-colors duration-300">
                      <Heart size={16} className="mr-1" />
                      <span>247</span>
                    </div>
                    <div className="flex items-center text-purple-400 cursor-pointer hover:text-purple-300 transition-colors duration-300">
                      <MessageSquare size={16} className="mr-1" />
                      <span>43</span>
                    </div>
                    <div className="flex items-center text-cyan-400 cursor-pointer hover:text-cyan-300 transition-colors duration-300">
                      <Share2 size={16} className="mr-1" />
                      <span>Share</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-gray-800 hover:border-pink-500/40 transition-all duration-300 shadow-lg shadow-pink-500/5">
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center">
                        <span className="text-xs font-bold">NX</span>
                      </div>
                      <div className="ml-3">
                        <div className="text-cyan-400 font-semibold">CyberUser</div>
                        <div className="text-xs text-gray-400">3 days ago</div>
                      </div>
                    </div>
                    <div className="text-gray-500 cursor-pointer hover:text-gray-300 transition-colors duration-300">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                  <div className="mt-3 text-gray-300">
                    Stream schedule update: Adding an extra session on Friday nights dedicated to viewer-requested cyberdeck builds. Drop your specs in the comments and I'll pick the most interesting ones.
                  </div>
                  <div className="mt-3 flex items-center text-sm space-x-4">
                    <div className="flex items-center text-pink-400 cursor-pointer hover:text-pink-300 transition-colors duration-300">
                      <Heart size={16} className="mr-1" />
                      <span>193</span>
                    </div>
                    <div className="flex items-center text-purple-400 cursor-pointer hover:text-purple-300 transition-colors duration-300">
                      <MessageSquare size={16} className="mr-1" />
                      <span>85</span>
                    </div>
                    <div className="flex items-center text-cyan-400 cursor-pointer hover:text-cyan-300 transition-colors duration-300">
                      <Share2 size={16} className="mr-1" />
                      <span>Share</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-12 border-t border-purple-500/30 py-6 text-center text-xs bg-gray-900/60 backdrop-blur-sm">
          <div className="text-cyan-400">CyberUser <span className="text-gray-500">•</span> © 2025 <span className="text-gray-500">•</span> All Rights Reserved</div>
          <div className="mt-2 flex items-center justify-center">
            <span className="text-pink-500">NETWORK STATUS:</span>
            <span className="ml-1 text-cyan-400">ONLINE</span>
            <span className="mx-2 text-gray-500">•</span>
            <span className="text-gray-400">PING: 42ms</span>
            <span className="mx-2 text-gray-500">•</span>
            <span className="text-purple-400">ENCRYPTED CONNECTION</span>
            <span className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </div>
        </footer>
      </div>
      
      {/* Notification popup */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-gray-900/90 backdrop-blur-md border border-cyan-500/50 shadow-lg shadow-cyan-500/20 rounded-lg p-3 flex items-center z-50 animate-slideInUp">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center mr-3">
            <span className="text-xs font-bold">NX</span>
          </div>
          <div>
            <div className="text-cyan-400 font-medium">
              {isFollowing ? 'Now following CyberUser!' : 'Welcome to the stream!'}
            </div>
            <div className="text-xs text-gray-300">
              {isFollowing ? 'You will be notified when they go live.' : 'Cracking the New Corporate ICE - Interactive Demo'}
            </div>
          </div>
          <button className="ml-4 text-gray-400 hover:text-white" onClick={() => setShowNotification(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}