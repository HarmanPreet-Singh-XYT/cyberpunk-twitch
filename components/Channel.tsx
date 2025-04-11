import { useState, useEffect } from 'react';
import { Users, Tv, Clock, Share2, Bell, ExternalLink, MessageSquare, ThumbsUp, Award, Gamepad2, Eye, Shield, Zap, Terminal } from 'lucide-react';

export default function TwitchChannelInfoPage() {
  const [isLive, setIsLive] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isNotificationsOn, setIsNotificationsOn] = useState(false);
  
  // Simulated viewer count that fluctuates
  const [viewerCount, setViewerCount] = useState(8427);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => {
        const change = Math.floor(Math.random() * 50) - 20;
        return Math.max(7500, prev + change);
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex flex-col w-full min-h-screen bg-black text-gray-200 font-mono relative overflow-hidden">
      {/* Enhanced cyberpunk background with digital noise */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE4MTgxOCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>
      
      {/* Digital noise overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="noise"></div>
      </div>
      
      {/* Multiple scanning lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-1 bg-cyan-500 opacity-30 scanline-fast" 
             style={{
               boxShadow: '0 0 15px 2px #00f0ff',
               position: 'absolute',
             }}>
        </div>
        <div className="w-full h-0.5 bg-purple-500 opacity-20 scanline-slow" 
             style={{
               boxShadow: '0 0 10px 1px #bf00ff',
               position: 'absolute',
               animationDelay: '-1.5s'
             }}>
        </div>
      </div>
      
      {/* Glitch overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-900/10 pointer-events-none"></div>
      
      {/* Enhanced hexagon pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI0MyI+PHBhdGggZD0iTTI1IDhMMTIuNSAyMkwxMi41IDM2TDI1IDQzTDM3LjUgMzZMMzcuNSAyMkwyNSA4WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjAyMDQwIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')] opacity-5 pointer-events-none"></div>
      
      {/* Channel header with enhanced design */}
      <div className="w-full bg-gradient-to-r from-black via-gray-900 to-black border-b border-cyan-500/30 relative overflow-hidden">
        {/* Header accent lines */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/80 via-purple-500/50 to-pink-500/80"></div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500/80 via-purple-500/50 to-cyan-500/80"></div>
        
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-6">
            {/* Enhanced channel avatar with cybernetic frame */}
            <div className="relative">
              <div className="absolute inset-0 animate-pulse-slow rounded-full bg-cyan-500/20 scale-110"></div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 p-0.5 rotate-hexagon relative">
                <div className="w-full h-full rounded-full overflow-hidden border border-gray-800 relative">
                  <img src="/api/placeholder/100/100" alt="Channel avatar" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
                </div>
                
                {/* Cybernetic accents around avatar */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-gray-900">
                  <div className="bg-red-500 w-2 h-2 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-500/50 rounded-full border border-cyan-400"></div>
                <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-8 bg-gradient-to-b from-purple-500 to-transparent rounded-full"></div>
              </div>
            </div>
            
            {/* Enhanced channel info */}
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold">
                  <span className="relative">
                    {/* Text with glitch effect */}
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative z-10">
                      NEURO_DANCE
                    </span>
                    <span className="absolute -inset-0.5 bg-cyan-500/20 blur-sm z-0 animate-pulse-slow"></span>
                    
                    {/* Digital corruption effects */}
                    <span className="absolute top-1/4 right-1/4 h-1/2 w-1 bg-cyan-400 opacity-70 animate-flicker"></span>
                    <span className="absolute bottom-1/3 left-1/3 h-1 w-2 bg-pink-500 opacity-70 animate-flicker-delay"></span>
                  </span>
                </h1>
                <div className="px-2 py-0.5 bg-gradient-to-r from-red-600 to-red-700 text-xs font-bold rounded text-white flex items-center gap-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-red-500/30 animate-pulse-slow"></div>
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10"></div>
                  <div className="absolute inset-y-0 right-0 w-1 bg-white/30 animate-flicker"></div>
                  <div className="bg-white w-2 h-2 rounded-full animate-pulse mr-1 relative z-10"></div>
                  <span className="relative z-10">LIVE</span>
                </div>
                <div className="text-gray-400 text-xs flex items-center gap-1 bg-gray-800/50 px-2 py-0.5 rounded border border-gray-700/50">
                  <Eye size={12} className="text-cyan-400" />
                  <span className="font-bold text-cyan-400">{viewerCount.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mt-1 text-gray-400 text-sm flex items-center">
                <span className="mr-2">Cybernetic implants & street hacking - Livestreaming from Night City</span>
                <span className="text-xs bg-gray-800 px-1 py-0.5 rounded border border-pink-500/30 text-pink-400">CORPO BLACKLIST</span>
              </div>
              
              <div className="mt-2 flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1">
                  <Gamepad2 size={14} className="text-purple-400" />
                  <span>CyberRush 2077</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={14} className="text-cyan-400" />
                  <span>412K followers</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield size={14} className="text-pink-500" />
                  <span>Elite Netrunner</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced action buttons */}
            <div className="flex gap-3">
              <button 
                onClick={() => setIsFollowing(!isFollowing)} 
                className={`px-4 py-2 rounded text-sm font-bold transition-all duration-300 flex items-center gap-2 relative overflow-hidden ${
                  isFollowing 
                    ? 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-cyan-500/50' 
                    : 'border border-transparent'
                }`}
              >
                {!isFollowing && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 animate-gradient"></div>
                )}
                {!isFollowing && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-full hover:animate-shimmer"></div>
                )}
                <span className="relative z-10">{isFollowing ? 'FOLLOWING' : 'FOLLOW'}</span>
              </button>
              
              <button 
                onClick={() => setIsNotificationsOn(!isNotificationsOn)} 
                className={`p-2 rounded transition-all duration-300 relative overflow-hidden ${
                  isNotificationsOn 
                    ? 'border border-transparent' 
                    : 'bg-gray-800 border border-gray-700 hover:border-purple-500/50'
                }`}
              >
                {isNotificationsOn && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500"></div>
                )}
                <Bell size={18} className={`relative z-10 ${isNotificationsOn ? 'text-white' : 'text-gray-400'}`} />
              </button>
              
              <button className="p-2 rounded bg-gray-800 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent translate-x-full hover:animate-shimmer"></div>
                <Share2 size={18} className="text-gray-400 relative z-10" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-6 flex gap-6">
        {/* Left column */}
        <div className="w-2/3">
          {/* Enhanced stream info */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded border border-cyan-500/20 mb-6 overflow-hidden relative">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-500/70"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-pink-500/70"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-pink-500/70"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-500/70"></div>
            
            <div className="relative w-full h-96 bg-black">
              <img src="/api/placeholder/800/500" alt="Stream thumbnail" className="w-full h-full object-cover opacity-90" />
              
              {/* Enhanced stream status overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-2 py-1 bg-red-600 text-xs font-bold rounded text-white flex items-center gap-1 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/50 to-red-700/50"></div>
                    <div className="absolute top-0 left-0 w-full h-1/3 bg-white/10"></div>
                    <div className="bg-white w-2 h-2 rounded-full animate-pulse mr-1 relative z-10"></div>
                    <span className="relative z-10">LIVE</span>
                  </div>
                  <div className="px-2 py-1 bg-gray-800/80 text-xs rounded flex items-center gap-1 border border-gray-700/50">
                    <Clock size={12} className="text-cyan-400" />
                    <span>5:23:12</span>
                  </div>
                  <div className="px-2 py-1 bg-gray-800/80 text-xs rounded flex items-center gap-1 border border-gray-700/50">
                    <Eye size={12} className="text-purple-400" />
                    <span className="text-cyan-400 font-bold">{viewerCount.toLocaleString()}</span>
                  </div>
                  <div className="px-2 py-1 bg-pink-900/30 text-xs rounded flex items-center gap-1 border border-pink-500/30">
                    <Zap size={12} className="text-pink-400" />
                    <span className="text-pink-400">HIGH RISK</span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-2 relative inline-block">
                  <span className="relative">
                    NETRUNNING THE CORPO BACKDOOR // DAY 145
                    <span className="absolute -inset-1 bg-cyan-500/10 blur-sm -z-10"></span>
                    <span className="absolute top-0 left-1/4 h-full w-1 bg-cyan-400/30 -z-10 animate-flicker"></span>
                  </span>
                </h2>
                
                <p className="text-gray-300 text-sm max-w-3xl backdrop-blur-sm bg-black/20 p-2 border-l-2 border-cyan-500/50">
                  Today we're penetrating Arasaka's firewall and extracting classified data. High risk, high reward run with custom quickhacks. !gear !mods in chat.
                </p>
                
                {/* Cyberpunk-style connection status */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm p-1 rounded border border-cyan-500/30">
                  <div className="flex space-x-1">
                    <div className="w-1 h-6 bg-cyan-500 animate-equalizer-1"></div>
                    <div className="w-1 h-6 bg-cyan-500 animate-equalizer-2"></div>
                    <div className="w-1 h-6 bg-cyan-500 animate-equalizer-3"></div>
                    <div className="w-1 h-6 bg-purple-500 animate-equalizer-2"></div>
                    <div className="w-1 h-6 bg-pink-500 animate-equalizer-1"></div>
                  </div>
                  <div className="text-xs font-bold text-cyan-400">SECURE CONNECTION</div>
                </div>
              </div>
              
              {/* Digital distortion overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-full h-1 bg-cyan-500/20 animate-glitch-horizontal"></div>
                <div className="absolute top-3/4 left-0 w-full h-0.5 bg-pink-500/20 animate-glitch-horizontal-slow"></div>
              </div>
            </div>
            
            {/* Enhanced tags */}
            <div className="p-4 flex flex-wrap gap-2 relative">
              <div className="px-3 py-1 bg-gray-800 rounded-full text-xs text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/70 cursor-pointer transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-cyan-500/10 translate-x-full group-hover:animate-shimmer"></div>
                <span className="relative z-10">#Cyberpunk</span>
              </div>
              <div className="px-3 py-1 bg-gray-800 rounded-full text-xs text-purple-400 border border-purple-500/30 hover:border-purple-500/70 cursor-pointer transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-purple-500/10 translate-x-full group-hover:animate-shimmer"></div>
                <span className="relative z-10">#Netrunner</span>
              </div>
              <div className="px-3 py-1 bg-gray-800 rounded-full text-xs text-pink-500 border border-pink-500/30 hover:border-pink-500/70 cursor-pointer transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-pink-500/10 translate-x-full group-hover:animate-shimmer"></div>
                <span className="relative z-10">#CyberwareModding</span>
              </div>
              <div className="px-3 py-1 bg-gray-800 rounded-full text-xs text-yellow-400 border border-yellow-500/30 hover:border-yellow-500/70 cursor-pointer transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-yellow-500/10 translate-x-full group-hover:animate-shimmer"></div>
                <span className="relative z-10">#NightCity</span>
              </div>
              <div className="px-3 py-1 bg-gray-800 rounded-full text-xs text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/70 cursor-pointer transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-cyan-500/10 translate-x-full group-hover:animate-shimmer"></div>
                <span className="relative z-10">#CorpoRaids</span>
              </div>
              <div className="px-3 py-1 bg-red-900/30 rounded-full text-xs text-red-400 border border-red-500/30 hover:border-red-500/70 cursor-pointer transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-red-500/10 translate-x-full group-hover:animate-shimmer"></div>
                <span className="relative z-10">#BlacklistedStream</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced about section */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded border border-purple-500/20 p-4 mb-6 relative">
            {/* Terminal-like header */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 border-b border-purple-500/20 flex items-center px-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="absolute inset-x-0 text-xs text-center text-gray-400 font-bold">NEURAL_PROFILE.exe</div>
            </div>
            
            <div className="mt-4">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-purple-600"></span>
                <Terminal size={16} className="text-purple-400" />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  ABOUT NEURO_DANCE
                </span>
              </h3>
              
              <div className="text-sm text-gray-300 space-y-3 pl-3 border-l border-gray-700">
                <p className="relative">
                  <span className="text-cyan-400"></span> Professional netrunner specializing in corporate security systems and custom-built quickhacks. Streaming gameplay, cyberdeck mods, and real tech tutorials.
                </p>
                <p className="relative">
                  <span className="text-cyan-400"></span> Former Militech security specialist turned independent. Running a Raven Microcyber MK.4 with custom overclocked RAM expansions and military-grade ICE breakers.
                </p>
                
                <div className="border-t border-gray-700 pt-3 mt-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 p-2 rounded border border-gray-700">
                      <div className="text-gray-400 text-xs mb-1 flex items-center gap-1">
                        <Clock size={10} className="text-purple-400" />
                        <span>STREAMING SCHEDULE</span>
                      </div>
                      <div className="text-sm">
                        <div className="flex justify-between">
                          <span>MON-FRI</span>
                          <span className="text-cyan-400">20:00 - 02:00 ET</span>
                        </div>
                        <div className="flex justify-between">
                          <span>SAT</span>
                          <span className="text-cyan-400">18:00 - 04:00 ET</span>
                        </div>
                        <div className="flex justify-between">
                          <span>SUN</span>
                          <span className="text-cyan-400">OFF / RANDOM</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800/50 p-2 rounded border border-gray-700">
                      <div className="text-gray-400 text-xs mb-1 flex items-center gap-1">
                        <ExternalLink size={10} className="text-purple-400" />
                        <span>BUSINESS INQUIRIES</span>
                      </div>
                      <div className="text-cyan-400 flex items-center gap-1">
                        <span>neuro@datashard.net</span>
                        <ExternalLink size={12} />
                      </div>
                      <div className="mt-1 text-xs text-pink-400 flex items-center gap-1">
                        <Shield size={10} />
                        <span>Encrypted communications only</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced video archive */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded border border-cyan-500/20 p-4 relative">
            {/* Terminal-like decorative elements */}
            <div className="absolute top-2 right-2 flex items-center gap-1 text-xs text-gray-500">
              <div className="w-1 h-3 bg-cyan-500/50 animate-pulse"></div>
              <div className="w-1 h-2 bg-purple-500/50 animate-pulse-slow"></div>
              <div className="w-1 h-4 bg-pink-500/50 animate-pulse-fast"></div>
            </div>
            
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-purple-600"></span>
              <Tv size={16} className="text-pink-400" />
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                RECENT BROADCASTS
              </span>
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="group cursor-pointer">
                  <div className="relative">
                    <img src={`/api/placeholder/400/${260 + item * 10}`} alt={`Video ${item}`} className="w-full h-40 object-cover rounded opacity-90 group-hover:opacity-100 transition-all duration-300" />
                    
                    {/* Enhanced cyberpunk overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-300">3 days ago</span>
                        <span className="text-gray-300">2:14:28</span>
                      </div>
                    </div>
                    
                    {/* Technical readout overlay */}
                    <div className="absolute top-2 left-2 text-xs text-cyan-400 font-bold opacity-0 group-hover:opacity-100 transition-all duration-300">
                      ID: {(item * 873219).toString(16).toUpperCase()}
                    </div>
                    
                    {/* Enhanced cyber border */}
                    <div className="absolute inset-0 border border-cyan-500/0 group-hover:border-cyan-500/50 rounded transition-all duration-300"></div>
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-500/0 group-hover:border-cyan-500/70 transition-all duration-300"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-pink-500/0 group-hover:border-pink-500/70 transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-pink-500/0 group-hover:border-pink-500/70 transition-all duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-500/0 group-hover:border-cyan-500/70 transition-all duration-300"></div>
                    
                    {/* Play indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-cyan-500/30 backdrop-blur-sm flex items-center justify-center border border-cyan-400">
                        <div className="ml-1 w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h4 className="text-sm font-bold group-hover:text-cyan-400 transition-all duration-300 flex items-center gap-1">
                      {["BREAKING MILITECH ENCRYPTION // LIVE HACK", 
                        "CYBERWARE UPGRADE STREAM - NEW SANDEVISTAN MOD", 
                        "ARASAKA TOWER INFILTRATION PLAYTHROUGH PT.1", 
                        "Q&A - ASK A REAL NETRUNNER ANYTHING"][item-1]}
                    </h4>
                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Tv size={12} />
                        <span>21.3K views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare size={12} />
                        <span>342</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-center">
              <button className="px-4 py-2 bg-gray-800 rounded text-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent translate-x-full group-hover:animate-shimmer"></div>
                <span className="relative z-10">VIEW ALL VIDEOS</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Right column */}
        <div className="w-1/3">
          {/* Enhanced channel stats */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded border border-pink-500/20 p-4 mb-6 relative">
            {/* Digital stats decorations */}
            <div className="absolute top-0 right-0 bottom-0 w-12 pointer-events-none opacity-10">
              <div className="w-full h-full flex flex-col">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="flex-1 border-b border-cyan-500/30"></div>
                ))}
              </div>
            </div>
            
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-cyan-400 to-pink-500"></span>
              <span>CHANNEL STATS</span>
            </h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>FOLLOWERS</span>
                  <span className="text-cyan-400">+1.2K this week</span>
                </div>
                <div className="text-xl font-bold text-white">412,589</div>
                <div className="w-full h-1 bg-gray-800 rounded-full mt-2 relative overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 opacity-75 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-full animate-shimmer"></div>
                  </div>
                </div>
                <div className="text-xs text-gray-400 mt-1">75% to 500K milestone</div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>SUBSCRIBERS</span>
                  <span className="text-pink-500">+203 this week</span>
                </div>
                <div className="text-xl font-bold text-white">8,456</div>
                <div className="w-full h-1 bg-gray-800 rounded-full mt-2 relative overflow-hidden">
                  <div className="h-full w-4/5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 opacity-75 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-full animate-shimmer"></div>
                  </div>
                </div>
                <div className="text-xs text-gray-400 mt-1">84% to 10K milestone</div>
              </div>
              
              <div className="border-t border-gray-700 pt-3 grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-2 rounded border border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">AVG VIEWERS</div>
                  <div className="text-lg font-bold text-white">7,823</div>
                  <div className="text-xs text-cyan-400">+12% this month</div>
                </div>
                
                <div className="bg-gray-800/50 p-2 rounded border border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">TOTAL VIEWS</div>
                  <div className="text-lg font-bold text-white">2.1M</div>
                  <div className="text-xs text-cyan-400">+89K this month</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced top clips */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded border border-cyan-500/20 p-4 mb-6 relative">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-yellow-500/70"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-yellow-500/70"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-yellow-500/70"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-yellow-500/70"></div>
            
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-yellow-400 to-pink-500"></span>
              <span>TOP CLIPS</span>
            </h3>
            
            <div className="space-y-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group cursor-pointer">
                  <div className="relative">
                    <img src={`/api/placeholder/400/${170 + item * 10}`} alt={`Clip ${item}`} className="w-full h-24 object-cover rounded opacity-90 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-600/80 rounded-full flex items-center justify-center">
                        <div className="ml-1 w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 bg-black/80 px-1 text-xs flex items-center">
                      <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse mr-1"></div>
                      0:42
                    </div>
                    
                    {/* Enhanced cyberpunk border */}
                    <div className="absolute inset-0 border border-cyan-500/0 group-hover:border-cyan-500/50 rounded transition-all duration-300"></div>
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-yellow-400/0 group-hover:border-yellow-400/70 transition-all duration-300"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-yellow-400/0 group-hover:border-yellow-400/70 transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-yellow-400/0 group-hover:border-yellow-400/70 transition-all duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-yellow-400/0 group-hover:border-yellow-400/70 transition-all duration-300"></div>
                  </div>
                  <div className="mt-1">
                    <h4 className="text-xs font-bold group-hover:text-yellow-400 transition-all duration-300">
                      {["Perfect quickhack on Arasaka CEO", 
                        "Motorcycle jump over NCPD blockade", 
                        "Glitched into secret dev room"][item-1]}
                    </h4>
                    <div className="flex items-center gap-2 mt-0.5 text-xs text-gray-400">
                      <span>127K views</span>
                      <span>•</span>
                      <span>Clipped by DigitalSpectre</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-3 text-center">
              <button className="px-3 py-1 bg-gray-800 rounded text-xs border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent translate-x-full group-hover:animate-shimmer"></div>
                <span className="relative z-10">VIEW ALL CLIPS</span>
              </button>
            </div>
          </div>
          
          {/* Enhanced achievements & channel rewards */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded border border-yellow-500/20 p-4 relative">
            {/* Digital decoration */}
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-500/50"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-500/50"></div>
            
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-yellow-400 to-orange-500"></span>
              <Award size={14} className="text-yellow-400" />
              <span>ACHIEVEMENTS</span>
            </h3>
            
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="relative group cursor-help">
                  <div className={`w-full aspect-square rounded-full bg-gray-800 flex items-center justify-center border ${
                    item <= 4 ? 'border-yellow-500/50' : 'border-gray-700'
                  } relative overflow-hidden`}>
                    {item <= 4 && (
                      <div className="absolute inset-0 bg-yellow-500/10 animate-pulse-slow"></div>
                    )}
                    <Award size={20} className={item <= 4 ? 'text-yellow-400' : 'text-gray-600'} />
                    
                    {/* Achievement progress indicator */}
                    {item > 4 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#444"
                            strokeWidth="2"
                            strokeDasharray={`${item === 5 ? 75 : 45}, 100`}
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 transform -translate-x-1/2 mb-2 transition-opacity duration-300 pointer-events-none z-20">
                    <div className="bg-gray-800 text-xs text-white py-1 px-2 rounded whitespace-nowrap border border-purple-500/30">
                      {["Marathon Streamer", "1000 Subscribers", "100K Followers", "1M Total Views", "Partner Status (75%)", "24h Stream (45%)"][item-1]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-purple-500 to-pink-500"></span>
              <span>CHANNEL POINTS</span>
            </h3>
            
            <div className="bg-gray-800 rounded p-3 flex items-center justify-between relative overflow-hidden">
              {/* Digital decoration */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="w-full h-full grid grid-cols-10 grid-rows-4">
                  {[...Array(40)].map((_, i) => (
                    <div key={i} className="border border-pink-500/20"></div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="text-xs text-gray-400 mb-1">EARN POINTS WHILE WATCHING</div>
                <div className="text-sm font-bold text-white">200 points/hour + 50 follower bonus</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-400 mb-1">YOUR BALANCE</div>
                <div className="text-lg font-bold text-pink-400 relative">
                  <span className="relative">4,280</span>
                  <span className="absolute -inset-1 bg-pink-500/20 blur-sm -z-10"></span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="bg-gray-800 rounded p-2 border border-purple-500/30 relative overflow-hidden group hover:border-purple-500/70 transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-purple-500/10 translate-x-full group-hover:animate-shimmer"></div>
                <div className="text-purple-400 font-bold relative z-10">HIGHLIGHT MESSAGE</div>
                <div className="text-gray-400 relative z-10">1,000 points</div>
              </div>
              <div className="bg-gray-800 rounded p-2 border border-cyan-500/30 relative overflow-hidden group hover:border-cyan-500/70 transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-cyan-500/10 translate-x-full group-hover:animate-shimmer"></div>
                <div className="text-cyan-400 font-bold relative z-10">SPAWN GLITCH</div>
                <div className="text-gray-400 relative z-10">2,500 points</div>
              </div>
              <div className="bg-gray-800 rounded p-2 border border-pink-500/30 relative overflow-hidden group hover:border-pink-500/70 transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-pink-500/10 translate-x-full group-hover:animate-shimmer"></div>
                <div className="text-pink-400 font-bold relative z-10">PLAY SOUND</div>
                <div className="text-gray-400 relative z-10">1,500 points</div>
              </div>
              <div className="bg-gray-800 rounded p-2 border border-yellow-500/30 relative overflow-hidden group hover:border-yellow-500/70 transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-yellow-500/10 translate-x-full group-hover:animate-shimmer"></div>
                <div className="text-yellow-400 font-bold relative z-10">FORCE QUICKHACK</div>
                <div className="text-gray-400 relative z-10">5,000 points</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Cyberpunk animations */}
      <style jsx>{`
        @keyframes scanline-fast {
          0% {
            top: -100%;
          }
          100% {
            top: 100%;
          }
        }
        
        @keyframes scanline-slow {
          0% {
            top: -100%;
          }
          100% {
            top: 100%;
          }
        }
        
        @keyframes rotate-hexagon {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(60deg);
          }
        }
        
        @keyframes glitch-horizontal {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes glitch-horizontal-slow {
          0% {
            transform: translateX(100%);
          }
          50% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes equalizer-1 {
          0%, 100% { height: 6px; }
          50% { height: 16px; }
        }
        
        @keyframes equalizer-2 {
          0%, 100% { height: 12px; }
          25% { height: 6px; }
          75% { height: 18px; }
        }
        
        @keyframes equalizer-3 {
          0%, 100% { height: 8px; }
          65% { height: 18px; }
        }
        
        @keyframes flicker {
          0%, 100% { opacity: 0; }
          10%, 30%, 50%, 70%, 90% { opacity: 0.6; }
          20%, 40%, 60%, 80% { opacity: 0; }
        }
        
        @keyframes flicker-delay {
          0%, 100% { opacity: 0; }
          25%, 45%, 65%, 85% { opacity: 0.8; }
          15%, 35%, 55%, 75% { opacity: 0; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        
        @keyframes pulse-fast {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-flicker {
          animation: flicker 4s linear infinite;
        }
        
        .animate-flicker-delay {
          animation: flicker-delay 3s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease infinite;
        }
        
        .animate-pulse-fast {
          animation: pulse-fast 2s ease infinite;
        }
        
        .rotate-hexagon {
          animation: rotate-hexagon 8s linear infinite;
        }
        
        .scanline-fast {
          animation: scanline-fast 4s linear infinite;
        }
        
        .scanline-slow {
          animation: scanline-slow 7s linear infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        
        .animate-glitch-horizontal {
          animation: glitch-horizontal 8s linear infinite;
        }
        
        .animate-glitch-horizontal-slow {
          animation: glitch-horizontal-slow 12s linear infinite;
        }
        
        .animate-equalizer-1 {
          animation: equalizer-1 1.2s ease-in-out infinite;
        }
        
        .animate-equalizer-2 {
          animation: equalizer-2 0.9s ease-in-out infinite;
        }
        
        .animate-equalizer-3 {
          animation: equalizer-3 1.5s ease-in-out infinite;
        }
        
        .noise {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}