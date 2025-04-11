'use client'
import { useState, useEffect } from 'react';
import { 
  Play, Pause, Volume2, VolumeX, 
  MessageSquare, Heart, Share2, User, 
  Search, Menu, Bell, ChevronDown,
  TerminalSquare, Tv, Gamepad2, Zap,
  Settings, Monitor, Clock, Bookmark,
  Globe,
  Activity,
  ChevronLeft,
  ChevronRight,
  Wifi
} from 'lucide-react';
import CyberpunkTwitchStream from './Enahanced';
import Navbar from './Stream/Navbar';
import Sidebar from './Stream/Channels';
import { useRouter } from 'next/navigation';
import data from '@/app/data';

// Main App Component
export default function CyberpunkTwitch() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTerminalVisible, setIsTerminalVisible] = useState(true);
  const [terminalText, setTerminalText] = useState('');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentSection, setCurrentSection] = useState('recommended');
  const [hasBackgroundMusic, setHasBackgroundMusic] = useState(false);
  const [theme, setTheme] = useState('neon'); // neon, retro, minimal
  
  // Terminal boot sequence effect
  // useEffect(() => {
  //   const bootText = [
  //     "> INITIALIZING SYSTEM...",
  //     "> CONNECTING TO CYBERSPACE...",
  //     "> LOADING NEURAL INTERFACE...",
  //     "> ESTABLISHING SECURE CONNECTION...",
  //     "> RENDERING VISUAL MODULES...",
  //     "> SYSTEM ONLINE. WELCOME TO NEON STREAM."
  //   ];
    
  //   let currentLine = 0;
  //   let currentChar = 0;
  //   let interval;
    
  //   if (isTerminalVisible) {
  //     interval = setInterval(() => {
  //       if (currentLine < bootText.length) {
  //         if (currentChar < bootText[currentLine].length) {
  //           setTerminalText(prev => prev + bootText[currentLine][currentChar]);
  //           currentChar++;
  //         } else {
  //           setTerminalText(prev => prev + '\n');
  //           currentLine++;
  //           currentChar = 0;
  //         }
  //       } else {
  //         clearInterval(interval);
  //         setTimeout(() => {
  //           setIsTerminalVisible(false);
  //         }, 1000);
  //       }
  //     }, 30);
  //   }
    
  //   return () => clearInterval(interval);
  // }, [isTerminalVisible]);

  // if (isTerminalVisible) {
  //   return (
  //     <div className="bg-black min-h-screen flex items-center justify-center p-4">
  //       <div className="w-full max-w-2xl bg-black border-2 border-green-500 p-4 text-green-500 font-mono text-lg">
  //         <div className="flex justify-between mb-2">
  //           <div>TERMINAL v3.7.5</div>
  //           <div className="animate-pulse">█</div>
  //         </div>
  //         <div className="h-px bg-green-500 mb-4 animate-pulse"></div>
  //         <pre className="whitespace-pre-wrap">
  //           {terminalText}
  //         </pre>
  //       </div>
  //     </div>
  //   );
  // }
  
  return (
    <div className={`min-h-screen bg-[#121212] text-gray-100 overflow-hidden relative ${theme === 'minimal' ? 'bg-opacity-95' : ''}`}>
      {/* Customization controls */}
      {/* <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-gray-800 bg-opacity-90 rounded-lg p-3 border border-purple-900 shadow-lg">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setHasBackgroundMusic(!hasBackgroundMusic)}
              className={`p-2 rounded-full ${hasBackgroundMusic ? 'bg-pink-500 text-white' : 'bg-gray-700 text-gray-300'}`}
            >
              {hasBackgroundMusic ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>
            <div className="flex space-x-1">
              <button 
                onClick={() => setTheme('neon')}
                className={`w-6 h-6 rounded-full ${theme === 'neon' ? 'ring-2 ring-white' : ''} bg-gradient-to-r from-pink-500 to-purple-500`}
              />
              <button 
                onClick={() => setTheme('retro')}
                className={`w-6 h-6 rounded-full ${theme === 'retro' ? 'ring-2 ring-white' : ''} bg-gradient-to-r from-cyan-500 to-blue-500`}
              />
              <button 
                onClick={() => setTheme('minimal')}
                className={`w-6 h-6 rounded-full ${theme === 'minimal' ? 'ring-2 ring-white' : ''} bg-gradient-to-r from-gray-700 to-gray-900`}
              />
            </div>
          </div>
        </div>
      </div> */}
      
      {/* Animated background effects */}
      {theme !== 'minimal' && <RainEffect />}
      {theme !== 'minimal' && <GridOverlay />}
      
      {/* Custom cursor style */}
      {/* <CustomCursorStyle /> */}
      
      {/* Main layout */}
      <div className="flex flex-col h-screen">
        {/* <Navbar setIsMenuOpen={setIsMenuOpen} /> */}
        <Navbar setIsMenuOpen={setIsMenuOpen} />
        
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar navigation */}
          {/* <Sidebar isOpen={isMenuOpen} setCurrentSection={setCurrentSection} /> */}
          <Sidebar setIsOpen={setIsMenuOpen} isOpen={isMenuOpen} setCurrentSection={setCurrentSection} />
          
          {/* Main content area */}
          <main className="flex-1 overflow-y-auto pb-20 relative z-10">
            <div className="mx-auto px-4 py-6">
              {/* <FeaturedStream 
                isVideoPlaying={isVideoPlaying} 
                setIsVideoPlaying={setIsVideoPlaying}
                isMuted={isMuted}
                setIsMuted={setIsMuted}
              /> */}
              <CyberpunkTwitchStream/>
              <div className='py-6'></div>
                <RecommendedStreams />
                <Clips/>
              {/* {currentSection === 'following' && <FollowingSection />} */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function NavLink({ children, active }) {
    return (
      <a 
        href="#" 
        className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 overflow-hidden group ${
          active 
            ? 'text-cyan-400'
            : 'text-gray-300 hover:text-cyan-400'
        }`}
      >
        <span className="relative z-10">{children}</span>
        {active && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"></span>
        )}
        <span className="absolute inset-0 bg-cyan-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
      </a>
    );
  }
  
//   function Navbar({ setIsMenuOpen }) {
//     const [scrolled, setScrolled] = useState(false);
//     const [currentTime, setCurrentTime] = useState('00:00:00');
    
//     useEffect(() => {
//       const handleScroll = () => {
//         setScrolled(window.scrollY > 10);
//       };
      
//       const updateTime = () => {
//         const now = new Date();
//         const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
//         setCurrentTime(time);
//       };
  
//       window.addEventListener('scroll', handleScroll);
//       const timer = setInterval(updateTime, 1000);
//       updateTime();
      
//       return () => {
//         window.removeEventListener('scroll', handleScroll);
//         clearInterval(timer);
//       };
//     }, []);
  
//     return (
//       <header className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
//         scrolled 
//           ? 'bg-gray-900/90 backdrop-blur-md border-b border-purple-900/80 shadow-lg shadow-purple-900/20' 
//           : 'bg-gray-900 border-b border-purple-900'
//         } relative z-20`}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 via-purple-900/5 to-pink-900/5"></div>
//         <div className="relative mx-auto px-4">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center">
//               <button 
//                 onClick={() => setIsMenuOpen(prev => !prev)}
//                 className="p-2 rounded-lg text-purple-500 mr-3 relative group overflow-hidden"
//                 aria-label="Open menu"
//               >
//                 <span className="absolute inset-0 bg-purple-800 opacity-0 group-hover:opacity-20 transition-opacity"></span>
//                 <span className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/50 rounded-lg transition-all"></span>
//                 <Menu size={20} className="relative z-10" />
//               </button>
              
//               <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mr-6 flex items-center">
//                 NEON<span className="text-cyan-400">STREAM</span>
//                 <Zap size={16} className="ml-1 text-yellow-400" />
//               </div>
              
//               <nav className="hidden md:flex space-x-1">
//                 <NavLink active>Discover</NavLink>
//                 <NavLink>Browse</NavLink>
//                 <NavLink>Esports</NavLink>
//                 <NavLink>Live</NavLink>
//               </nav>
//             </div>
            
//             <div className="hidden md:flex items-center text-xs text-cyan-400 font-mono mr-4">
//               <Globe size={12} className="mr-1" />
//               <span className="mr-3">SYS.CONNECTED</span>
//               <Clock size={12} className="mr-1" />
//               <span>{currentTime}</span>
//             </div>
            
//             <div className="flex items-center space-x-4">
//               <div className="relative group">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="bg-gray-800/80 border border-gray-700 focus:border-cyan-500 rounded-lg pl-10 pr-4 py-1.5 text-sm w-40 md:w-64 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
//                 />
//                 <Search size={16} className="absolute left-3 top-2 text-gray-400" />
//                 <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-focus-within:w-full transition-all duration-300"></span>
//               </div>
              
//               <button className="p-2 rounded-lg text-gray-300 relative group overflow-hidden" aria-label="Notifications">
//                 <span className="absolute inset-0 bg-purple-800 opacity-0 group-hover:opacity-20 transition-opacity"></span>
//                 <span className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/50 rounded-lg transition-all"></span>
//                 <Bell size={20} className="relative z-10" />
//                 <span className="absolute top-0 right-0 block w-2 h-2 rounded-full bg-pink-500 ring-2 ring-pink-500/20 animate-pulse"></span>
//               </button>
              
//               <div className="flex items-center space-x-2 group relative cursor-pointer">
//                 <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
//                   <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
//                     <User size={16} className="text-cyan-400" />
//                   </div>
//                 </div>
//                 <span className="hidden md:inline-block text-sm font-medium text-gray-200 group-hover:text-cyan-400 transition-colors">
//                   <span className="text-cyan-400">@</span>CyberUser
//                 </span>
//                 <ChevronDown size={14} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                
//                 <div className="absolute top-full right-0 mt-2 w-48 bg-gray-900 border border-purple-900 rounded-lg shadow-lg shadow-purple-500/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-2">
//                   <div className="py-1 px-3 text-xs text-gray-500 font-mono border-b border-gray-800">SYSTEM OPTIONS</div>
//                   <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400 rounded mt-1">Profile</a>
//                   <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400 rounded">Settings</a>
//                   <a href="#" className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400 rounded">Logout</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     );
//   }

// Sidebar Component
// function Sidebar({ isOpen, setIsOpen, setCurrentSection }) {
//     const [hoveredChannel, setHoveredChannel] = useState(null);
    
//     const handleSetSection = (section) => {
//       setCurrentSection(section);
//     };
    
//     return (
//       <>
//         {/* Mobile overlay when sidebar is open */}
//         {isOpen && (
//           <div 
//             className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
//             onClick={() => setIsOpen(false)}
//           />
//         )}
        
//         <aside className={`w-64 bg-gray-900 border-r border-cyan-900/50 fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto z-30 flex flex-col`}>
//           {/* Sidebar header with logo */}
//           {/* <div className="h-16 border-b border-cyan-900/50 px-4 flex items-center justify-between">
//             <div className="flex items-center">
//               <div className="w-8 h-8 rounded bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
//                 <Wifi size={16} className="text-gray-900" />
//               </div>
//               <span className="ml-2 text-cyan-400 font-bold tracking-wider">NEON<span className="text-purple-400">STREAM</span></span>
//             </div>
//             <button 
//               onClick={() => setIsOpen(false)} 
//               className="lg:hidden text-gray-400 hover:text-white"
//             >
//               <ChevronLeft size={20} />
//             </button>
//           </div> */}
          
//           {/* Search bar */}
//           <div className="p-4 border-b border-cyan-900/30">
//             <div className="relative">
//               <input 
//                 type="text" 
//                 placeholder="Search channels" 
//                 className="w-full bg-gray-800 text-gray-200 py-2 pl-9 pr-3 rounded-lg border border-cyan-900/30 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 placeholder-gray-500 text-sm"
//               />
//               <Search size={16} className="absolute left-3 top-2.5 text-gray-500" />
//             </div>
//           </div>
          
//           {/* Main content */}
//           <div className="p-4 flex-1 overflow-y-auto custom-scrollbar">
//             <div className="mb-6">
//               <h3 className="text-xs uppercase tracking-wider text-cyan-400 mb-2 font-bold">Main</h3>
//               <ul className="space-y-1">
//                 <SidebarLink 
//                   icon={<TerminalSquare size={18} />} 
//                   onClick={() => handleSetSection('recommended')} 
//                   active
//                 >
//                   Recommended
//                 </SidebarLink>
//                 <SidebarLink 
//                   icon={<Tv size={18} />} 
//                   onClick={() => handleSetSection('following')}
//                 >
//                   Following
//                 </SidebarLink>
//                 <SidebarLink 
//                   icon={<Gamepad2 size={18} />} 
//                   onClick={() => handleSetSection('categories')}
//                 >
//                   Categories
//                 </SidebarLink>
//                 <SidebarLink 
//                   icon={<Zap size={18} />}
//                   onClick={() => handleSetSection('live')}
//                 >
//                   Live Now
//                 </SidebarLink>
//               </ul>
//             </div>
            
//             <div className="mb-6">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="text-xs uppercase tracking-wider text-cyan-400 font-bold">Followed Channels</h3>
//                 <button className="text-gray-500 hover:text-gray-300">
//                   <ChevronRight size={16} />
//                 </button>
//               </div>
//               <ul className="space-y-1">
//                 <ChannelLink 
//                   name="NeonHunter" 
//                   game="Cyberpunk 2078" 
//                   viewers="12.4K"
//                   avatar="neon" 
//                   isLive 
//                   onHover={() => setHoveredChannel('NeonHunter')}
//                   onLeave={() => setHoveredChannel(null)}
//                   isHovered={hoveredChannel === 'NeonHunter'}
//                 />
//                 <ChannelLink 
//                   name="PixelRiot" 
//                   game="Night City Racers" 
//                   viewers="5.2K"
//                   avatar="pixel" 
//                   isLive 
//                   onHover={() => setHoveredChannel('PixelRiot')}
//                   onLeave={() => setHoveredChannel(null)}
//                   isHovered={hoveredChannel === 'PixelRiot'}
//                 />
//                 <ChannelLink 
//                   name="SynthQueen" 
//                   game="Just Chatting" 
//                   avatar="synth"
//                   onHover={() => setHoveredChannel('SynthQueen')}
//                   onLeave={() => setHoveredChannel(null)}
//                   isHovered={hoveredChannel === 'SynthQueen'}
//                 />
//                 <ChannelLink 
//                   name="DataPirate" 
//                   game="HackNet Simulator" 
//                   avatar="data"
//                   onHover={() => setHoveredChannel('DataPirate')}
//                   onLeave={() => setHoveredChannel(null)}
//                   isHovered={hoveredChannel === 'DataPirate'}
//                 />
//                 <ChannelLink 
//                   name="GlitchMonk" 
//                   game="System Shock" 
//                   avatar="glitch"
//                   onHover={() => setHoveredChannel('GlitchMonk')}
//                   onLeave={() => setHoveredChannel(null)}
//                   isHovered={hoveredChannel === 'GlitchMonk'}
//                 />
//               </ul>
//             </div>
            
//             <div>
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="text-xs uppercase tracking-wider text-cyan-400 font-bold">Recommended</h3>
//                 <button className="text-gray-500 hover:text-gray-300">
//                   <ChevronRight size={16} />
//                 </button>
//               </div>
//               <ul className="space-y-1">
//                 <ChannelLink 
//                   name="CyberNomad" 
//                   game="Neon Drift" 
//                   viewers="8.7K"
//                   avatar="cyber" 
//                   isLive 
//                   isNew
//                   onHover={() => setHoveredChannel('CyberNomad')}
//                   onLeave={() => setHoveredChannel(null)}
//                   isHovered={hoveredChannel === 'CyberNomad'}
//                 />
//                 <ChannelLink 
//                   name="DigitalGhost" 
//                   game="Neural Link" 
//                   avatar="ghost"
//                   onHover={() => setHoveredChannel('DigitalGhost')}
//                   onLeave={() => setHoveredChannel(null)}
//                   isHovered={hoveredChannel === 'DigitalGhost'}
//                 />
//                 <ChannelLink 
//                   name="ByteRunner" 
//                   game="GridWars X" 
//                   viewers="3.1K"
//                   avatar="byte" 
//                   isLive
//                   onHover={() => setHoveredChannel('ByteRunner')}
//                   onLeave={() => setHoveredChannel(null)}
//                   isHovered={hoveredChannel === 'ByteRunner'}
//                 />
//               </ul>
//             </div>
//           </div>
          
//           {/* User section */}
//           {/* <div className="p-3 border-t border-cyan-900/30 bg-gray-800/50">
//             <div className="flex items-center">
//               <div className="w-8 h-8 rounded bg-gradient-to-r from-purple-600 to-cyan-500"></div>
//               <div className="ml-2 flex-1">
//                 <div className="text-sm font-medium text-gray-200">User_XJ7</div>
//                 <div className="text-xs text-gray-400">Online</div>
//               </div>
//               <div className="flex space-x-2">
//                 <button className="text-gray-400 hover:text-gray-200">
//                   <Bell size={16} />
//                 </button>
//                 <button className="text-gray-400 hover:text-gray-200">
//                   <Settings size={16} />
//                 </button>
//               </div>
//             </div>
//           </div> */}
//         </aside>
        
//         {/* Toggle button for mobile */}
//         {!isOpen && (
//           <button 
//             className="fixed bottom-4 left-4 z-30 lg:hidden bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-200"
//             onClick={() => setIsOpen(true)}
//           >
//             <ChevronRight size={20} />
//           </button>
//         )}
//       </>
//     );
//   }
  
//   // Sidebar Link Component
//   function SidebarLink({ icon, children, active, onClick }) {
//     return (
//       <li>
//         <a 
//           href="#" 
//           onClick={(e) => { e.preventDefault(); onClick && onClick(); }} 
//           className={`flex items-center space-x-3 px-3 py-2 rounded-lg group transition-all duration-200 ${
//             active 
//               ? 'bg-gradient-to-r from-purple-900/70 to-cyan-900/40 text-white border-l-2 border-cyan-400' 
//               : 'text-gray-300 hover:bg-gray-800/80 hover:text-cyan-400'
//           }`}
//         >
//           <span className={`transition-colors duration-200 ${active ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'}`}>
//             {icon}
//           </span>
//           <span>{children}</span>
//         </a>
//       </li>
//     );
//   }

// Recommended Streams Component with enhanced cyberpunk styling
function RecommendedStreams() {
  return (
    <div className="relative mt-8">
      {/* Decorative cyberpunk element */}
      <div className="absolute -left-4 top-0 w-1 h-8 bg-[#121212] shadow-glow-pink"></div>
      
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">FOLLOWING_</span>
          <span className="text-cyan-400">STREAMS</span>
          <span className="animate-pulse text-pink-500 ml-1">|</span>
        </h2>
        <a href="/browse" className="text-sm text-cyan-400 hover:text-pink-400 transition-colors flex items-center group">
          <span>VIEW_ALL</span>
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.followingStreams.map((each,index)=>(
          <StreamCard 
            key={each.id}
            avatar={each.avatar}
            id={each.id}
            title={each.title}
            creator={each.channelName} 
            game={each.game}
            viewers={each.viewers} 
            tags={each.tags}
            live={true}
            viewerTrend="up"
            thumbnail={each.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}
function Clips() {
  return (
    <div className="relative mt-8">
      {/* Decorative cyberpunk element */}
      <div className="absolute -left-4 top-0 w-1 h-8 bg-[#121212] shadow-glow-pink"></div>
      
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">RECOMMENDED_</span>
          <span className="text-cyan-400">CLIPS</span>
          <span className="animate-pulse text-pink-500 ml-1">|</span>
        </h2>
        <a href="/browse" className="text-sm text-cyan-400 hover:text-pink-400 transition-colors flex items-center group">
          <span>VIEW_ALL</span>
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.clips.map((each,index)=>{
          if(index>3) return;
          const channel = data.channels.find((channel) => channel.id === each.channelId);
          const user = data.users.find((user) => user.id === channel.userId);
          return <StreamCard 
            key={each.id}
            avatar={user.avatar}
            id={each.id}
            title={each.title}
            creator={channel.name} 
            game={each.game}
            viewers={each.views} 
            tags={["competitive", "esports", "fps"]}
            live={false}
            viewerTrend="up"
            thumbnail={each.thumbnail}
          />
        }
        )}
      </div>
    </div>
  );
}
function formatNumber(num) {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return num.toString();
}
// Enhanced Stream Card Component
function StreamCard({ id,title, creator, game,avatar, viewers, tags = [], live = false, viewerTrend = "stable", featured = false, thumbnail }) {
  // Viewer trend indicators
  const router = useRouter();
  const trendIcons = {
    up: <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9v9a1 1 0 01-2 0V8H6a1 1 0 01-1-1V6a1 1 0 011-1h5a1 1 0 011 1v1z" clipRule="evenodd" transform="rotate(45, 10, 10)" /></svg>,
    down: <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9v9a1 1 0 01-2 0V8H6a1 1 0 01-1-1V6a1 1 0 011-1h5a1 1 0 011 1v1z" clipRule="evenodd" transform="rotate(-45, 10, 10)" /></svg>,
    stable: <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
  };

  return (
    <div className={`rounded-lg overflow-hidden bg-[#121212] border ${featured ? 'border-cyan-500 shadow-glow-cyan' : 'border-purple-900'} hover:border-pink-500 transition-all group transform hover:-translate-y-1`}>
      <div onClick={()=>{router.push(`/live/${id}`)}} className="aspect-video hover:cursor-pointer bg-[#121212] relative overflow-hidden">
        <img src={thumbnail} alt="Stream thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
        
        {/* Stream information overlay */}
        <div className="absolute top-0 left-0 w-full p-2 flex justify-between items-start">
          {live && (
            <div className="px-1.5 py-0.5 bg-red-600 text-xs font-medium rounded text-white flex items-center">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse mr-1"></span>
              LIVE
            </div>
          )}
          
          {featured && (
            <div className="px-1.5 py-0.5 bg-cyan-600 text-xs font-medium rounded text-white ml-auto">
              FEATURED
            </div>
          )}
        </div>
        
        {/* Futuristic bottom overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-2">
          <div className="flex justify-between items-center">
            <div className="px-1.5 py-0.5 bg-black bg-opacity-70 border border-purple-500 text-xs font-medium rounded text-white">
              {game}
            </div>
            <div className="px-1.5 py-0.5 bg-pink-600 text-xs font-medium rounded text-white flex items-center">
              {trendIcons[viewerTrend]}
              <span className="ml-1">{formatNumber(viewers)}</span>
            </div>
          </div>
        </div>
        
        {/* Decorative cyberpunk corner element */}
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-pink-500 opacity-70 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500 opacity-70 group-hover:opacity-100 transition-opacity"></div>
      </div>
      
      <div className="p-3">
        <div className="flex items-start space-x-2 mb-2">
          {/* <div className="w-8 h-8 rounded-full overflow-hidden border border-cyan-700 flex-shrink-0 bg-gradient-to-r from-purple-600 to-pink-600 p-0.5">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-xs text-cyan-400">{creator.substring(0, 2)}</span>
            </div>
          </div> */}
          <img src={avatar} alt={creator} className="w-8 h-8 rounded-full object-cover overflow-hidden border border-cyan-700 flex-shrink-0" />
          <div>
            <h3 onClick={()=>{router.push(`/live/${id}`)}} className="text-sm hover:cursor-pointer font-medium text-white line-clamp-1 group-hover:text-cyan-400 transition-colors">{title}</h3>
            <p onClick={()=>{router.push(`/channel/${id}`)}} className="text-xs hover:cursor-pointer text-gray-400 hover:text-pink-400 transition-colors">@{creator}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs px-1.5 py-0.5 bg-gray-800 text-gray-300 rounded border border-purple-900 hover:border-cyan-500 hover:text-cyan-400 transition-colors cursor-pointer">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Enhanced Category Card Component
function CategoryCard({ name, viewers, trending = false }) {
  return (
    <div className="rounded-lg overflow-hidden bg-gray-900 border border-purple-900 hover:border-cyan-500 transition-all transform hover:-translate-y-1 group">
      <div className="aspect-video bg-gradient-to-br from-purple-900 to-gray-900 relative overflow-hidden">
        <img src="/api/placeholder/160/90" alt="Category thumbnail" className="w-full h-full object-cover opacity-50 mix-blend-overlay group-hover:opacity-70 transition-opacity" />
        
        {/* Diagonal line decoration */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div className="absolute top-0 right-0 w-16 h-px bg-gradient-to-r from-transparent to-cyan-500"></div>
          <div className="absolute top-0 right-0 w-px h-16 bg-gradient-to-b from-cyan-500 to-transparent"></div>
        </div>
        
        {/* Trending indicator */}
        {trending && (
          <div className="absolute top-2 right-2">
            <div className="text-xs bg-pink-600 px-1 py-0.5 rounded-sm text-white animate-pulse">
              TRENDING
            </div>
          </div>
        )}
      </div>
      
      <div className="p-2 border-t border-purple-900 group-hover:border-cyan-500 transition-colors">
        <h3 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">{name}</h3>
        <p className="text-xs text-gray-400 flex items-center">
          <svg className="w-3 h-3 mr-1 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          {viewers} viewers
        </p>
      </div>
    </div>
  );
}

// Enhanced Categories Section Component
function CategoriesSection() {
  return (
    <div className="relative">
      {/* Decorative cyberpunk element */}
      <div className="absolute -left-4 top-0 w-1 h-8 bg-cyan-500 shadow-glow-cyan"></div>
      
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">TOP_</span>
          <span className="text-cyan-400">CATEGORIES</span>
          <span className="animate-pulse text-pink-500 ml-1">|</span>
        </h2>
        
        <div className="flex space-x-2">
          <CategoryFilterButton label="GAMES" active={true} />
          <CategoryFilterButton label="IRL" />
          <CategoryFilterButton label="MUSIC" />
          <CategoryFilterButton label="ESPORTS" />
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <CategoryDetailCard 
          name="Cyberpunk 2078" 
          viewers="105.2K" 
          tags={["FPS", "RPG", "Open World"]}
          trending={true}
          channels={856}
        />
        <CategoryDetailCard 
          name="Night City Racers" 
          viewers="78.6K" 
          tags={["Racing", "Arcade", "Multiplayer"]}
          trending={true}
          channels={742}
        />
        <CategoryDetailCard 
          name="Neural Link" 
          viewers="45.3K" 
          tags={["Strategy", "Competitive", "Esports"]}
          channels={534}
          official={true}
        />
        <CategoryDetailCard 
          name="GridWars X" 
          viewers="67.8K" 
          tags={["MOBA", "Esports", "Team-based"]}
          trending={true}
          channels={683}
        />
        <CategoryDetailCard 
          name="HackNet Simulator" 
          viewers="32.1K" 
          tags={["Simulation", "Cybersecurity", "Puzzle"]}
          channels={419}
        />
        <CategoryDetailCard 
          name="System Shock" 
          viewers="18.9K" 
          tags={["Horror", "FPS", "Classic"]}
          channels={267}
          retro={true}
        />
        <CategoryDetailCard 
          name="Just Chatting" 
          viewers="250.4K" 
          tags={["IRL", "Talk Show", "Commentary"]}
          trending={true}
          channels={3452}
        />
        <CategoryDetailCard 
          name="Neon Drift" 
          viewers="95.2K" 
          tags={["Racing", "Arcade", "Futuristic"]}
          trending={true}
          channels={795}
        />
        <CategoryDetailCard 
          name="NetRunner" 
          viewers="42.6K" 
          tags={["Card Game", "Strategy", "Deck Builder"]}
          channels={487}
        />
        <CategoryDetailCard 
          name="MetaVerse Connection" 
          viewers="28.7K" 
          tags={["VR", "Social", "Simulation"]}
          channels={356}
          newContent={true}
        />
      </div>
    </div>
  );
}

// Category Filter Button Component
function CategoryFilterButton({ label, active = false }) {
  return (
    <button className={`px-3 py-1 rounded-lg text-sm transition-all relative overflow-hidden group
      ${active ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
      {label}
      {active && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
      )}
      <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></span>
    </button>
  );
}

// Enhanced Category Detail Card Component
function CategoryDetailCard({ name, viewers, tags = [], trending = false, channels, official = false, retro = false, newContent = false }) {
  return (
    <div className="rounded-lg overflow-hidden bg-gray-900 border border-purple-900 hover:border-cyan-500 transition-all group transform hover:-translate-y-1">
      <div className="aspect-video bg-gradient-to-br from-purple-900 to-gray-900 relative overflow-hidden">
        <img src="/api/placeholder/240/135" alt="Category thumbnail" className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity mix-blend-overlay" />
        
        {/* Content status indicators */}
        <div className="absolute top-2 right-2 flex flex-col gap-1 items-end">
          {trending && (
            <div className="text-xs bg-pink-600 px-1.5 py-0.5 rounded-sm text-white flex items-center">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              TRENDING
            </div>
          )}
          
          {official && (
            <div className="text-xs bg-blue-600 px-1.5 py-0.5 rounded-sm text-white flex items-center">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              OFFICIAL
            </div>
          )}
          
          {retro && (
            <div className="text-xs bg-purple-600 px-1.5 py-0.5 rounded-sm text-white flex items-center">
              RETRO
            </div>
          )}
          
          {newContent && (
            <div className="text-xs bg-green-600 px-1.5 py-0.5 rounded-sm text-white flex items-center animate-pulse">
              NEW
            </div>
          )}
        </div>
        
        {/* Decorative cyberpunk elements */}
        <div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-6 h-px bg-gradient-to-r from-pink-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-px h-6 bg-gradient-to-t from-pink-500 to-transparent"></div>
        </div>
        
        <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
          <div className="absolute top-0 right-0 w-6 h-px bg-gradient-to-l from-cyan-500 to-transparent"></div>
          <div className="absolute top-0 right-0 w-px h-6 bg-gradient-to-b from-cyan-500 to-transparent"></div>
        </div>
      </div>
      
      <div className="p-3">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">{name}</h3>
          <svg className="w-4 h-4 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </div>
        
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs text-gray-400 flex items-center">
            <svg className="w-3 h-3 mr-1 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            {viewers} viewers
          </p>
          
          <p className="text-xs text-gray-400 flex items-center">
            <svg className="w-3 h-3 mr-1 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            {channels} channels
          </p>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs px-1.5 py-0.5 bg-gray-800 text-gray-300 rounded border border-gray-700 hover:border-purple-500 transition-colors cursor-pointer">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function RecommendedChannelCard({ name, followers, description }) {
    return (
      <div className="rounded-lg overflow-hidden bg-gray-800 border border-purple-900 hover:border-pink-500 transition-colors group p-4">
        <div className="flex items-center mb-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex-shrink-0 mr-3">
            <div className="flex items-center justify-center h-full">
              <User size={24} className="text-gray-900" />
            </div>
          </div>
          <div>
            <h3 className="font-medium text-white">{name}</h3>
            <p className="text-xs text-gray-400">{followers} followers</p>
          </div>
        </div>
        <p className="text-sm text-gray-300 mb-3 line-clamp-2">{description}</p>
        <button className="w-full px-3 py-1.5 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm transition-colors">
          Follow
        </button>
      </div>
    );
  }
  
  // Following Stream Card Component
  function FollowingStreamCard({ title, creator, game, viewers, duration }) {
    return (
      <div className="rounded-lg overflow-hidden bg-gray-800 border border-purple-900 hover:border-pink-500 transition-colors group">
        <div className="flex">
          <div className="w-64 bg-gray-900 relative overflow-hidden">
            <img src="/api/placeholder/256/144" alt="Stream thumbnail" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black bg-opacity-70 text-xs font-medium rounded text-white flex items-center">
              <Clock size={12} className="mr-1" />
              {duration}
            </div>
          </div>
          <div className="flex-1 p-3">
            <h3 className="font-medium text-white mb-1 line-clamp-1">{title}</h3>
            <div className="flex items-center mb-1">
              <span className="text-sm text-purple-400 mr-2">{creator}</span>
              <span className="text-xs px-1.5 py-0.5 bg-pink-500 text-white rounded">LIVE</span>
            </div>
            <p className="text-sm text-gray-400 mb-2">{game}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-300">{viewers} viewers</span>
              <div className="flex space-x-2">
                <button className="p-1.5 bg-gray-700 hover:bg-gray-600 rounded-full text-gray-300">
                  <Heart size={14} />
                </button>
                <button className="p-1.5 bg-gray-700 hover:bg-gray-600 rounded-full text-gray-300">
                  <Bell size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Rain Effect Component
  function RainEffect() {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-px bg-cyan-500 opacity-70"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `-20%`,
                height: `${Math.random() * 30 + 20}%`,
                animation: `rain ${Math.random() * 2 + 1}s linear ${Math.random() * 2}s infinite`,
              }}
            />
          ))}
          <style jsx global>{`
            @keyframes rain {
              0% {
                transform: translateY(0);
              }
              100% {
                transform: translateY(1000%);
              }
            }
          `}</style>
        </div>
      </div>
    );
  }
  
  // Grid Overlay Component
  function GridOverlay() {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="h-full w-full grid grid-cols-12 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-full border-r border-cyan-500/30"></div>
            ))}
          </div>
          <div className="h-full w-full grid grid-rows-12 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-full border-b border-cyan-500/30"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  function CustomCursorStyle() {
    return (
      <style jsx global>{`
        body {
          cursor: none;
        }
        
        .custom-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(236, 72, 153, 0.7);
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          mix-blend-mode: screen;
          box-shadow: 0 0 15px rgba(236, 72, 153, 0.8);
        }
        
        .cursor-trail {
          position: fixed;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.5);
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9998;
          mix-blend-mode: screen;
          opacity: 0.8;
          transition: width 0.2s, height 0.2s, opacity 0.2s;
        }
      `}</style>
    );
  }