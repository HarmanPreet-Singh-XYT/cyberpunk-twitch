import { useState, useRef, useEffect } from "react";
import data from '@/app/data';
import { Pause, Play, VolumeX, Volume2 } from "lucide-react";
export default function FeaturedStream() {
    // State for UI controls
    const [isVideoPlaying, setIsVideoPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [audioLevel, setAudioLevel] = useState(70);
    const [showGlitch, setShowGlitch] = useState(false);

    // State for live chat messages
    const [chatMessages, setChatMessages] = useState([
      { user: "CyberNinja", message: "That hack was amazing! How did you bypass the genome signature?", color: "text-cyan-400", time: "22:43:16" },
      { user: "NetWalker", message: "How did you bypass the ICE so quickly? Been stuck there for hours", color: "text-purple-400", time: "22:43:42" },
      { user: "Ghost_42", message: "Corporate security is a joke lol. Their firewall version is 2 updates behind.", color: "text-green-400", time: "22:44:05" },
      { user: "DataWr4ith", message: "Anyone know which deck he's using? Looks like BlackMarket custom?", color: "text-pink-400", time: "22:44:23" },
      { user: "NeonHex", message: "Those guards never saw it coming. Classic distraction technique.", color: "text-yellow-400", time: "22:44:51" },
      { user: "Binary_Bloom", message: "Just donated 50 eddies! Worth every penny for this content!", color: "text-green-400", time: "22:45:10" }
    ]);
    const streamData = data.streams[9];
    const channelData = data.channels[9];
    const userData = data.users[9];
    // State for user input
    const [messageInput, setMessageInput] = useState('');
    
    // State for stream stats
    const [streamStats, setStreamStats] = useState({
      viewers: streamData.viewers,
      followers: channelData.followers,
      donations: 4285,
      duration: streamData.duration,
    });
    
    // State for user actions feedback
    const [feedback, setFeedback] = useState(null);
    
    // State for video loading
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [pageLoaded, setPageLoaded] = useState(false);
    
    // Ref for chat container to auto-scroll
    const chatContainerRef = useRef(null);
    const videoRef = useRef(null);
    
    // Simulated user messages to periodically add to chat
    const simulatedMessages = [
      { user: "NetRunner404", message: "Anyone got codes for the east wing security?", color: "text-blue-400" },
      { user: "SynthWave", message: "That's some serious hardware you're running. Custom mods?", color: "text-purple-400" },
      { user: "CyberPsycho", message: "Arasaka's gonna be MAD when they see this stream lol", color: "text-red-400" },
      { user: "DataJack", message: "The subnet masking technique is brilliant!", color: "text-green-400" },
      { user: "NightCity_V", message: "Checking in from Night City. Local fixers are watching this!", color: "text-yellow-400" },
      { user: "ChromeEdge", message: "That's the fastest I've seen anyone crack a level 4 ICE", color: "text-cyan-400" },
      { user: "Netrix", message: "Just shared this with my netrunner group. They're logging in now!", color: "text-pink-400" },
      { user: "BitShifter", message: "Saving these techniques for my next run. Pure gold.", color: "text-amber-400" },
    ];
    // Toggle video play/pause
    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (isVideoPlaying) {
        video.pause();
        } else {
        video.play();
        // Trigger momentary glitch effect on play
        setShowGlitch(true);
        setTimeout(() => setShowGlitch(false), 200);
        }
        setIsVideoPlaying(!isVideoPlaying);
    };

    // Toggle mute
    const toggleMute = () => {
        const video = videoRef.current;
        if (!video) return;
        
        video.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    // Handle volume change
    const handleVolumeChange = (e) => {
        const newVolume = parseInt(e.target.value);
        setAudioLevel(newVolume);
        
        const video = videoRef.current;
        if (video) {
        video.volume = newVolume / 100;
        }
    };
    // Function to format current time as HH:MM:SS
    const formatTime = () => {
      const now = new Date();
      return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    };
    
    // Function to handle sending a message
    const handleSendMessage = (e) => {
      e.preventDefault();
      if (messageInput.trim() === '') return;
      
      const newMessage = {
        user: "YOU",
        message: messageInput,
        color: "text-white",
        time: formatTime()
      };
      
      setChatMessages(prev => [...prev, newMessage]);
      setMessageInput('');
    };
    
    // Function to handle user actions (donate, follow, subscribe)
    const handleUserAction = (action) => {
      let feedbackMessage = '';
      let feedbackColor = '';
      
      switch(action) {
        case 'donate':
          const amount = Math.floor(Math.random() * 100) + 10;
          feedbackMessage = `You donated €${amount}!`;
          feedbackColor = 'text-green-400';
          setStreamStats(prev => ({...prev, donations: prev.donations + amount}));
          
          // Add donation message to chat
          setChatMessages(prev => [...prev, {
            user: "SYSTEM",
            message: `USER donated €${amount}! Thank you for your support!`,
            color: "text-green-400",
            time: formatTime()
          }]);
          break;
        case 'follow':
          feedbackMessage = 'You are now following NetKnight!';
          feedbackColor = 'text-purple-400';
          setStreamStats(prev => ({...prev, followers: prev.followers + 1}));
          break;
        case 'subscribe':
          feedbackMessage = 'Premium subscription activated!';
          feedbackColor = 'text-yellow-400';
          break;
        default:
          break;
      }
      
      if (feedbackMessage) {
        setFeedback({
          message: feedbackMessage,
          color: feedbackColor
        });
        
        // Clear feedback after 3 seconds
        setTimeout(() => {
          setFeedback(null);
        }, 3000);
      }
    };
    
    // Effect to update duration timer every second
    useEffect(() => {
      const timer = setInterval(() => {
        // Parse hours, minutes, seconds from duration string
        const [hours, minutes, seconds] = streamStats.duration.split(':').map(Number);
        
        // Calculate new duration
        let newSeconds = seconds + 1;
        let newMinutes = minutes;
        let newHours = hours;
        
        if (newSeconds >= 60) {
          newSeconds = 0;
          newMinutes += 1;
        }
        
        if (newMinutes >= 60) {
          newMinutes = 0;
          newHours += 1;
        }
        
        // Format new duration string
        const newDuration = `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`;
        
        setStreamStats(prev => ({...prev, duration: newDuration}));
      }, 1000);
      
      return () => clearInterval(timer);
    }, [streamStats.duration]);
    
    // Effect to simulate random users joining the chat
    useEffect(() => {
      const chatSimulation = setInterval(() => {
        // Randomly select a message from simulated messages
        const randomIndex = Math.floor(Math.random() * simulatedMessages.length);
        const randomMessage = simulatedMessages[randomIndex];
        
        // Add current time to message
        const messageWithTime = {
          ...randomMessage,
          time: formatTime()
        };
        
        // Add to chat
        setChatMessages(prev => [...prev, messageWithTime]);
        
        // Randomly increase viewers
        if (Math.random() > 0.7) {
          const viewerIncrease = Math.floor(Math.random() * 50) + 1;
          setStreamStats(prev => ({
            ...prev,
            viewers: prev.viewers + viewerIncrease
          }));
        }
      }, 5000); // Add a new message every 5 seconds
      
      return () => clearInterval(chatSimulation);
    }, []);
    
    // Effect to auto-scroll chat to bottom when new messages are added
    useEffect(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, [chatMessages]);
    
    // Effect to simulate page loading and then load the video
    useEffect(() => {
      // Simulate page loading
      const pageLoadTimer = setTimeout(() => {
        setPageLoaded(true);
      }, 2000); // Simulate 2 seconds page load time
      
      return () => clearTimeout(pageLoadTimer);
    }, []);
    
    // Effect to handle video loading after page has loaded
    useEffect(() => {
      if (pageLoaded && videoRef.current) {
        // Once the page is loaded, start loading the video
        // This timer simulates the video loading time
        const videoLoadTimer = setTimeout(() => {
          setVideoLoaded(true);
          
          // If you want the video to autoplay after loading
          if (videoRef.current) {
            videoRef.current.play().catch(error => {
              console.log('Autoplay prevented:', error);
            });
          }
        }, 1500); // Simulate 1.5 seconds video load time
        
        return () => clearTimeout(videoLoadTimer);
      }
    }, [pageLoaded]);
    
    // Function to format numbers with commas
    const formatNumber = (num) => {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    
    return (
      <div className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white relative pl-3 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-yellow-500 flex items-center">
            <span className="glitch-text">SPOTLIGHT</span>
            <span className="text-yellow-500 mx-1"></span>
            <span className="text-cyan-400">FEATURED</span>
            <span className="ml-2 px-1 py-0.5 bg-yellow-500/20 text-yellow-500 text-xs rounded-sm border border-yellow-500/50 animate-pulse">PRIME</span>
          </h2>
        </div>
        
        {/* Premium featured stream with more details */}
        <div className="border border-yellow-500/50 rounded-md overflow-hidden bg-gray-900/90 relative">
          {/* Animated border effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/70 to-transparent animate-pulse"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/70 to-transparent animate-pulse"></div>
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-500/70 to-transparent animate-pulse"></div>
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-500/70 to-transparent animate-pulse"></div>
          </div>
          
          {/* Digital noise overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20 pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row">
            {/* Thumbnail/Video */}
            <div className="relative lg:w-2/3">
              <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 z-10 flex items-center px-2">
                <div className="text-xs text-cyan-400 font-mono">FEED://NETSTREAM.GLOBAL/{channelData.name}/LIVE</div>
              </div>
              
              {/* Video container with loading state */}
              <div className="relative w-full h-full lg:h-full bg-black">
                {/* Loading indicator (shows when page is loaded but video isn't) */}
                {pageLoaded && !videoLoaded && (
                  <div className="absolute h-full inset-0 flex flex-col items-center justify-center bg-gray-900/80 z-20">
                    <div className="w-12 h-12 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <div className="text-cyan-400 text-sm font-mono">LOADING STREAM...</div>
                    <div className="mt-2 w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 animate-pulse w-2/3"></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">ESTABLISHING SECURE CONNECTION</div>
                  </div>
                )}
                
                {/* Initial loading indicator (shows when page isn't loaded yet) */}
                {!pageLoaded && (
                  <div className="absolute h-full inset-0 flex flex-col items-center justify-center bg-gray-900 z-30">
                    <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <div className="text-yellow-500 text-sm font-mono">INITIALIZING INTERFACE...</div>
                    <div className="mt-4 w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-yellow-500 to-red-500 animate-pulse w-1/3"></div>
                    </div>
                  </div>
                )}
                
                {/* Placeholder image (shows until video is loaded) */}
                {!videoLoaded && (
                  <img 
                    src={streamData.thumbnail} 
                    alt={streamData.title}
                    className="w-full h-96 lg:h-full object-cover"
                  />
                )}
                
                {/* Actual video (hidden until loaded) */}
                <video
                  ref={videoRef}
                  className={`w-full h-96 lg:h-full object-cover ${videoLoaded ? 'block' : 'hidden'}`}
                  loop
                  autoPlay
                  muted={isMuted}
                  playsInline
                  poster={streamData.thumbnail}
                  src={streamData.streamLink}
                >
                  {/* Multiple sources for better browser compatibility */}
                  <source src={streamData.streamLink} type="video/mp4" />
                  {/* Fallback */}
                  Your browser does not support the video tag.
                </video>
                
                {/* Scanline effect */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJzY2FubGluZXMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjQiPjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjEwMCUiIHkyPSIwIiBzdHlsZT0ic3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxcHg7c3Ryb2tlLW9wYWNpdHk6MC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNzY2FubGluZXMpIi8+PC9zdmc+')] opacity-30 pointer-events-none"></div>
                
                {/* Video controls overlay */}
                {videoLoaded && (
                  <div className="absolute bottom-22 right-0 transform  flex items-center gap-2 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full z-20">
                    <div className="flex items-center space-x-4">
                {/* Play/Pause button */}
                <button 
                  onClick={togglePlay}
                  className="group relative"
                >
                  <div className="w-10 h-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center group-hover:bg-pink-500 transition-colors border-2 border-pink-500/70 group-hover:border-pink-500 relative">
                    {isVideoPlaying ? <Pause size={18} /> : <Play size={20} className="ml-1" />}
                    <div className="absolute inset-0 rounded-full border border-pink-300/20 animate-ping group-hover:animate-none"></div>
                  </div>
                </button>
                
                {/* Volume control */}
                <div className="flex items-center group relative">
                  <button 
                    onClick={toggleMute} 
                    className="w-8 h-8 rounded-full bg-black bg-opacity-70 flex items-center justify-center group-hover:bg-cyan-900 transition-colors border border-cyan-500/70"
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                  
                </div>
              </div>
                  </div>
                )}
                
                {/* Overlay elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                {/* Stream status indicators */}
                <div className="absolute top-8 left-4 flex items-center gap-2">
                  <div className="bg-red-600 text-xs px-2 py-0.5 rounded flex items-center gap-1 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
                    LIVE
                  </div>
                  <div className="bg-black/70 text-xs px-2 py-0.5 rounded backdrop-blur-sm flex items-center gap-1 border border-cyan-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-cyan-400">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <span className="font-mono text-cyan-300">{formatNumber(streamStats.viewers)}</span>
                  </div>
                  <div className="bg-black/70 text-xs px-2 py-0.5 rounded backdrop-blur-sm flex items-center gap-1 border border-yellow-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-yellow-400">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span className="font-mono text-yellow-300">{streamStats.duration}</span>
                  </div>
                </div>
                
                {/* Featured badge */}
                <div className="absolute top-8 right-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-black text-xs px-3 py-1 rounded-sm font-bold flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                  FEATURED
                </div>
                
                {/* Stream info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="mb-1 flex items-center gap-2">
                    <div className="px-1.5 py-0.5 bg-cyan-500/20 text-cyan-400 text-xs rounded-sm border border-cyan-500/50">
                      TIER 4
                    </div>
                    <div className="px-1.5 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded-sm border border-purple-500/50">
                      ENCRYPTED
                    </div>
                  </div>
                  <a href={`/live/${streamData.id}`}>
                    <h3 className="text-xl font-bold text-white mb-1 relative">
                        <span className="text-yellow-500">[</span>
                        {streamData.title}
                        <span className="text-yellow-500">]</span>
                    </h3>
                </a>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="relative">
                    <a href={`/channel/${streamData.id}`}>
                      <img src={userData.avatar} className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center"/>
                    </a>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-cyan-500 flex items-center justify-center text-xs font-bold border-2 border-gray-900">
                        V
                      </div>
                    </div>
                    <div>
                    <a href={`/channel/${streamData.id}`}>
                      <span className="text-sm text-white font-bold">{channelData.name}</span>
                    </a>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-gray-400">REPUTATION</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <div key={star} className="w-2 h-2 bg-yellow-500 rounded-full mx-0.5"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-300 max-w-2xl border-l-2 border-yellow-500/50 pl-2">
                    Join the most anticipated corporate infiltration of the year. Live walkthrough of Arasaka's security systems with real-time hack demonstrations. <span className="text-yellow-400">Premium access includes source code downloads.</span>
                  </p>
                </div>
                
                {/* Watch button */}
                <a href={`/live/${streamData.id}`}>
                    <div className="absolute bottom-4 right-4">
                        <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-black px-4 py-2 rounded-sm font-bold text-sm flex items-center gap-2 hover:from-yellow-400 hover:to-orange-500 transition-all border-2 border-transparent hover:border-yellow-300">
                        JACK_IN
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                        </button>
                    </div>
                </a>
              </div>
            </div>
            
            {/* Stream details and chat preview */}
            <div className="p-4 lg:w-1/3 bg-gray-900 relative">
              {/* Terminal top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-yellow-500"></div>
              
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-gray-400 font-mono">STREAM_DETAILS<span className="text-yellow-500">//</span></h4>
                <div className="text-xs text-cyan-400 font-mono flex items-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mr-1 animate-pulse"></div>
                  UPTIME: {streamStats.duration}
                </div>
              </div>
              
              {/* Stream stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-gray-800/50 border border-cyan-500/30 rounded-sm relative overflow-hidden group hover:border-cyan-500/60 transition-all">
                  <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-cyan-400">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    VIEWERS
                  </div>
                  <div className="text-xl font-bold text-white font-mono">{formatNumber(streamStats.viewers)}</div>
                </div>
                
                <div className="p-3 bg-gray-800/50 border border-purple-500/30 rounded-sm relative overflow-hidden group hover:border-purple-500/60 transition-all">
                  <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-purple-400">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    FOLLOWERS
                  </div>
                  <div className="text-xl font-bold text-white font-mono">{formatNumber(streamStats.followers)}</div>
                </div>
                
                <div className="p-3 bg-gray-800/50 border border-yellow-500/30 rounded-sm relative overflow-hidden group hover:border-yellow-500/60 transition-all">
                  <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-yellow-400">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                    CATEGORY
                  </div>
                  <div className="text-sm font-bold text-white font-mono">{streamData.game}</div>
                </div>
                
                <div className="p-3 bg-gray-800/50 border border-green-500/30 rounded-sm relative overflow-hidden group hover:border-green-500/60 transition-all">
                  <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-green-400">
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                  DONATIONS
                </div>
                <div className="text-[24px] font-bold text-white font-mono">€{formatNumber(streamStats.donations)}</div>
              </div>
            </div>
            
            {/* Tags */}
            <div className="mb-4">
              <div className="text-xs text-gray-500 mb-2 flex items-center">
                <span className="font-mono">TAGS</span>
                <span className="text-yellow-500 mx-1">//</span>
                <span className="text-cyan-400 font-mono text-xs">FILTER.APPLY</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Cyberpunk", "Hacking", "Tutorial", "Corporate", "English", "Stealth", "Arasaka", "NetRunning"].map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-gray-800 border border-yellow-500/30 rounded-sm text-gray-300 hover:bg-gray-700 hover:border-yellow-500/60 transition-all flex items-center cursor-pointer">
                    <span className="text-yellow-500 mr-1">#</span>{tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Chat preview */}
            <div>
              <div className="text-xs text-gray-500 mb-2 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="font-mono">LIVE_CHAT</span>
                  <span className="text-yellow-500 mx-1">//</span>
                </div>
                <span className="text-cyan-400 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span className="font-mono">{formatNumber(Math.floor(streamStats.viewers * 0.17))}</span>
                </span>
              </div>
              
              <div 
                ref={chatContainerRef} 
                className="h-40 bg-gray-800/70 border border-purple-500/30 rounded-sm p-2 overflow-y-auto custom-scrollbar mb-2 relative"
              >
                {/* Terminal style overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]"></div>
                
                {/* Chat system message */}
                <div className="text-xs mb-2 py-1 px-2 bg-yellow-500/10 border border-yellow-500/30 rounded-sm">
                  <span className="text-yellow-400 font-bold">[SYSTEM]:</span>
                  <span className="text-gray-300"> Premium stream started. Netrunner protection active. Chat moderation level: MEDIUM.</span>
                </div>
                
                {/* Chat messages */}
                {chatMessages.map((chat, i) => (
                  <div key={i} className="text-xs mb-1.5 flex items-start group">
                    <span className="text-gray-500 font-mono text-xs mr-1 opacity-50">{chat.time}</span>
                    <span className={`font-bold ${chat.color}`}>{chat.user}: </span>
                    <span className="text-gray-300 ml-1">{chat.message}</span>
                  </div>
                ))}
              </div>
              
              {/* Chat input */}
              <form onSubmit={handleSendMessage} className="relative">
                <input 
                  type="text" 
                  placeholder="Enter message..." 
                  className="w-full bg-gray-800 text-gray-300 text-xs rounded-sm py-2 px-3 border border-cyan-500/30 focus:border-cyan-500/60 focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </button>
              </form>
            </div>
            
            {/* Stream controls with feedback */}
            <div className="mt-4 flex gap-2 relative">
              <button 
                className="flex-1 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 p-2 rounded-sm border border-cyan-500/30 hover:border-cyan-500/60 transition-all flex items-center justify-center gap-1"
                onClick={() => handleUserAction('donate')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-cyan-400">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                DONATE
              </button>
              <button 
                className="flex-1 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 p-2 rounded-sm border border-purple-500/30 hover:border-purple-500/60 transition-all flex items-center justify-center gap-1"
                onClick={() => handleUserAction('follow')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-purple-400">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                FOLLOW
              </button>
              <button 
                className="flex-1 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 p-2 rounded-sm border border-yellow-500/30 hover:border-yellow-500/60 transition-all flex items-center justify-center gap-1"
                onClick={() => handleUserAction('subscribe')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-yellow-400">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                SUBSCRIBE
              </button>
              
              {/* Action feedback popup */}
              {feedback && (
                <div className="absolute -top-10 left-0 right-0 bg-gray-800 border border-gray-700 text-center py-2 rounded-sm animate-fadeIn">
                  <span className={`text-sm ${feedback.color}`}>{feedback.message}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}