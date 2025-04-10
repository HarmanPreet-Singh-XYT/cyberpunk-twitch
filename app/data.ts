// cyberpunk-twitch-dummy-data.ts

// Base Types
// interface User {
//     id: string;
//     name: string;
//     avatar: string;
//     followers: number;
//     isVerified: boolean;
//     isVIP: boolean;
//     isEncrypted: boolean;
//     isOnline: boolean;
//     lastSeen?: string;
//     userSince: string;
//     level: number;
//     xp: number;
//     rank: string;
//     description: string;
//     skills: {
//       neuralInterface: number;
//       codeInjection: number;
//       netrunning: number;
//       securityBypass: number;
//       malwareCreation: number;
//     };
//   }
  
//   interface Channel {
//     id: string;
//     userId: string;
//     game?: string;
//     description: string;
//     isLive: boolean;
//     isNew: boolean;
//     viewers: number;
//     followers: number;
//     totalViews: number;
//     isStable: boolean;
//     isSecure: boolean;
//     chatMode: "public" | "follower" | "subscriber" | "encrypted";
//     isSlowMode: boolean;
//     channelAge: string;
//     contentRating: "E" | "T" | "M" | "A" | "X";
//     trustScore: number;
//     credits: number;
//     subscriptions: number;
//     rules: {
//       title: string;
//       description: string;
//     }[];
//   }
  
//   interface Stream {
//     id: string;
//     thumbnail:string;
//     channelId: string;
//     title: string;
//     game: string;
//     viewers: number;
//     startedAt: string;
//     duration: string;
//     tags: string[];
//     securityLevel: "Low" | "Medium" | "High" | "Extreme";
//     quality: string;
//     ping: number;
//     signalQuality: number;
//   }
  
  interface Video {
    id: string;
    channelId: string;
    title: string;
    thumbnail: string;
    duration: string;
    views: number;
    createdAt: string;
    game: string;
    tags: string[];
  }
  
  interface Clip {
    id: string;
    videoId: string;
    channelId: string;
    title: string;
    thumbnail: string;
    duration: string;
    views: number;
    createdAt: string;
    likes: number;
    comments: number;
    shares: number;
    description: string;
    game: string;
    resolution: string;
    ratings: {
      graphics: number;
      movement: number;
      netrunning: number;
      combat: number;
    };
  }
  
  interface Category {
    id: string;
    name: string;
    thumbnail: string;
    viewers: number;
    totalChannels: number;
    isTrending: boolean;
    isOfficial: boolean;
    isNew: boolean;
    isRetro: boolean;
    tags: string[];
  }
  
  interface Comment {
    id: string;
    userId: string;
    clipId: string;
    content: string;
    createdAt: string;
    likes: number;
    isPro: boolean;
    isSecure: boolean;
  }
  
  interface StatusUpdate {
    id: string;
    userId: string;
    content: string;
    createdAt: string;
    likes: number;
    comments: number;
  }
  
  // Define the types
interface User {
  id: string;
  name: string;
  avatar: string;
  followers: number;
  isVerified: boolean;
  isVIP: boolean;
  isEncrypted: boolean;
  isOnline: boolean;
  lastSeen?: string;
  userSince: string;
  level: number;
  xp: number;
  rank: string;
  description: string;
  skills: {
    neuralInterface: number;
    codeInjection: number;
    netrunning: number;
    securityBypass: number;
    malwareCreation: number;
  };
}

interface Channel {
  id: string;
  userId: string;
  game?: string;
  description: string;
  isLive: boolean;
  isNew: boolean;
  viewers: number;
  followers: number;
  totalViews: number;
  isStable: boolean;
  isSecure: boolean;
  chatMode: "public" | "follower" | "subscriber" | "encrypted";
  isSlowMode: boolean;
  channelAge: string;
  contentRating: "E" | "T" | "M" | "A" | "X";
  trustScore: number;
  credits: number;
  subscriptions: number;
  rules: {
    title: string;
    description: string;
  }[];
  // Additional fields (optional)
  name?: string;
  handle?: string;
  banner?: string;
  logo?: string;
  activeStream?: string;
  verified?: boolean;
  partnered?: boolean;
  category?: string;
  languages?: string[];
  schedule?: Record<string, string | null>;
  socialLinks?: Record<string, string>;
}

interface Stream {
  id: string;
  thumbnail: string;
  channelId: string;
  title: string;
  game: string;
  viewers: number;
  startedAt: string;
  duration: string;
  tags: string[];
  securityLevel: "Low" | "Medium" | "High" | "Extreme";
  quality: string;
  ping: number;
  signalQuality: number;
}

// User data
const users: User[] = [
    {
      id: "u1",
      name: "Ninja",
      avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/90d40495-f467-4911-9035-72d8d10a49c5-profile_image-150x150.png",
      followers: 18500000,
      isVerified: true,
      isVIP: true,
      isEncrypted: true,
      isOnline: true,
      lastSeen: "Just now",
      userSince: "2011-03-15",
      level: 87,
      xp: 438950,
      rank: "Legend",
      description: "Professional Fortnite player, content creator, and Red Bull athlete.",
      skills: {
        neuralInterface: 92,
        codeInjection: 85,
        netrunning: 94,
        securityBypass: 88,
        malwareCreation: 90
      }
    },
    {
      id: "u2",
      name: "xQc",
      avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/xqc-profile_image-9298dca608632101-150x150.jpeg",
      followers: 11500000,
      isVerified: true,
      isVIP: true,
      isEncrypted: true,
      isOnline: true,
      lastSeen: "Just now",
      userSince: "2014-08-22",
      level: 72,
      xp: 289560,
      rank: "Master",
      description: "Variety streamer, former Overwatch pro, entertainment specialist",
      skills: {
        neuralInterface: 87,
        codeInjection: 82,
        netrunning: 90,
        securityBypass: 85,
        malwareCreation: 83
      }
    },
    {
      id: "u3",
      name: "Pokimane",
      avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/6cd4de40-1a83-46c7-aea5-3bd73f90e7e4-profile_image-150x150.png",
      followers: 9200000,
      isVerified: true,
      isVIP: true,
      isEncrypted: true,
      isOnline: true,
      lastSeen: "Just now",
      userSince: "2013-01-30",
      level: 65,
      xp: 214050,
      rank: "Elite",
      description: "Content creator, co-founder of OfflineTV, variety streamer",
      skills: {
        neuralInterface: 89,
        codeInjection: 80,
        netrunning: 86,
        securityBypass: 84,
        malwareCreation: 78
      }
    },
    {
      id: "u4",
      name: "NICKMERCS",
      avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/b3c347ed-1a7a-40a2-8bee-8a7c4426eb33-profile_image-70x70.png",
      followers: 6500000,
      isVerified: true,
      isVIP: true,
      isEncrypted: true,
      isOnline: true,
      lastSeen: "Just now",
      userSince: "2011-11-05",
      level: 58,
      xp: 178920,
      rank: "Veteran",
      description: "FaZe Clan, competitive CoD/Apex player, fitness enthusiast",
      skills: {
        neuralInterface: 85,
        codeInjection: 75,
        netrunning: 82,
        securityBypass: 80,
        malwareCreation: 77
      }
    },
    {
      id: "u5",
      name: "Shroud",
      avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-150x150.png",
      followers: 10200000,
      isVerified: true,
      isVIP: true,
      isEncrypted: true,
      isOnline: true,
      lastSeen: "Just now",
      userSince: "2012-05-18",
      level: 95,
      xp: 527840,
      rank: "Immortal",
      description: "Former CS:GO pro, FPS god, variety gaming content creator",
      skills: {
        neuralInterface: 98,
        codeInjection: 93,
        netrunning: 97,
        securityBypass: 95,
        malwareCreation: 92
      }
    },
    {
      id: "u6",
      name: "Amouranth",
      avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/7f349bf3-ada7-4486-a0f1-a6e055b68fca-profile_image-150x150.png",
      followers: 6300000,
      isVerified: true,
      isVIP: true,
      isEncrypted: true,
      isOnline: true,
      lastSeen: "Just now",
      userSince: "2016-07-13",
      level: 61,
      xp: 195720,
      rank: "Elite",
      description: "Content creator, entrepreneur, variety streamer",
      skills: {
        neuralInterface: 84,
        codeInjection: 79,
        netrunning: 83,
        securityBypass: 81,
        malwareCreation: 80
      }
    },
    {
      id: "u7",
      name: "TimTheTatman",
      avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/7dcd89d5-6700-4b05-b9c9-c7dac61c32db-profile_image-70x70.png",
      followers: 7000000,
      isVerified: true,
      isVIP: true,
      isEncrypted: true,
      isOnline: true,
      lastSeen: "Just now",
      userSince: "2012-02-28",
      level: 70,
      xp: 267890,
      rank: "Master",
      description: "Content creator, variety gamer, entertainment specialist",
      skills: {
        neuralInterface: 86,
        codeInjection: 81,
        netrunning: 85,
        securityBypass: 82,
        malwareCreation: 80
      }
    },
    {
      id: "u8",
      name: "Tfue",
      avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/82b63a01-628f-4c81-9b05-dd3a5011fdda-profile_image-150x150.png",
      followers: 11000000,
      isVerified: true,
      isVIP: true,
      isEncrypted: true,
      isOnline: true,
      lastSeen: "Just now",
      userSince: "2014-09-07",
      level: 82,
      xp: 397430,
      rank: "Legend",
      description: "Professional Fortnite player, competitive gamer, content creator",
      skills: {
        neuralInterface: 90,
        codeInjection: 85,
        netrunning: 92,
        securityBypass: 87,
        malwareCreation: 88
      }
    },
    {
      id: "u9",
      name: "Valkyrae",
      avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/d106e6cbf2483610-profile_image-150x150.png",
      followers: 5800000,
      isVerified: true,
      isVIP: true,
      isEncrypted: true,
      isOnline: true,
      lastSeen: "Just now",
      userSince: "2014-12-10",
      level: 63,
      xp: 204370,
      rank: "Elite",
      description: "Content creator, co-owner of 100 Thieves, variety streamer",
      skills: {
        neuralInterface: 83,
        codeInjection: 78,
        netrunning: 84,
        securityBypass: 82,
        malwareCreation: 79
      }
    },
    {
      id: "u10",
      name: "DrDisrespect",
      avatar: "https://yt3.ggpht.com/_0_SuenjzMocr2OTOHbGjEin5FcHOy-vRroLcEZtj0WfUMEQXVQqbtEuRaa-tIewyjbAkffR=s176-c-k-c0x00ffffff-no-rj-mo",
      followers: 8700000,
      isVerified: true,
      isVIP: true,
      isEncrypted: true,
      isOnline: true,
      lastSeen: "Just now",
      userSince: "2010-09-22",
      level: 78,
      xp: 342680,
      rank: "Legend",
      description: "The Two-Time, FPS specialist, entertainer extraordinaire",
      skills: {
        neuralInterface: 89,
        codeInjection: 84,
        netrunning: 91,
        securityBypass: 86,
        malwareCreation: 88
      }
    }
];

// Channel data
const channels: Channel[] = [
    {
      id: "c1",
      userId: "u1",
      game: "Fortnite",
      description: "Professional Fortnite player and content creator. Red Bull athlete and top-tier competitor.",
      isLive: true,
      isNew: false,
      viewers: 127352,
      followers: 18500000,
      totalViews: 2453000000,
      isStable: true,
      isSecure: true,
      chatMode: "subscriber",
      isSlowMode: true,
      channelAge: "14 years",
      contentRating: "T",
      trustScore: 98,
      credits: 12500000,
      subscriptions: 5700000,
      rules: [
        {
          title: "No Hate Speech",
          description: "Any form of hate speech results in permanent ban"
        },
        {
          title: "Family Friendly",
          description: "Keep it PG, be respectful to everyone"
        },
        {
          title: "No Self Promotion",
          description: "Don't advertise your channel or other content"
        }
      ],
      // Additional fields
      name: "Ninja",
      handle: "@Ninja",
      banner: "/assets/banners/ninja_banner.jpg",
      logo: "/assets/logos/ninja_logo.png",
      activeStream: "s1",
      verified: true,
      partnered: true,
      category: "Gaming",
      languages: ["English"],
      schedule: {
        monday: "12:00 - 20:00 EST",
        tuesday: "12:00 - 20:00 EST",
        wednesday: "12:00 - 20:00 EST",
        thursday: "12:00 - 20:00 EST",
        friday: "12:00 - 22:00 EST",
        saturday: "14:00 - 22:00 EST",
        sunday: "14:00 - 20:00 EST"
      },
      socialLinks: {
        twitter: "https://twitter.com/Ninja",
        instagram: "https://instagram.com/ninja",
        youtube: "https://youtube.com/ninja",
        tiktok: "https://tiktok.com/@ninja"
      }
    },
    {
      id: "c2",
      userId: "u2",
      game: "Just Chatting",
      description: "Variety streamer, former Overwatch pro. High energy entertainment and gaming.",
      isLive: true,
      isNew: false,
      viewers: 83921,
      followers: 11500000,
      totalViews: 1875000000,
      isStable: true,
      isSecure: true,
      chatMode: "follower",
      isSlowMode: false,
      channelAge: "10 years",
      contentRating: "M",
      trustScore: 89,
      credits: 9800000,
      subscriptions: 4200000,
      rules: [
        {
          title: "Spam Limit",
          description: "Excessive emote spam will result in timeout"
        },
        {
          title: "English Only",
          description: "Chat must be in English for moderation"
        }
      ],
      // Additional fields
      name: "xQc",
      handle: "@xQc",
      banner: "/assets/banners/xqc_banner.jpg",
      logo: "/assets/logos/xqc_logo.png",
      activeStream: "s2",
      verified: true,
      partnered: true,
      category: "Variety",
      languages: ["English", "French"],
      schedule: {
        monday: "Late Night EST",
        tuesday: "Late Night EST",
        wednesday: "Late Night EST",
        thursday: "Late Night EST",
        friday: "Late Night EST",
        saturday: "Late Night EST",
        sunday: "Late Night EST"
      },
      socialLinks: {
        twitter: "https://twitter.com/xQc",
        youtube: "https://youtube.com/xqcow",
        discord: "https://discord.gg/xqcow"
      }
    },
    {
      id: "c3",
      userId: "u3",
      game: "VALORANT",
      description: "Content creator, co-founder of OfflineTV. Variety gaming and lifestyle content.",
      isLive: true,
      isNew: false,
      viewers: 35267,
      followers: 9200000,
      totalViews: 1320000000,
      isStable: true,
      isSecure: true,
      chatMode: "follower",
      isSlowMode: true,
      channelAge: "11 years",
      contentRating: "T",
      trustScore: 94,
      credits: 8200000,
      subscriptions: 3800000,
      rules: [
        {
          title: "Be Respectful",
          description: "Treat everyone with respect and kindness"
        },
        {
          title: "No Backseat Gaming",
          description: "Don't tell me how to play unless asked"
        },
        {
          title: "Positive Vibes Only",
          description: "Keep chat a positive and welcoming place"
        }
      ],
      // Additional fields
      name: "Pokimane",
      handle: "@pokimane",
      banner: "/assets/banners/pokimane_banner.jpg",
      logo: "/assets/logos/pokimane_logo.png",
      activeStream: "s3",
      verified: true,
      partnered: true,
      category: "Variety",
      languages: ["English"],
      schedule: {
        monday: null,
        tuesday: "15:00 - 21:00 PST",
        wednesday: "15:00 - 21:00 PST",
        thursday: "15:00 - 21:00 PST",
        friday: "15:00 - 23:00 PST",
        saturday: null,
        sunday: "15:00 - 21:00 PST"
      },
      socialLinks: {
        twitter: "https://twitter.com/pokimanelol",
        instagram: "https://instagram.com/pokimanelol",
        youtube: "https://youtube.com/pokimane",
        tiktok: "https://tiktok.com/@pokimane"
      }
    },
    {
      id: "c4",
      userId: "u4",
      game: "Apex Legends",
      description: "FaZe Clan member, competitive CoD/Apex player and fitness enthusiast.",
      isLive: true,
      isNew: false,
      viewers: 45782,
      followers: 6500000,
      totalViews: 980000000,
      isStable: true,
      isSecure: true,
      chatMode: "subscriber",
      isSlowMode: true,
      channelAge: "13 years",
      contentRating: "M",
      trustScore: 92,
      credits: 6000000,
      subscriptions: 2900000,
      rules: [
        {
          title: "MFAM Rules",
          description: "Respect the MFAM family and community at all times"
        },
        {
          title: "No Politics",
          description: "Keep political discussions out of chat"
        }
      ],
      // Additional fields
      name: "NICKMERCS",
      handle: "@NICKMERCS",
      banner: "/assets/banners/nickmercs_banner.jpg",
      logo: "/assets/logos/nickmercs_logo.png",
      activeStream: "s4",
      verified: true,
      partnered: true,
      category: "FPS",
      languages: ["English"],
      schedule: {
        monday: "09:00 - 15:00 EST",
        tuesday: "09:00 - 15:00 EST",
        wednesday: "09:00 - 15:00 EST",
        thursday: "09:00 - 15:00 EST",
        friday: "09:00 - 15:00 EST",
        saturday: null,
        sunday: null
      },
      socialLinks: {
        twitter: "https://twitter.com/NICKMERCS",
        instagram: "https://instagram.com/nickmercs",
        youtube: "https://youtube.com/NICKMERCS",
        facebook: "https://facebook.com/NickMercsFPS"
      }
    },
    {
      id: "c5",
      userId: "u5",
      game: "VALORANT",
      description: "Former CS:GO pro, FPS expert and mechanical aim god.",
      isLive: true,
      isNew: false,
      viewers: 215639,
      followers: 10200000,
      totalViews: 1750000000,
      isStable: true,
      isSecure: true,
      chatMode: "follower",
      isSlowMode: false,
      channelAge: "12 years",
      contentRating: "T",
      trustScore: 99,
      credits: 9500000,
      subscriptions: 4500000,
      rules: [
        {
          title: "No Backseat Gaming",
          description: "Let Shroud play his own way"
        },
        {
          title: "Respect Other Viewers",
          description: "Be civil and respectful to everyone in chat"
        }
      ],
      // Additional fields
      name: "shroud",
      handle: "@shroud",
      banner: "/assets/banners/shroud_banner.jpg",
      logo: "/assets/logos/shroud_logo.png",
      activeStream: "s5",
      verified: true,
      partnered: true,
      category: "FPS",
      languages: ["English"],
      schedule: {
        monday: "14:00 - 22:00 PST",
        tuesday: "14:00 - 22:00 PST",
        wednesday: "14:00 - 22:00 PST",
        thursday: "14:00 - 22:00 PST",
        friday: "14:00 - 22:00 PST",
        saturday: "14:00 - 22:00 PST",
        sunday: "14:00 - 22:00 PST"
      },
      socialLinks: {
        twitter: "https://twitter.com/shroud",
        youtube: "https://youtube.com/shroud",
        discord: "https://discord.gg/shroud"
      }
    },
    {
      id: "c6",
      userId: "u6",
      game: "Just Chatting",
      description: "Content creator, entrepreneur, and variety streamer.",
      isLive: true,
      isNew: false,
      viewers: 27894,
      followers: 6300000,
      totalViews: 895000000,
      isStable: true,
      isSecure: true,
      chatMode: "encrypted",
      isSlowMode: true,
      channelAge: "8 years",
      contentRating: "A",
      trustScore: 87,
      credits: 5800000,
      subscriptions: 2500000,
      rules: [
        {
          title: "18+ Content",
          description: "This channel features content for adults only"
        },
        {
          title: "No Creepy Comments",
          description: "Inappropriate comments will result in ban"
        },
        {
          title: "No Demanding Content",
          description: "Don't tell the streamer what to do or wear"
        }
      ],
      // Additional fields
      name: "Amouranth",
      handle: "@Amouranth",
      banner: "/assets/banners/amouranth_banner.jpg",
      logo: "/assets/logos/amouranth_logo.png",
      activeStream: "s6",
      verified: true,
      partnered: true,
      category: "Just Chatting",
      languages: ["English"],
      schedule: {
        monday: "Variable Hours",
        tuesday: "Variable Hours",
        wednesday: "Variable Hours",
        thursday: "Variable Hours",
        friday: "Variable Hours",
        saturday: "Variable Hours",
        sunday: "Variable Hours"
      },
      socialLinks: {
        twitter: "https://twitter.com/Amouranth",
        instagram: "https://instagram.com/amouranth",
        youtube: "https://youtube.com/Amouranth",
        tiktok: "https://tiktok.com/@amouranth"
      }
    },
    {
      id: "c7",
      userId: "u7",
      game: "Call of Duty: Warzone",
      description: "Content creator, variety gamer, and entertainment specialist.",
      isLive: true,
      isNew: false,
      viewers: 62934,
      followers: 7000000,
      totalViews: 1125000000,
      isStable: true,
      isSecure: true,
      chatMode: "follower",
      isSlowMode: false,
      channelAge: "13 years",
      contentRating: "M",
      trustScore: 94,
      credits: 6500000,
      subscriptions: 3100000,
      rules: [
        {
          title: "Tatman Rules",
          description: "Keep it civil, no excessive negativity"
        },
        {
          title: "Respect the Mods",
          description: "Mod decisions are final, don't argue"
        }
      ],
      // Additional fields
      name: "TimTheTatman",
      handle: "@timthetatman",
      banner: "/assets/banners/timthetatman_banner.jpg",
      logo: "/assets/logos/timthetatman_logo.png",
      activeStream: "s7",
      verified: true,
      partnered: true,
      category: "Variety",
      languages: ["English"],
      schedule: {
        monday: "10:00 - 18:00 EST",
        tuesday: "10:00 - 18:00 EST",
        wednesday: "10:00 - 18:00 EST",
        thursday: "10:00 - 18:00 EST",
        friday: "10:00 - 18:00 EST",
        saturday: null,
        sunday: null
      },
      socialLinks: {
        twitter: "https://twitter.com/timthetatman",
        youtube: "https://youtube.com/TimTheTatman",
        instagram: "https://instagram.com/timthetatman",
        facebook: "https://facebook.com/TimTheTatman"
      }
    },
    {
      id: "c8",
      userId: "u8",
      game: "Fortnite",
      description: "Professional Fortnite player, competitive gamer, content creator.",
      isLive: true,
      isNew: false,
      viewers: 58321,
      followers: 11000000,
      totalViews: 1680000000,
      isStable: true,
      isSecure: true,
      chatMode: "follower",
      isSlowMode: true,
      channelAge: "10 years",
      contentRating: "T",
      trustScore: 91,
      credits: 10500000,
      subscriptions: 4700000,
      rules: [
        {
          title: "No Stream Sniping",
          description: "Don't reveal positions or game info from stream"
        },
        {
          title: "No Backseating",
          description: "Don't tell Tfue how to play"
        }
      ],
      // Additional fields
      name: "Tfue",
      handle: "@Tfue",
      banner: "/assets/banners/tfue_banner.jpg",
      logo: "/assets/logos/tfue_logo.png",
      activeStream: "s8",
      verified: true,
      partnered: true,
      category: "Battle Royale",
      languages: ["English"],
      schedule: {
        monday: "13:00 - 19:00 EST",
        tuesday: "13:00 - 19:00 EST",
        wednesday: "13:00 - 19:00 EST",
        thursday: "13:00 - 19:00 EST",
        friday: "13:00 - 21:00 EST",
        saturday: "13:00 - 21:00 EST",
        sunday: "13:00 - 19:00 EST"
      },
      socialLinks: {
        twitter: "https://twitter.com/Tfue",
        youtube: "https://youtube.com/Tfue",
        instagram: "https://instagram.com/tfue"
      }
    },
    {
      id: "c9",
      userId: "u9",
      game: "Among Us",
      description: "Content creator, co-owner of 100 Thieves, variety streamer.",
      isLive: true,
      isNew: false,
      viewers: 42513,
      followers: 5800000,
      totalViews: 780000000,
      isStable: true,
      isSecure: true,
      chatMode: "follower",
      isSlowMode: true,
      channelAge: "10 years",
      contentRating: "E",
      trustScore: 95,
      credits: 5300000,
      subscriptions: 2400000,
      rules: [
        {
          title: "No Spoilers",
          description: "Don't ruin the game by revealing info from other POVs"
        },
        {
          title: "No Harassment",
          description: "Be respectful to Rae and other players"
        },
        {
          title: "English Only",
          description: "Keep chat in English for moderation purposes"
        }
      ],
      // Additional fields
      name: "Valkyrae",
      handle: "@Valkyrae",
      banner: "/assets/banners/valkyrae_banner.jpg",
      logo: "/assets/logos/valkyrae_logo.png",
      activeStream: "s9",
      verified: true,
      partnered: true,
      category: "Variety",
      languages: ["English"],
      schedule: {
        monday: null,
        tuesday: "15:00 - 21:00 PST",
        wednesday: "15:00 - 21:00 PST",
        thursday: "15:00 - 21:00 PST",
        friday: "15:00 - 21:00 PST",
        saturday: "15:00 - 21:00 PST",
        sunday: null
      },
      socialLinks: {
        twitter: "https://twitter.com/Valkyrae",
        youtube: "https://youtube.com/Valkyrae",
        instagram: "https://instagram.com/valkyrae",
        tiktok: "https://tiktok.com/@valkyrae"
      }
    },
    {
      id: "c10",
      userId: "u10",
      game: "Call of Duty: Warzone",
      description: "The Two-Time, FPS specialist, entertainer extraordinaire.",
      isLive: true,
      isNew: false,
      viewers: 72158,
      followers: 8700000,
      totalViews: 1450000000,
      isStable: true,
      isSecure: true,
      chatMode: "subscriber",
      isSlowMode: true,
      channelAge: "14 years",
      contentRating: "M",
      trustScore: 93,
      credits: 8100000,
      subscriptions: 3700000,
      rules: [
        {
          title: "Champions Club Rules",
          description: "Respect the Champions Club at all times"
        },
        {
          title: "VSM Required",
          description: "Maintain violence, speed, and momentum in chat"
        },
        {
          title: "No Stream Snipers",
          description: "Discussion of stream sniping will result in ban"
        }
      ],
      // Additional fields
      name: "DrDisrespect",
      handle: "@DrDisrespect",
      banner: "/assets/banners/drdisrespect_banner.jpg",
      logo: "/assets/logos/drdisrespect_logo.png",
      activeStream: "s10",
      verified: true,
      partnered: true,
      category: "FPS",
      languages: ["English"],
      schedule: {
        monday: "13:00 - 19:00 PST",
        tuesday: "13:00 - 19:00 PST",
        wednesday: "13:00 - 19:00 PST",
        thursday: "13:00 - 19:00 PST",
        friday: "13:00 - 19:00 PST",
        saturday: null,
        sunday: null
      },
      socialLinks: {
        twitter: "https://twitter.com/DrDisrespect",
        youtube: "https://youtube.com/DrDisrespect",
        instagram: "https://instagram.com/drdisrespect"
      }
    }
];

// Stream data
const streams: Stream[] = [
    {
      id: "s1",
      thumbnail: 'https://d.newsweek.com/en/full/846377/ninja-fortnite-drake.png',
      channelId: "c1", // Ninja
      title: "FORTNITE CHAMPION SERIES FINALS! | !youtube !socials",
      game: "Fortnite",
      viewers: 127352,
      startedAt: "2 hours ago",
      duration: "2:15:47",
      tags: ["competitive", "fncs", "tournament", "pro", "live"],
      securityLevel: "High",
      quality: "1080p60",
      ping: 12,
      signalQuality: 98
    },
    {
      id: "s2",
      thumbnail: 'https://cdn.oneesports.gg/cdn-data/2023/05/xqc_twitch_stream.jpg',
      channelId: "c2", // xQc
      title: "JUICER WARLORD TAKES OVER | NEW !MERCH",
      game: "Just Chatting",
      viewers: 83921,
      startedAt: "1 hour ago",
      duration: "1:05:23",
      tags: ["variety", "react", "gaming", "entertainment"],
      securityLevel: "Medium",
      quality: "1080p60",
      ping: 24,
      signalQuality: 89
    },
    {
      id: "s3",
      thumbnail: 'https://i.ytimg.com/vi/xiJD1PKU7Fo/maxresdefault.jpg',
      channelId: "c3", // Pokimane
      title: "RANKED GRIND w/ FRIENDS | !discord !socials",
      game: "VALORANT",
      viewers: 35267,
      startedAt: "30 minutes ago",
      duration: "0:30:14",
      tags: ["fps", "ranked", "squad", "chill"],
      securityLevel: "High",
      quality: "1080p60",
      ping: 18,
      signalQuality: 92
    },
    {
      id: "s4",
      thumbnail: 'https://www.dexerto.com/cdn-image/wp-content/uploads/2022/02/22/NICKMERCS-Apex-Legends-hackers-1024x576.jpg?width=1200&quality=75&format=auto',
      channelId: "c4", // NICKMERCS
      title: "MFAM | APEX RANKED GRIND | !youtube !merch",
      game: "Apex Legends",
      viewers: 45782,
      startedAt: "45 minutes ago",
      duration: "0:45:18",
      tags: ["fps", "ranked", "competitive", "faze"],
      securityLevel: "High",
      quality: "1080p60",
      ping: 35,
      signalQuality: 76
    },
    {
      id: "s5",
      thumbnail: 'https://i.ytimg.com/vi/9-ANGAR_pg8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgUChMMA8=&rs=AOn4CLBHkbpLgSEpVg4pO7LsYX2UU0MIOA',
      channelId: "c5", // Shroud
      title: "VALORANT RADIANT RANKED | AIM GOD | !youtube",
      game: "VALORANT",
      viewers: 215639,
      startedAt: "3 hours ago",
      duration: "3:27:12",
      tags: ["fps", "competitive", "radiant", "pro"],
      securityLevel: "High",
      quality: "1080p60",
      ping: 8,
      signalQuality: 99
    },
    {
      id: "s6",
      thumbnail: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/amouranth-3.jpg',
      channelId: "c6", // Amouranth
      title: "HOT TUB STREAM | SUBATHON DAY 3 | !socials !sub",
      game: "Just Chatting",
      viewers: 27894,
      startedAt: "5 hours ago",
      duration: "5:12:36",
      tags: ["hot tub", "subathon", "asmr", "entertainment"],
      securityLevel: "Medium",
      quality: "1080p60",
      ping: 22,
      signalQuality: 87
    },
    {
      id: "s7",
      thumbnail: 'https://staticg.sportskeeda.com/editor/2020/11/d3217-16044879399279-800.jpg',
      channelId: "c7", // TimTheTatman
      title: "COD WARZONE WITH THE BOYS | !sub !prime",
      game: "Call of Duty: Warzone",
      viewers: 62934,
      startedAt: "1.5 hours ago",
      duration: "1:35:42",
      tags: ["fps", "battle royale", "squad", "competitive"],
      securityLevel: "High",
      quality: "1080p60",
      ping: 15,
      signalQuality: 95
    },
    {
      id: "s8",
      thumbnail: 'https://s2.dmcdn.net/v/Oop1R1Rn_hFMi_29O/x1080',
      channelId: "c8", // Tfue
      title: "FORTNITE CASH CUP | TOP PLAYER NA | !newvid",
      game: "Fortnite",
      viewers: 58321,
      startedAt: "1 hour ago",
      duration: "1:07:23",
      tags: ["competitive", "cash cup", "fortnite", "pro"],
      securityLevel: "High",
      quality: "1080p60",
      ping: 17,
      signalQuality: 93
    },
    {
      id: "s9",
      thumbnail: 'https://www.svg.com/img/gallery/valkyrae-has-a-plan-to-save-among-us/why-the-long-wait-for-among-us-updates-1622144358.jpg',
      channelId: "c9", // Valkyrae
      title: "AMONG US WITH FRIENDS | OTV LOBBIES | !youtube",
      game: "Among Us",
      viewers: 42513,
      startedAt: "2 hours ago",
      duration: "2:03:27",
      tags: ["otv", "friends", "collab", "sus"],
      securityLevel: "Medium",
      quality: "1080p60",
      ping: 20,
      signalQuality: 90
    },
    {
      id: "s10",
      thumbnail: 'https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/uxeswitfrpsw2hbijhbu.jpg',
      channelId: "c10", // DrDisrespect
      title: "THE 2X DOMINATING WARZONE | VSM THROUGH THE ROOF | !merch",
      game: "Call of Duty: Warzone",
      viewers: 72158,
      startedAt: "3 hours ago",
      duration: "3:15:45",
      tags: ["fps", "2x", "champion", "violence", "speed", "momentum"],
      securityLevel: "High",
      quality: "1080p60",
      ping: 10,
      signalQuality: 97
    }
];
  
  const videos: Video[] = [
    {
      id: "v1",
      channelId: "c1",
      title: "Breaking Militech's Black ICE in 10 Minutes",
      thumbnail: "/assets/thumbnails/militech-ice.jpg",
      duration: "17:42",
      views: 8472391,
      createdAt: "3 days ago",
      game: "NightCity Overdrive",
      tags: ["tutorial", "black-ice", "militech", "security-breach"]
    },
    {
      id: "v2",
      channelId: "c1",
      title: "Zero-Day Exploit in Arasaka Networks",
      thumbnail: "/assets/thumbnails/zero-day-arasaka.jpg",
      duration: "24:18",
      views: 6129753,
      createdAt: "1 week ago",
      game: "NightCity Overdrive",
      tags: ["zero-day", "arasaka", "exploit", "network"]
    },
    {
      id: "v3",
      channelId: "c2",
      title: "Modding Kiroshi Optics for X-ray Vision",
      thumbnail: "/assets/thumbnails/kiroshi-mod.jpg",
      duration: "32:49",
      views: 4921573,
      createdAt: "2 days ago",
      game: "CyberMods Unlimited",
      tags: ["kiroshi", "optics", "mod", "x-ray", "tutorial"]
    },
    {
      id: "v4",
      channelId: "c3",
      title: "Quantum Entanglement Hacking Explained",
      thumbnail: "/assets/thumbnails/quantum-entanglement.jpg",
      duration: "41:27",
      views: 3287159,
      createdAt: "5 days ago",
      game: "Quantum Break",
      tags: ["quantum", "tutorial", "explanation", "entanglement"]
    },
    {
      id: "v5",
      channelId: "c4",
      title: "Disabling Turrets While Under Fire",
      thumbnail: "/assets/thumbnails/turret-disable.jpg",
      duration: "19:36",
      views: 2193746,
      createdAt: "1 day ago",
      game: "Combat Evolved",
      tags: ["combat", "turrets", "tactical", "tutorial"]
    },
    {
      id: "v6",
      channelId: "c5",
      title: "First Human Consciousness Upload",
      thumbnail: "/assets/thumbnails/consciousness-upload.jpg",
      duration: "1:27:53",
      views: 17293517,
      createdAt: "1 month ago",
      game: "Neural Dive",
      tags: ["historic", "consciousness", "upload", "neural"]
    },
    {
      id: "v7",
      channelId: "c6",
      title: "Breaking Reality: Visual Cortex Manipulation",
      thumbnail: "/assets/thumbnails/visual-cortex.jpg",
      duration: "28:14",
      views: 5281937,
      createdAt: "1 week ago",
      game: "Reality Glitch",
      tags: ["perception", "visual", "cortex", "manipulation"]
    },
    {
      id: "v8",
      channelId: "c7",
      title: "Full Arm Replacement with Military Tech",
      thumbnail: "/assets/thumbnails/arm-replacement.jpg",
      duration: "53:29",
      views: 3927153,
      createdAt: "4 days ago",
      game: "Cybernetic Surgery",
      tags: ["surgery", "arm", "replacement", "military"]
    },
    {
      id: "v9",
      channelId: "c8",
      title: "Finding The Blackwall: Journey to the Forbidden Net",
      thumbnail: "/assets/thumbnails/blackwall.jpg",
      duration: "45:12",
      views: 2918273,
      createdAt: "2 weeks ago",
      game: "DarkNet Exploration",
      tags: ["blackwall", "forbidden", "exploration", "dangerous"]
    }
  ];
  
  const clips: Clip[] = [
    {
      id: "cl1",
      videoId: "v1",
      channelId: "c1",
      title: "Moment I Cracked Militech's Security",
      thumbnail: "/assets/thumbnails/militech-crack.jpg",
      duration: "0:47",
      views: 1729354,
      createdAt: "3 days ago",
      likes: 295173,
      comments: 13927,
      shares: 49271,
      description: "The exact moment when the ICE shattered. Look at that data flow!",
      game: "NightCity Overdrive",
      resolution: "8K",
      ratings: {
        graphics: 92,
        movement: 85,
        netrunning: 98,
        combat: 78
      }
    },
    {
      id: "cl2",
      videoId: "v3",
      channelId: "c2",
      title: "First X-ray Vision Test",
      thumbnail: "/assets/thumbnails/xray-test.jpg",
      duration: "1:23",
      views: 982735,
      createdAt: "2 days ago",
      likes: 173926,
      comments: 8273,
      shares: 27391,
      description: "First successful test of the modded Kiroshi optics. Check out the detail!",
      game: "CyberMods Unlimited",
      resolution: "4K",
      ratings: {
        graphics: 89,
        movement: 72,
        netrunning: 85,
        combat: 65
      }
    },
    {
      id: "cl3",
      videoId: "v6",
      channelId: "c5",
      title: "Consciousness Transfer Complete",
      thumbnail: "/assets/thumbnails/transfer-complete.jpg",
      duration: "2:17",
      views: 3928175,
      createdAt: "1 month ago",
      likes: 582731,
      comments: 27391,
      shares: 91273,
      description: "The historic moment when the first full human consciousness was successfully transferred to the net.",
      game: "Neural Dive",
      resolution: "16K",
      ratings: {
        graphics: 97,
        movement: 94,
        netrunning: 99,
        combat: 85
      }
    },
    {
      id: "cl4",
      videoId: "v8",
      channelId: "c7",
      title: "Neural Interface Connection",
      thumbnail: "/assets/thumbnails/neural-interface.jpg",
      duration: "1:48",
      views: 827391,
      createdAt: "4 days ago",
      likes: 127392,
      comments: 5827,
      shares: 21739,
      description: "The nerve-wracking moment when we connected the neural interface to the new arm. Patient reported full sensory feedback!",
      game: "Cybernetic Surgery",
      resolution: "8K",
      ratings: {
        graphics: 91,
        movement: 88,
        netrunning: 93,
        combat: 82
      }
    },
    {
      id: "cl5",
      videoId: "v9",
      channelId: "c8",
      title: "Glimpse Beyond The Blackwall",
      thumbnail: "/assets/thumbnails/beyond-blackwall.jpg",
      duration: "0:32",
      views: 627193,
      createdAt: "2 weeks ago",
      likes: 98273,
      comments: 3719,
      shares: 15937,
      description: "A brief glimpse at what lurks beyond the Blackwall. Had to disconnect immediately after recording this.",
      game: "DarkNet Exploration",
      resolution: "4K",
      ratings: {
        graphics: 86,
        movement: 79,
        netrunning: 97,
        combat: 72
      }
    }
  ];
  
  const categories: Category[] = [
    {
      id: "cat1",
      name: "Call of Duty: Warzone",
      thumbnail: "https://i.ytimg.com/vi/TidXGyzxT8c/maxresdefault.jpg",
      viewers: 529371,
      totalChannels: 1728,
      isTrending: true,
      isOfficial: true,
      isNew: false,
      isRetro: false,
      tags: ["fps", "battle royale", "shooter", "tactical", "multiplayer"]
    },
    {
      id: "cat2",
      name: "Fortnite",
      thumbnail: "https://dropinblog.net/34253310/files/featured/imagem-2024-09-26-103919931.png",
      viewers: 428193,
      totalChannels: 1293,
      isTrending: true,
      isOfficial: true,
      isNew: false,
      isRetro: false,
      tags: ["battle royale", "building", "third-person shooter", "crossover"]
    },
    {
      id: "cat3",
      name: "Apex Legends",
      thumbnail: "https://gmedia.playstation.com/is/image/SIEPDC/apex-legends-listing-thumb-01-ps4-en-29oct20?$facebook$",
      viewers: 382719,
      totalChannels: 847,
      isTrending: true,
      isOfficial: true,
      isNew: false,
      isRetro: false,
      tags: ["battle royale", "fps", "abilities", "teams", "hero shooter"]
    },
    {
      id: "cat4",
      name: "Valorant",
      thumbnail: "https://www.lotkeys.com/uploads/blog/blog15-uvhx.png.webp",
      viewers: 291837,
      totalChannels: 1039,
      isTrending: false,
      isOfficial: true,
      isNew: false,
      isRetro: false,
      tags: ["tactical shooter", "fps", "abilities", "competitive", "esports"]
    },
    {
      id: "cat5",
      name: "Just Chatting",
      thumbnail: "https://www.dexerto.com/cdn-image/wp-content/uploads/2021/04/09/just-chatting-on-twitch.jpg",
      viewers: 273918,
      totalChannels: 692,
      isTrending: true,
      isOfficial: true,
      isNew: false,
      isRetro: false,
      tags: ["irl", "talk show", "conversation", "commentary", "livestream"]
    },
    {
      id: "cat6",
      name: "Among Us",
      thumbnail: "https://storage.googleapis.com/ops-shopee-files-live/live/shopee-blog/2020/11/cach-choi-among-us-8.jpg",
      viewers: 198273,
      totalChannels: 582,
      isTrending: false,
      isOfficial: true,
      isNew: false,
      isRetro: false,
      tags: ["social deduction", "multiplayer", "party game", "strategy"]
    },
    {
      id: "cat7",
      name: "League of Legends",
      thumbnail: "https://i0.wp.com/highschool.latimes.com/wp-content/uploads/2021/09/league-of-legends.jpeg?fit=1607%2C895&ssl=1",
      viewers: 172938,
      totalChannels: 293,
      isTrending: false,
      isOfficial: true,
      isNew: false,
      isRetro: false,
      tags: ["moba", "strategy", "competitive", "esports", "team-based"]
    },
    {
      id: "cat8",
      name: "Minecraft",
      thumbnail: "https://img-eshop.cdn.nintendo.net/i/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a.jpg?w=1000",
      viewers: 92837,
      totalChannels: 427,
      isTrending: false,
      isOfficial: true,
      isNew: false,
      isRetro: false,
      tags: ["sandbox", "survival", "building", "adventure", "crafting"]
    },
    {
      id: "cat9",
      name: "Grand Theft Auto V",
      thumbnail: "https://img.gta5-mods.com/q95/images/save-game-44/a82937-v_trunk_1920x1080.jpg",
      viewers: 187632,
      totalChannels: 512,
      isTrending: true,
      isOfficial: true,
      isNew: false,
      isRetro: false,
      tags: ["open world", "roleplay", "action", "adventure", "multiplayer"]
    },
    {
      id: "cat10",
      name: "Rocket League",
      thumbnail: "https://www.rocketleague.com/images/keyart/rl_evergreen.jpg",
      viewers: 89421,
      totalChannels: 368,
      isTrending: false,
      isOfficial: true,
      isNew: false,
      isRetro: false,
      tags: ["sports", "vehicles", "competitive", "soccer", "physics"]
    }
  ];
  const comments: Comment[] = [
    {
      id: "com1",
      userId: "u2",
      clipId: "cl1",
      content: "That security breach was unreal! I've never seen anyone crack Militech's ICE that fast.",
    createdAt: "2 days ago",
    likes: 274,
    isPro: true,
    isSecure: true
  },
  {
    id: "com2",
    userId: "u4",
    clipId: "cl1",
    content: "This technique saved my team in the Combat Zone last week. Thanks for the tutorial.",
    createdAt: "1 day ago",
    likes: 182,
    isPro: false,
    isSecure: true
  },
  {
    id: "com3",
    userId: "u6",
    clipId: "cl3",
    content: "I experienced this live and still can't believe what I saw. My neural interface was buzzing for hours after.",
    createdAt: "3 weeks ago",
    likes: 397,
    isPro: true,
    isSecure: false
  },
  {
    id: "com4",
    userId: "u1",
    clipId: "cl4",
    content: "The nerve mapping on this procedure is incredible. Advanced even by Arasaka standards.",
    createdAt: "3 days ago",
    likes: 215,
    isPro: true,
    isSecure: true
  },
  {
    id: "com5",
    userId: "u8",
    clipId: "cl5",
    content: "I've been to the edge of the Blackwall and what I saw was... different. Be careful out there.",
    createdAt: "1 week ago",
    likes: 162,
    isPro: false,
    isSecure: true
  }
];

const statusUpdates: StatusUpdate[] = [
  {
    id: "su1",
    userId: "u1",
    content: "Just found a new vulnerability in Arasaka's network. Stream tonight at 22:00 to watch the live exploit.",
    createdAt: "5 hours ago",
    likes: 3721,
    comments: 294
  },
  {
    id: "su2",
    userId: "u2",
    content: "New military-grade cyberware just arrived. Unboxing and installation tomorrow!",
    createdAt: "2 hours ago",
    likes: 1958,
    comments: 173
  },
  {
    id: "su3",
    userId: "u5",
    content: "Achieved 99.8% consciousness transfer rate today. A new record. The digital self is becoming more real than the physical.",
    createdAt: "1 day ago",
    likes: 5827,
    comments: 492
  },
  {
    id: "su4",
    userId: "u7",
    content: "Just received clearance to stream the new experimental spine replacement procedure. This will change everything.",
    createdAt: "3 hours ago",
    likes: 2741,
    comments: 218
  },
  {
    id: "su5",
    userId: "u8",
    content: "Going dark for a few days. Found something beyond the Blackwall that I need to investigate offline.",
    createdAt: "2 days ago",
    likes: 1839,
    comments: 327
  }
];

// Helper functions to combine data for various UI views
interface FollowedChannel {
  id: string;
  name: string;
  game: string;
  viewers: number;
  avatar: string;
  isLive: boolean;
  isNew: boolean;
  isVerified: boolean;
  isVIP: boolean;
  isEncrypted: boolean;
  followers: number;
  description: string;
}

interface CarouselStream {
  id: string;
  thumbnail:string;
  title: string;
  isLive: boolean;
  channel: {
    id: string;
    name: string;
    info: string;
    game: string;
    isVerified: boolean;
    avatar:string;
  };
  viewers: number;
  securityLevel: string;
  quality: string;
  ping: number;
  signalQuality: number;
  tags: string[];
}

interface RecommendedStream {
  id: string;
  avatar:string;
  thumbnail: string;
  game: string;
  viewers: number;
  title: string;
  channelName: string;
  tags: string[];
}

// Helper function to get followed channels for UI
const getFollowedChannels = (): FollowedChannel[] => {
  return channels
    .filter(channel => channel.id === "c1" || channel.id === "c2" || channel.id === "c5" || channel.id === "c7")
    .map(channel => {
      const user = users.find(u => u.id === channel.userId)!;
      return {
        id: channel.id,
        name: user.name,
        game: channel.game || "Unknown",
        viewers: channel.viewers,
        avatar: user.avatar,
        isLive: channel.isLive,
        isNew: channel.isNew,
        isVerified: user.isVerified,
        isVIP: user.isVIP,
        isEncrypted: channel.isSecure,
        followers: channel.followers, // Convert followers to a string with commaschannel.followers,
        description: channel.description
      };
    });
};

// Helper function to get carousel streams for UI
const getCarouselStreams = (): CarouselStream[] => {
  return streams.slice(0, 5).map(stream => {
    const channel = channels.find(c => c.id === stream.channelId)!;
    const user = users.find(u => u.id === channel.userId)!;
    
    return {
      id: stream.id,
      thumbnail: stream.thumbnail,
      title: stream.title,
      isLive: true,
      channel: {
        id: channel.id,
        name: user.name,
        info: channel.description,
        game: stream.game,
        isVerified: user.isVerified,
        avatar:user.avatar
      },
      viewers: stream.viewers,
      securityLevel: stream.securityLevel,
      quality: stream.quality,
      ping: stream.ping,
      signalQuality: stream.signalQuality,
      tags: stream.tags
    };
  });
};


// Helper function to get recommended streams for UI
const getRecommendedStreams = (): RecommendedStream[] => {
  const excludedChannelIds = ["c1", "c2", "c5", "c7"];

  return streams
    .filter(stream => !excludedChannelIds.includes(stream.channelId))
    .map(stream => {
      const channel = channels.find(c => c.id === stream.channelId)!;
      const user = users.find(u => u.id === channel.userId)!;

      return {
        id: stream.id,
        avatar:user.avatar,
        thumbnail: stream.thumbnail,
        game: stream.game,
        viewers: stream.viewers,
        title: stream.title,
        channelName: user.name,
        tags: stream.tags
      };
    });
};

interface RecommendedChannel {
  id: string;
  name: string;
  game: string;
  viewers: number;
  avatar: string;
  isLive: boolean;
  isVerified: boolean;
  isVIP: boolean;
  isEncrypted: boolean;
  description: string;
  isNew:boolean;
  followers: number;
}
const getRecommendedChannels = (): RecommendedChannel[] => {
  // Select channels that aren't already followed but are interesting
  return channels
    .filter(channel => !["c1", "c2", "c5","c7"].includes(channel.id) && channel.isLive)
    .map(channel => {
      const user = users.find(u => u.id === channel.userId)!;
      return {
        id: channel.id,
        name: user.name,
        followers: channel.followers,
        isNew:channel.isNew,
        game: channel.game || "Unknown",
        viewers: channel.viewers,
        avatar: user.avatar,
        isLive: channel.isLive,
        isVerified: user.isVerified,
        isVIP: user.isVIP,
        isEncrypted: channel.isSecure,
        description: channel.description
      };
    });
};
// Export all data
export const cyberpunkTwitchData = {
  users,
  channels,
  streams,
  videos,
  clips,
  categories,
  comments,
  statusUpdates,
  
  // Organized data for UI components
  followedChannels: getFollowedChannels(),
  carouselStreams: getCarouselStreams(),
  recommendedStreams: getRecommendedStreams(),
  recommendedChannels: getRecommendedChannels(),
  
  // Top categories (just reuse categories but sort by viewers)
  topCategories: [...categories].sort((a, b) => b.viewers - a.viewers),
  
  // Categories you might like
  suggestedCategories: categories.filter(cat => 
    cat.id === "cat1" || cat.id === "cat3" || cat.id === "cat5"
  ),
  
  // Following streams (streams from followed channels)
  followingStreams: streams.filter(stream => 
    ["c1", "c2", "c5", "c7"].includes(stream.channelId)
  ).map(stream => {
    const channel = channels.find(c => c.id === stream.channelId)!;
    const user = users.find(u => u.id === channel.userId)!;
    
    return {
      id: stream.id,
      avatar:user.avatar,
      thumbnail: stream.thumbnail,
      game: stream.game,
      viewers: stream.viewers,
      title: stream.title,
      channelName: user.name,
      tags: stream.tags
    };
  })
};

// Use this default export for easy importing
export default cyberpunkTwitchData;