import React, { useState } from 'react';
import { X, Heart, MessageSquare, Flag, Send, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';

// CommentHeader Component
const CommentHeader = ({ commentsCount, toggleComments }) => {
  return (
    <div className="flex justify-between items-center p-3 border-b border-cyan-500/30 bg-gradient-to-r from-black to-blue-900/30">
      <div className="flex items-center">
        <div className="w-2 h-6 bg-cyan-400 mr-2 animate-pulse"></div>
        <h3 className="text-cyan-400 font-mono tracking-wider">NETWORK_FEEDBACK</h3>
        <div className="ml-2 px-2 py-1 bg-black/60 border border-cyan-500/30 rounded-sm">
          <span className="text-xs font-mono text-cyan-400">{commentsCount} ENTRIES</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="text-xs text-cyan-500 font-mono animate-pulse">LIVE_FEED</div>
        <button
          onClick={toggleComments}
          className="w-6 h-6 rounded-full bg-red-500/20 border border-red-400/30 flex items-center justify-center hover:bg-red-500/40 transition-all"
        >
          <X className="w-4 h-4 text-red-400" />
        </button>
      </div>
    </div>
  );
};

// CommentTableHeader Component
const CommentTableHeader = () => {
  return (
    <div className="grid grid-cols-1 p-1">
      <div className="flex justify-between items-center px-3 py-1 bg-cyan-900/10 border-b border-cyan-500/10">
        <span className="text-xs font-mono text-cyan-400/70">USER_ID</span>
        <span className="text-xs font-mono text-cyan-400/70">REP_SCORE</span>
        <span className="text-xs font-mono text-cyan-400/70">TIME_STAMP</span>
      </div>
    </div>
  );
};

// Reply Component
const Reply = ({ reply }) => {
  return (
    <div className="mt-2 p-2 bg-black/40 border-l border-cyan-500/20">
      <div className="flex items-center mb-1">
        <span className="text-cyan-400 font-mono text-xs">@{reply.user}</span>
        <span className="text-gray-500 text-xs ml-2">{reply.time}</span>
      </div>
      <p className="text-gray-300 text-xs">{reply.text}</p>
      <div className="flex items-center mt-1 space-x-3">
        <button className="flex items-center text-xs text-gray-400 hover:text-cyan-400 transition-colors group">
          <Heart className="w-2 h-2 mr-1 group-hover:animate-pulse" />
          <span>{reply.likes || Math.floor(Math.random() * 20)}</span>
        </button>
        <button className="flex items-center text-xs text-gray-400 hover:text-red-400 transition-colors">
          <Flag className="w-2 h-2 mr-1" />
        </button>
      </div>
    </div>
  );
};

// Comment Component
const Comment = ({ comment, onReply, onLike, onFlag }) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [showReplies, setShowReplies] = useState(false);
  const [liked, setLiked] = useState(false);
  const [flagged, setFlagged] = useState(false);

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      onReply(comment.id, replyText);
      setReplyText('');
      setShowReplyInput(false);
    }
  };

  const handleLike = () => {
    setLiked(!liked);
    onLike(comment.id);
  };

  const handleFlag = () => {
    setFlagged(!flagged);
    onFlag(comment.id);
  };

  const isGlitched = comment.reputation === "Glitched";

  return (
    <div
      className={`mb-4 p-2 border-l-2 ${
        isGlitched 
          ? 'border-red-500/50 bg-gradient-to-r from-red-900/20 to-black/60' 
          : 'border-cyan-500/50 bg-gradient-to-r from-cyan-900/10 to-black/60'
      }`}
    >
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-sm ${
            isGlitched ? 'bg-red-500 animate-pulse' : 'bg-cyan-500'
          } mr-2`}></div>
          <span className={`font-mono text-sm ${
            isGlitched ? 'text-red-400' : 'text-purple-400'
          }`}>@{comment.user}</span>
          {comment.verified && (
            <span className="ml-1 px-1 text-xs bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded">VERIFIED</span>
          )}
        </div>
        <div className="flex items-center">
          <span className={`text-xs font-mono px-1 py-0.5 rounded ${
            isGlitched 
              ? 'text-red-400 bg-red-900/20 border border-red-500/30' 
              : 'text-cyan-400 bg-cyan-900/20 border border-cyan-500/30'
          }`}>{comment.reputation}</span>
          <span className="text-gray-500 text-xs ml-2 font-mono">{comment.time}</span>
        </div>
      </div>
      
      <p className={`text-gray-200 text-sm ${
        isGlitched 
          ? 'font-glitch' 
          : 'font-mono tracking-wide'
      }`}>
        {isGlitched ? 
          <span className="inline-block relative">
            <span className="relative z-10">{comment.comment}</span>
            <span className="absolute top-0 left-1 text-red-500 opacity-70 z-0">{comment.comment}</span>
          </span> : 
          comment.comment
        }
      </p>
      
      <div className="flex items-center mt-2 space-x-3">
        <button 
          className={`flex items-center text-xs ${liked ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'} transition-colors group`}
          onClick={handleLike}
        >
          <Heart className={`w-3 h-3 mr-1 ${liked && 'fill-cyan-400'} group-hover:animate-pulse`} />
          <span>{comment.likes || Math.floor(Math.random() * 100)}</span>
        </button>
        <button 
          className="flex items-center text-xs text-gray-400 hover:text-cyan-400 transition-colors"
          onClick={() => setShowReplyInput(!showReplyInput)}
        >
          <MessageSquare className="w-3 h-3 mr-1" />
          <span>REPLY</span>
        </button>
        <button 
          className={`flex items-center text-xs ${flagged ? 'text-red-400' : 'text-gray-400 hover:text-red-400'} transition-colors`}
          onClick={handleFlag}
        >
          <Flag className="w-3 h-3 mr-1" />
          <span>FLAG</span>
        </button>
        {comment.replies && comment.replies.length > 0 && (
          <button 
            className="flex items-center text-xs text-gray-400 hover:text-cyan-400 transition-colors"
            onClick={() => setShowReplies(!showReplies)}
          >
            {showReplies ? 
              <ChevronUp className="w-3 h-3 mr-1" /> : 
              <ChevronDown className="w-3 h-3 mr-1" />
            }
            <span>{comment.replies.length} REPLIES</span>
          </button>
        )}
        <div className="flex-grow"></div>
        <div className="text-xs text-cyan-500/70 font-mono bg-black/40 px-1 py-0.5 border border-cyan-500/20 rounded-sm">
          #ID-{comment.id || Math.floor(Math.random() * 1000000).toString(16).toUpperCase()}
        </div>
      </div>
      
      {showReplyInput && (
        <div className="mt-3 p-2 bg-black/60 border border-cyan-500/20 rounded">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            className="w-full p-2 bg-black/80 text-cyan-100 border border-cyan-500/30 rounded text-sm font-mono placeholder-cyan-800"
            placeholder="// TYPE_REPLY"
            rows={2}
          />
          <div className="flex justify-between mt-2">
            <div className="text-xs text-red-400 flex items-center">
              {replyText.length > 200 && (
                <>
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  <span>Character limit: {replyText.length}/200</span>
                </>
              )}
            </div>
            <div className="flex space-x-2">
              <button 
                className="px-2 py-1 text-xs bg-black border border-red-500/30 text-red-400 rounded hover:bg-red-900/20"
                onClick={() => setShowReplyInput(false)}
              >
                CANCEL
              </button>
              <button 
                className={`px-2 py-1 text-xs bg-black border border-cyan-500/30 text-cyan-400 rounded hover:bg-cyan-900/20 ${!replyText.trim() && 'opacity-50 cursor-not-allowed'}`}
                onClick={handleReplySubmit}
                disabled={!replyText.trim()}
              >
                <div className="flex items-center">
                  <Send className="w-3 h-3 mr-1" />
                  <span>SEND</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {showReplies && comment.replies && comment.replies.length > 0 && (
        <div className="mt-2 pl-3 border-l border-cyan-500/30">
          {comment.replies.map((reply, replyIndex) => (
            <Reply key={replyIndex} reply={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

// CommentInput Component
const CommentInput = ({ onSendComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (comment.trim()) {
      onSendComment(comment);
      setComment('');
    }
  };

  return (
    <div className="p-3 bg-black/70 border-t border-cyan-500/30">
      <div className="flex items-start">
        <div className="flex-grow">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 bg-black/80 text-cyan-100 border border-cyan-500/30 rounded text-sm font-mono placeholder-cyan-800"
            placeholder="// ADD_NEW_COMMENT"
            rows={2}
          />
          <div className="flex justify-between mt-1 px-1">
            <div className="text-xs text-cyan-500/70">
              {comment.length > 0 && `${comment.length}/280 CHARS`}
            </div>
            <div className="text-xs text-red-400 flex items-center">
              {comment.length > 280 && (
                <>
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  <span>LIMIT_EXCEEDED</span>
                </>
              )}
            </div>
          </div>
        </div>
        <button
          className={`ml-2 px-3 py-2 bg-cyan-900/30 border border-cyan-500/30 rounded flex items-center ${!comment.trim() && 'opacity-50 cursor-not-allowed'}`}
          onClick={handleSubmit}
          disabled={!comment.trim() || comment.length > 280}
        >
          <Send className="w-4 h-4 text-cyan-400 mr-1" />
          <span className="text-cyan-400 text-sm font-mono">SEND</span>
        </button>
      </div>
    </div>
  );
};

// Main CommentsPanel Component
const CommentsPanel = ({isCommentOpen,toggleComments}) => {
  const [comments, setComments] = useState([
    {
      id: '7A2F9E',
      user: 'NetRunner42',
      verified: true,
      reputation: 'Elite',
      time: '12:45',
      comment: 'This neural implant looks sketchy. Anyone tried the XR-5 model instead?',
      likes: 78,
      replies: [
        { 
          id: 'R7A201',
          user: 'CyberDoc', 
          time: '12:52', 
          text: 'I installed the XR-5 last week. Better synapse response but watch the heat sink.',
          likes: 23
        },
        { 
          id: 'R7A202',
          user: 'Glitch_01', 
          time: '13:04', 
          text: 'XR series has backdoor access. Stay with VK mods if you value privacy.',
          likes: 45
        }
      ]
    },
    {
      id: 'B38D1C',
      user: 'Voidwalker',
      verified: false,
      reputation: 'Glitched',
      time: '11:37',
      comment: 'D0N\'T trust the c0rp data! They\'re m0nitoring brain w@ves through th3se feeds!',
      likes: 13,
      replies: []
    },
    {
      id: 'F5E902',
      user: 'SynthLink',
      verified: true,
      reputation: 'Trusted',
      time: '10:15',
      comment: 'The encryption on this stream is impressive. Anyone know what protocol they\'re using?',
      likes: 42,
      replies: [
        { 
          id: 'F5E902R1',
          user: 'CodexHunter', 
          time: '10:22', 
          text: 'Looks like Quantum-T protocol with neural routing patches. Corpo-grade stuff.',
          likes: 18
        }
      ]
    },
    {
      id: 'D27E4B',
      user: 'Chrome_Angel',
      verified: true,
      reputation: 'Elite',
      time: '09:30',
      comment: 'Just uploaded a new patch for the Nightcity OS. Link in my profile. Fixes the memory leak in the western district.',
      likes: 129,
      replies: [
        { 
          id: 'D27E4BR1',
          user: 'EdgeRunner', 
          time: '09:41', 
          text: 'Your patch saved my rig. Thanks Chrome!',
          likes: 31
        },
        { 
          id: 'D27E4BR2',
          user: 'DataKnight', 
          time: '09:55', 
          text: 'Works great but I\'m still getting ghost signals in the northern quadrant.',
          likes: 8
        },
        { 
          id: 'D27E4BR3',
          user: 'Chrome_Angel', 
          time: '10:03', 
          text: 'That\'s a known issue with the Arasaka towers. Working on a fix.',
          likes: 22
        }
      ]
    },
    {
      id: 'A1C5F8',
      user: 'Blackout_Kid',
      verified: false,
      reputation: 'Neutral',
      time: '08:17',
      comment: 'Anyone selling access codes to the downtown grid? My old ones got blacklisted.',
      likes: 4,
      replies: [
        { 
          id: 'A1C5F8R1',
          user: 'CyberWarden', 
          time: '08:20', 
          text: 'Careful sharing this kind of request on public channels. Corp monitors flagged.',
          likes: 56
        }
      ]
    },
    {
      id: '59E0B7',
      user: 'NeuroMancer',
      verified: true,
      reputation: 'Trusted',
      time: '07:49',
      comment: 'The new biochip implants are causing seizures in some users. Backup your consciousness before installation.',
      likes: 87,
      replies: [
        { 
          id: '59E0B7R1',
          user: 'MeatDoc', 
          time: '08:01', 
          text: 'Can confirm. Treated three cases yesterday. All had the version 2.1 chip.',
          likes: 45
        },
        { 
          id: '59E0B7R2',
          user: 'CorpAgent_X', 
          time: '08:15', 
          text: 'This information is unverified. Arasaka guarantees 99.98% compatibility.',
          likes: 2
        },
        { 
          id: '59E0B7R3',
          user: 'ShadowWalker', 
          time: '08:22', 
          text: 'Spotted the corpo shill ^^^',
          likes: 76
        }
      ]
    },
    {
      id: 'E2D093',
      user: 'RipperDoc',
      verified: true,
      reputation: 'Elite',
      time: '07:05',
      comment: 'New shipment of military-grade optical implants in my clinic. 20% discount for verified netrunners this week.',
      likes: 32,
      replies: []
    },
    {
      id: '8FB37C',
      user: 'Dex_Matrix',
      verified: false,
      reputation: 'Glitched',
      time: '06:23',
      comment: 'Th€ gRid is c0llap$ing! I c@n see through the w@lls n0w! THE CODE IS VIS1BL€!!!',
      likes: 9,
      replies: [
        { 
          id: '8FB37CR1',
          user: 'TechPriest', 
          time: '06:30', 
          text: 'Someone get this gonk a system reboot. Classic cyberpsychosis symptoms.',
          likes: 28
        }
      ]
    },
    {
      id: '3A7D5E',
      user: 'Silverhand',
      verified: true,
      reputation: 'Legend',
      time: '05:47',
      comment: 'Wake up, samurai. We have a city to burn.',
      likes: 1337,
      replies: [
        { 
          id: '3A7D5ER1',
          user: 'V', 
          time: '05:52', 
          text: 'Not again...',
          likes: 250
        },
        { 
          id: '3A7D5ER2',
          user: 'Alt_Cunningham', 
          time: '06:01', 
          text: 'Johnny, stay out of trouble this time.',
          likes: 189
        },
        { 
          id: '3A7D5ER3',
          user: 'RogueAmendiares', 
          time: '06:15', 
          text: 'Some things never change.',
          likes: 145
        }
      ]
    },
    {
      id: 'C4F19D',
      user: 'MaxTac_Officer',
      verified: true,
      reputation: 'Authority',
      time: '04:30',
      comment: 'OFFICIAL NOTICE: Curfew in districts 5-7 tonight due to suspected cyberterrorist activity. All civilians must be indoors by 22:00.',
      likes: 18,
      replies: [
        { 
          id: 'C4F19DR1',
          user: 'NightCityLocal', 
          time: '04:42', 
          text: 'Third time this month. Corp wars heating up again?',
          likes: 7
        },
        { 
          id: 'C4F19DR2',
          user: 'StreetKid', 
          time: '04:55', 
          text: 'Yeah, "curfew" - just an excuse for MaxTac to test their new weapons on homeless.',
          likes: 64
        }
      ]
    }
  ]);


  const handleSendComment = (text) => {
    const newComment = {
      id: Math.floor(Math.random() * 16777215).toString(16).toUpperCase().substring(0, 6),
      user: 'USER_' + Math.floor(Math.random() * 1000),
      verified: false,
      reputation: 'Neutral',
      time: new Date().getHours() + ':' + String(new Date().getMinutes()).padStart(2, '0'),
      comment: text,
      likes: 0,
      replies: []
    };
    setComments([newComment, ...comments]);
  };

  const handleReply = (commentId, replyText) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [
            ...(comment.replies || []),
            {
              id: `${commentId}R${(comment.replies?.length || 0) + 1}`, // Generate a unique ID
              user: 'USER_' + Math.floor(Math.random() * 1000),
              time: new Date().getHours() + ':' + String(new Date().getMinutes()).padStart(2, '0'),
              text: replyText,
              likes: 0 // Initialize likes count
            }
          ]
        };
      }
      return comment;
    }));
  };

  const handleLike = (commentId) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          likes: (comment.likes || 0) + 1
        };
      }
      return comment;
    }));
  };

  const handleFlag = (commentId) => {
    // You could implement flagging functionality here
    console.log('Comment flagged:', commentId);
  };

  return (
    <div
      className={`absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-cyan-500/30 z-30 transition-all duration-300 ${isCommentOpen ? 'h-96' : 'h-0'}`}
      style={{
        borderImage: "linear-gradient(to right, rgba(0, 240, 255, 0.3), rgba(236, 72, 153, 0.3)) 1",
        boxShadow: "0 -5px 20px rgba(0, 240, 255, 0.2)"
      }}
    >
      {isCommentOpen && (
        <>
          <CommentHeader 
            commentsCount={comments.length} 
            toggleComments={toggleComments} 
          />
          
          <CommentTableHeader />
    
          <div className="h-60 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-black/50">
            {comments.map((comment, index) => (
              <Comment 
                key={index} 
                comment={comment} 
                onReply={handleReply}
                onLike={handleLike}
                onFlag={handleFlag}
              />
            ))}
          </div>

          <CommentInput onSendComment={handleSendComment} />
        </>
      )}
    </div>
  );
};

export default CommentsPanel;