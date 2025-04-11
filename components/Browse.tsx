import { useState, useEffect } from 'react';
import { Search, User, Heart, Eye, MessageCircle, Menu, X, Zap, Monitor, ChevronRight, MoreHorizontal, Bell } from 'lucide-react';

// Simulated data for streams and categories
const featuredStreams = [
  { id: 1, title: "NIGHT CITY NETRUNNER RAID", user: "CyberV1per", game: "Cyberpunk 2077", viewers: 12842, avatar: "/api/placeholder/50/50", thumbnail: "/api/placeholder/800/450", tags: ["FPS", "RPG", "English"] },
  { id: 2, title: "CORPO WARS: ARASAKA TAKEDOWN", user: "NeonBlade", game: "Cyberwire Protocol", viewers: 8721, avatar: "/api/placeholder/50/50", thumbnail: "/api/placeholder/800/450", tags: ["Strategy", "Cyberpunk", "Japanese"] },
  { id: 3, title: "HACK THE PLANET // DAILY RUNS", user: "Gh0st_Runn3r", game: "DataCrash", viewers: 6549, avatar: "/api/placeholder/50/50", thumbnail: "/api/placeholder/800/450", tags: ["Speedrun", "Puzzle", "German"] },
  { id: 4, title: "NEURAL DANCE COMPETITION", user: "ChromeQUEEN", game: "Neuro Sync", viewers: 5389, avatar: "/api/placeholder/50/50", thumbnail: "/api/placeholder/800/450", tags: ["Music", "Competition", "English"] },
];

const recommendedCategories = [
  { id: 1, name: "Cyberpunk 2077", viewers: 89453, image: "/api/placeholder/300/400" },
  { id: 2, name: "DataCrash", viewers: 54213, image: "/api/placeholder/300/400" },
  { id: 3, name: "Neuro Sync", viewers: 32145, image: "/api/placeholder/300/400" },
  { id: 4, name: "GridRunner", viewers: 24892, image: "/api/placeholder/300/400" },
  { id: 5, name: "Cyberwire Protocol", viewers: 19874, image: "/api/placeholder/300/400" },
  { id: 6, name: "Neon Abyss", viewers: 15682, image: "/api/placeholder/300/400" },
];

// Utility function to format numbers with K, M, etc.
const formatNumber = (num) => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num;
};

// Main component
export default function CyberpunkTwitchBrowse() {
  return (
    <div className="flex flex-col h-screen bg-black text-gray-200 font-mono">
      

      <div className="flex flex-1 overflow-hidden">
        

        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-gray-900 relative">
          {/* Background grid effect */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(120,41,170,0.15)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40"></div>
          
          {/* Background glow effects */}
          <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none"></div>
          
          {/* Content container */}
          <div className="container mx-auto px-4 py-6 relative z-10">
            {/* Header section with scanning effect */}
            <div className="mb-8 relative overflow-hidden rounded-lg">
              <div className="relative z-10">
                <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text relative inline-block">
                  BROWSE//
                  <span className="absolute top-0 right-0 h-full w-10 bg-gradient-to-r from-transparent to-gray-900 z-10"></span>
                </h1>
                <p className="text-gray-400 max-w-2xl">Discover live streams across the Net. Filter by category, viewer count, or jump into something random. Your neural interface is ready.</p>
              </div>
              
              {/* Scanline animation */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="h-px w-full bg-cyan-400 animate-scan"></div>
              </div>
            </div>
            
            {/* Featured streams */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white relative pl-3 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-pink-500">
                  LIVE_NOW<span className="text-pink-500">//</span>FEATURED
                </h2>
                <button className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                  See All <ChevronRight size={16} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {featuredStreams.map((stream) => (
                  <div key={stream.id} className="relative group overflow-hidden">
                    {/* Stream card with animated border effect */}
                    <div className="border border-purple-500/30 group-hover:border-cyan-500/60 rounded-md overflow-hidden transition-all duration-300 relative bg-gray-900">
                      {/* Border glow effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="absolute inset-0 rounded-md shadow-[0_0_15px_rgba(0,240,255,0.3)]"></div>
                      </div>
                      
                      {/* Thumbnail */}
                      <div className="relative h-40 overflow-hidden">
                        <img src={stream.thumbnail} alt={stream.title} className="w-full h-full object-cover" />
                        
                        {/* Live indicator and viewer count */}
                        <div className="absolute bottom-2 left-2 bg-red-600 text-xs px-2 py-0.5 rounded flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
                          LIVE
                        </div>
                        
                        <div className="absolute bottom-2 right-2 bg-black/70 text-xs px-2 py-0.5 rounded backdrop-blur-sm flex items-center gap-1">
                          <Eye size={12} />
                          {formatNumber(stream.viewers)}
                        </div>
                        
                        {/* Hover overlay with play button */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-cyan-500/30 border border-cyan-400 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                            <div className="ml-1 w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Stream info */}
                      <div className="p-3">
                        <div className="flex items-start gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex-shrink-0 overflow-hidden">
                            <img src={stream.avatar} alt={stream.user} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-white truncate">{stream.title}</h3>
                            <p className="text-sm text-gray-400">{stream.user}</p>
                            <p className="text-sm text-gray-400">{stream.game}</p>
                          </div>
                        </div>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {stream.tags.map((tag, index) => (
                            <span key={index} className="text-xs px-2 py-0.5 bg-gray-800 border border-purple-500/30 rounded-full text-gray-300">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Categories */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white relative pl-3 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-cyan-500">
                  CATEGORIES<span className="text-cyan-500">//</span>TRENDING
                </h2>
                <button className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                  View All <ChevronRight size={16} />
                </button>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {recommendedCategories.map((category) => (
                  <div key={category.id} className="group relative overflow-hidden">
                    <div className="border border-purple-500/30 group-hover:border-cyan-500/60 rounded-md overflow-hidden transition-all duration-300 bg-gray-900">
                      {/* Border glow effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="absolute inset-0 rounded-md shadow-[0_0_10px_rgba(0,240,255,0.25)]"></div>
                      </div>
                      
                      {/* Category image */}
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                        
                        {/* Overlay with glitch effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70 group-hover:opacity-40 transition-opacity"></div>
                        
                        {/* Glitch line effect on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 pointer-events-none overflow-hidden">
                          <div className="h-[1px] w-full bg-cyan-400 absolute top-1/4 left-0 transform translate-x-full animate-glitch-1"></div>
                          <div className="h-[1px] w-full bg-pink-500 absolute top-2/3 left-0 transform -translate-x-full animate-glitch-2"></div>
                        </div>
                      </div>
                      
                      {/* Category info */}
                      <div className="p-3">
                        <h3 className="font-bold text-white truncate">{category.name}</h3>
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                          <Eye size={14} />
                          {formatNumber(category.viewers)} viewers
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tech stats panel */}
            <div className="mb-4 p-4 border border-cyan-500/30 rounded-md bg-gray-900/70 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/5 to-purple-900/5"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-8 bg-cyan-400"></div>
                    <div>
                      <div className="text-xs text-gray-500">ACTIVE_STREAMS//</div>
                      <div className="text-xl font-bold text-white">42,187</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-8 bg-purple-500"></div>
                    <div>
                      <div className="text-xs text-gray-500">ONLINE_USERS//</div>
                      <div className="text-xl font-bold text-white">1.2M</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-8 bg-pink-500"></div>
                    <div>
                      <div className="text-xs text-gray-500">NETWORK_STATUS//</div>
                      <div className="text-xl font-bold text-white">OPTIMAL</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-8 bg-yellow-400"></div>
                    <div>
                      <div className="text-xs text-gray-500">BANDWIDTH_USAGE//</div>
                      <div className="text-xl font-bold text-white">86.4%</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* System message ticker */}
              <div className="mt-3 pt-2 border-t border-cyan-500/20 flex items-center gap-2 overflow-hidden">
                <div className="flex-shrink-0 text-xs text-cyan-400">SYSTEM//</div>
                <div className="whitespace-nowrap animate-ticker text-xs text-gray-400">
                  ALERT: NET SECTOR 7 EXPERIENCING INCREASED TRAFFIC // CORP PATROL ACTIVITY DETECTED IN SECTORS 3, 8, 12 // NEW DATABREACH PROTOCOLS ACTIVATED IN NIGHT CITY // PRIME MEMBERSHIP DISCOUNT: 20% OFF FOR NEXT 24 HOURS // STREAM QUALITY OPTIMIZATIONS AVAILABLE FOR NEURAL LINK USERS
                </div>
              </div>
            </div>
            
            {/* Popular Tags Section */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white relative pl-3 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-purple-500">
                  POPULAR_TAGS<span className="text-purple-500">//</span>TRENDING
                </h2>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {["Cyberpunk", "Neo-Tokyo", "Hacking", "NetRunner", "Corporate", "Dystopian", "Combat", "RPG", "Shooter", "Strategy", "Open World", "Battle Royale", "Sci-Fi", "Blade Runner", "Night City", "Retro-Future"].map((tag, index) => (
                  <div key={index} className="px-3 py-1.5 bg-gray-800 border border-purple-500/30 hover:border-cyan-400/60 rounded-md text-gray-300 cursor-pointer transition-all hover:bg-gray-800/80 hover:shadow-[0_0_8px_rgba(0,240,255,0.2)] group">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono group-hover:text-cyan-400 transition-colors">{tag}</span>
                      <span className="text-xs text-gray-500">{Math.floor(Math.random() * 1000) + 100}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Recommendations Section */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white relative pl-3 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-pink-500">
                  RECOMMENDED<span className="text-pink-500">//</span>FOR_YOU
                </h2>
                <button className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                  Refresh <div className="w-4 h-4 border-2 border-t-transparent border-cyan-400 rounded-full animate-spin"></div>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="relative group">
                    <div className="border border-purple-500/30 group-hover:border-cyan-500/60 rounded-md overflow-hidden transition-all duration-300 bg-gray-900">
                      {/* Border glow effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="absolute inset-0 rounded-md shadow-[0_0_15px_rgba(0,240,255,0.3)]"></div>
                      </div>
                      
                      {/* Stream thumbnail */}
                      <div className="relative h-40 overflow-hidden">
                        <img src={`/api/placeholder/800/450?text=Stream${index+1}`} alt={`Stream ${index+1}`} className="w-full h-full object-cover" />
                        
                        {/* Live indicator */}
                        <div className="absolute bottom-2 left-2 bg-red-600 text-xs px-2 py-0.5 rounded flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
                          LIVE
                        </div>
                        
                        {/* Viewer count */}
                        <div className="absolute bottom-2 right-2 bg-black/70 text-xs px-2 py-0.5 rounded backdrop-blur-sm flex items-center gap-1">
                          <Eye size={12} />
                          {formatNumber(Math.floor(Math.random() * 15000) + 1000)}
                        </div>
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-cyan-500/30 border border-cyan-400 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                            <div className="ml-1 w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Stream info */}
                      <div className="p-3">
                        <h3 className="font-bold text-white truncate">{"MEGACORP TAKEDOWN // LIVE HEIST"}</h3>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600"></div>
                          <span className="text-sm text-gray-400">CyberRogue_{index+1}</span>
                        </div>
                        <div className="text-sm text-gray-400 mt-1">Cyberpunk 2077</div>
                        
                        {/* Stats */}
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Heart size={12} />
                            {Math.floor(Math.random() * 500) + 100}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle size={12} />
                            {Math.floor(Math.random() * 200) + 50}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Footer with tech stats */}
            <footer className="mt-10 pt-4 border-t border-purple-500/20 text-xs text-gray-500">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div>
                  <span className="text-cyan-400">NEON_STREAM</span> © 2077 // All rights reserved
                </div>
                <div className="flex items-center gap-4">
                  <div>SERVER_STATUS: <span className="text-green-400">ONLINE</span></div>
                  <div>PING: <span className="text-cyan-400">12ms</span></div>
                  <div>UPTIME: <span className="text-purple-400">99.97%</span></div>
                </div>
                <div>
                  <button className="hover:text-cyan-400 transition-colors">Terms</button>
                  <span className="mx-2">|</span>
                  <button className="hover:text-cyan-400 transition-colors">Privacy</button>
                  <span className="mx-2">|</span>
                  <button className="hover:text-cyan-400 transition-colors">Support</button>
                </div>
              </div>
            </footer>
          </div>
        </main>
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
          animation: ticker 20s linear infinite;
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
      `}</style>
    </div>
  );
}