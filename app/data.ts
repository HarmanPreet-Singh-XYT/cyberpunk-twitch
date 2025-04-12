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
    streamLink:string;
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
  
  // New channel stats fields
  followerCount?: number;
  followerGoal?: number;
  weeklyFollowerGain?: number;
  subscriberCount?: number;
  subscriberGoal?: number;
  weeklySubscriberGain?: number;
  averageViewers?: number;
  averageViewersGrowth?: string;
  monthlyViewGain?: number;
  
  // User interaction state
  isFollowing?: boolean;
  isNotificationsOn?: boolean;
  channelTags?: string[];
  
  // Channel points
  pointsPerHour?: number;
  followerBonus?: number;
  userPointBalance?: number;
  
  // Additional content arrays
  recentBroadcasts?: RecentBroadcast[];
  topClips?: TopClip[];
  achievements?: Achievement[];
  channelPointRewards?: ChannelPointReward[];
}

interface RecentBroadcast {
  id: string;
  title: string;
  thumbnail: string;
  viewCount: number;
  commentCount: number;
  duration: string;
  createdAt: string;
}

interface TopClip {
  id: string;
  title: string;
  thumbnail: string;
  viewCount: number;
  duration: string;
  clipper: string;
}

interface Achievement {
  id: string;
  title: string;
  completed: boolean;
  progress: number;
}

interface ChannelPointReward {
  id: string;
  title: string;
  cost: number;
}

interface Stream {
  id: string;
  thumbnail: string;
  streamLink:string;
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
      },
      // New channel stats fields
      followerCount: 412589,
      followerGoal: 500000,
      weeklyFollowerGain: 1200,
      subscriberCount: 8456,
      subscriberGoal: 10000,
      weeklySubscriberGain: 203,
      averageViewers: 7823,
      averageViewersGrowth: "+12% this month",
      monthlyViewGain: 89000,
      // User interaction state
      isFollowing: false,
      isNotificationsOn: false,
      channelTags: ["#Fortnite", "#Gaming", "#Esports", "#RedBull"],
      // Channel points
      pointsPerHour: 200,
      followerBonus: 50,
      userPointBalance: 4280,
      // Additional content arrays
      recentBroadcasts: [
        {
          id: "b1",
          title: "Fortnite Season 10 - Road to Champion",
          thumbnail: "/assets/thumbnails/ninja_broadcast1.jpg",
          viewCount: 1250000,
          commentCount: 45000,
          duration: "8:12:47",
          createdAt: "2025-04-10T15:30:00Z"
        },
        {
          id: "b2",
          title: "Tournament Practice with TSM",
          thumbnail: "/assets/thumbnails/ninja_broadcast2.jpg",
          viewCount: 980000,
          commentCount: 32000,
          duration: "5:45:13",
          createdAt: "2025-04-08T16:00:00Z"
        },
        {
          id: "b3",
          title: "Viewer Games & Challenges",
          thumbnail: "/assets/thumbnails/ninja_broadcast3.jpg",
          viewCount: 870000,
          commentCount: 28000,
          duration: "6:30:21",
          createdAt: "2025-04-06T14:00:00Z"
        }
      ],
      topClips: [
        {
          id: "c1",
          title: "Insane 1v4 Clutch Win",
          thumbnail: "/assets/thumbnails/ninja_clip1.jpg",
          viewCount: 2300000,
          duration: "0:42",
          clipper: "FortniteClips"
        },
        {
          id: "c2",
          title: "Ninja's Perfect Reaction to Stream Sniper",
          thumbnail: "/assets/thumbnails/ninja_clip2.jpg",
          viewCount: 1800000,
          duration: "1:12",
          clipper: "ClipMaster"
        },
        {
          id: "c3",
          title: "When Ninja Met Drake in Game",
          thumbnail: "/assets/thumbnails/ninja_clip3.jpg",
          viewCount: 5400000,
          duration: "2:05",
          clipper: "GamingHighlights"
        }
      ],
      achievements: [
        {
          id: "a1",
          title: "10 Million Followers",
          completed: true,
          progress: 100
        },
        {
          id: "a2",
          title: "20 Million Followers",
          completed: false,
          progress: 92
        },
        {
          id: "a3",
          title: "100 Tournament Wins",
          completed: true,
          progress: 100
        }
      ],
      channelPointRewards: [
        {
          id: "r1",
          title: "Play Together",
          cost: 50000
        },
        {
          id: "r2",
          title: "Choose Next Game",
          cost: 25000
        },
        {
          id: "r3",
          title: "Highlight My Message",
          cost: 5000
        }
      ]
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
      },
      // New channel stats fields
      followerCount: 382476,
      followerGoal: 400000,
      weeklyFollowerGain: 2500,
      subscriberCount: 12350,
      subscriberGoal: 15000,
      weeklySubscriberGain: 415,
      averageViewers: 42560,
      averageViewersGrowth: "+8% this month",
      monthlyViewGain: 124000,
      // User interaction state
      isFollowing: false,
      isNotificationsOn: false,
      channelTags: ["#JustChatting", "#Variety", "#Gaming", "#Reactions"],
      // Channel points
      pointsPerHour: 200,
      followerBonus: 50,
      userPointBalance: 3150,
      // Additional content arrays
      recentBroadcasts: [
        {
          id: "b4",
          title: "Reacting to Reddit & LSF",
          thumbnail: "/assets/thumbnails/xqc_broadcast1.jpg",
          viewCount: 1450000,
          commentCount: 87000,
          duration: "10:45:32",
          createdAt: "2025-04-10T22:00:00Z"
        },
        {
          id: "b5",
          title: "VALORANT Ranked Grind",
          thumbnail: "/assets/thumbnails/xqc_broadcast2.jpg",
          viewCount: 1280000,
          commentCount: 72000,
          duration: "12:30:15",
          createdAt: "2025-04-09T21:30:00Z"
        }
      ],
      topClips: [
        {
          id: "c4",
          title: "xQc's Perfect Comeback",
          thumbnail: "/assets/thumbnails/xqc_clip1.jpg",
          viewCount: 3200000,
          duration: "0:38",
          clipper: "LaughFactory"
        },
        {
          id: "c5",
          title: "When xQc Got Scared",
          thumbnail: "/assets/thumbnails/xqc_clip2.jpg",
          viewCount: 2700000,
          duration: "0:47",
          clipper: "ClipChamp"
        }
      ],
      achievements: [
        {
          id: "a4",
          title: "10 Million Followers",
          completed: true,
          progress: 100
        },
        {
          id: "a5",
          title: "5 Million Subscribers",
          completed: false,
          progress: 84
        }
      ],
      channelPointRewards: [
        {
          id: "r4",
          title: "Media Share",
          cost: 30000
        },
        {
          id: "r5",
          title: "TTS Message",
          cost: 7000
        }
      ]
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
      },
      // New channel stats fields
      followerCount: 412589,
      followerGoal: 500000,
      weeklyFollowerGain: 1200,
      subscriberCount: 8456,
      subscriberGoal: 10000,
      weeklySubscriberGain: 203,
      averageViewers: 7823,
      averageViewersGrowth: "+12% this month",
      monthlyViewGain: 89000,
      // User interaction state
      isFollowing: false,
      isNotificationsOn: false,
      channelTags: ["#VALORANT", "#OfflineTV", "#Gaming", "#Variety"],
      // Channel points
      pointsPerHour: 200,
      followerBonus: 50,
      userPointBalance: 4280,
      // Additional content arrays
      recentBroadcasts: [
        {
          id: "b6",
          title: "VALORANT with Friends",
          thumbnail: "/assets/thumbnails/pokimane_broadcast1.jpg",
          viewCount: 720000,
          commentCount: 28000,
          duration: "5:12:47",
          createdAt: "2025-04-10T18:00:00Z"
        },
        {
          id: "b7",
          title: "Minecraft & Chill",
          thumbnail: "/assets/thumbnails/pokimane_broadcast2.jpg",
          viewCount: 650000,
          commentCount: 24000,
          duration: "4:30:13",
          createdAt: "2025-04-08T18:00:00Z"
        }
      ],
      topClips: [
        {
          id: "c6",
          title: "Poki's Reaction to Surprise Donation",
          thumbnail: "/assets/thumbnails/pokimane_clip1.jpg",
          viewCount: 1500000,
          duration: "0:52",
          clipper: "TwitchMoments"
        },
        {
          id: "c7",
          title: "When Poki Got Jumpscared",
          thumbnail: "/assets/thumbnails/pokimane_clip2.jpg",
          viewCount: 1300000,
          duration: "0:31",
          clipper: "ClipIt"
        }
      ],
      achievements: [
        {
          id: "a6",
          title: "Partner Anniversary (10 Years)",
          completed: true,
          progress: 100
        },
        {
          id: "a7",
          title: "10M Followers",
          completed: false,
          progress: 92
        }
      ],
      channelPointRewards: [
        {
          id: "r6",
          title: "Play With Poki",
          cost: 100000
        },
        {
          id: "r7",
          title: "Choose Valorant Agent",
          cost: 15000
        }
      ]
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
      },
      // New channel stats fields
      followerCount: 325000,
      followerGoal: 350000,
      weeklyFollowerGain: 1500,
      subscriberCount: 14200,
      subscriberGoal: 15000,
      weeklySubscriberGain: 320,
      averageViewers: 23500,
      averageViewersGrowth: "+15% this month",
      monthlyViewGain: 105000,
      // User interaction state
      isFollowing: false,
      isNotificationsOn: false,
      channelTags: ["#ApexLegends", "#FaZeClan", "#FPS", "#Fitness"],
      // Channel points
      pointsPerHour: 200,
      followerBonus: 50,
      userPointBalance: 2850,
      // Additional content arrays
      recentBroadcasts: [
        {
          id: "b8",
          title: "ALGS Scrims with FaZe",
          thumbnail: "/assets/thumbnails/nickmercs_broadcast1.jpg",
          viewCount: 820000,
          commentCount: 42000,
          duration: "6:15:27",
          createdAt: "2025-04-10T10:00:00Z"
        },
        {
          id: "b9",
          title: "Morning Workout & Apex Ranked",
          thumbnail: "/assets/thumbnails/nickmercs_broadcast2.jpg",
          viewCount: 750000,
          commentCount: 38000,
          duration: "5:45:13",
          createdAt: "2025-04-09T09:00:00Z"
        }
      ],
      topClips: [
        {
          id: "c8",
          title: "NICKMERCS 1v3 Clutch in Tournament",
          thumbnail: "/assets/thumbnails/nickmercs_clip1.jpg",
          viewCount: 1700000,
          duration: "1:12",
          clipper: "ApexMoments"
        },
        {
          id: "c9",
          title: "Nick's Perfect Flatline Spray",
          thumbnail: "/assets/thumbnails/nickmercs_clip2.jpg",
          viewCount: 1400000,
          duration: "0:28",
          clipper: "GameClips"
        }
      ],
      achievements: [
        {
          id: "a8",
          title: "FaZe Clan Member",
          completed: true,
          progress: 100
        },
        {
          id: "a9",
          title: "ALGS Champion",
          completed: false,
          progress: 75
        }
      ],
      channelPointRewards: [
        {
          id: "r8",
          title: "Workout Advice",
          cost: 25000
        },
        {
          id: "r9",
          title: "Review My Gameplay",
          cost: 50000
        }
      ]
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
      },
      // New channel stats fields
      followerCount: 452000,
      followerGoal: 500000,
      weeklyFollowerGain: 2800,
      subscriberCount: 21500,
      subscriberGoal: 25000,
      weeklySubscriberGain: 450,
      averageViewers: 32000,
      averageViewersGrowth: "+10% this month",
      monthlyViewGain: 135000,
      // User interaction state
      isFollowing: false,
      isNotificationsOn: false,
      channelTags: ["#VALORANT", "#FPS", "#Esports", "#AimGod"],
      // Channel points
      pointsPerHour: 200,
      followerBonus: 50,
      userPointBalance: 5120,
      // Additional content arrays
      recentBroadcasts: [
        {
          id: "b10",
          title: "VALORANT Radiant Ranked",
          thumbnail: "/assets/thumbnails/shroud_broadcast1.jpg",
          viewCount: 1750000,
          commentCount: 85000,
          duration: "7:45:18",
          createdAt: "2025-04-10T14:00:00Z"
        },
        {
          id: "b11",
          title: "Testing New FPS Games",
          thumbnail: "/assets/thumbnails/shroud_broadcast2.jpg",
          viewCount: 1620000,
          commentCount: 72000,
          duration: "8:12:43",
          createdAt: "2025-04-09T14:00:00Z"
        }
      ],
      topClips: [
        {
          id: "c10",
          title: "Shroud's Insane Ace in VALORANT",
          thumbnail: "/assets/thumbnails/shroud_clip1.jpg",
          viewCount: 4200000,
          duration: "0:45",
          clipper: "VALClips"
        },
        {
          id: "c11",
          title: "When Shroud Shows Why He's the Best",
          thumbnail: "/assets/thumbnails/shroud_clip2.jpg",
          viewCount: 3800000,
          duration: "1:02",
          clipper: "FPSHighlights"
        }
      ],
      achievements: [
        {
          id: "a10",
          title: "CS:GO Legend",
          completed: true,
          progress: 100
        },
        {
          id: "a11",
          title: "VALORANT Prodigy",
          completed: true,
          progress: 100
        }
      ],
      channelPointRewards: [
        {
          id: "r10",
          title: "Aim Tips",
          cost: 15000
        },
        {
          id: "r11",
          title: "Sensitivity Review",
          cost: 25000
        }
      ]
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
      },
      // New channel stats fields
      followerCount: 295000,
      followerGoal: 300000,
      weeklyFollowerGain: 3500,
      subscriberCount: 12800,
      subscriberGoal: 15000,
      weeklySubscriberGain: 480,
      averageViewers: 18500,
      averageViewersGrowth: "+18% this month",
      monthlyViewGain: 120000,
      // User interaction state
      isFollowing: false,
      isNotificationsOn: false,
      channelTags: ["#JustChatting", "#HotTub", "#ASMR", "#Entrepreneur"],
      // Channel points
      pointsPerHour: 200,
      followerBonus: 50,
      userPointBalance: 3750,
      // Additional content arrays
      recentBroadcasts: [
        {
          id: "b12",
          title: "Hot Tub Stream & Gaming",
          thumbnail: "/assets/thumbnails/amouranth_broadcast1.jpg",
          viewCount: 950000,
          commentCount: 68000,
          duration: "8:30:42",
          createdAt: "2025-04-10T19:00:00Z"
        },
        {
          id: "b13",
          title: "ASMR & Chill",
          thumbnail: "/assets/thumbnails/amouranth_broadcast2.jpg",
          viewCount: 820000,
          commentCount: 54000,
          duration: "6:15:38",
          createdAt: "2025-04-09T20:00:00Z"
        }
      ],
      topClips: [
        {
          id: "c12",
          title: "Amouranth's Perfect Response to Troll",
          thumbnail: "/assets/thumbnails/amouranth_clip1.jpg",
          viewCount: 2100000,
          duration: "0:58",
          clipper: "ClipChamp"
        },
        {
          id: "c13",
          title: "Business Advice from Amouranth",
          thumbnail: "/assets/thumbnails/amouranth_clip2.jpg",
          viewCount: 1800000,
          duration: "1:42",
          clipper: "StreamMoments"
        }
      ],
      achievements: [
        {
          id: "a12",
          title: "5M Followers",
          completed: true,
          progress: 100
        },
        {
          id: "a13",
          title: "Top Earner",
          completed: true,
          progress: 100
        }
      ],
      channelPointRewards: [
        {
          id: "r12",
          title: "Write Name on Whiteboard",
          cost: 5000
        },
        {
          id: "r13",
          title: "Business Question",
          cost: 25000
        }
      ]
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
      },
      // New channel stats fields
      followerCount: 348000,
      followerGoal: 400000,
      weeklyFollowerGain: 2200,
      subscriberCount: 15800,
      subscriberGoal: 20000,
      weeklySubscriberGain: 350,
      averageViewers: 26700,
      averageViewersGrowth: "+9% this month",
      monthlyViewGain: 98000,
      // User interaction state
      isFollowing: false,
      isNotificationsOn: false,
      channelTags: ["#CallOfDuty", "#Warzone", "#FPS", "#Variety"],
      // Channel points
      pointsPerHour: 200,
      followerBonus: 50,
      userPointBalance: 4780,
      // Additional content arrays
      recentBroadcasts: [
        {
          id: "b14",
          title: "Warzone Wednesday with the Squad",
          thumbnail: "/assets/thumbnails/tim_broadcast1.jpg",
          viewCount: 980000,
          commentCount: 52000,
          duration: "7:12:35",
          createdAt: "2025-04-10T10:00:00Z"
        },
        {
          id: "b15",
          title: "Variety Tuesday - New Games",
          thumbnail: "/assets/thumbnails/tim_broadcast2.jpg",
          viewCount: 850000,
          commentCount: 48000,
          duration: "8:05:12",
          createdAt: "2025-04-09T10:00:00Z"
        }
      ],
      topClips: [
        {
          id: "c14",
          title: "Tim's Funniest Fall",
          thumbnail: "/assets/thumbnails/tim_clip1.jpg",
          viewCount: 2800000,
          duration: "0:32",
          clipper: "ClipKing"
        },
        {
          id: "c15",
          title: "When Tim Finally Won",
          thumbnail: "/assets/thumbnails/tim_clip2.jpg",
          viewCount: 2450000,
          duration: "1:15",
          clipper: "WarzoneClips"
        }
      ],
      achievements: [
        {
          id: "a14",
          title: "Content Creator of the Year",
          completed: true,
          progress: 100
        },
        {
          id: "a15",
          title: "10M Followers",
          completed: false,
          progress: 70
        }
      ],
      channelPointRewards: [
        {
          id: "r14",
          title: "Dad Joke Time",
          cost: 10000
        },
        {
          id: "r15",
          title: "Play Together",
          cost: 75000
        }
      ]
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
      },
      // New channel stats fields
      followerCount: 375000,
      followerGoal: 400000,
      weeklyFollowerGain: 1800,
      subscriberCount: 15200,
      subscriberGoal: 20000,
      weeklySubscriberGain: 320,
      averageViewers: 28500,
      averageViewersGrowth: "+7% this month",
      monthlyViewGain: 87000,
      // User interaction state
      isFollowing: false,
      isNotificationsOn: false,
      channelTags: ["#Fortnite", "#BattleRoyale", "#Esports", "#Pro"],
      // Channel points
      pointsPerHour: 200,
      followerBonus: 50,
      userPointBalance: 3950,
      // Additional content arrays
      recentBroadcasts: [
        {
          id: "b16",
          title: "Arena Grind to Champion",
          thumbnail: "/assets/thumbnails/tfue_broadcast1.jpg",
          viewCount: 1020000,
          commentCount: 58000,
          duration: "6:30:22",
          createdAt: "2025-04-10T13:00:00Z"
        },
        {
          id: "b17",
          title: "Duos with Cloakzy",
          thumbnail: "/assets/thumbnails/tfue_broadcast2.jpg",
          viewCount: 980000,
          commentCount: 52000,
          duration: "5:45:18",
          createdAt: "2025-04-09T13:00:00Z"
        }
      ],
      topClips: [
        {
          id: "c16",
          title: "Tfue's Insane Snipe",
          thumbnail: "/assets/thumbnails/tfue_clip1.jpg",
          viewCount: 3200000,
          duration: "0:42",
          clipper: "FortniteClips"
        },
        {
          id: "c17",
          title: "When Tfue Outplayed the Entire Lobby",
          thumbnail: "/assets/thumbnails/tfue_clip2.jpg",
          viewCount: 2900000,
          duration: "1:28",
          clipper: "GameClips"
        }
      ],
      achievements: [
        {
          id: "a16",
          title: "Fortnite Friday Champion",
          completed: true,
          progress: 100
        },
        {
          id: "a17",
          title: "15M Followers",
          completed: false,
          progress: 73
        }
      ],
      channelPointRewards: [
        {
          id: "r16",
          title: "VOD Review",
          cost: 50000
        },
        {
          id: "r17",
          title: "Choose Landing Spot",
          cost: 15000
        }
      ]
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
      },
      // New channel stats fields
      followerCount: 285000,
      followerGoal: 300000,
      weeklyFollowerGain: 1600,
      subscriberCount: 9500,
      subscriberGoal: 10000,
      weeklySubscriberGain: 280,
      averageViewers: 15200,
      averageViewersGrowth: "+14% this month",
      monthlyViewGain: 75000,
      // User interaction state
      isFollowing: false,
      isNotificationsOn: false,
      channelTags: ["#AmongUs", "#100Thieves", "#Gaming", "#Variety"],
      // Channel points
      pointsPerHour: 200,
      followerBonus: 50,
      userPointBalance: 3250,
      // Additional content arrays
      recentBroadcasts: [
        {
          id: "b18",
          title: "Among Us with OTV & Friends",
          thumbnail: "/assets/thumbnails/valkyrae_broadcast1.jpg",
          viewCount: 650000,
          commentCount: 32000,
          duration: "5:15:42",
          createdAt: "2025-04-10T15:00:00Z"
        },
        {
          id: "b19",
          title: "Variety Games with Toast & Sykkuno",
          thumbnail: "/assets/thumbnails/valkyrae_broadcast2.jpg",
          viewCount: 580000,
          commentCount: 28000,
          duration: "4:50:13",
          createdAt: "2025-04-09T15:00:00Z"
        }
      ],
      topClips: [
        {
          id: "c18",
          title: "Rae's Perfect Impostor Round",
          thumbnail: "/assets/thumbnails/valkyrae_clip1.jpg",
          viewCount: 1800000,
          duration: "2:12",
          clipper: "AmongUsClips"
        },
        {
          id: "c19",
          title: "When Valkyrae Got Scared",
          thumbnail: "/assets/thumbnails/valkyrae_clip2.jpg",
          viewCount: 1600000,
          duration: "0:38",
          clipper: "ClipIt"
        }
      ],
      achievements: [
        {
          id: "a18",
          title: "Content Creator of the Year",
          completed: true,
          progress: 100
        },
        {
          id: "a19",
          title: "6M Followers",
          completed: false,
          progress: 97
        }
      ],
      channelPointRewards: [
        {
          id: "r18",
          title: "Game Suggestion",
          cost: 20000
        },
        {
          id: "r19",
          title: "Play Together",
          cost: 75000
        }
      ]
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
      },
      // New channel stats fields
      followerCount: 412589,
      followerGoal: 500000,
      weeklyFollowerGain: 2500,
      subscriberCount: 17800,
      subscriberGoal: 20000,
      weeklySubscriberGain: 420,
      averageViewers: 45000,
      averageViewersGrowth: "+16% this month",
      monthlyViewGain: 152000,
      // User interaction state
      isFollowing: false,
      isNotificationsOn: false,
      channelTags: ["#CallOfDuty", "#Warzone", "#FPS", "#TwoTime"],
      // Channel points
      pointsPerHour: 200,
      followerBonus: 50,
      userPointBalance: 5340,
      // Additional content arrays
      recentBroadcasts: [
        {
          id: "b20",
          title: "Champions Club Arena - Warzone Domination",
          thumbnail: "/assets/thumbnails/drdisrespect_broadcast1.jpg",
          viewCount: 1250000,
          commentCount: 85000,
          duration: "6:30:15",
          createdAt: "2025-04-10T13:00:00Z"
        },
        {
          id: "b21",
          title: "VSM at Maximum Level - Warzone Tournament",
          thumbnail: "/assets/thumbnails/drdisrespect_broadcast2.jpg",
          viewCount: 1150000,
          commentCount: 78000,
          duration: "7:15:42",
          createdAt: "2025-04-09T13:00:00Z"
        }
      ],
      topClips: [
        {
          id: "c20",
          title: "Doc's Perfect Gulag Win",
          thumbnail: "/assets/thumbnails/drdisrespect_clip1.jpg",
          viewCount: 4100000,
          duration: "0:52",
          clipper: "WarzoneHighlights"
        },
        {
          id: "c21",
          title: "The Doc's Legendary Speech",
          thumbnail: "/assets/thumbnails/drdisrespect_clip2.jpg",
          viewCount: 3850000,
          duration: "2:15",
          clipper: "ClipChampion"
        }
      ],
      achievements: [
        {
          id: "a20",
          title: "Two-Time Champion",
          completed: true,
          progress: 100
        },
        {
          id: "a21",
          title: "10M Followers",
          completed: false,
          progress: 87
        }
      ],
      channelPointRewards: [
        {
          id: "r20",
          title: "VSM Message",
          cost: 10000
        },
        {
          id: "r21",
          title: "Gameplay Review",
          cost: 50000
        }
      ]
    }
];

// Stream data
const streams: Stream[] = [
    {
      id: "s1",
      thumbnail: 'https://d.newsweek.com/en/full/846377/ninja-fortnite-drake.png',
      streamLink:'https://harmantwitchcyberpunk.s3.ap-south-1.amazonaws.com/1HP+clutch+by+Ninja..mp4',
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
      streamLink:'https://harmantwitchcyberpunk.s3.ap-south-1.amazonaws.com/xQc+Reacts+to+his+Embarrassing+Sidemen+Football+Charity+Lowlights.mp4',
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
      streamLink:'https://harmantwitchcyberpunk.s3.ap-south-1.amazonaws.com/Pokimane+Reacts+to+Valorant+Episode+2+with+Twitch+Chat!.mp4',
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
      streamLink:'https://harmantwitchcyberpunk.s3.ap-south-1.amazonaws.com/Nickmercs+-+Nick+on+playing+with+toosh+%5B+APEX+LEGENDS+CLIPS+%5D.mp4',
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
      streamLink:'https://harmantwitchcyberpunk.s3.ap-south-1.amazonaws.com/8+MINUTES+OF+SHROUD+TRYHARDING+IN+VALORANT+RANKED.mp4',
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
      streamLink:'https://harmantwitchcyberpunk.s3.ap-south-1.amazonaws.com/bodyguards+amouranth+Just+Chatting+Top+Clip+by+1336plus1.mp4',
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
      streamLink:"https://harmantwitchcyberpunk.s3.ap-south-1.amazonaws.com/TimTheTatMan+Finally+Explains+Why+He+Won't+Play+With+Ninja+Anymore.mp4",
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
      streamLink:'https://harmantwitchcyberpunk.s3.ap-south-1.amazonaws.com/Tfue+hunting+rifle+clip+INSANE!.mp4',
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
      streamLink:'https://harmantwitchcyberpunk.s3.ap-south-1.amazonaws.com/Valkyrae+finally+meets+Corpse+in+real+life+%F0%9F%A5%B0%F0%9F%A5%B0.mp4',
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
      streamLink:'https://harmantwitchcyberpunk.s3.ap-south-1.amazonaws.com/DrDisrespect.mp4',
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
      title: "Ninja Left for Just 1 Minute & This Is What Happened",
      thumbnail:'/streamThumbnail/3.webp',
      streamLink: "https://harmantwitchcyberpunk.s3.ap-south-1.amazonaws.com/Ninja+Left+For+Just+1+Minute+%26+This+Happened....mp4",
      duration: "0:47",
      views: 1729354,
      createdAt: "3 days ago",
      likes: 295173,
      comments: 13927,
      shares: 49271,
      description: "Stream Sniping by random players",
      game: "Fortnite",
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
      channelId: "c10",
      title: "Getting Timmy's Call",
      thumbnail:'https://www.gry-online.pl/i/h/17/457021415.jpg',
      streamLink: "https://harmantwitchcyberpunk.s3.ap-south-1.amazonaws.com/Twitter.mp4",
      duration: "1:23",
      views: 982735,
      createdAt: "2 days ago",
      likes: 173926,
      comments: 8273,
      shares: 27391,
      description: "Timmy's call in an unexpected moment",
      game: "Fortnite",
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
      channelId: "c10",
      title: "DrDisrespect Valorant Stupid as like a Doc as animation",
      thumbnail:'/streamThumbnail/6.webp',
      streamLink: "https://harmantwitchcyberpunk.s3.ap-south-1.amazonaws.com/DrDisrespect+Valorant+St+pid+as++like+a+Doc+as++animation+%EF%BD%9C+Rage+Gaming.mp4",
      duration: "2:17",
      views: 3928175,
      createdAt: "1 month ago",
      likes: 582731,
      comments: 27391,
      shares: 91273,
      description: "Doc acts as if he's a valorant character (animation wise)",
      game: "Valorant",
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
      channelId: "c2",
      title: "xQc Reacts to Pokimane's Insane Clutch",
      thumbnail:'/streamThumbnail/5.webp',
      streamLink: "https://harmantwitchcyberpunk.s3.ap-south-1.amazonaws.com/xQc+Reacts+to+Pokimane's+Insane+Clutch.mp4",
      duration: "1:48",
      views: 827391,
      createdAt: "4 days ago",
      likes: 127392,
      comments: 5827,
      shares: 21739,
      description: "Insane clutch by Pokimane, xQc Reacts",
      game: "Valorant",
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
      channelId: "c5",
      title: "SHROUD PUBG WORLDS FASTEST 8 KILLS",
      thumbnail:'/streamThumbnail/4.webp',
      streamLink: "https://harmantwitchcyberpunk.s3.ap-south-1.amazonaws.com/SHROUD+PUBG+WORLDS+FASTEST+8+KILLS.mp4",
      duration: "0:32",
      views: 627193,
      createdAt: "2 weeks ago",
      likes: 98273,
      comments: 3719,
      shares: 15937,
      description: "Shroud creates world record as he kills 8 people in PUBG just after landing.",
      game: "PUBG",
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
interface EnrichedStreamData {
  // Channel Information
  channelName: string;
  channelAvatar: string;
  channelDescription: string;
  channelTags: string[];

  // Stream Status
  isLive: boolean;
  viewerCount: number;
  streamTitle: string;
  streamDescription: string;
  streamStartTime: string;
  streamCategory: string;
  streamThumbnail:string;

  // User Interaction State
  isFollowing: boolean;
  isNotificationsOn: boolean;

  // Channel Stats
  followerCount: number;
  followerGoal: number;
  weeklyFollowerGain: number;
  subscriberCount: number;
  subscriberGoal: number;
  weeklySubscriberGain: number;
  averageViewers: number;
  averageViewersGrowth: string;
  totalViews: number;
  monthlyViewGain: number;

  // Schedule Information
  streamSchedule: {
    [day: string]: string | null;
  };
  businessEmail: string;

  // Content Collections
  recentBroadcasts: Array<{
    id: string;
    title: string;
    thumbnail: string;
    viewCount: number;
    commentCount: number;
    duration: string;
    createdAt: string;
  }>;

  topClips: Array<{
    id: string;
    title: string;
    thumbnail: string;
    viewCount: number;
    duration: string;
    clipper: string;
  }>;

  achievements: Array<{
    id: string;
    title: string;
    completed: boolean;
    progress: number;
  }>;

  channelPointRewards: Array<{
    id: string;
    title: string;
    cost: number;
  }>;

  // Channel Point Information
  pointsPerHour: number;
  followerBonus: number;
  userPointBalance: number;
}

export function getStreamById(
  streamId: string,
): EnrichedStreamData | null {
  const stream = streams.find(s => s.id === streamId);
  if (!stream) return null;

  const channel = channels.find(c => c.id === stream.channelId);
  if (!channel) return null;

  const user = users.find(u => u.id === channel.userId);

  return {
    // Channel Info
    channelName: user?.name || "Unknown",
    channelAvatar: user?.avatar || "/placeholder-avatar.png",
    channelDescription: user?.description || "No description available.",
    channelTags: channel?.channelTags || [],

    // Stream Status
    isLive: channel?.isLive ?? false,
    viewerCount: stream.viewers,
    streamTitle: stream.title,
    streamDescription: stream.tags?.join(", "),
    streamStartTime: stream.startedAt,
    streamCategory: stream.game,
    streamThumbnail: stream.thumbnail,

    // User Interaction
    isFollowing: channel?.isFollowing ?? false,
    isNotificationsOn: channel?.isNotificationsOn ?? false,

    // Channel Stats
    followerCount: channel?.followerCount ?? channel?.followers ?? 0,
    followerGoal: channel?.followerGoal ?? 0,
    weeklyFollowerGain: channel?.weeklyFollowerGain ?? 0,
    subscriberCount: channel?.subscriberCount ?? channel?.subscriptions ?? 0,
    subscriberGoal: channel?.subscriberGoal ?? 0,
    weeklySubscriberGain: channel?.weeklySubscriberGain ?? 0,
    averageViewers: channel?.averageViewers ?? 0,
    averageViewersGrowth: channel?.averageViewersGrowth ?? "N/A",
    totalViews: channel?.totalViews ?? 0,
    monthlyViewGain: channel?.monthlyViewGain ?? 0,

    // Schedule
    streamSchedule: channel?.schedule || {},
    businessEmail: `contact@${user?.name?.toLowerCase() || "channel"}.net`,

    // Content Collections
    recentBroadcasts: channel?.recentBroadcasts || [],
    topClips: channel?.topClips || [],
    achievements: channel?.achievements || [],
    channelPointRewards: channel?.channelPointRewards || [],

    // Channel Points
    pointsPerHour: channel?.pointsPerHour ?? 0,
    followerBonus: channel?.followerBonus ?? 0,
    userPointBalance: channel?.userPointBalance ?? 0
  };
}



// Helper function to get followed channels for UI
const getFollowedChannels = (): FollowedChannel[] => {
  return channels
    .filter(channel => channel.id === "c1" || channel.id === "c2" || channel.id === "c5" || channel.id === "c7")
    .map(channel => {
      const user = users.find(u => u.id === channel.userId)!;
      const stream = streams.find(s => s.channelId === channel.id);
      return {
        id: stream.id,
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
type TopStreamSummary = {
  streamId: string;
  channelName: string;
  channelAvatar: string;
  game: string;
  viewers: number;
  duration: string;
  title: string;
};

type TopStreamsAndCategories = {
  topStreams: TopStreamSummary[];
  categories: string[];
};
function getTop5StreamsAndCategories(
): TopStreamsAndCategories {
  const top5Streams = [...streams]
    .sort((a, b) => b.viewers - a.viewers)
    

  const top5WithDetails: TopStreamSummary[] = top5Streams.map(stream => {
    const channel = channels.find(ch => ch.id === stream.channelId);
    const user = users.find(u => u.id === channel?.userId);

    return {
      streamId: stream.id,
      channelName: user?.name || channel?.name || "Unknown",
      channelAvatar: user?.avatar || "/default-avatar.png",
      game: stream.game,
      viewers: stream.viewers,
      duration: stream.duration,
      title: stream.title
    };
  });

  const categories = Array.from(
    new Set(top5WithDetails.map(stream => stream.game))
  );

  return {
    topStreams: top5WithDetails,
    categories
  };
}



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
  return channels
    .filter(channel => !["c1", "c2", "c5", "c7"].includes(channel.id) && channel.isLive)
    .map(channel => {
      const user = users.find(u => u.id === channel.userId)!;
      const stream = streams.find(s => s.channelId === channel.id);

      return {
        id: stream.id,
        name: user.name,
        followers: channel.followers,
        isNew: channel.isNew,
        game: channel.game || "Unknown",
        viewers: channel.viewers,
        avatar: user.avatar,
        isLive: channel.isLive,
        isVerified: user.isVerified,
        isVIP: user.isVIP,
        isEncrypted: channel.isSecure,
        description: channel.description,
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
  broadcastSummary: getTop5StreamsAndCategories(),
  
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