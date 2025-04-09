// Function to generate random chat messages
export function generateRandomMessage() {
  const users = [
    { name: "CyberNinja", badge: "VIP", isModerator: false },
    { name: "NeonRider42", badge: "Subscriber", isModerator: false },
    { name: "QuantumGamer", badge: null, isModerator: false },
    { name: "SynthWave", badge: "Subscriber", isModerator: false },
    { name: "ByteForce", badge: null, isModerator: false },
    { name: "ElectricDreamer", badge: "Subscriber", isModerator: false },
    { name: "LaserPulse", badge: "VIP", isModerator: false },
    { name: "DataStream", badge: null, isModerator: false },
    { name: "CyberMod", badge: "Moderator", isModerator: true },
    { name: "PixelProwler", badge: "Subscriber", isModerator: false },
    { name: "GlitchGuardian", badge: null, isModerator: false },
    { name: "BinaryBlade", badge: "Subscriber", isModerator: false }
  ];

  const messages = [
    "Nice play!",
    "LOL what was that?",
    "GG",
    "That was insane!",
    "I can't believe you pulled that off",
    "👾👾👾",
    "Is the new update live yet?",
    "How long have you been streaming?",
    "What's your build?",
    "That boss is impossible",
    "Anyone else having lag issues?",
    "First time catching the stream, loving it!",
    "What's your sensitivity settings?",
    "Can you show your loadout?",
    "This is epic 🔥",
    "I tried that yesterday and got destroyed",
    "Clutch move right there",
    "💀💀💀",
    "Let's goooooo!",
    "Have you tried the new character?",
    "You're cracked at this game!",
    "That's some 200 IQ play",
    "F in the chat",
    "That was so close",
    "Will you be streaming tomorrow?",
    "Do you have a YouTube channel?",
    "How long did it take you to get this good?",
    "This boss took me like 20 tries",
    "🚀🚀🚀",
    "Sheeeesh",
    "No way!",
    "What build are you running?",
    "Can you play the new map next?",
    "Thanks for the tips!",
  ];

  const randomUser = users[Math.floor(Math.random() * users.length)];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  const randomCredits = Math.random() > 0.92 ? Math.floor(Math.random() * 500) + 50 : 0;

  return {
    id: Date.now() + Math.random().toString(36).substring(2, 9),
    name: randomUser.name,
    message: randomMessage,
    badge: randomUser.badge,
    isModerator: randomUser.isModerator,
    timestamp: new Date(),
    credits: randomCredits
  };
}

// Hook to implement auto-chat functionality
export function useAutoChat(initialMessages = []) {
  const [chatMessages, setChatMessages] = useState(initialMessages);
  const [isAutoChatting, setIsAutoChatting] = useState(false);
  const [chatFrequency, setChatFrequency] = useState(2000); // milliseconds between messages
  const [chatVariation, setChatVariation] = useState(1500); // random variation in timing
  
  // Add a single message to chat
  const addMessage = useCallback((message) => {
    setChatMessages(prevMessages => {
      // Keep only the last 100 messages to prevent excessive memory use
      const newMessages = [...prevMessages, message];
      if (newMessages.length > 100) {
        return newMessages.slice(-100);
      }
      return newMessages;
    });
  }, []);

  // Handle sending a user message
  const sendUserMessage = useCallback((text, username = "You") => {
    if (!text.trim()) return;
    
    addMessage({
      id: Date.now() + Math.random().toString(36).substring(2, 9),
      name: username,
      message: text,
      badge: "Streamer",
      isModerator: true,
      timestamp: new Date(),
      credits: 0
    });
  }, [addMessage]);

  // Auto chat functionality
  useEffect(() => {
    let chatInterval;
    
    if (isAutoChatting) {
      const scheduleNextMessage = () => {
        // Random delay between messages for natural feel
        const nextDelay = chatFrequency + (Math.random() * chatVariation - chatVariation/2);
        
        chatInterval = setTimeout(() => {
          addMessage(generateRandomMessage());
          scheduleNextMessage();
        }, nextDelay);
      };
      
      scheduleNextMessage();
    }
    
    return () => {
      if (chatInterval) clearTimeout(chatInterval);
    };
  }, [isAutoChatting, chatFrequency, chatVariation, addMessage]);

  // Generate burst of messages
  const generateMessageBurst = useCallback((count = 5) => {
    const burst = Array(count).fill().map(() => generateRandomMessage());
    setChatMessages(prev => [...prev, ...burst].slice(-100));
  }, []);

  // Toggle auto chat on/off
  const toggleAutoChat = useCallback(() => {
    setIsAutoChatting(prev => !prev);
  }, []);

  return {
    chatMessages,
    addMessage,
    sendUserMessage,
    isAutoChatting,
    toggleAutoChat,
    setChatFrequency,
    setChatVariation,
    generateMessageBurst
  };
}

function useState(initialMessages: never[]): [any, any] {
    throw new Error("Function not implemented.");
}


function useCallback(arg0: (message: any) => void, arg1: never[]) {
    throw new Error("Function not implemented.");
}


function useEffect(arg0: () => () => void, arg1: any[]) {
    throw new Error("Function not implemented.");
}
