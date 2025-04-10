import { useState, useEffect, useRef } from 'react';
import { MessageSquare, Settings, Users, Star, MoreHorizontal, Shield, Zap, Clock, PlusCircle, Send, Trash2, Flag } from 'lucide-react';

// Child component for individual chat messages
function ChatMessage({ name, message, badge, isModerator, timestamp, credits, isHighlighted, onHighlight }) {
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
    if (credits >= 15000) return { color: "from-yellow-400 to-yellow-600", tier: "ELITE", icon: <Zap size={10} className="mr-0.5" /> };
    if (credits >= 10000) return { color: "from-purple-400 to-pink-600", tier: "CYBER", icon: <Shield size={10} className="mr-0.5" /> };
    if (credits >= 5000) return { color: "from-blue-400 to-cyan-600", tier: "PRIME", icon: <Star size={10} className="mr-0.5" /> };
    if (credits >= 1000) return { color: "from-green-400 to-teal-600", tier: "BASE", icon: <PlusCircle size={10} className="mr-0.5" /> };
    return null;
  };
  
  const creditBadge = getCreditBadge();
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div 
      className={`text-sm group p-1 rounded transition-colors relative ${
        isHighlighted 
          ? "bg-cyan-900/30 border-l-2 border-cyan-400" 
          : "hover:bg-gray-800/50 border-l-2 border-transparent"
      }`}
      onMouseEnter={() => setShowOptions(true)}
      onMouseLeave={() => setShowOptions(false)}
    >
      {/* Cyberpunk highlight effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-cyan-500/5 rounded opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="flex items-baseline relative z-10">
        <span className="text-xs text-gray-500 mr-1 font-mono">
          <Clock size={10} className="inline mr-0.5" />
          {timestamp}
        </span>
        <span className={`font-medium ${getNameColor()}`}>
          {name}
        </span>
        
        {badge && (
          <span className="inline-block mx-1 px-1 py-0.5 bg-gradient-to-r from-pink-500 to-purple-500 text-xs rounded text-white">
            SUB
          </span>
        )}
        
        {isModerator && (
          <span className="inline-block mx-1 px-1 py-0.5 bg-green-500 text-xs rounded text-white flex items-center">
            <Shield size={10} className="mr-0.5" /> MOD
          </span>
        )}
        
        {creditBadge && (
          <span className={`inline-block mx-1 px-1 py-0.5 bg-gradient-to-r ${creditBadge.color} text-xs rounded text-white flex items-center`}>
            {creditBadge.icon} {creditBadge.tier}
          </span>
        )}
        
        <span className="text-gray-300">: {message}</span>
      </div>
      
      {/* Message actions with enhanced styling */}
      <div className={`${showOptions ? 'flex' : 'hidden'} mt-1 space-x-2 pl-6`}>
        <button 
          className="text-xs text-gray-500 hover:text-cyan-400 transition-colors flex items-center"
          onClick={() => onHighlight(!isHighlighted)}
        >
          <MessageSquare size={10} className="mr-0.5" /> Reply
        </button>
        <button className="text-xs text-gray-500 hover:text-pink-400 transition-colors flex items-center">
          <Zap size={10} className="mr-0.5" /> Boost
        </button>
        <button className="text-xs text-gray-500 hover:text-red-400 transition-colors flex items-center">
          <Flag size={10} className="mr-0.5" /> Report
        </button>
      </div>
    </div>
  );
}

// Main Chat Component
export default function CyberpunkChat() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showGlitch, setShowGlitch] = useState(false);
  const [viewerCount, setViewerCount] = useState(1200);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatMessage, setChatMessage] = useState('');
  const [showEmotes, setShowEmotes] = useState(false);
  const [chatMode, setChatMode] = useState('all'); // 'all', 'mods', 'subs'
  const [highlightedMessageId, setHighlightedMessageId] = useState(null);
  const chatEndRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);
  const [typingUsers, setTypingUsers] = useState([]);
  const [showSettings, setShowSettings] = useState(false);

  // Autoscroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Sample data for demonstration
  useEffect(() => {
    const sampleMessages = [
      { id: 1, name: "CyberNinja", message: "This game is lit 🔥", badge: true, isModerator: false, timestamp: "20:15", credits: 12000 },
      { id: 2, name: "NeonRider", message: "Can't believe that headshot!", badge: false, isModerator: false, timestamp: "20:16", credits: 500 },
      { id: 3, name: "ModMatrix", message: "Keep the chat friendly everyone", badge: true, isModerator: true, timestamp: "20:17", credits: 15000 },
      { id: 4, name: "ByteWolf", message: "Anyone want to team up next match?", badge: false, isModerator: false, timestamp: "20:18", credits: 7500 },
      { id: 5, name: "You", message: "GG everyone!", badge: false, isModerator: false, timestamp: "20:19", credits: 2000 }
    ];
    setChatMessages(sampleMessages);
    
    // Random glitch effect - cyberpunk UI occasionally glitches
    const glitchInterval = setInterval(() => {
      const shouldGlitch = Math.random() > 0.7;
      if (shouldGlitch) {
        setShowGlitch(true);
        setTimeout(() => setShowGlitch(false), 200);
      }
    }, 5000);
    
    // Random viewer count changes
    const viewerInterval = setInterval(() => {
      setViewerCount(prev => prev + Math.floor(Math.random() * 20) - 10);
    }, 10000);
    
    // Simulate other users typing
    const typingInterval = setInterval(() => {
      const randomUsers = ["ByteWolf", "NeonRider", "CyberNinja"].filter(() => Math.random() > 0.7);
      setTypingUsers(randomUsers);
      
      // Add random messages occasionally
      if (Math.random() > 0.8) {
        const randomMessages = [
          "Did you see that move? Epic!",
          "Who's streaming tomorrow?",
          "That's some next-level gameplay",
          "New patch is out, downloading now",
          "Anyone else lagging?",
          "Let's squad up after this match 🎮",
          "GG WP everyone!",
          "Stream quality is fire today 🔥"
        ];
        
        const randomNames = ["DataSlice", "NeonBlade", "CyberHawk", "ByteWolf", "QuantumPulse"];
        const newMessage = {
          id: Date.now(),
          name: randomNames[Math.floor(Math.random() * randomNames.length)],
          message: randomMessages[Math.floor(Math.random() * randomMessages.length)],
          badge: Math.random() > 0.7,
          isModerator: Math.random() > 0.9,
          timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
          credits: Math.floor(Math.random() * 15000)
        };
        
        setChatMessages(prev => [...prev, newMessage]);
      }
      
      // Clear typing indicators after a brief period
      setTimeout(() => {
        setTypingUsers([]);
      }, 2000);
    }, 5000);
    
    return () => {
      clearInterval(glitchInterval);
      clearInterval(viewerInterval);
      clearInterval(typingInterval);
    };
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (chatMessage.trim() === '') return;
    
    const newMessage = {
      id: Date.now(),
      name: "You",
      message: chatMessage,
      badge: false,
      isModerator: false,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
      credits: 2000
    };
    
    setChatMessages(prev => [...prev, newMessage]);
    setChatMessage('');
    setShowEmotes(false);
    
    // Simulate typing indicator when sending messages
    setIsTyping(false);
  };

  const handleInputChange = (e) => {
    setChatMessage(e.target.value);
    // Show typing indicator
    if (!isTyping && e.target.value.length > 0) {
      setIsTyping(true);
    } else if (e.target.value.length === 0) {
      setIsTyping(false);
    }
  };

  const handleMessageHighlight = (id, isHighlighted) => {
    setHighlightedMessageId(isHighlighted ? id : null);
  };

  const filteredMessages = chatMessages.filter(msg => {
    if (chatMode === 'all') return true;
    if (chatMode === 'mods') return msg.isModerator;
    if (chatMode === 'subs') return msg.badge;
    return true;
  });

  const handleClearChat = () => {
    setChatMessages([]);
  };

  // Add emote to chat input
  const addEmote = (emote) => {
    setChatMessage(prev => prev + emote);
  };

  return (
    <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'lg:col-span-1'}`}>
      <div className="rounded-lg border border-purple-900 overflow-hidden relative h-full">
        {/* Glitching overlay effect on chat */}
        <div className={`absolute inset-0 border-2 border-transparent z-20 pointer-events-none ${showGlitch ? 'border-pink-500/50 animate-pulse' : ''}`}></div>
        
        {/* Simulated screen damage/noise overlay */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-5">
          <div className="absolute w-full h-1 bg-cyan-400 top-10 opacity-30"></div>
          <div className="absolute w-1 h-full bg-pink-400 left-20 opacity-20"></div>
        </div>
        
        {/* Chat header with enhanced cyberpunk styling */}
        <div className="bg-gray-800 p-3 border-b border-purple-900 flex items-center justify-between relative overflow-hidden">
          {/* Digital grid background */}
          <div className="absolute inset-0 opacity-10" 
            style={{ 
              backgroundImage: 'linear-gradient(to right, cyan 1px, transparent 1px), linear-gradient(to bottom, cyan 1px, transparent 1px)',
              backgroundSize: '10px 10px'
            }}>
          </div>
          
          <div className="flex items-center relative z-10">
            <MessageSquare size={16} className="mr-2 text-purple-400" />
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">NetStream Chat_</span>
            <div className="h-2 w-2 bg-cyan-500 ml-2 animate-pulse rounded-full"></div>
          </div>
          
          <div className="flex items-center space-x-2 relative z-10">
            <div className="flex items-center text-xs text-cyan-400 mr-2 bg-cyan-500/10 px-2 py-0.5 rounded font-mono border border-cyan-500/30">
              <Users size={10} className="mr-1" />
              <span className="animate-pulse-slow">{Math.floor(viewerCount * 0.82).toLocaleString()}</span>
            </div>
            
            {/* Chat mode selector with dropdown */}
            <div className="relative">
              <button 
                className="text-xs border border-purple-500/30 rounded px-2 py-0.5 bg-gray-900/50 text-purple-400 hover:bg-purple-500/20"
                onClick={() => setShowSettings(!showSettings)}
              >
                <Settings size={12} />
              </button>
              
              {showSettings && (
                <div className="absolute right-0 top-full mt-1 bg-gray-800 border border-purple-900 rounded-md shadow-lg z-30 overflow-hidden w-32">
                  <div className="p-2 border-b border-purple-900/50 text-xs text-gray-300">Chat Mode</div>
                  <button 
                    className={`w-full text-left px-3 py-1 text-xs ${chatMode === 'all' ? 'bg-purple-500/20 text-purple-300' : 'text-gray-400 hover:bg-gray-700'}`}
                    onClick={() => {setChatMode('all'); setShowSettings(false);}}
                  >
                    All Messages
                  </button>
                  <button 
                    className={`w-full text-left px-3 py-1 text-xs ${chatMode === 'mods' ? 'bg-purple-500/20 text-purple-300' : 'text-gray-400 hover:bg-gray-700'}`}
                    onClick={() => {setChatMode('mods'); setShowSettings(false);}}
                  >
                    Moderators Only
                  </button>
                  <button 
                    className={`w-full text-left px-3 py-1 text-xs ${chatMode === 'subs' ? 'bg-purple-500/20 text-purple-300' : 'text-gray-400 hover:bg-gray-700'}`}
                    onClick={() => {setChatMode('subs'); setShowSettings(false);}}
                  >
                    Subscribers Only
                  </button>
                  <div className="border-t border-purple-900/50 py-1">
                    <button 
                      className="w-full text-left px-3 py-1 text-xs text-red-400 hover:bg-gray-700 flex items-center"
                      onClick={() => {handleClearChat(); setShowSettings(false);}}
                    >
                      <Trash2 size={10} className="mr-1" /> Clear Chat
                    </button>
                    <button 
                      className="w-full text-left px-3 py-1 text-xs text-cyan-400 hover:bg-gray-700 flex items-center"
                      onClick={() => {setIsFullscreen(!isFullscreen); setShowSettings(false);}}
                    >
                      <MoreHorizontal size={10} className="mr-1" /> 
                      {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Chat messages with enhanced styling */}
        <div className="h-64 overflow-y-auto p-3 bg-gray-900 space-y-2 relative">
          {/* Cyberpunk grid background */}
          <div className="absolute inset-0 opacity-5" 
            style={{ 
              backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)'
            }}>
          </div>
          
          {filteredMessages.map((msg) => (
            <ChatMessage 
              key={msg.id} 
              name={msg.name} 
              message={msg.message} 
              badge={msg.badge} 
              isModerator={msg.isModerator}
              timestamp={msg.timestamp}
              credits={msg.credits}
              isHighlighted={highlightedMessageId === msg.id}
              onHighlight={(highlighted) => handleMessageHighlight(msg.id, highlighted)}
            />
          ))}
          
          {/* Typing indicators */}
          {typingUsers.length > 0 && (
            <div className="text-xs text-gray-500 italic">
              {typingUsers.join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing
              <span className="animate-pulse">...</span>
            </div>
          )}
          
          {/* Auto-scroll anchor */}
          <div ref={chatEndRef} />
        </div>
        
        {/* Chat input with enhanced cyberpunk styling */}
        <div className="p-3 border-t border-purple-900 bg-gray-800 relative overflow-hidden">
          {/* Digital noise background */}
          <div className="absolute inset-0 opacity-5" 
            style={{ 
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
            }}>
          </div>
          
          {/* Live status indicator */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 opacity-70"></div>
          
          <form onSubmit={handleSendMessage} className="relative z-10">
            <div className="relative">
              <input
                type="text"
                value={chatMessage}
                onChange={handleInputChange}
                placeholder="Send a message"
                className="bg-gray-900 border border-purple-500/30 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all placeholder-gray-500"
              />
              
              {/* Visual typing effect when user is typing */}
              {isTyping && (
                <div className="absolute right-12 top-2 text-cyan-400 opacity-60 text-xs bg-gray-900/60 px-1 rounded">
                  <span className="inline-block w-1 h-3 bg-cyan-400 animate-blink"></span>
                </div>
              )}
              
              <div className="absolute right-2 top-2 flex items-center space-x-2">
                <button 
                  type="button"
                  onClick={() => setShowEmotes(!showEmotes)} 
                  className="text-gray-400 hover:text-purple-400 p-0.5 hover:bg-gray-700 rounded"
                >
                  <Star size={14} />
                </button>
                
                <button 
                  type="submit" 
                  className="text-purple-400 hover:text-purple-300 p-0.5 hover:bg-gray-700 rounded"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
            
            {/* Enhanced emote picker with cyberpunk styling */}
            {showEmotes && (
              <div className="absolute bottom-full left-0 w-full bg-gray-800/90 backdrop-blur-md border border-purple-500/50 rounded-lg p-2 mb-2 shadow-lg shadow-purple-500/10">
                <div className="flex justify-between items-center mb-2 pb-1 border-b border-purple-900/30">
                  <span className="text-xs text-cyan-400">Quick Emotes</span>
                  <button 
                    onClick={() => setShowEmotes(false)}
                    className="text-xs text-gray-500 hover:text-red-400"
                  >
                    Close
                  </button>
                </div>
                
                <div className="grid grid-cols-5 gap-2">
                  {["👾", "🎮", "🤖", "💻", "🔥", "⚡", "🎯", "💢", "🏆", "🚀"].map((emote, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => addEmote(emote)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-gray-700 rounded transition-colors border border-gray-700 hover:border-purple-500 hover:text-lg"
                    >
                      {emote}
                    </button>
                  ))}
                </div>
                
                <div className="mt-2 grid grid-cols-5 gap-2">
                  {["🔫", "🔪", "💯", "🧠", "🦾", "🌐", "💎", "🕹️", "💀", "⚔️"].map((emote, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => addEmote(emote)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-gray-700 rounded transition-colors border border-gray-700 hover:border-purple-500 hover:text-lg"
                    >
                      {emote}
                    </button>
                  ))}
                </div>
                
                {/* Custom cyberpunk text emotes */}
                <div className="mt-2 border-t border-purple-900/30 pt-1">
                  <span className="text-xs text-pink-400 block mb-1">Cyberpunk Text</span>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { text: "[gg]", label: "Good Game" },
                      { text: "[wp]", label: "Well Played" },
                      { text: "[glhf]", label: "Good Luck Have Fun" },
                      { text: "[nt]", label: "Nice Try" }
                    ].map((item, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => addEmote(` ${item.text} `)}
                        className="text-xs py-1 px-2 hover:bg-gray-700 rounded transition-colors border border-gray-700 hover:border-purple-500 text-left flex justify-between"
                      >
                        <span className="text-cyan-400">{item.text}</span>
                        <span className="text-gray-500">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

// Add this to your CSS file or in a style tag
// For animation effects not directly available in Tailwind
// .animate-pulse-slow {
//   animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
// }
// .animate-blink {
//   animation: blink 1s infinite;
// }
// @keyframes blink {
//   0%, 100% { opacity: 1; }
//   50% { opacity: 0; }
// }