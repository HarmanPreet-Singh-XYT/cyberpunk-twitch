'use client'
import { useState, useEffect } from 'react';
import Navbar from './Stream/Navbar';
import CyberpunkTwitchCarousel from './Carousel';
import Sidebar from './Stream/Channels';

// Main App Component
export default function CyberpunkLanding() {
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
    <div className={`min-h-screen bg-gray-900 text-gray-100 overflow-hidden relative ${theme === 'minimal' ? 'bg-opacity-95' : ''}`}>
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
      {/* {theme !== 'minimal' && <RainEffect />}
      {theme !== 'minimal' && <GridOverlay />} */}
      
      {/* Custom cursor style */}
      {/* <CustomCursorStyle /> */}
      
      {/* Main layout */}
      <div className="flex flex-col h-screen">
        {/* <Navbar setIsMenuOpen={setIsMenuOpen} /> */}
        <Navbar setIsMenuOpen={setIsMenuOpen} isBrowse />
        
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
              <CyberpunkTwitchCarousel/>
              <div className='py-6'></div>
              {currentSection === 'recommended' && (
                <>
                  {/* <RecommendedStreams /> */}
                  {/* <ProductShowcase /> */}
                </>
              )}
              {/* {currentSection === 'categories' && <CategoriesSection />} */}
              {/* {currentSection === 'following' && <FollowingSection />} */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}