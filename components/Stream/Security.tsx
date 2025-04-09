'use client'
import { useState, useEffect } from 'react';
import { 
  Shield, Lock, Eye, EyeOff, ChevronRight, AlertTriangle, Fingerprint, 
  Smartphone, Wifi, Bell, User, Key, Power, Zap, BarChart2, Globe, 
  Clock, Terminal, RefreshCw, Database, FileText, MapPin
} from 'lucide-react';

export default function SecuritySettings() {
  const [showPassword, setShowPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [biometricsEnabled, setBiometricsEnabled] = useState(false);
  const [loginNotifications, setLoginNotifications] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState(30);
  const [encryptionLevel, setEncryptionLevel] = useState('QUANTUM-V2');
  const [securityScore, setSecurityScore] = useState(80);
  const [scanningStatus, setScanningStatus] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [deviceList, setDeviceList] = useState([
    { id: 1, name: "Night City Terminal", lastActive: "Just now", location: "Night City, NC", trusted: true, ip: "198.51.100.24", risk: "Low" },
    { id: 2, name: "NetRunner Device", lastActive: "2 hours ago", location: "Watson District, NC", trusted: true, ip: "203.0.113.15", risk: "Low" },
    { id: 3, name: "Unknown Device", lastActive: "Yesterday", location: "Pacifica, NC", trusted: false, ip: "255.192.134.76", risk: "Critical" },
  ]);

  // Update time effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  // Random security scanning simulation
  useEffect(() => {
    const scanInterval = setInterval(() => {
      setScanningStatus(true);
      setTimeout(() => setScanningStatus(false), 3000);
    }, 15000);
    
    return () => clearInterval(scanInterval);
  }, []);

  const removeDevice = (id) => {
    setDeviceList(deviceList.filter(device => device.id !== id));
  };

  const performSecurityScan = () => {
    setScanningStatus(true);
    setTimeout(() => {
      setScanningStatus(false);
      setSecurityScore(Math.floor(Math.random() * 20) + 75); // Random score between 75-95
    }, 3000);
  };

  return (
    <div className="bg-black min-h-screen text-gray-300 p-6 relative">
      {/* Cyberpunk grid background effect */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Scanning effect overlay */}
      {scanningStatus && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className="absolute left-0 right-0 h-px bg-cyan-400 opacity-70 scan-line" 
               style={{animation: 'scanAnimation 3s linear infinite'}}></div>
        </div>
      )}

      {/* Header with glowing effect */}
      <div className="relative mb-10 z-10">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg blur opacity-40"></div>
        <div className="relative bg-black rounded-lg p-4 border border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="text-cyan-400" size={32} />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">SECURITY MATRIX // v2.0</h1>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>
                <span className="text-xs">SECURE CONNECTION</span>
              </div>
              <div className="text-xs text-gray-500 border-l border-gray-700 pl-4">
                <div className="flex items-center">
                  <Clock size={12} className="mr-1 text-purple-400" />
                  <span>{currentTime}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* System status bar */}
          <div className="mt-4 flex space-x-4 text-xs text-gray-500">
            <div className="flex items-center">
              <Terminal size={12} className="mr-1 text-pink-400" />
              <span>SYS: ACTIVE</span>
            </div>
            <div className="flex items-center">
              <Database size={12} className="mr-1 text-pink-400" />
              <span>PING: 22ms</span>
            </div>
            <div className="flex items-center">
              <Globe size={12} className="mr-1 text-pink-400" />
              <span>NET: ENCRYPTED</span>
            </div>
            <div className="flex items-center">
              <Shield size={12} className="mr-1 text-pink-400" />
              <span>SECURE-PROTOCOL: {encryptionLevel}</span>
            </div>
            {scanningStatus && (
              <div className="flex items-center text-cyan-400 animate-pulse">
                <RefreshCw size={12} className="mr-1 animate-spin" />
                <span>SCANNING SYSTEM...</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
        {/* Main security settings column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Password security section */}
          <div className="bg-gray-900 bg-opacity-80 rounded-lg p-6 border border-gray-800 relative overflow-hidden group">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            {/* Enhanced hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl text-cyan-400 flex items-center">
                  <Lock size={20} className="mr-2" />
                  Password Protection
                </h2>
                <div className="flex items-center">
                  <span className="text-xs text-pink-500 mr-2">LEVEL 3 ENCRYPTION</span>
                  <div className="px-2 py-1 bg-pink-900 bg-opacity-30 rounded text-xs text-pink-400 border border-pink-800">
                    MILITARY GRADE
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-xs text-gray-400 mb-1">Current Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    value="cyberpunk2077" 
                    className="w-full bg-black bg-opacity-60 border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-purple-500 text-gray-300"
                    readOnly
                  />
                  <button 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-2 text-gray-500 hover:text-cyan-400"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <div className="mt-2 flex space-x-1">
                  <div className="h-1 flex-1 bg-cyan-400 rounded"></div>
                  <div className="h-1 flex-1 bg-cyan-400 rounded"></div>
                  <div className="h-1 flex-1 bg-cyan-400 rounded"></div>
                  <div className="h-1 flex-1 bg-purple-500 rounded"></div>
                  <div className="h-1 flex-1 bg-gray-700 rounded"></div>
                </div>
                <div className="mt-1 text-xs text-gray-500 flex justify-between">
                  <span>Password strength</span>
                  <span className="text-cyan-400">Strong</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded text-white hover:opacity-90 transition-all hover:shadow-glow-purple">
                  Change Password
                </button>
                <div className="text-xs flex items-center">
                  <RefreshCw size={12} className="mr-1 text-purple-400" />
                  <span className="text-gray-500">Last updated: 21 days ago</span>
                </div>
              </div>
            </div>
            
            <div className="absolute h-px bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          </div>

          {/* Two-factor authentication */}
          <div className="bg-gray-900 bg-opacity-80 rounded-lg p-6 border border-gray-800 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex items-center justify-between mb-6 relative z-10">
              <h2 className="text-xl text-cyan-400 flex items-center">
                <Smartphone size={20} className="mr-2" />
                Two-Factor Authentication
              </h2>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={twoFactorEnabled} onChange={() => setTwoFactorEnabled(!twoFactorEnabled)} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-400 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-cyan-500 peer-checked:to-purple-500"></div>
                <span className="ml-3 text-sm text-gray-400">{twoFactorEnabled ? "Enabled" : "Disabled"}</span>
              </label>
            </div>

            {twoFactorEnabled && (
              <div className="flex flex-col space-y-4 relative z-10">
                <div className="flex items-center justify-between p-3 bg-black bg-opacity-60 rounded border border-gray-800 group hover:border-cyan-800 transition-colors">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mr-3 group-hover:animate-pulse transition-all">
                      <Bell size={18} className="text-black" />
                    </div>
                    <div>
                      <div className="text-sm">Authenticator App</div>
                      <div className="text-xs text-gray-500">Primary method</div>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-gray-600 group-hover:text-cyan-400 transition-colors" />
                </div>

                <div className="flex items-center justify-between p-3 bg-black bg-opacity-60 rounded border border-gray-800 group hover:border-purple-800 transition-colors">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3 group-hover:animate-pulse transition-all">
                      <Smartphone size={18} className="text-black" />
                    </div>
                    <div>
                      <div className="text-sm">SMS Verification</div>
                      <div className="text-xs text-gray-500">Backup method</div>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-gray-600 group-hover:text-pink-400 transition-colors" />
                </div>
                
                {/* New option */}
                <div className="flex items-center justify-between p-3 bg-black bg-opacity-60 rounded border border-gray-800 group hover:border-cyan-800 transition-colors">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center mr-3 group-hover:animate-pulse transition-all">
                      <Fingerprint size={18} className="text-black" />
                    </div>
                    <div>
                      <div className="text-sm">Biometric Verification</div>
                      <div className="text-xs text-gray-500">Advanced method</div>
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-blue-900 bg-opacity-30 rounded-full text-xs text-blue-400 border border-blue-800">
                    NEW
                  </div>
                </div>
              </div>
            )}
            
            <div className="absolute h-px bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>

          {/* Active devices - Enhanced */}
          <div className="bg-gray-900 bg-opacity-80 rounded-lg p-6 border border-gray-800 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex items-center justify-between mb-6 relative z-10">
              <h2 className="text-xl text-cyan-400 flex items-center">
                <Wifi size={20} className="mr-2" />
                Connected Devices
              </h2>
              <div className="flex items-center space-x-2">
                <span className={`text-xs px-2 py-1 rounded-full ${deviceList.length > 2 ? 'bg-red-900 text-red-300 border border-red-800' : 'bg-green-900 text-green-300 border border-green-800'}`}>
                  {deviceList.length} Active
                </span>
                <button 
                  onClick={performSecurityScan}
                  className="px-2 py-1 bg-cyan-900 bg-opacity-30 text-cyan-400 rounded-full border border-cyan-800 text-xs hover:bg-opacity-50 transition-colors flex items-center"
                >
                  <RefreshCw size={12} className={`mr-1 ${scanningStatus ? 'animate-spin' : ''}`} />
                  {scanningStatus ? "Scanning..." : "Scan Network"}
                </button>
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              {deviceList.map(device => (
                <div key={device.id} className={`p-3 rounded border ${device.trusted ? 'border-gray-700' : 'border-red-800 animate-pulse'} bg-black bg-opacity-40 group/device hover:bg-opacity-70 transition-all`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${device.trusted ? 'bg-cyan-400' : 'bg-red-500'} mr-2`}></div>
                      <span className="text-sm font-semibold">{device.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`px-2 py-0.5 rounded-full text-xs ${
                        device.risk === 'Low' ? 'bg-green-900 bg-opacity-30 text-green-400 border border-green-800' : 
                        device.risk === 'Medium' ? 'bg-yellow-900 bg-opacity-30 text-yellow-400 border border-yellow-800' : 
                        'bg-red-900 bg-opacity-30 text-red-400 border border-red-800'
                      }`}>
                        {device.risk} Risk
                      </div>
                      <button 
                        onClick={() => removeDevice(device.id)}
                        className="text-xs px-2 py-1 bg-red-900 bg-opacity-40 hover:bg-opacity-60 text-red-400 rounded transition-colors"
                      >
                        Disconnect
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Clock size={10} className="mr-1" />
                      Last active: {device.lastActive}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={10} className="mr-1" />
                      Location: {device.location}
                    </div>
                    <div className="flex items-center">
                      <Globe size={10} className="mr-1" />
                      IP: {device.ip}
                    </div>
                  </div>
                  {!device.trusted && (
                    <div className="mt-2 text-xs text-red-400 flex items-center">
                      <AlertTriangle size={12} className="mr-1" />
                      Suspicious activity detected - Possible security breach
                    </div>
                  )}
                  
                  {/* Additional device actions - visible on hover */}
                  <div className="mt-2 pt-2 border-t border-gray-800 hidden group-hover/device:flex justify-end space-x-2">
                    <button className="text-xs px-2 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded transition-colors">
                      View Details
                    </button>
                    <button className="text-xs px-2 py-1 bg-purple-900 bg-opacity-40 hover:bg-opacity-60 text-purple-400 rounded transition-colors">
                      Block Device
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="absolute h-px bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
          </div>
          
          {/* New section: Security Logs */}
          <div className="bg-gray-900 bg-opacity-80 rounded-lg p-6 border border-gray-800 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex items-center justify-between mb-6 relative z-10">
              <h2 className="text-xl text-cyan-400 flex items-center">
                <FileText size={20} className="mr-2" />
                Security Logs
              </h2>
              <div className="text-xs px-2 py-1 bg-cyan-900 bg-opacity-30 text-cyan-400 rounded-full border border-cyan-800">
                Last 24 Hours
              </div>
            </div>
            
            <div className="space-y-3 relative z-10 max-h-64 overflow-auto custom-scrollbar">
              <div className="text-xs text-gray-400 border-l-2 border-green-500 pl-3 py-1">
                <div className="flex justify-between">
                  <span className="text-green-400">Login Successful</span>
                  <span className="text-gray-500">Today 14:22:05</span>
                </div>
                <p className="mt-1">User authenticated from Night City Terminal</p>
              </div>
              
              <div className="text-xs text-gray-400 border-l-2 border-yellow-500 pl-3 py-1">
                <div className="flex justify-between">
                  <span className="text-yellow-400">System Warning</span>
                  <span className="text-gray-500">Today 12:15:33</span>
                </div>
                <p className="mt-1">Password requirement policy update available</p>
              </div>
              
              <div className="text-xs text-gray-400 border-l-2 border-red-500 pl-3 py-1">
                <div className="flex justify-between">
                  <span className="text-red-400">Failed Login Attempt</span>
                  <span className="text-gray-500">Today 08:43:12</span>
                </div>
                <p className="mt-1">3 failed login attempts from unknown IP: 211.45.118.23</p>
              </div>
              
              <div className="text-xs text-gray-400 border-l-2 border-purple-500 pl-3 py-1">
                <div className="flex justify-between">
                  <span className="text-purple-400">Security Scan</span>
                  <span className="text-gray-500">Yesterday 22:07:56</span>
                </div>
                <p className="mt-1">Full system scan completed. No threats detected.</p>
              </div>
              
              <div className="text-xs text-gray-400 border-l-2 border-cyan-500 pl-3 py-1">
                <div className="flex justify-between">
                  <span className="text-cyan-400">Settings Updated</span>
                  <span className="text-gray-500">Yesterday 19:34:27</span>
                </div>
                <p className="mt-1">2FA settings modified</p>
              </div>
              
              <div className="text-xs text-gray-400 border-l-2 border-blue-500 pl-3 py-1">
                <div className="flex justify-between">
                  <span className="text-blue-400">New Device</span>
                  <span className="text-gray-500">Yesterday 15:22:08</span>
                </div>
                <p className="mt-1">New device "NetRunner Device" added to trusted devices</p>
              </div>
            </div>
            
            <div className="mt-4 flex justify-center relative z-10">
              <button className="text-xs px-4 py-2 bg-black border border-cyan-700 text-cyan-400 rounded hover:bg-cyan-900 hover:bg-opacity-20 transition-all">
                View Full Logs
              </button>
            </div>
            
            <div className="absolute h-px bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          </div>
        </div>

        {/* Sidebar with additional options - Enhanced */}
        <div className="space-y-6">
          {/* Security Status - Enhanced with animation */}
          <div className="bg-gray-900 bg-opacity-80 rounded-lg p-6 border border-gray-800 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h2 className="text-xl text-cyan-400 mb-4 relative z-10">Security Status</h2>
            <div className="mb-6 relative z-10">
              <div className="flex justify-between text-sm mb-2">
                <span>Account Protection</span>
                <span className={`${securityScore >= 90 ? 'text-green-400' : securityScore >= 70 ? 'text-cyan-400' : 'text-red-400'}`}>
                  {securityScore}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    securityScore >= 90 ? 'bg-gradient-to-r from-green-500 to-cyan-500' : 
                    securityScore >= 70 ? 'bg-gradient-to-r from-cyan-400 to-purple-500' : 
                    'bg-gradient-to-r from-red-500 to-pink-500'
                  }`} 
                  style={{width: `${securityScore}%`}}
                ></div>
              </div>
              
              {/* Digital noise effect on the progress bar */}
              <div className="w-full h-4 mt-1">
                <svg width="100%" height="4" viewBox="0 0 200 4">
                  <defs>
                    <pattern id="noisePattern" x="0" y="0" width="20" height="4" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="1" height="1" fill="rgba(0,255,255,0.2)"></rect>
                      <rect x="4" y="1" width="1" height="1" fill="rgba(0,255,255,0.2)"></rect>
                      <rect x="8" y="0" width="1" height="1" fill="rgba(0,255,255,0.2)"></rect>
                      <rect x="12" y="1" width="1" height="1" fill="rgba(0,255,255,0.2)"></rect>
                      <rect x="16" y="0" width="1" height="1" fill="rgba(0,255,255,0.2)"></rect>
                    </pattern>
                  </defs>
                  <rect width="200" height="4" fill="url(#noisePattern)"></rect>
                </svg>
              </div>
            </div>

            <div className="space-y-3 relative z-10">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-green-900 bg-opacity-30 flex items-center justify-center mr-3">
                  <Shield size={16} className="text-green-400" />
                </div>
                <div className="text-sm flex-1">Password Strength</div>
                <div className="text-sm text-green-400">Strong</div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-green-900 bg-opacity-30 flex items-center justify-center mr-3">
                  <Smartphone size={16} className="text-green-400" />
                </div>
                <div className="text-sm flex-1">2FA</div>
                <div className="text-sm text-green-400">Enabled</div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-red-900 bg-opacity-30 flex items-center justify-center mr-3">
                  <Fingerprint size={16} className="text-red-400" />
                </div>
                <div className="text-sm flex-1">Biometrics</div>
                <div className="text-sm text-red-400">Disabled</div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-yellow-900 bg-opacity-30 flex items-center justify-center mr-3">
                  <BarChart2 size={16} className="text-yellow-400" />
                </div>
                <div className="text-sm flex-1">Intrusion Counter</div>
                <div className="text-sm text-yellow-400">3 Attempts</div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-green-900 bg-opacity-30 flex items-center justify-center mr-3">
                  <Lock size={16} className="text-green-400" />
                </div>
                <div className="text-sm flex-1">Encryption</div>
                <div className="text-sm text-green-400">Military</div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between items-center text-xs text-gray-500 relative z-10">
              <div>Last scanned: 4 minutes ago</div>
              <button 
                onClick={performSecurityScan}
                className="px-3 py-1 bg-cyan-900 bg-opacity-20 text-cyan-400 rounded border border-cyan-800 hover:bg-opacity-40 transition-colors flex items-center"
              >
                <RefreshCw size={10} className={`mr-1 ${scanningStatus ? 'animate-spin' : ''}`} />
                Re-scan
              </button>
            </div>
            <div className="absolute h-px bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          </div>

          {/* Advanced options - Enhanced */}
          <div className="bg-gray-900 bg-opacity-80 rounded-lg p-6 border border-gray-800 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h2 className="text-xl text-cyan-400 mb-4 relative z-10">Advanced Settings</h2>
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Fingerprint size={18} className="mr-2 text-purple-400" />
                  <span className="text-sm">Biometric Login</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={biometricsEnabled} onChange={() => setBiometricsEnabled(!biometricsEnabled)} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-400 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-pink-500"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bell size={18} className="mr-2 text-purple-400" />
                  <span className="text-sm">Login Notifications</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={loginNotifications} onChange={() => setLoginNotifications(!loginNotifications)} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-400 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-pink-500"></div>
                </label>
              </div>
              
              {/* New option */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Zap size={18} className="mr-2 text-purple-400" />
                  <span className="text-sm">Neural Protection</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-cyan-400 bg-cyan-900 bg-opacity-30 px-2 py-0.5 rounded-full border border-cyan-800 mr-2">PREMIUM</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={false} className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-400 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-pink-500"></div>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Power size={18} className="mr-2 text-purple-400" />
                    <span className="text-sm">Auto Logout (minutes)</span>
                  </div>
                  <span className="text-sm text-cyan-400">{sessionTimeout}</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="60" 
                  value={sessionTimeout} 
                  onChange={(e) => setSessionTimeout(e.target.value)}
                  className="w-full h-2 bg-gray-800 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-purple-500 [&::-webkit-slider-thumb]:to-pink-500"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>5 min</span>
                  <span>{sessionTimeout} min</span>
                  <span>60 min</span>
                </div>
              </div>
            </div>
            
            <div className="absolute h-px bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>

          {/* Quick actions - Enhanced */}
          <div className="bg-gray-900 bg-opacity-80 rounded-lg p-6 border border-gray-800 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h2 className="text-xl text-cyan-400 mb-4 relative z-10">Quick Actions</h2>
            
            <div className="space-y-3 relative z-10">
              <button className="w-full py-2 px-4 bg-gradient-to-r from-red-800 to-red-600 text-red-200 rounded flex items-center justify-between hover:brightness-110 transition-all group/btn">
                <span className="flex items-center">
                  <User size={16} className="mr-2" />
                  Reset Account
                </span>
                <ChevronRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
              </button>
              
              <button className="w-full py-2 px-4 bg-black border border-purple-700 text-purple-400 rounded flex items-center justify-between hover:bg-purple-900 hover:bg-opacity-20 transition-all group/btn">
                <span className="flex items-center">
                  <Key size={16} className="mr-2" />
                  Backup Access Keys
                </span>
                <ChevronRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
              </button>
              
              <button className="w-full py-2 px-4 bg-black border border-cyan-700 text-cyan-400 rounded flex items-center justify-between hover:bg-cyan-900 hover:bg-opacity-20 transition-all group/btn">
                <span className="flex items-center">
                  <Shield size={16} className="mr-2" />
                  Security Audit
                </span>
                <ChevronRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
              </button>
              
              {/* New action */}
              <button className="w-full py-2 px-4 bg-black border border-pink-700 text-pink-400 rounded flex items-center justify-between hover:bg-pink-900 hover:bg-opacity-20 transition-all group/btn">
                <span className="flex items-center">
                  <Globe size={16} className="mr-2" />
                  VPN Access
                </span>
                <div className="flex items-center">
                  <span className="text-xs bg-pink-900 bg-opacity-30 px-2 rounded-full mr-2">PRO</span>
                  <ChevronRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
            
            <div className="absolute h-px bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
          </div>
          
          {/* New module: Threat Monitoring */}
          <div className="bg-gray-900 bg-opacity-80 rounded-lg p-6 border border-gray-800 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h2 className="text-xl text-cyan-400 mb-4 relative z-10 flex items-center">
              <AlertTriangle size={20} className="mr-2 text-pink-400" />
              Threat Monitoring
            </h2>
            
            <div className="relative z-10">
              <div className="mb-4 p-3 bg-black bg-opacity-60 rounded border border-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm">Network Status</div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
                    <span className="text-xs text-green-400">Protected</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  NetWatch firewall actively monitoring all connections
                </div>
              </div>
              
              <div className="mb-4 flex items-center justify-between p-3 bg-black bg-opacity-60 rounded border border-gray-800">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-pink-900 bg-opacity-30 flex items-center justify-center mr-3">
                    <Database size={16} className="text-pink-400" />
                  </div>
                  <div>
                    <div className="text-sm">Data Encryption</div>
                    <div className="text-xs text-gray-500">Real-time protection active</div>
                  </div>
                </div>
                <div className="px-2 py-1 bg-pink-900 bg-opacity-30 text-pink-400 rounded-full text-xs border border-pink-800">
                  {encryptionLevel}
                </div>
              </div>
              
              <div className="relative">
                <div className="text-sm mb-2">Threat Detection History</div>
                <div className="p-3 bg-black bg-opacity-60 rounded border border-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900 opacity-5"></div>
                  <div className="flex justify-between items-end h-20 relative">
                    <div className="w-2 bg-purple-500 opacity-70 rounded-t" style={{height: '20%'}}></div>
                    <div className="w-2 bg-purple-500 opacity-70 rounded-t" style={{height: '35%'}}></div>
                    <div className="w-2 bg-purple-500 opacity-70 rounded-t" style={{height: '15%'}}></div>
                    <div className="w-2 bg-purple-500 opacity-70 rounded-t" style={{height: '45%'}}></div>
                    <div className="w-2 bg-purple-500 opacity-70 rounded-t" style={{height: '25%'}}></div>
                    <div className="w-2 bg-red-500 opacity-70 rounded-t" style={{height: '80%'}}></div>
                    <div className="w-2 bg-purple-500 opacity-70 rounded-t" style={{height: '20%'}}></div>
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-gray-500">
                    <span>04/04</span>
                    <span>04/07</span>
                    <span>04/10</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute h-px bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Footer with scanner effect - Enhanced */}
      <div className="mt-10 pt-6 border-t border-gray-800 flex justify-between items-center text-xs text-gray-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent scan-animation"></div>
        <div className="z-10 flex items-center">
          <Terminal size={12} className="mr-2 text-purple-400" />
          <span>SYSTEM VERSION: NightCorp v3.0.2</span>
        </div>
        <div className="z-10 text-cyan-500 flex items-center">
          <Shield size={12} className="mr-2" />
          <span className="glitch-text">♦ NETWATCH PROTECTED ♦</span>
        </div>
      </div>
      
      {/* Global CSS */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0f0f0f;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #d946ef);
          border-radius: 4px;
        }
        .shadow-glow-purple {
          box-shadow: 0 0 15px 2px rgba(139, 92, 246, 0.3);
        }
        @keyframes scanAnimation {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .scan-animation {
          animation: scanAnimation 3s linear infinite;
        }
        .glitch-text {
          position: relative;
        }
        .glitch-text:after {
          content: '♦ NETWATCH PROTECTED ♦';
          position: absolute;
          left: 0;
          text-shadow: -1px 0 #0e7490;
          top: 0;
          color: #06b6d4;
          overflow: hidden;
          clip: rect(0, 900px, 0, 0);
          animation: glitch-effect 2s infinite linear alternate-reverse;
        }
        @keyframes glitch-effect {
          0% { clip: rect(0, 900px, 2px, 0); }
          5% { clip: rect(0, 900px, 1px, 0); }
          10% { clip: rect(0, 900px, 3px, 0); }
          15% { clip: rect(0, 900px, 1px, 0); }
          20% { clip: rect(0, 900px, 0px, 0); }
          25% { clip: rect(0, 900px, 5px, 0); }
          30% { clip: rect(0, 900px, 0px, 0); }
          45% { clip: rect(0, 900px, 0px, 0); }
          50% { clip: rect(0, 900px, 2px, 0); }
          60% { clip: rect(0, 900px, 5px, 0); }
          65% { clip: rect(0, 900px, 1px, 0); }
          70% { clip: rect(0, 900px, 0px, 0); }
          75% { clip: rect(0, 900px, 0px, 0); }
          80% { clip: rect(0, 900px, 3px, 0); }
          100% { clip: rect(0, 900px, 0px, 0); }
        }
      `}</style>
    </div>
  );
}