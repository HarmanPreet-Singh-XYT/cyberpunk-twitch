import { useState, useRef, useEffect } from "react";
import { 
  Users, Clock, Target, Shield, Zap, Radio, Terminal, 
  Pause, Play, VolumeX, Volume2, Cpu, ExternalLink, 
  Settings, Eye, Wifi, Box, ChevronUp
} from "lucide-react";
import Data from "@/app/data";
import { useParams } from 'next/navigation'

export default function CyberpunkVideoPlayer() {
  // State for UI controls
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [audioLevel, setAudioLevel] = useState(70);
  const [showStats, setShowStats] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewerCount, setViewerCount] = useState(2560);
  const [streamTime, setStreamTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showGlitch, setShowGlitch] = useState(false);
  const [bufferedProgress, setBufferedProgress] = useState(0);
  const [showScanlines, setShowScanlines] = useState(true);
  const [showControlsOverlay, setShowControlsOverlay] = useState(false);
  const [highlightedSection, setHighlightedSection] = useState(null);
  const params = useParams<{ id:string }>()
  // Video reference and container reference
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const progressBarRef = useRef(null);
  // const [streamLink, setstreamLink] = useState("/");
  const streamLink: string = Data.clips.find(each => each.id === params.id).streamLink;
  const poster:string = Data.clips.find(each => each.id === params.id).thumbnail;
  // Stream stats for overlay
  const [streamStats, setStreamStats] = useState({
    fps: "30",
    bitrate: "6.2 Mbps",
    resolution: "720p",
    network: "STABLE",
    server: "Night City East",
    ping: "8ms",
    encryption: "QUANTUM",
    protocol: "NET-X9",
    uptime: "99.7%",
    threats: "0",
  });

  // Format time display (mm:ss)
  const formatStreamTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  // Toggle video play/pause
  const togglePlay = () => {
    Data.streams.map((each)=>{if(each.id === params.id){
          setViewerCount(2600);
          // setstreamLink(each.streamLink);
        }});
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

  // Handle progress bar click
  const handleProgressBarClick = (e) => {
    const progressBar = e.currentTarget;
    const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
    
    const video = videoRef.current;
    if (video) {
      // Add a slight visual glitch on seek
      setShowGlitch(true);
      setTimeout(() => setShowGlitch(false), 150);
      
      video.currentTime = clickPosition * video.duration;
    }
  };

  // Handle progress bar hover
  const handleProgressBarHover = (e) => {
    if (!progressBarRef.current) return;
    
    const progressBar = progressBarRef.current;
    const hoverPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
    
    const video = videoRef.current;
    if (video) {
      const hoverTime = hoverPosition * video.duration;
      // You could use this to show a preview if desired
    }
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    const container = videoContainerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  // Toggle scanlines effect
  const toggleScanlines = () => {
    setShowScanlines(!showScanlines);
  };

  // Video event listeners
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsVideoPlaying(true);
    const onPause = () => setIsVideoPlaying(false);
    const onTimeUpdate = () => setCurrentTime(video.currentTime);
    const onLoadedMetadata = () => setVideoDuration(video.duration);
    
    const onProgress = () => {
      if (video.buffered.length > 0) {
        setBufferedProgress((video.buffered.end(video.buffered.length - 1) / video.duration) * 100);
      }
    };

    // Fullscreen change handler
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    // Random HUD glitch effects at varying intervals
    const minorGlitchInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        setShowGlitch(true);
        setTimeout(() => setShowGlitch(false), 100 + Math.random() * 150);
      }
    }, 4000);

    // Occasional viewer count updates
    const viewerCountInterval = setInterval(() => {
      // Random fluctuation in viewer count
      const fluctuation = Math.floor(Math.random() * 20) - 5;
      setViewerCount(prev => Math.max(2500, prev + fluctuation));
    }, 5000);

    // Random highlights of different HUD sections
    const highlightInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        const sections = ['viewers', 'time', 'stats', null];
        setHighlightedSection(sections[Math.floor(Math.random() * sections.length)]);
        setTimeout(() => setHighlightedSection(null), 2000);
      }
    }, 8000);

    // Time update for stream timer
    const streamTimeInterval = setInterval(() => {
      setStreamTime(prev => prev + 1);
    }, 1000);

    // Add event listeners
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('progress', onProgress);
    document.addEventListener('fullscreenchange', onFullscreenChange);

    // Mouse movement to show controls
    const container = videoContainerRef.current;
    if (container) {
      const handleMouseMove = () => {
        setShowControlsOverlay(true);
        clearTimeout(controlsTimeout);
        controlsTimeout = setTimeout(() => {
          setShowControlsOverlay(false);
        }, 3000);
      };
      
      const handleMouseLeave = () => {
        clearTimeout(controlsTimeout);
        setShowControlsOverlay(false);
      };
      
      let controlsTimeout;
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    let interval = setInterval(() => {
      if (!isNaN(video.duration) && video.duration > 0) {
        setVideoDuration(video.duration);
        clearInterval(interval);
      }
    }, 300);

    // Cleanup
    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('progress', onProgress);
      document.removeEventListener('fullscreenchange', onFullscreenChange);
      clearInterval(minorGlitchInterval);
      clearInterval(viewerCountInterval);
      clearInterval(highlightInterval);
      clearInterval(streamTimeInterval);
      clearInterval(interval);
      if (container) {
        container.removeEventListener('mousemove', onmousemove);
        container.removeEventListener('mouseleave', onmouseleave);
      }
    };
  }, []);

  // Set initial volume
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.volume = audioLevel / 100;
    }
  }, []);

  return (
    <div className={`${isFullscreen ? 'lg:col-span-4' : 'lg:col-span-3'}`}>
      {/* Video component */}
      <div 
        ref={videoContainerRef}
        className="rounded-lg overflow-hidden border-2 border-purple-900 bg-[#121212] relative group"
      >
        <div className="aspect-video bg-black relative overflow-hidden">
          {/* Actual video element */}
          <video
            autoPlay
            playsInline
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src={streamLink} // Replace with your video URL
            poster={poster} // Optional: placeholder image while video loads
          ></video>

          {/* Cyberpunk digital effects overlays */}
          {/* Hexagonal pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAiLz48cGF0aCBkPSJNMCAwTDEwIDVMMjAgMEwyMCAxNUwxMCAyMEwwIDE1WiIgc3Ryb2tlPSIjMDBmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')] opacity-20 pointer-events-none"></div>
          
          {/* Scanlines effect (toggleable) */}
          {showScanlines && (
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b opacity-10"
              style={{ 
                backgroundSize: '100% 2px', 
                backgroundImage: 'linear-gradient(0deg, transparent 50%, rgba(255, 255, 255, 0.4) 50%)', 
                animation: 'scanlines 0.5s steps(8) infinite'
              }}>
            </div>
          )}
          
          {/* Color aberration effect on edges */}
          <div className="absolute inset-0 pointer-events-none opacity-50 mix-blend-screen" 
            style={{ 
              boxShadow: 'inset 0 0 30px rgba(0, 255, 255, 0.3), inset 0 0 30px rgba(255, 0, 255, 0.3)' 
            }}>
          </div>

          {/* Digital noise effect */}
          <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay"
            style={{ 
              backgroundImage: 'url("data:image/png;base64,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")',
              animation: 'noise 0.2s steps(8) infinite'
            }}>
          </div>

          {/* Glitch effect frame (activated at intervals or on interactions) */}
          <div 
            className={`absolute inset-0 pointer-events-none transition-opacity duration-100 overflow-hidden ${showGlitch ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(255,0,255,0.3) 0%, rgba(0,255,255,0.3) 100%)',
              mixBlendMode: 'overlay',
              transform: showGlitch ? 'translateX(2px)' : 'none',
            }}
          ></div>
          
          {/* Subtle vignette effect */}
          <div className="absolute inset-0 pointer-events-none opacity-60" 
            style={{ boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.8)' }}>
          </div>

          {/* HUD overlay elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
            {/* Top-left HUD frame */}
            <div className="absolute top-4 left-4 flex items-center">
              {/* Live indicator */}
              {/* <div className="bg-black bg-opacity-70 border border-t-2 border-l-2 border-cyan-500 border-r-pink-500 border-b-pink-500 text-white text-xs font-bold p-1 rounded-sm flex items-center transform skew-x-6">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-1 animate-pulse"></div>
                <span className="text-red-500 font-mono tracking-wider">LIVE</span>
              </div> */}
              
              {/* Viewer count */}
              <div className={`ml-2 bg-black bg-opacity-70 border ${highlightedSection === 'viewers' ? 'border-2 border-yellow-400' : 'border border-cyan-500'} text-white text-xs p-1 rounded-sm flex items-center transform skew-x-6 transition-all duration-300`}>
                <Users size={12} className={`mr-1 ${highlightedSection === 'viewers' ? 'text-yellow-400' : 'text-cyan-400'}`} />
                <span className={`font-mono tracking-wide ${highlightedSection === 'viewers' ? 'text-yellow-400' : 'text-cyan-400'}`}>
                  {viewerCount.toLocaleString()}
                </span>
                <span className="ml-1 text-gray-400 text-opacity-70 font-mono text-xs">watchers</span>
              </div>
              
              {/* Stream time */}
              <div className={`ml-2 bg-black bg-opacity-70 border ${highlightedSection === 'time' ? 'border-2 border-yellow-400' : 'border border-cyan-500'} text-white text-xs p-1 rounded-sm flex items-center transform skew-x-6 transition-all duration-300`}>
                <Clock size={12} className={`mr-1 ${highlightedSection === 'time' ? 'text-yellow-400' : 'text-cyan-400'}`} />
                <span className={`font-mono ${highlightedSection === 'time' ? 'text-yellow-400' : 'text-cyan-400'}`}>
                  {formatStreamTime(streamTime)}
                </span>
              </div>
              
              {/* Network status */}
              <div className="ml-2 bg-black bg-opacity-70 border border-pink-500 text-white text-xs p-1 rounded-sm flex items-center transform skew-x-6">
                <Wifi size={12} className="mr-1 text-pink-400" />
                <span className="text-pink-400 font-mono">{streamStats.network}</span>
              </div>
            </div>
            
            {/* Top-right HUD elements */}
            <div className="absolute top-4 right-4 bg-black bg-opacity-70 border-b-2 border-r-2 border-pink-500 border-l-cyan-500 border-t-cyan-500 text-white text-xs p-1 rounded-sm transform -skew-x-6">
              <div className="flex items-center">
                <Target size={12} className="mr-1 text-pink-400" />
                <span className="text-pink-400 font-mono tracking-wider">TOURNAMENT FINALS</span>
                <span className="ml-2 text-cyan-400 font-mono">#NC-2077</span>
              </div>
            </div>
            
            {/* Bottom-left circuit design */}
            <div className="absolute bottom-16 left-4 pointer-events-none">
              <div className="w-32 h-32 opacity-30">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M10,50 L30,50 L35,45 L60,45 L65,50 L90,50" stroke="#00ffff" strokeWidth="1" fill="none" />
                  <path d="M10,60 L25,60 L30,55 L50,55 L55,60 L90,60" stroke="#ff00ff" strokeWidth="1" fill="none" />
                  <circle cx="35" cy="45" r="2" fill="#00ffff" />
                  <circle cx="65" cy="50" r="2" fill="#00ffff" />
                  <circle cx="30" cy="55" r="2" fill="#ff00ff" />
                  <circle cx="55" cy="60" r="2" fill="#ff00ff" />
                </svg>
              </div>
            </div>
          </div>

          {/* Live indicator and glitching frame */}
          <div className={`absolute inset-0 border-2 border-transparent ${showGlitch ? 'border-red-500 animate-pulse' : ''}`}></div>
          
          {/* Detailed stats panel */}
          {showStats && (
            <div className={`absolute top-16 right-4 bg-black/70 border-2 border-cyan-500/50 p-2 rounded-sm text-xs font-mono transform -skew-x-6 ${highlightedSection === 'stats' ? 'border-yellow-400' : ''}`}>
              <div className="text-cyan-400 mb-1 flex items-center border-b border-cyan-500/30 pb-1">
                <Terminal size={10} className="mr-1" />
                <span className="tracking-widest">STREAM TELEMETRY</span>
                <div className="ml-2 w-2 h-2 bg-cyan-500 animate-pulse rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-gray-300">
                <div>FPS: <span className="text-pink-400">{streamStats.fps}</span></div>
                <div>BITRATE: <span className="text-pink-400">{streamStats.bitrate}</span></div>
                <div>RES: <span className="text-pink-400">{streamStats.resolution}</span></div>
                <div>NET: <span className="text-pink-400">{streamStats.network}</span></div>
                <div>SERVER: <span className="text-pink-400">{streamStats.server}</span></div>
                <div>PING: <span className="text-pink-400">{streamStats.ping}</span></div>
                <div>ENC: <span className="text-cyan-400">{streamStats.encryption}</span></div>
                <div>PROT: <span className="text-cyan-400">{streamStats.protocol}</span></div>
                <div>UPTIME: <span className="text-cyan-400">{streamStats.uptime}</span></div>
                <div>THREATS: <span className="text-green-400">{streamStats.threats}</span></div>
              </div>
              
              {/* Animated data visualization */}
              <div className="mt-2 border-t border-cyan-500/30 pt-1">
                <div className="text-xs text-cyan-400 mb-1">BANDWIDTH USAGE</div>
                <div className="h-2 bg-gray-800 rounded overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-pink-500 rounded"
                    style={{ 
                      width: `${30 + Math.sin(Date.now() / 1000) * 20}%`,
                      transition: 'width 1s ease'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          
          {/* Video progress bar - improved styling */}
          <div className="absolute inset-x-0 bottom-16 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div 
              ref={progressBarRef}
              className="relative w-full h-1 bg-gray-800 rounded-full overflow-hidden cursor-pointer"
              onClick={handleProgressBarClick}
              onMouseMove={handleProgressBarHover}
            >
              {/* Buffered content */}
              <div 
                className="absolute left-0 top-0 h-full bg-white opacity-30 rounded-full"
                style={{ width: `${bufferedProgress}%` }}
              ></div>
              
              {/* Progress indicator decorative lines */}
              <div className="absolute inset-0">
                <div className="flex w-full h-full">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="flex-1 border-r border-gray-700"></div>
                  ))}
                </div>
              </div>
              
              {/* Active progress bar */}
              <div 
                className="absolute left-0 top-0 h-full rounded-full"
                style={{ 
                  width: `${videoDuration ? (currentTime / videoDuration) * 100 : 0}%`,
                  background: 'linear-gradient(90deg, #00ffff, #ff00ff)',
                  boxShadow: '0 0 8px rgba(0, 255, 255, 0.8)'
                }}
              ></div>
              
              {/* Progress marker */}
              <div 
                className="absolute -top-1 -mt-1 w-3 h-3 rounded-full bg-cyan-400 border border-white shadow-lg transform -translate-x-1/2"
                style={{ 
                  left: `${videoDuration ? (currentTime / videoDuration) * 100 : 0}%`,
                  boxShadow: '0 0 8px rgba(0, 255, 255, 0.8)' 
                }}
              ></div>
              
              {/* Time indicator */}
              <div 
                className="absolute -top-6 text-xs bg-black bg-opacity-80 px-2 py-0.5 rounded-sm border border-cyan-500/70 text-cyan-400 font-mono transform -translate-x-1/2"
                style={{ left: `${videoDuration ? (currentTime / videoDuration) * 100 : 0}%` }}
              >
                {formatStreamTime(currentTime)}
              </div>
            </div>
            
            {/* Total duration display */}
            {/* Total duration display */}
            <div className="flex justify-between mt-1 text-xs font-mono text-gray-400">
              <span>{formatStreamTime(0)}</span>
              <span>{formatStreamTime(videoDuration)}</span>
            </div>
          </div>
          
          {/* Stream controls overlay - visible on hover */}
          <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-4 transition-opacity duration-300 ${showControlsOverlay || !isVideoPlaying ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center justify-between">
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
                  {/* Volume slider */}
                  <div className="h-1 w-0 group-hover:w-20 overflow-hidden transition-all duration-300 origin-left ml-2">
                    <div className="h-full w-20 bg-gray-800 rounded-full relative">
                      <div 
                        className="absolute left-0 top-0 h-full rounded-full"
                        style={{ 
                          width: `${audioLevel}%`,
                          background: 'linear-gradient(90deg, #00ffff, #0088ff)'
                        }}
                      ></div>
                      <input 
                        type="range"
                        min="0"
                        max="100"
                        value={audioLevel}
                        onChange={handleVolumeChange}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Current time display */}
                <div className="hidden md:flex text-sm text-cyan-400 font-mono items-center border border-cyan-500/30 px-2 py-1 rounded-sm bg-black/50 transform skew-x-6">
                  <span>{formatStreamTime(currentTime)}</span>
                  <span className="mx-1 text-gray-500">/</span>
                  <span className="text-gray-400">{formatStreamTime(videoDuration)}</span>
                </div>
              </div>
              
              {/* Right side controls */}
              <div className="flex items-center space-x-3">
                {/* Stats toggle */}
                <button 
                  onClick={() => setShowStats(!showStats)}
                  className="w-8 h-8 rounded-full bg-black bg-opacity-70 flex items-center justify-center hover:bg-pink-900 transition-colors border border-pink-500/70"
                  title="Stream Stats"
                >
                  <Cpu size={16} className={showStats ? "text-pink-400" : ""} />
                </button>
                
                {/* Scanlines toggle */}
                <button 
                  onClick={toggleScanlines}
                  className="w-8 h-8 rounded-full bg-black bg-opacity-70 flex items-center justify-center hover:bg-cyan-900 transition-colors border border-cyan-500/70"
                  title="Toggle Scanlines"
                >
                  <ChevronUp size={16} className={showScanlines ? "text-cyan-400" : ""} />
                </button>
                
                {/* Fullscreen toggle */}
                <button 
                  onClick={toggleFullscreen}
                  className="w-8 h-8 rounded-full bg-black bg-opacity-70 flex items-center justify-center hover:bg-cyan-900 transition-colors border border-cyan-500/70"
                  title="Toggle Fullscreen"
                >
                  <ExternalLink size={16} className={isFullscreen ? "text-cyan-400" : ""} />
                </button>
                
                {/* Settings button */}
                {/* <button className="w-8 h-8 rounded-full bg-black bg-opacity-70 flex items-center justify-center hover:bg-pink-900 transition-colors border border-pink-500/70">
                  <Settings size={16} />
                </button> */}
              </div>
            </div>
          </div>
          
          {/* Cyberpunk-style corner decorations */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyan-500 pointer-events-none opacity-80"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-pink-500 pointer-events-none opacity-80"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-pink-500 pointer-events-none opacity-80"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-cyan-500 pointer-events-none opacity-80"></div>
        </div>
        
        {/* Custom style for animations */}
        <style jsx>{`
          @keyframes scanlines {
            0% { background-position: 0 0; }
            100% { background-position: 0 100%; }
          }
          
          @keyframes noise {
            0%, 100% { transform: translate(0,0); }
            10% { transform: translate(-5%,-5%); }
            20% { transform: translate(-10%,5%); }
            30% { transform: translate(5%,-10%); }
            40% { transform: translate(-5%,15%); }
            50% { transform: translate(-10%,5%); }
            60% { transform: translate(15%,0); }
            70% { transform: translate(0,10%); }
            80% { transform: translate(-15%,0); }
            90% { transform: translate(10%,5%); }
          }
        `}</style>
      </div>
    </div>
  );
}