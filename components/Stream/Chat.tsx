import { MessageSquare, Users, Pause, Play, Star } from "lucide-react";

// Example usage in your component:
export default function ChatComponent() {
    const {
      chatMessages,
      sendUserMessage,
      isAutoChatting,
      toggleAutoChat,
      setChatFrequency,
      generateMessageBurst,
      chatFrequency
    } = useAutoChat([
      // Initial messages
      {
        id: "initial-1",
        name: "StreamBot",
        message: "Welcome to the stream! Chat is now live.",
        badge: "Bot",
        isModerator: true,
        timestamp: new Date(),
        credits: 0,
      }
    ]);
    
    const [chatMessage, setChatMessage] = useState("");
    const [showEmotes, setShowEmotes] = useState(false);
    const [showGlitch, setShowGlitch] = useState(false);
    const [viewerCount, setViewerCount] = useState(1245);
    
    useEffect(() => {
      // Simulate fluctuating viewer count
      const viewerInterval = setInterval(() => {
        setViewerCount(prev => {
          const change = Math.floor(Math.random() * 20) - 8; // -8 to +11
          return Math.max(500, prev + change);
        });
        
        // Occasional UI glitch effect
        if (Math.random() > 0.97) {
          setShowGlitch(true);
          setTimeout(() => setShowGlitch(false), 150);
        }
      }, 5000);
      
      // Start auto chat when component mounts
      toggleAutoChat();
      
      // Generate initial burst of messages
      generateMessageBurst(8);
      
      return () => {
        clearInterval(viewerInterval);
      };
    }, []);
    
    const handleSendMessage = (e) => {
      e.preventDefault();
      if (chatMessage.trim()) {
        sendUserMessage(chatMessage);
        setChatMessage("");
        setShowEmotes(false);
      }
    };
    
    // Chat UI rendering as per your existing code
    return (
      <div className="lg:col-span-1">
        <div className="rounded-lg border border-purple-900 overflow-hidden relative">
          {/* Chat header */}
          <div className="bg-gray-800 p-3 border-b border-purple-900 flex items-center justify-between relative overflow-hidden">
            {/* Header content */}
            <div className="flex items-center relative z-10">
              <MessageSquare size={16} className="mr-2 text-purple-400" />
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Stream Chat</span>
            </div>
            <div className="flex items-center space-x-2 relative z-10">
              <div className="flex items-center text-xs text-cyan-400 mr-2 bg-cyan-500/10 px-2 py-0.5 rounded font-mono border border-cyan-500/30">
                <Users size={10} className="mr-1" />
                {Math.floor(viewerCount * 0.82).toLocaleString()}
              </div>
              <button 
                className="w-6 h-6 rounded flex items-center justify-center hover:bg-gray-700 transition-colors"
                onClick={toggleAutoChat}
                title={isAutoChatting ? "Pause Auto Chat" : "Resume Auto Chat"}
              >
                {isAutoChatting ? <Pause size={14} /> : <Play size={14} />}
              </button>
            </div>
          </div>
          
          {/* Chat messages */}
          <div className="h-[70vh] overflow-y-auto p-3 bg-[#121212] space-y-2 relative">
            {chatMessages.map((msg) => (
              <ChatMessage 
                key={msg.id} 
                name={msg.name} 
                message={msg.message} 
                badge={msg.badge} 
                isModerator={msg.isModerator}
                timestamp={msg.timestamp}
                credits={msg.credits}
              />
            ))}
          </div>
          
          {/* Chat input */}
          <div className="p-3 border-t border-purple-900 bg-gray-800 relative overflow-hidden">
            <form onSubmit={handleSendMessage} className="relative z-10">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Send a message"
                className="bg-[#121212] border border-purple-500/30 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all placeholder-gray-500"
              />
              
              {/* Input buttons */}
              <div className="absolute right-2 top-2 flex items-center space-x-1">
                <button 
                  type="button"
                  onClick={() => setShowEmotes(!showEmotes)} 
                  className="text-gray-400 hover:text-purple-400"
                >
                  <Star size={16} />
                </button>
                
                <button type="submit" className="text-purple-400 hover:text-purple-300">
                  <MessageSquare size={16} />
                </button>
              </div>
              
              {/* Emote picker */}
              {showEmotes && (
                <div className="absolute bottom-full left-0 w-full bg-gray-800 border border-purple-500/50 rounded-lg p-2 mb-2 backdrop-blur-sm">
                  <div className="grid grid-cols-5 gap-2">
                    {["👾", "🎮", "🤖", "💻", "🔥", "⚡", "🎯", "💢", "🏆", "🚀"].map((emote, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setChatMessage(prev => prev + emote)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-700 rounded transition-colors border border-gray-700 hover:border-purple-500"
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
                        onClick={() => setChatMessage(prev => prev + emote)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-700 rounded transition-colors border border-gray-700 hover:border-purple-500"
                      >
                        {emote}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
        
        {/* Optional ChatControls component for better customization */}
        <div className="mt-3 p-3 rounded-lg border border-purple-900 bg-gray-800">
          <h3 className="text-sm font-medium mb-2 text-purple-400">Chat Controls</h3>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Message Frequency (ms)</label>
              <input 
                type="range" 
                min="500" 
                max="6000" 
                step="100" 
                value={chatFrequency} 
                onChange={(e) => setChatFrequency(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Faster</span>
                <span>{chatFrequency}ms</span>
                <span>Slower</span>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={() => generateMessageBurst(5)}
                className="bg-purple-900 hover:bg-purple-800 text-white text-xs py-1 px-3 rounded transition-colors flex-1"
              >
                Generate Burst
              </button>
              
              <button
                onClick={toggleAutoChat}
                className={`text-white text-xs py-1 px-3 rounded transition-colors flex-1 ${
                  isAutoChatting ? 'bg-red-900 hover:bg-red-800' : 'bg-green-900 hover:bg-green-800'
                }`}
              >
                {isAutoChatting ? 'Pause Auto Chat' : 'Start Auto Chat'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // ChatMessage component to render individual chat messages
  function ChatMessage({ name, message, badge, isModerator, timestamp, credits }) {
    // Format timestamp as HH:MM
    const timeString = timestamp ? 
      `${timestamp.getHours().toString().padStart(2, '0')}:${
        timestamp.getMinutes().toString().padStart(2, '0')}` : 
      '';
    
    // Define badge styles
    const getBadgeStyle = () => {
      switch(badge) {
        case 'Subscriber':
          return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
        case 'Moderator':
          return 'bg-green-500/20 text-green-400 border-green-500/50';
        case 'VIP':
          return 'bg-pink-500/20 text-pink-400 border-pink-500/50';
        case 'Bot':
          return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
        case 'Streamer':
          return 'bg-amber-500/20 text-amber-400 border-amber-500/50';
        default:
          return 'bg-gray-700/30 text-gray-400 border-gray-600/50';
      }
    };
  
    return (
      <div className={`flex items-start space-x-1.5 group relative rounded px-2 py-1 hover:bg-gray-800/50 transition-colors ${Math.random() > 0.93 ? 'animate-pulse' : ''}`}>
        {/* Timestamp (visible on hover) */}
        <div className="absolute left-0 top-0 text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 -translate-y-full px-1 py-0.5 bg-gray-800 rounded-t-sm transition-opacity">
          {timeString}
        </div>
        
        {/* Badge if exists */}
        {badge && (
          <div className={`text-[10px] px-1.5 py-0.5 rounded border ${getBadgeStyle()} flex-shrink-0`}>
            {badge}
          </div>
        )}
        
        {/* Username with color based on role */}
        <div className={`font-medium text-sm ${
          isModerator ? 'text-green-400' : 
          badge === 'VIP' ? 'text-pink-400' : 
          badge === 'Subscriber' ? 'text-purple-300' : 
          badge === 'Streamer' ? 'text-amber-400' :
          'text-gray-300'
        }`}>
          {name}:
        </div>
        
        {/* Message content */}
        <div className="text-sm text-gray-300 break-words">
          {message}
        </div>
        
        {/* Credits if any */}
        {credits > 0 && (
          <div className="text-xs text-amber-400 font-mono ml-auto flex items-center">
            <Star size={10} className="mr-1" fill="currentColor" />
            {credits}
          </div>
        )}
      </div>
    );
  }

function useAutoChat(arg0: { id: string; name: string; message: string; badge: string; isModerator: boolean; timestamp: Date; credits: number; }[]): { chatMessages: any; sendUserMessage: any; isAutoChatting: any; toggleAutoChat: any; setChatFrequency: any; generateMessageBurst: any; chatFrequency:any } {
    throw new Error("Function not implemented.");
}


function useState(arg0: string): [any, any] {
    throw new Error("Function not implemented.");
}


function useEffect(arg0: () => () => void, arg1: never[]) {
    throw new Error("Function not implemented.");
}
