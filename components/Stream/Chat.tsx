import React, { useState, useEffect, useRef } from 'react';
import { MessageCircleMore, Send, Shield, Star, Zap, X, User, Clock, ChevronDown, Menu, AlertTriangle, Radio, Cpu, Eye, Wifi, Settings, MessageSquare } from 'lucide-react';

// Enhanced profile image generator with cyberpunk patterns
const getProfileImage = (userId) => {
  return `/api/placeholder/48/48`;
};

// Enhanced user types with their respective badges
const userTypes = ['viewer', 'subscriber', 'moderator', 'vip', 'corpo', 'netrunner'];
const userTiers = ['Tier 1', 'Tier 2', 'Tier 3'];
const factions = ['Arasaka', 'Militech', 'Maelstrom', 'Tyger Claws', 'Mox', 'Voodoo Boys', 'Nomad'];

// Enhanced badges component with glitch effect
const Badge = ({ type }) => {
  const badgeClasses = "text-xs px-1 rounded flex items-center gap-1 relative overflow-hidden";
  const glitchClass = "after:content-[''] after:absolute after:inset-0 after:bg-white after:opacity-0 hover:after:opacity-20 after:animate-pulse";
  
  switch(type) {
    case 'subscriber':
      return <span className={`${badgeClasses} ${glitchClass} bg-gradient-to-r from-purple-500 to-pink-500 text-white`}><Star size={10} />SUB</span>;
    case 'moderator':
      return <span className={`${badgeClasses} ${glitchClass} bg-gradient-to-r from-cyan-400 to-blue-500 text-white`}><Shield size={10} />MOD</span>;
    case 'vip':
      return <span className={`${badgeClasses} ${glitchClass} bg-gradient-to-r from-pink-500 to-orange-400 text-white`}><Zap size={10} />VIP</span>;
    case 'corpo':
      return <span className={`${badgeClasses} ${glitchClass} bg-gradient-to-r from-blue-500 to-indigo-600 text-white`}><Cpu size={10} />CORPO</span>;
    case 'netrunner':
      return <span className={`${badgeClasses} ${glitchClass} bg-gradient-to-r from-green-500 to-cyan-400 text-white`}><Wifi size={10} />NET</span>;
    default:
      return null;
  }
};

// Enhanced username component with cyberpunk style and glitch effect
const Username = ({ user }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 150);
      }
    }, 2000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  const userColors = {
    'viewer': 'text-gray-300',
    'subscriber': 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500',
    'moderator': 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500',
    'vip': 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400',
    'corpo': 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500',
    'netrunner': 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500'
  };
  
  return (
    <span className={`font-bold ${userColors[user.type]} ${isGlitching ? 'opacity-90 translate-x-0.5' : ''} transition-all`}>
      {user.name}
      {isGlitching && <span className="absolute inset-0 text-cyan-500 opacity-70 -translate-x-0.5 filter blur-[1px]">{user.name}</span>}
    </span>
  );
};

// Enhanced chat message component with better hover effects
const ChatMessage = ({ message, onReply }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [glitch, setGlitch] = useState(false);
  
  useEffect(() => {
    if (message.isHighlighted && Math.random() > 0.7) {
      const glitchInterval = setInterval(() => {
        setGlitch(prev => !prev);
      }, 1500);
      
      return () => clearInterval(glitchInterval);
    }
  }, [message.isHighlighted]);

  const messageClasses = message.isHighlighted 
    ? `border-l-2 ${glitch ? 'border-pink-500' : 'border-cyan-400'} bg-opacity-20 bg-gradient-to-r from-cyan-900/20 to-transparent` 
    : '';
    
  const replyClasses = message.isReply 
    ? 'border-l border-pink-500 pl-2 ml-1' 
    : '';
    
  // Add faction styling if available
  const factionClasses = message.user.faction 
    ? `relative after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:opacity-5 ${getFactionGradient(message.user.faction)} after:pointer-events-none` 
    : '';

  return (
    <div 
      className={`group py-2 px-3 hover:bg-gray-800 hover:bg-opacity-40 rounded transition-all relative ${messageClasses} ${replyClasses} ${factionClasses}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {message.replyingTo && (
        <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
          <MessageCircleMore size={12} />
          <span>replying to</span>
          <span className="text-cyan-400">{message.replyingTo}</span>
          <div className="absolute left-0 h-full w-0.5 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
        </div>
      )}
      
      <div className="flex items-start gap-2">
        <div className="relative">
          {/* <img 
            src={getProfileImage(message.user.id)} 
            alt={message.user.name} 
            className={`w-8 h-8 rounded-full border ${message.user.faction ? getFactionBorder(message.user.faction) : 'border-gray-700'} flex-shrink-0`}
          /> */}
          {message.user.faction && (
            <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full ${getFactionColor(message.user.faction)} ring-1 ring-black`} />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            {message.user.type !== 'viewer' && <Badge type={message.user.type} />}
            <Username user={message.user} />
            <span className="text-gray-500 text-xs">
              {message.timestamp}
            </span>
          </div>
          
          <div className="text-gray-200 mt-1 break-words relative">
            {message.content}
            {message.isHighlighted && (
              <div className="absolute inset-0 pointer-events-none -z-10 opacity-10 bg-gradient-to-r from-cyan-500/30 via-transparent to-transparent" />
            )}
          </div>
        </div>
        
        {isHovered && (
          <button 
            onClick={() => onReply(message)} 
            className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-cyan-400 hover:scale-110 transform duration-200"
          >
            <MessageCircleMore size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

// Helper functions for faction styling
const getFactionGradient = (faction) => {
  switch(faction) {
    case 'Arasaka': return 'after:from-blue-900 after:to-transparent';
    case 'Militech': return 'after:from-green-900 after:to-transparent';
    case 'Maelstrom': return 'after:from-red-900 after:to-transparent';
    case 'Tyger Claws': return 'after:from-yellow-900 after:to-transparent';
    case 'Mox': return 'after:from-pink-900 after:to-transparent';
    case 'Voodoo Boys': return 'after:from-purple-900 after:to-transparent';
    case 'Nomad': return 'after:from-orange-900 after:to-transparent';
    default: return '';
  }
};

const getFactionBorder = (faction) => {
  switch(faction) {
    case 'Arasaka': return 'border-blue-700';
    case 'Militech': return 'border-green-700';
    case 'Maelstrom': return 'border-red-700';
    case 'Tyger Claws': return 'border-yellow-700';
    case 'Mox': return 'border-pink-700';
    case 'Voodoo Boys': return 'border-purple-700';
    case 'Nomad': return 'border-orange-700';
    default: return 'border-gray-700';
  }
};

const getFactionColor = (faction) => {
  switch(faction) {
    case 'Arasaka': return 'bg-blue-500';
    case 'Militech': return 'bg-green-500';
    case 'Maelstrom': return 'bg-red-500';
    case 'Tyger Claws': return 'bg-yellow-500';
    case 'Mox': return 'bg-pink-500';
    case 'Voodoo Boys': return 'bg-purple-500';
    case 'Nomad': return 'bg-orange-500';
    default: return 'bg-gray-500';
  }
};

// Enhanced chat input component with cyberpunk styling
const ChatInput = ({ onSendMessage, replyingTo, onCancelReply, currentUser }) => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);
  
  useEffect(() => {
    if (replyingTo && inputRef.current) {
      inputRef.current.focus();
    }
  }, [replyingTo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message, replyingTo);
      setMessage('');
      setIsTyping(false);
    }
  };

  return (
    <div className="border-t border-gray-800 bg-gradient-to-r from-gray-900 to-black p-3 rounded-b-lg relative overflow-hidden">
      {/* Cyberpunk scan line effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={i} 
            className="h-px bg-cyan-400" 
            style={{ 
              marginTop: `${i * 10}px`,
              opacity: i % 2 === 0 ? 0.8 : 0.4
            }} 
          />
        ))}
      </div>
      
      {replyingTo && (
        <div className="flex items-center justify-between text-sm mb-2 p-2 bg-gray-800 bg-opacity-70 rounded border border-gray-700">
          <div className="flex items-center gap-2">
            <MessageCircleMore size={14} className="text-cyan-400" />
            <span className="text-gray-400">Replying to</span>
            <span className="text-cyan-400 font-medium">{replyingTo.user.name}</span>
          </div>
          <button 
            onClick={onCancelReply}
            className="text-gray-500 hover:text-white p-1 hover:bg-gray-700 rounded-full transition-all"
          >
            <X size={14} />
          </button>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        {/* <img 
          src={getProfileImage(currentUser.id)} 
          alt={currentUser.name} 
          className="w-8 h-8 rounded-full border border-gray-700 hidden sm:block"
        /> */}
        
        <div className="relative flex-1">
          <input 
            ref={inputRef}
            type="text" 
            value={message} 
            onChange={(e) => {
              setMessage(e.target.value);
              setIsTyping(e.target.value.length > 0);
            }} 
            placeholder={replyingTo ? `Reply to ${replyingTo.user.name}...` : "Send a message..."}
            className="w-full bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 placeholder-gray-500"
          />
          {isTyping && (
            <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 animate-pulse" style={{ width: `${Math.min(100, message.length * 2)}%` }} />
          )}
        </div>
        
        <button 
          type="submit" 
          disabled={!message.trim()}
          className={`p-2 rounded-md flex items-center justify-center transition-all duration-300 ${
            message.trim() 
              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-lg shadow-cyan-500/20' 
              : 'bg-gray-800 text-gray-500 cursor-not-allowed'
          }`}
        >
          <Send size={16} className={`${message.trim() ? 'animate-pulse' : ''}`} />
        </button>
      </form>
    </div>
  );
};

// Enhanced chat header component with more cyberpunk styling
const ChatHeader = ({ viewerCount, streamTitle }) => {
  // Add random "connection quality" blips
  const [connectionQuality, setConnectionQuality] = useState(100);
  
  useEffect(() => {
    const connectionInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        const newQuality = Math.max(70, 100 - Math.floor(Math.random() * 30));
        setConnectionQuality(newQuality);
        
        // Reset after a short time
        setTimeout(() => setConnectionQuality(100), 800);
      }
    }, 5000);
    
    return () => clearInterval(connectionInterval);
  }, []);

  return (
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
        <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Stream Chat</span>
      </div>
      <div className="flex items-center space-x-2 relative z-10">
        {/* <div className="flex items-center text-xs text-cyan-400 mr-2 bg-cyan-500/10 px-2 py-0.5 rounded font-mono border border-cyan-500/30">
          <Users size={10} />
          {viewerCount.toLocaleString()}
        </div> */}
        <button className="w-6 h-6 rounded flex items-center justify-center hover:bg-gray-700 transition-colors">
          <Settings size={14} />
        </button>
      </div>
    </div>
  );
};

// Enhanced chat status message component with more visual flair
const ChatStatusMessage = ({ content, type }) => {
  const classes = {
    'system': 'text-gray-500',
    'subscription': 'text-purple-400',
    'raid': 'text-pink-500',
    'cyberpsycho': 'text-red-500',
    'advertisement': 'text-yellow-500',
    'glitch': 'text-cyan-400'
  };
  
  const icons = {
    'system': <Radio size={12} className="inline mr-1 opacity-70" />,
    'subscription': <Star size={12} className="inline mr-1 opacity-70" />,
    'raid': <Users size={12}  />,
    'cyberpsycho': <AlertTriangle size={12} className="inline mr-1 opacity-70" />,
    'advertisement': <Eye size={12} className="inline mr-1 opacity-70" />,
    'glitch': <Cpu size={12} className="inline mr-1 opacity-70" />
  };
  
  // Add special styling for advertisements
  if (type === 'advertisement') {
    return (
      <div className="text-center py-2 px-3 my-1 border border-yellow-900/30 bg-yellow-900/10 rounded text-xs">
        {icons[type]}
        <span className="font-bold text-yellow-400">[SPONSORED] </span>
        {content}
      </div>
    );
  }
  
  // Add special styling for system warnings
  if (type === 'cyberpsycho') {
    return (
      <div className="text-center py-2 px-3 my-1 border border-red-900/30 bg-red-900/10 rounded text-xs animate-pulse">
        {icons[type]}
        <span className="font-bold">[ALERT] </span>
        {content}
      </div>
    );
  }
  
  // Add special styling for glitches
  if (type === 'glitch') {
    return (
      <div className="text-center py-2 px-3 my-1 font-mono text-xs">
        {icons[type]}
        <span className="opacity-70">{content.split('').map((char, i) => 
          Math.random() > 0.9 ? '_' : char
        ).join('')}</span>
      </div>
    );
  }
  
  return (
    <div className={`text-center text-xs py-2 ${classes[type]}`}>
      {icons[type]}
      {content}
    </div>
  );
};

// New component: User typing indicator
const TypingIndicator = ({ users }) => {
  if (users.length === 0) return null;
  
  return (
    <div className="text-xs text-gray-500 pb-1 pt-2 px-3 flex items-center gap-1">
      <div className="flex space-x-1">
        {Array.from({ length: 3 }).map((_, i) => (
          <div 
            key={i} 
            className="w-1 h-1 bg-cyan-500 rounded-full animate-bounce" 
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
      <span>
        {users.length === 1 
          ? `${users[0]} is typing...` 
          : `${users.length} choombas are typing...`}
      </span>
    </div>
  );
};

// New component: Users component
const Users = ({ size }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
};

// Enhanced main chat component with more cyberpunk features
const CyberpunkTwitchChat = () => {
  // Chat state
  const [messages, setMessages] = useState([]);
  const [replyingTo, setReplyingTo] = useState(null);
  const [typingUsers, setTypingUsers] = useState([]);
  const [networkGlitch, setNetworkGlitch] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Current user (you)
  const currentUser = {
    id: 'user-you',
    name: 'NeonRyder',
    type: 'subscriber',
    faction: 'Nomad'
  };
  
  // View count stats
  const [viewerCount, setViewerCount] = useState(4283);
  
  // Enhanced cyberpunk usernames
  const cyberpunkUsernames = [
    'ChromeSlash', 'NightCorpSpy', 'NetRunner77', 'EdgeLord2049', 
    'SynthWave_Kid', 'AraskaGhost', 'MilitechAgent', 'ZeroDay_Hax',
    'Blackhand_Elite', 'StreetSamurai', 'CyberPsycho', 'MaxTac_Officer',
    'DataThief', 'RipperDoc', 'NomadWanderer', 'CyberDecker',
    'PixelPunk', 'JackIn_JackOut', 'Silverhand_Fan', 'V_Original',
    'CyberwareJunkie', 'MaelstromMember', 'NeuralLink', 'GridHacker',
    'BitFlipper', 'ScreamingSamurai', 'NCityLocal', 'BrainDancer',
    'BiotechFreak', 'CyberNecro', 'SubdermalDriver', 'CorpoRat',
    'WetworkSpecialist', 'FlatlinedTwice', 'ChromeFinger', 'DeckWizard'
  ];
  
  // Generate random user with enhanced features
  const generateRandomUser = () => {
    const randomUserType = userTypes[Math.floor(Math.random() * userTypes.length)];
    const randomUsername = cyberpunkUsernames[Math.floor(Math.random() * cyberpunkUsernames.length)];
    // 50% chance to have a faction
    const hasFaction = Math.random() > 0.5;
    const randomFaction = hasFaction ? factions[Math.floor(Math.random() * factions.length)] : null;
    
    return {
      id: `user-${Math.random().toString(36).substring(2, 9)}`,
      name: randomUsername,
      type: randomUserType,
      faction: randomFaction
    };
  };
  
  // Enhanced chat message generation with more cyberpunk lingo
  const generateChatMessage = (isReply = false, replyTarget = null) => {
    const cyberpunkPhrases = [
      "Just jacked into a fresh NCorp database. Prime data, chooms!",
      "Anyone seen those new mantis blades at the ripperdoc on 5th?",
      "This stream is absolutely chrome, choomba!",
      "Got flatlined by Maelstrom again in Watson. Any fixers online?",
      "My new neural implant is glitching hard. Any techs around?",
      "That cyberpsycho on the corner of 7th and Main is wild!",
      "Corpos are tracking this stream, guaranteed.",
      "Just hit legendary on my netrunning skills. Who needs a quickhack?",
      "That new braindance from Japan is absolutely next level",
      "Anyone got spare eddies for a broke merc?",
      "This netwatch encryption is a joke lmao",
      "Got any leads on that missing AI construct?",
      "Night City's raining again... perfect netrunning weather",
      "Preem stream as always! Worth every eddie!",
      "These street stories are getting wilder every day",
      "Anyone else's optics glitching after the latest patch?",
      "That's some delta-grade content right there",
      "Someone just got zeroed outside my megabuilding",
      "Did you see that new cyberware commercial? Pure propaganda",
      "These Militech sellouts are everywhere now",
      "Got that new kiroshi eye upgrade. Vision's crisp AF",
      "Nova stream! Can we get a quick save point?",
      "My ripperdoc says I'm at 78% humanity. Still good right?",
      "Anyone else getting targeted Arasaka ads after watching?",
      "CHOOH2 prices just spiked again. Typical corpo move",
      "I'm so flatlined after that job in Pacifica last night",
      "Netrunning with these new ICE protocols is majorly borked",
      "Arasaka's new security drones are scanning everyone in Japantown",
      "Just installed a sandevistan. Everything's so delta slow now",
      "The ripper in Kabuki is doing wetware upgrades for half price",
      "Anyone wanna hit up the Afterlife later? First round's on me",
      "My cyberware is acting real glitchy during rain. Normal?",
      "Need to chrome up before hitting the badlands tomorrow",
      "Who's got intel on that new black market tech from Orbital Air?",
      "These scavs are getting more aggressive in Northside",
      "Just witnessed MaxTac zero a whole group in seconds. Brutal.",
      "My optics can see through that corpo propaganda now",
      "The new Trauma Team response times are delta fast",
      "This choom's streaming straight from a Militech VPN",
      "My cyberdeck just fried during a netrun. Need new hardware ASAP"
    ];
    
    // Enhanced reply phrases
    const replyPhrases = [
      "Yeah I totally agree with you on that one",
      "Not sure that's right, choom",
      "Big facts right there!",
      "That's nova thinking!",
      "You're out of your mind with that take",
      "This gonk doesn't know what they're talking about",
      "Absolutely preem point",
      "I was just about to say the same thing",
      "Hard disagree but respect your take",
      "That's some delta-grade thinking right there",
      "You're channeling Johnny Silverhand with that attitude",
      "Now that's a hot take if I've ever seen one",
      "Your chrome must be malfunctioning to think that",
      "You broadcasting on all channels with that kind of intel",
      "Spoken like a true corpo rat",
      "That's the kind of thinking that'll get you flatlined",
      "Ice cold take, but respect the boldness",
      "Your neural pathways are firing on all cylinders",
      "Stop spreading disinfo on the net, choom",
      "Your brain dance is glitching if you believe that"
    ];
    
    let content = isReply
      ? replyPhrases[Math.floor(Math.random() * replyPhrases.length)]
      : cyberpunkPhrases[Math.floor(Math.random() * cyberpunkPhrases.length)];
      
    // Enhanced emotes with better cyberpunk theme
    const cyberpunkEmotes = [
      "<ChipBurn>", "<FlatlinedAgain>", "<ChromeTime>", "<NetrunnerPog>", 
      "<V_Shock>", "<JohnnyRage>", "<MaxTacAlert>", "<EddieDance>", 
      "<RipperDoc>", "<CyberGlitch>", "<NCorpLogo>", "<FlatlinedF>", 
      "<MaelstromEyes>", "<JackIn>", "<BrainDance>", "<ChromedOut>"
    ];
    
    if (Math.random() > 0.65) {
      const randomEmote = cyberpunkEmotes[Math.floor(Math.random() * cyberpunkEmotes.length)];
      content = Math.random() > 0.5? `${content} ${randomEmote}` : `${randomEmote} ${content}`;
    }
      
    return {
      id: `msg-${Math.random().toString(36).substring(2, 9)}`,
      user: generateRandomUser(),
      content: content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isHighlighted: Math.random() > 0.9,
      isReply: isReply,
      replyingTo: isReply ? replyTarget.user.name : null
    };
  };
  
  // Enhanced status message function with more cyberpunk-themed events
  const generateStatusMessage = () => {
    const statusTypes = ['subscription', 'raid', 'system', 'cyberpsycho', 'advertisement', 'glitch'];
    const type = statusTypes[Math.floor(Math.random() * statusTypes.length)];
    
    let content = '';
    switch (type) {
      case 'subscription':
        const subUser = cyberpunkUsernames[Math.floor(Math.random() * cyberpunkUsernames.length)];
        const tier = userTiers[Math.floor(Math.random() * userTiers.length)];
        const months = Math.floor(Math.random() * 24) + 1;
        content = months > 1 
          ? `${subUser} just resubscribed for ${months} months with a ${tier} sub!` 
          : `${subUser} just subscribed with a ${tier} sub!`;
        break;
      case 'raid':
        const raidUser = cyberpunkUsernames[Math.floor(Math.random() * cyberpunkUsernames.length)];
        const raidCount = Math.floor(Math.random() * 100) + 5;
        content = `${raidUser} raided with a party of ${raidCount}!`;
        break;
      case 'cyberpsycho':
        const locations = ['Watson', 'Westbrook', 'Heywood', 'Santo Domingo', 'Pacifica', 'City Center', 'Badlands'];
        const randomLocation = locations[Math.floor(Math.random() * locations.length)];
        content = `Cyberpsycho detected in ${randomLocation}! Trauma Team and MaxTac responding.`;
        break;
      case 'advertisement':
        const ads = [
          "Militech's new 'Peacekeeper' - Protection you can trust. Available at licensed vendors.",
          "Feeling down? Try Raven Microcyb's new mood regulation implant. Side effects may include...",
          "Need cash fast? Tiger Claws Lending - 'We always collect what we're owed'",
          "Arasaka Security - 'Your life in capable hands' - Now hiring in all districts",
          "Kiroshi Optics - See what others can't - New X20 model now available",
          "Trauma Team Platinum - 'Your life is worth it' - Sign up today for instant coverage"
        ];
        content = ads[Math.floor(Math.random() * ads.length)];
        break;
      case 'glitch':
        const glitches = [
          "NetWatch interference detected. Rerouting connection...",
          "Neural synchronization error. Recalibrating stream protocols...",
          "WARNING: Security scan in progress. Masking user signatures...",
          "Corrupted data packets detected. Applying error correction...",
          "Signal intrusion attempt blocked. Firewall holding."
        ];
        content = glitches[Math.floor(Math.random() * glitches.length)];
        break;
      default:
        content = 'Chat rules: Keep it chrome and respect your choombas!';
    }
    
    return {
      id: `status-${Math.random().toString(36).substring(2, 9)}`,
      type,
      content
    };
  };
  
  // Initialize chat with enhanced messages
  useEffect(() => {
    const initialMessages = [];
    
    // Start with a system message
    initialMessages.push({
      id: 'status-init',
      type: 'system',
      content: 'Welcome to Night City Underground! Keep it chrome and respect your choombas!'
    });
    
    // Add initial chat messages
    for (let i = 0; i < 8; i++) {
      initialMessages.push(generateChatMessage());
    }

    setMessages(initialMessages);
    
    // Set up auto-message adding with enhanced randomness
    const messageInterval = setInterval(() => {
      setMessages(prevMessages => {
        // 20% chance of reply to random message if there are enough messages
        const shouldReply = Math.random() > 0.8 && prevMessages.filter(m => !m.type).length > 3;
        let newMessage;
        
        if (shouldReply) {
          // Get a random non-status message to reply to
          const regularMessages = prevMessages.filter(m => !m.type);
          const targetMessage = regularMessages[Math.floor(Math.random() * regularMessages.length)];
          newMessage = generateChatMessage(true, targetMessage);
        } else {
          // Increased chance of status message (20%)
          newMessage = Math.random() > 0.8 
            ? generateStatusMessage() 
            : generateChatMessage();
        }
        
        return [...prevMessages, newMessage].slice(-40);
      });
      
      // Randomly increase or decrease viewer count
      setViewerCount(prev => {
        const change = Math.floor(Math.random() * 10) - 4;
        return Math.max(1000, prev + change);
      });
      
      // Random chance to simulate typing users
      if (Math.random() > 0.8) {
        const randomTypers = [];
        const numTypers = Math.floor(Math.random() * 3) + 1;
        
        for (let i = 0; i < numTypers; i++) {
          randomTypers.push(cyberpunkUsernames[Math.floor(Math.random() * cyberpunkUsernames.length)]);
        }
        
        setTypingUsers(randomTypers);
        
        // Clear typing indicator after random time
        setTimeout(() => {
          setTypingUsers([]);
        }, Math.random() * 3000 + 1000);
      }
      
      // Occasional network glitch effect
      if (Math.random() > 0.95) {
        setNetworkGlitch(true);
        setTimeout(() => setNetworkGlitch(false), 1000);
      }
    }, 2500);
    
    return () => clearInterval(messageInterval);
  }, []);
  
  // Scroll to bottom when new messages come in
  // useEffect(() => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  // }, [messages]);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);
  
  
  // Send message handler
  const handleSendMessage = (content, replyTarget) => {
    const newMessage = {
      id: `msg-${Math.random().toString(36).substring(2, 9)}`,
      user: currentUser,
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isHighlighted: false,
      isReply: !!replyTarget,
      replyingTo: replyTarget ? replyTarget.user.name : null
    };
    
    setMessages(prev => [...prev, newMessage].slice(-40));
    setReplyingTo(null);
  };
  
  // Handle reply
  const handleReply = (message) => {
    setReplyingTo(message);
  };
  
  // Render different message types
  const renderMessage = (message) => {
    if (message.type) {
      return <ChatStatusMessage key={message.id} content={message.content} type={message.type} />;
    } else {
      return (
        <ChatMessage 
          key={message.id} 
          message={message} 
          onReply={handleReply} 
        />
      );
    }
  };
  
  return (
    
      <div className={`w-full text-[14px] max-w-md md:max-w-lg h-[800px] flex flex-col rounded-lg border border-gray-800 overflow-hidden shadow-lg shadow-purple-900/20 relative ${networkGlitch ? 'animate-pulse' : ''}`}>
        {/* Enhanced cyberpunk overlays for aesthetic */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-cyan-900/5" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-40" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-40" />
          <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-40" />
          <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-pink-500 to-transparent opacity-40" />
          
          {/* Enhanced scan lines effect */}
          <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none">
            {Array.from({ length: 50 }).map((_, i) => (
              <div 
                key={i} 
                className="h-px bg-cyan-400" 
                style={{ 
                  marginTop: `${i * 12}px`,
                  opacity: i % 2 === 0 ? 0.5 : 0.3
                }} 
              />
            ))}
          </div>
          
          {/* Digital noise overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxmaWx0ZXIgaWQ9Im5vaXNlIj4KICAgIDxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjg1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+CiAgICA8ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+CiAgPC9maWx0ZXI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4wMiIvPgo8L3N2Zz4=')] pointer-events-none"></div>
          
          {/* Edge glow effect */}
          {networkGlitch && (
            <div className="absolute inset-0 border border-red-500 opacity-20"></div>
          )}
        </div>
      
        {/* Chat Header */}
        <ChatHeader viewerCount={viewerCount} streamTitle="Night City Underground" />
        
        {/* Chat Messages */}
        <div
          ref={containerRef}
          className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-900 to-black p-1 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
        >
          <div className="space-y-1">
            {messages.map(renderMessage)}
            {typingUsers.length > 0 && <TypingIndicator users={typingUsers} />}
          </div>
        </div>
        
        {/* Chat Input */}
        <ChatInput 
          onSendMessage={handleSendMessage} 
          replyingTo={replyingTo} 
          onCancelReply={() => setReplyingTo(null)}
          currentUser={currentUser}
        />
      </div>

  );
};

export default CyberpunkTwitchChat;