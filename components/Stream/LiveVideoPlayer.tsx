import { useState, useRef, useEffect } from "react";
import { Users, Clock, Target, Shield, Zap, Radio, Terminal, Pause, Play, VolumeX, Volume2, Cpu, ExternalLink, Settings } from "lucide-react";

export default function CyberpunkVideoPlayer() {
  // State for UI controls
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioLevel, setAudioLevel] = useState(70);
  const [showStats, setShowStats] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewerCount, setViewerCount] = useState(2547);
  const [streamTime, setStreamTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showGlitch, setShowGlitch] = useState(false);
  const [bufferedProgress, setBufferedProgress] = useState(0);

  // Video reference and container reference
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  // Stream stats for overlay
  const [streamStats, setStreamStats] = useState({
    fps: "30",
    bitrate: "6.2 Mbps",
    resolution: "720p",
    network: "STABLE",
    server: "Night City East",
    ping: "8ms",
  });

  // Format time display (mm:ss)
  const formatStreamTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  // Toggle video play/pause
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isVideoPlaying) {
      video.pause();
    } else {
      video.play();
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
      video.currentTime = clickPosition * video.duration;
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

    // Random HUD glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setShowGlitch(true);
        setTimeout(() => setShowGlitch(false), 150);
      }
    }, 3000);

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

    // Cleanup
    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('progress', onProgress);
      document.removeEventListener('fullscreenchange', onFullscreenChange);
      clearInterval(glitchInterval);
      clearInterval(streamTimeInterval);
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
    <div className={`mb-4 ${isFullscreen ? 'lg:col-span-4' : 'lg:col-span-3'}`}>
      {/* Video component */}
      <div 
        ref={videoContainerRef}
        className="rounded-lg overflow-hidden border border-purple-900 bg-[#121212] relative"
      >
        <div className="aspect-video bg-black relative overflow-hidden">
          {/* Actual video element */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src="/DrDisrespect.mp4" // Replace with your video URL
            poster="/api/placeholder/640/360" // Optional: placeholder image while video loads
          ></video>

          {/* Cyber HUD overlay elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
            {/* Top-left HUD frame */}
            <div className="absolute top-4 left-4 flex items-center">
              <div className="bg-black bg-opacity-70 border border-cyan-500 text-white text-xs font-bold px-2 py-1 rounded flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-1 animate-pulse"></div>
                <span className="text-red-500 font-mono">LIVE</span>
              </div>
              <div className="ml-2 bg-black bg-opacity-70 border border-cyan-500 text-white text-xs px-2 py-1 rounded flex items-center">
                <Users size={12} className="mr-1 text-cyan-400" />
                <span className="text-cyan-400 font-mono">{viewerCount.toLocaleString()}</span>
              </div>
              <div className="ml-2 bg-black bg-opacity-70 border border-cyan-500 text-white text-xs px-2 py-1 rounded flex items-center">
                <Clock size={12} className="mr-1 text-cyan-400" />
                <span className="text-cyan-400 font-mono">{formatStreamTime(streamTime)}</span>
              </div>
            </div>
            
            {/* Top-right HUD element */}
            <div className="absolute top-4 right-4 bg-black bg-opacity-70 border border-cyan-500 text-white text-xs px-2 py-1 rounded">
              <div className="flex items-center">
                <Target size={12} className="mr-1 text-pink-400" />
                <span className="text-pink-400 font-mono">TOURNAMENT FINALS</span>
              </div>
            </div>
          </div>

          {/* Live indicator and glitching frame */}
          <div className={`absolute inset-0 border-2 border-transparent ${showGlitch ? 'border-red-500 animate-pulse' : ''}`}></div>
          
          {/* Digital distortion overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent mix-blend-overlay pointer-events-none"></div>
          <div className="absolute inset-0 border-t border-b border-cyan-500/30 pointer-events-none h-full" style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 1px, rgba(0, 255, 255, 0.03) 1px, rgba(0, 255, 255, 0.03) 2px)' }}></div>
          
          {/* Random data visualization in corner */}
          {showStats && (
            <div className="absolute top-24 right-4 bg-black/50 border border-cyan-500/50 p-2 rounded text-xs font-mono">
              <div className="text-cyan-400 mb-1 flex items-center">
                <Terminal size={10} className="mr-1" />
                STREAM TELEMETRY
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-gray-300">
                <div>FPS: <span className="text-pink-400">{streamStats.fps}</span></div>
                <div>BITRATE: <span className="text-pink-400">{streamStats.bitrate}</span></div>
                <div>RES: <span className="text-pink-400">{streamStats.resolution}</span></div>
                <div>NET: <span className="text-pink-400">{streamStats.network}</span></div>
                <div>SERVER: <span className="text-pink-400">{streamStats.server}</span></div>
                <div>PING: <span className="text-pink-400">{streamStats.ping}</span></div>
              </div>
            </div>
          )}
          
          {/* Stream controls overlay - visible on hover */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-4">
            
            {/* <div 
              className="relative w-full h-1 bg-gray-700 rounded-full mb-4 mt-6 overflow-hidden cursor-pointer"
              onClick={handleProgressBarClick}
            > */}
              {/* Buffered content */}
              {/* <div 
                className="absolute left-0 top-0 h-full bg-white opacity-30 rounded-full"
                style={{ width: `${bufferedProgress}%` }}
              ></div> */}
              
              {/* Progress bar */}
              {/* <div 
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                style={{ width: `${videoDuration ? (currentTime / videoDuration) * 100 : 0}%` }}
              ></div> */}
              
              {/* Time indicator */}
              {/* <div 
                className="absolute -top-6 text-xs bg-black bg-opacity-70 px-2 py-0.5 rounded border border-cyan-500/50 text-cyan-400 font-mono"
                style={{ left: `${videoDuration ? (currentTime / videoDuration) * 100 : 0}%`, transform: 'translateX(-50%)' }}
              >
                {formatStreamTime(currentTime)}
              </div>
            </div> */}
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={togglePlay}
                  className="group"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-800 bg-opacity-70 flex items-center justify-center group-hover:bg-pink-500 transition-colors border border-pink-500/50">
                    {isVideoPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </div>
                </button>
                
                <div className="flex items-center group relative">
                  <button 
                    onClick={toggleMute} 
                    className="w-8 h-8 rounded-full bg-gray-800 bg-opacity-70 flex items-center justify-center group-hover:bg-gray-700 transition-colors border border-cyan-500/50"
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                  {/* Volume slider */}
                  <div className="h-1 w-0 group-hover:w-20 overflow-hidden transition-all duration-300 origin-left ml-1">
                    <div className="h-full w-20 bg-gray-700 rounded-full relative">
                      <div 
                        className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        style={{ width: `${audioLevel}%` }}
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
                
                {/* <div className="text-sm text-cyan-400 font-mono hidden md:block">
                  <span>{formatStreamTime(currentTime)}</span>
                  <span className="mx-1">/</span>
                  <span>{formatStreamTime(videoDuration)}</span>
                </div> */}
              </div>
              
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => setShowStats(!showStats)}
                  className="w-8 h-8 rounded-full bg-gray-800 bg-opacity-70 flex items-center justify-center hover:bg-gray-700 transition-colors border border-pink-500/50"
                >
                  <Cpu size={16} className={showStats ? "text-pink-400" : ""} />
                </button>
                
                <button 
                  onClick={toggleFullscreen}
                  className="w-8 h-8 rounded-full bg-gray-800 bg-opacity-70 flex items-center justify-center hover:bg-gray-700 transition-colors border border-cyan-500/50"
                >
                  <ExternalLink size={16} className={isFullscreen ? "text-cyan-400" : ""} />
                </button>
                
                {/* <button className="w-8 h-8 rounded-full bg-gray-800 bg-opacity-70 flex items-center justify-center hover:bg-gray-700 transition-colors border border-pink-500/50">
                  <Settings size={16} />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}