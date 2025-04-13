import { useState, useEffect } from 'react';
import { Bell, X, User, Gift, CreditCard, Star, Zap, ChevronRight } from 'lucide-react';

function NotificationPopup() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'follow',
      user: 'DrDisrepect',
      avatar: 'https://yt3.ggpht.com/_0_SuenjzMocr2OTOHbGjEin5FcHOy-vRroLcEZtj0WfUMEQXVQqbtEuRaa-tIewyjbAkffR=s176-c-k-c0x00ffffff-no-rj-mo',
      message: 'is now live',
      time: '2 min ago',
      read: false,
      glitched: false
    },
    {
      id: 2,
      type: 'donation',
      user: 'CyberWanderer',
      avatar: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/08/netrunner-art.jpg',
      message: 'donated 500 neocredits',
      time: '15 min ago',
      read: false,
      glitched: true
    },
    {
      id: 3,
      type: 'subscription',
      user: 'SynthRider',
      avatar: 'https://staticg.sportskeeda.com/editor/2022/09/02886-16639610814337-1920.jpg',
      message: 'subscribed for 3 months',
      time: '1 hour ago',
      read: true,
      glitched: false
    }
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  // Toggle notification panel
  const toggleNotifications = () => {
    setIsOpen(prev => !prev);
    if (!isOpen) {
      // Mark notifications as read when opened
      setNotifications(prev => 
        prev.map(notif => ({ ...notif, read: true }))
      );
    }
  };

  // Remove notification
  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  // Periodically trigger glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  // Get notification icon based on type
  const getNotificationIcon = (type) => {
    switch(type) {
      case 'follow':
        return <User size={16} className="text-purple-400" />;
      case 'donation':
        return <Gift size={16} className="text-pink-400" />;
      case 'subscription':
        return <Star size={16} className="text-cyan-400" />;
      case 'bits':
        return <Zap size={16} className="text-yellow-400" />;
      default:
        return <Bell size={16} className="text-gray-400" />;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="relative">
      {/* Notification Bell Button */}
      <button 
        onClick={toggleNotifications}
        className="p-2 rounded-lg text-gray-300 relative group overflow-hidden" 
        aria-label="Notifications"
      >
        <span className="absolute inset-0 bg-purple-800 opacity-0 group-hover:opacity-20 transition-opacity"></span>
        <span className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/50 rounded-lg transition-all"></span>
        
        <Bell 
          size={20} 
          className={`relative z-10 transition-all ${unreadCount > 0 ? 'text-cyan-400' : 'text-gray-400 group-hover:text-cyan-400'}`} 
        />
        
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 text-xs bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center ring-2 ring-gray-900">
            {unreadCount}
          </span>
        )}
        
        {/* Notification pulse effect */}
        {unreadCount > 0 && (
          <span className="absolute inset-0 rounded-lg border border-pink-500/50 animate-ping opacity-30"></span>
        )}
      </button>

      {/* Notification Panel */}
      {isOpen && (
        <div 
          className={`absolute top-full right-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-sm border border-purple-900/80 rounded-lg shadow-lg shadow-purple-500/20 z-50 overflow-hidden transition-all duration-300 ${
            glitchActive ? 'translate-x-0.5' : ''
          }`}
        >
          {/* Digital noise overlay */}
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
              backgroundSize: '150px'
            }}
          ></div>
          
          {/* Scan line effect */}
          <div className="absolute inset-0 bg-scan-lines pointer-events-none opacity-5" 
            style={{
              backgroundImage: 'linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.5) 50%)',
              backgroundSize: '100% 4px'
            }}
          ></div>
          
          {/* Panel Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-purple-900/50">
            <div className="flex items-center">
              <Bell size={16} className="text-cyan-400 mr-2" />
              <span className="text-gray-200 font-medium">NOTIFICATIONS</span>
              <div className="ml-2 flex space-x-1">
                <span className="w-1 h-1 rounded-full bg-cyan-400 animate-dot-1"></span>
                <span className="w-1 h-1 rounded-full bg-purple-400 animate-dot-2"></span>
                <span className="w-1 h-1 rounded-full bg-pink-400 animate-dot-3"></span>
              </div>
            </div>
            <button 
              onClick={toggleNotifications}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          
          {/* Notification List */}
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="py-6 px-4 text-center text-gray-500 font-mono text-sm">
                <div className="mb-3 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                    <Bell size={20} className="text-gray-600" />
                  </div>
                </div>
                <div className="bg-gray-800/50 py-3 px-4 rounded-md">
                  NO INCOMING SIGNALS
                  <div className="text-xs mt-1 text-cyan-500">SYSTEM IDLE</div>
                </div>
              </div>
            ) : (
              notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`relative border-b border-gray-800 transition-all hover:bg-gray-800/30 ${
                    notification.read ? 'bg-transparent' : 'bg-cyan-900/10'
                  } ${notification.glitched && glitchActive ? 'translate-x-0.5 opacity-90' : ''}`}
                >
                  {/* Highlight effect for unread */}
                  {!notification.read && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500"></div>
                  )}
                  
                  <div className="flex items-start p-3">
                    <div className="relative mr-3 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gray-800 overflow-hidden p-0.5 bg-gradient-to-br from-purple-500 to-pink-500">
                        <img 
                          src={notification.avatar} 
                          alt={notification.user} 
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 p-0.5 bg-gray-900 rounded-full">
                        {getNotificationIcon(notification.type)}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                            {notification.user === 'DrDisrepect' ? (
                                <a href='/live/s10'>
                                <span className="font-medium text-cyan-400">@{notification.user}</span>
                                <p className="text-sm text-gray-300 mt-0.5">
                                  {notification.message}
                                </p>
                              </a>
                              )
                            :
                                <>
                                <span className="font-medium text-cyan-400">@{notification.user}</span>
                                <p className="text-sm text-gray-300 mt-0.5">
                                  {notification.message}
                                </p>
                                </>
                            }
                        
                        </div>
                        <button 
                          onClick={() => removeNotification(notification.id)}
                          className="text-gray-500 hover:text-red-400 transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </div>
                      
                      <div className="flex justify-between mt-2 text-xs">
                        <span className="text-gray-500 font-mono">{notification.time}</span>
                        
                        {notification.type === 'donation' && (
                          <span className="text-green-400 flex items-center">
                            <CreditCard size={10} className="mr-1" />
                            VERIFIED
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {/* Panel Footer */}
          <div className="px-4 py-2 border-t border-purple-900/50 flex justify-between items-center bg-gray-900/80">
            <span className="text-xs text-gray-500 font-mono">
              {notifications.length} SIGNAL{notifications.length !== 1 ? 'S' : ''}
            </span>
            
            {/* <a href="/all-notifications" className="text-xs text-cyan-400 hover:text-pink-400 transition-colors flex items-center">
              VIEW ALL RECORDS
              <ChevronRight size={12} className="ml-1" />
            </a> */}
          </div>
          
          {/* Decorative circuit lines */}
          <div className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-cyan-500/20"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-0.5 bg-pink-500/20"></div>
        </div>
      )}
    </div>
  );
}

// To integrate with your Navbar component, add this component near the bell icon
// Replace the existing bell button with this component
// Example placement in your Navbar:
// 
// <div className="flex items-center space-x-4">
//   <div className="relative group">
//     <input type="text" ... />
//     ...
//   </div>
//   <NotificationPopup /> // <-- Add here
//   <a href='/console' ... >
//     ...
//   </a>
//   ...
// </div>

export default NotificationPopup;