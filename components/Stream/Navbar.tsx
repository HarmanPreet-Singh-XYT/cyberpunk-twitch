import { useState, useEffect } from 'react';
import { Menu, Zap, Globe, Clock, Search, Bell, User, ChevronDown, Shield, Wifi, Battery, Terminal, Cpu } from 'lucide-react';
import NotificationPopup from '../Notification';
// Global styles can be moved to a separate CSS file or added to your global CSS
const globalStyles = `
  @keyframes dot-1 {
    0%, 100% { opacity: 0; }
    20%, 80% { opacity: 1; }
  }
  @keyframes dot-2 {
    0%, 100% { opacity: 0; }
    40%, 80% { opacity: 1; }
  }
  @keyframes dot-3 {
    0%, 100% { opacity: 0; }
    60%, 80% { opacity: 1; }
  }
  @keyframes scan {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(200%); }
  }
  .animate-dot-1 { animation: dot-1 1.5s infinite; }
  .animate-dot-2 { animation: dot-2 1.5s infinite; }
  .animate-dot-3 { animation: dot-3 1.5s infinite; }
  .animate-scan { animation: scan 2s linear infinite; }
`;

function NavLink({ children, active, link }) {
  return (
    <a 
      href={link}
      className={`px-3 py-2 text-sm rounded-lg relative group overflow-hidden ${
        active 
          ? 'text-cyan-400 font-medium' 
          : 'text-gray-300 hover:text-cyan-400'
      }`}
    >
      {active && (
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></span>
      )}
      <span className="absolute inset-0 bg-cyan-900/0 group-hover:bg-cyan-900/10 transition-all rounded-lg"></span>
      <span className="relative">{children}</span>
    </a>
  );
}

function Navbar({ setIsMenuOpen, isBrowse = false,isShorts = false,isClip = false }:{setIsMenuOpen: any, isBrowse?: boolean,isShorts?:boolean,isClip?:boolean}) {
    const [scrolled, setScrolled] = useState(false);
    const [currentTime, setCurrentTime] = useState('00:00:00');
    const [pingStatus, setPingStatus] = useState('OPTIMAL');
    const [batteryLevel, setBatteryLevel] = useState(85);
    const [showGlitch, setShowGlitch] = useState(false);
    const [blinkPhase, setBlinkPhase] = useState(false);
    
    useEffect(() => {
      // Handle scroll effect
      const handleScroll = () => {
        setScrolled(window.scrollY > 10);
      };
      
      // Update time with blinking colon
      const updateTime = () => {
        const now = new Date();
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        setCurrentTime(time);
        setBlinkPhase(prev => !prev);
      };

      // Simulate fluctuating connection
      const updateConnection = () => {
        const statuses = ['OPTIMAL', 'SECURE', 'ENCRYPTED', 'ROUTING'];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        setPingStatus(randomStatus);
        
        // Randomly show glitch effect
        if (Math.random() < 0.05) {
          setShowGlitch(true);
          setTimeout(() => setShowGlitch(false), 150);
        }
        
        // Simulate battery drain
        setBatteryLevel(prev => {
          const fluctuation = Math.random() < 0.7 ? -1 : 1;
          const newLevel = prev + fluctuation;
          return Math.min(Math.max(newLevel, 60), 95); // Keep between 60-95%
        });
      };
  
      window.addEventListener('scroll', handleScroll);
      const timeTimer = setInterval(updateTime, 1000);
      const connectionTimer = setInterval(updateConnection, 3000);
      updateTime();
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearInterval(timeTimer);
        clearInterval(connectionTimer);
      };
    }, []);
  
    return (
      <>
        {/* Add global styles once at the component level */}
        <style jsx global>{globalStyles}</style>
        
        <header className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          scrolled 
            ? 'bg-gray-900/90 backdrop-blur-md border-b border-purple-900/80 shadow-lg shadow-purple-900/20' 
            : 'bg-[#121212] border-b border-purple-900 '
          } relative z-20 ${showGlitch ? 'translate-x-0.5 -translate-y-0.5' : ''}`}
        >
          {/* Digital noise overlay */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
              backgroundSize: '150px'
            }}
          ></div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-pink-900/10"></div>
          
          {/* Scan line effect */}
          <div className="absolute inset-0 bg-scan-lines pointer-events-none opacity-5" 
            style={{
              backgroundImage: 'linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.5) 50%)',
              backgroundSize: '100% 4px'
            }}
          ></div>
          
          <div className="relative mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <button 
                  onClick={() => setIsMenuOpen(prev => !prev)}
                  className="p-2 rounded-lg text-purple-500 mr-3 relative group overflow-hidden"
                  aria-label="Open menu"
                >
                  <span className="absolute inset-0 bg-purple-800 opacity-0 group-hover:opacity-20 transition-opacity"></span>
                  <span className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/50 rounded-lg transition-all"></span>
                  <Menu size={20} className="relative z-10 group-hover:text-cyan-400 transition-colors" />
                  {/* Interactive pulse on hover */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                    <span className="w-8 h-8 rounded-full bg-purple-500/10 animate-ping"></span>
                  </span>
                </button>
                <a href='/'>
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mr-6 flex items-center relative overflow-hidden">
                    <span className={`transition-all duration-300 ${showGlitch ? 'text-pink-500 inline-block translate-x-1' : ''}`}>NEON</span>
                    <span className={`text-cyan-400 transition-all ${showGlitch ? 'skew-x-6 text-white' : ''}`}>STREAM</span>
                    <Zap size={16} className="ml-1 text-yellow-400 animate-pulse" />
                    {/* Decorative circuit lines */}
                    <span className="absolute bottom-1 left-1 w-1/3 h-0.5 bg-pink-500/40"></span>
                    <span className="absolute bottom-1 right-1 w-1/4 h-0.5 bg-cyan-500/40"></span>
                  </div>
                </a>
                
                <nav className="hidden md:flex space-x-1">
                  <NavLink link={'/'} active={!isBrowse && !isShorts && !isClip}>Discover</NavLink>
                  <NavLink link={'/browse'} active={isBrowse}>Browse</NavLink>
                  <NavLink link={'/shorts'} active={isShorts}>Shorts</NavLink>
                  <NavLink link={'/clip/cl1'} active={isClip}>Clips</NavLink>
                </nav>
              </div>
              
              <div className="hidden md:flex items-center text-xs text-cyan-400 font-mono mr-4 border-l border-r border-purple-900/50 px-4">
                <div className="flex flex-col items-start mr-4">
                  <div className="flex items-center mb-0.5">
                    <Wifi size={10} className="mr-1" />
                    <span className="text-gray-400">NET:</span>
                    <span className={`ml-1 ${blinkPhase ? 'text-cyan-400' : 'text-cyan-300'}`}>{pingStatus}</span>
                  </div>
                  <div className="flex items-center">
                    <Shield size={10} className="mr-1" />
                    <span className="text-gray-400">SEC:</span>
                    <span className="ml-1 text-green-400">ACTIVE</span>
                    <span className={`ml-1 h-1.5 w-1.5 rounded-full ${blinkPhase ? 'bg-green-400' : 'bg-green-500'}`}></span>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex items-center mb-0.5">
                    <Clock size={10} className="mr-1" />
                    <span className="text-gray-400">SYS:</span>
                    <span className="ml-1">
                      {currentTime.split('').map((char, i) => (
                        <span key={i} className={char === ':' ? (blinkPhase ? 'opacity-100' : 'opacity-40') : ''}>
                          {char}
                        </span>
                      ))}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Battery size={10} className="mr-1" />
                    <span className="text-gray-400">PWR:</span>
                    <span className={`ml-1 ${batteryLevel < 70 ? 'text-yellow-400' : 'text-green-400'}`}>
                      {batteryLevel}%
                    </span>
                    <div className="ml-1 w-6 h-2 bg-gray-800 rounded-sm overflow-hidden">
                      <div 
                        className={`h-full ${batteryLevel < 70 ? 'bg-yellow-500' : 'bg-green-500'}`}
                        style={{ width: `${batteryLevel}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Search neural net..."
                    className="bg-gray-800/80 border border-gray-700 focus:border-cyan-500 rounded-lg pl-10 pr-4 py-1.5 text-sm w-40 md:w-64 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                  />
                  <Search size={16} className="absolute left-3 top-2 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-focus-within:w-full transition-all duration-300"></span>
                  
                  
                  <div className="absolute right-3 top-2.5 hidden group-focus-within:flex items-center">
                    <span className="w-1 h-1 rounded-full bg-cyan-400 opacity-0 animate-dot-1"></span>
                    <span className="w-1 h-1 rounded-full bg-purple-400 opacity-0 animate-dot-2 mx-0.5"></span>
                    <span className="w-1 h-1 rounded-full bg-pink-400 opacity-0 animate-dot-3"></span>
                  </div>
                </div>
                
                {/* <button className="p-2 rounded-lg text-gray-300 relative group" aria-label="Notifications">
                  <span className="absolute inset-0 bg-purple-800 opacity-0 group-hover:opacity-20 transition-opacity"></span>
                  <span className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/50 rounded-lg transition-all"></span>
                  <Bell size={20} className="relative z-10 group-hover:text-cyan-400 transition-colors" />
                  <span className="absolute top-0 right-0 block w-2 h-2 rounded-full bg-pink-500 ring-2 ring-pink-500/20 animate-pulse"></span>
                   */}
                  {/* Notification count */}
                  {/* <span className="absolute -top-1 -right-1 text-xs bg-pink-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                    3
                  </span> */}
                {/* </button> */}
                <NotificationPopup />
                
                {/* New button: Terminal */}
                <a href='/console' className="p-2 rounded-lg text-gray-300 relative group overflow-hidden hidden md:flex" aria-label="Terminal">
                  <span className="absolute inset-0 bg-cyan-800 opacity-0 group-hover:opacity-20 transition-opacity"></span>
                  <span className="absolute inset-0 border border-cyan-500/0 group-hover:border-cyan-500/50 rounded-lg transition-all"></span>
                  <Terminal size={20} className="relative z-10 group-hover:text-cyan-400 transition-colors" />
                </a>
                
                <div className="flex items-center space-x-2 group relative cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0.5 relative">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                      <User size={16} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                      
                      {/* Digital scan effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-1/4 animate-scan"></div>
                    </div>
                    
                    {/* Status indicator */}
                    <span className="absolute bottom-0 right-0 block w-2.5 h-2.5 rounded-full bg-green-500 border border-gray-900"></span>
                  </div>
                  
                  <div className="hidden md:flex flex-col">
                    <span className="text-xs text-gray-400 font-mono">IDENTITY</span>
                    <span className="text-sm font-medium text-gray-200 group-hover:text-cyan-400 transition-colors flex items-center">
                      <span className="text-cyan-400">@</span>CyberUser
                      <Cpu size={10} className="ml-1 text-pink-400" />
                    </span>
                  </div>
                  
                  <ChevronDown size={14} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  
                  <div className="absolute top-full right-0 mt-2 w-56 bg-gray-900 border border-purple-900 rounded-lg shadow-lg shadow-purple-500/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-2 backdrop-blur-sm">
                    <div className="py-1 px-3 text-xs text-gray-500 font-mono border-b border-gray-800 flex justify-between">
                      <span>SYSTEM OPTIONS</span>
                      <span className="text-cyan-500">[v2.4.5]</span>
                    </div>
                    
                    {/* User stats */}
                    <div className="my-2 px-3 py-2 bg-gray-800/50 rounded-md text-xs">
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-400">Reputation</span>
                        <span className="text-cyan-400">Level 7</span>
                      </div>
                      <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                      </div>
                    </div>
                    
                    <a href="/profile" className="flex items-center px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400 rounded mt-1">
                      <User size={14} className="mr-2" />
                      Profile
                    </a>
                    <a href="/security" className="flex items-center px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400 rounded">
                      <Shield size={14} className="mr-2" />
                      Security Settings
                    </a>
                    <a href="/console" className="flex items-center px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400 rounded">
                      <Terminal size={14} className="mr-2" />
                      Command Console
                    </a>
                    <div className="border-t border-gray-800 my-1"></div>
                    <a href="#" className="flex items-center px-3 py-2 text-sm text-red-400 hover:bg-gray-800 hover:text-red-500 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Disconnect
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
}

export default Navbar;