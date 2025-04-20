import React, { useState } from 'react'
import Navbar from './Stream/Navbar';
import CyberpunkVideoShorts from './Shorts/Shorts';
import Sidebar from './Stream/Channels';
import CyberpunkVideoShortsSpecific from './Shorts/ShortsID';

const ShortsPage = ({id}:{id?:string}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState('recommended');
    const [theme, setTheme] = useState('neon'); // neon, retro, minimal

    return  (
        <div className={`min-h-screen bg-[#121212] text-gray-100 overflow-hidden relative ${theme === 'minimal' ? 'bg-opacity-95' : ''}`}>
          
        {/* Main layout */}
        <div className="flex flex-col h-screen">
            {/* <Navbar setIsMenuOpen={setIsMenuOpen} /> */}
            <Navbar setIsMenuOpen={setIsMenuOpen} isShorts={true} />
            
            <div className="flex flex-1 overflow-hidden">
            {/* Sidebar navigation */}
            {/* <Sidebar isOpen={isMenuOpen} setCurrentSection={setCurrentSection} /> */}
            <Sidebar setIsOpen={setIsMenuOpen} isOpen={isMenuOpen} setCurrentSection={setCurrentSection} />
            
            {/* Main content area */}
            <main className="flex-1 overflow-y-auto relative z-10">
                <div className="mx-auto">
                {/* <FeaturedStream 
                    isVideoPlaying={isVideoPlaying} 
                    setIsVideoPlaying={setIsVideoPlaying}
                    isMuted={isMuted}
                    setIsMuted={setIsMuted}
                /> */}
                {id ? <CyberpunkVideoShortsSpecific/> : <CyberpunkVideoShorts/>}
                
                </div>
            </main>
            </div>
        </div>
        </div>
    )
}

export default ShortsPage