import { Heart, Share2, User, Users } from 'lucide-react'
import React from 'react'

const MainStream = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-900 to-black">
          {/* Featured Stream */}
          <div className="relative">
            <div className="aspect-video bg-gray-800 border-b border-pink-600 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/api/placeholder/1200/675" alt="Stream thumbnail" className="w-full h-full object-cover" />
                
                {/* Overlay elements */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center">
                      <User className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Cybernetic Dreams</h3>
                      <p className="text-gray-300">RazerGirl_2077</p>
                      <div className="flex items-center space-x-3 mt-1">
                        <span className="text-sm flex items-center">
                          <Users size={14} className="mr-1 text-pink-500" /> 18.2K viewers
                        </span>
                        <span className="text-sm">Cyberpunk 2077</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Live indicator */}
                <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 text-xs rounded flex items-center">
                  <span className="h-2 w-2 bg-white rounded-full mr-1 animate-pulse"></span> LIVE
                </div>
                
                {/* Stream controls */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-black bg-opacity-50 p-1 rounded hover:bg-opacity-70">
                    <Heart size={18} className="text-pink-500" />
                  </button>
                  <button className="bg-black bg-opacity-50 p-1 rounded hover:bg-opacity-70">
                    <Share2 size={18} className="text-cyan-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Categories/Streams Grid */}
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4 text-cyan-400">RECOMMENDED <span className="text-pink-500">STREAMS</span></h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((stream) => (
                <div key={stream} className="bg-gray-900 rounded border border-gray-800 overflow-hidden hover:border-pink-500 transition-colors group">
                  <div className="relative">
                    <img src={`/api/placeholder/320/${180 + (stream % 3) * 20}`} alt="Stream thumbnail" className="w-full object-cover" />
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-1 text-xs rounded">
                      {Math.floor(Math.random() * 5) + 1}:{Math.floor(Math.random() * 60).toString().padStart(2, '0')}:{Math.floor(Math.random() * 60).toString().padStart(2, '0')}
                    </div>
                    <div className="absolute bottom-2 right-2 bg-red-600 px-1 text-xs rounded flex items-center">
                      <span className="h-1 w-1 bg-white rounded-full mr-1"></span> LIVE
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </div>
                  <div className="p-3">
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-medium text-white truncate">Night City Explorer #{stream}</h3>
                        <p className="text-sm text-gray-400">CyberRunner_{stream}0</p>
                        <p className="text-sm text-gray-500">Cyberpunk 2077</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <h2 className="text-xl font-bold mb-4 mt-8 text-cyan-400">TOP <span className="text-pink-500">CATEGORIES</span></h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((category) => (
                <div key={category} className="bg-gray-900 rounded border border-gray-800 overflow-hidden hover:border-pink-500 transition-colors">
                  <div className="relative">
                    <img src={`/api/placeholder/160/240`} alt="Category thumbnail" className="w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
                  </div>
                  <div className="p-2">
                    <h3 className="font-medium text-white truncate">Cyber Game #{category}</h3>
                    <p className="text-sm text-gray-400">{Math.floor(Math.random() * 100) + 10}K viewers</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
  )
}

export default MainStream