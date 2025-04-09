'use client'
import { useState, useEffect, useRef } from 'react';
import { Terminal, Wifi, Shield, Clock, Zap, Server, Database, AlertTriangle, Eye, Activity, 
         ChevronRight, Code, Cpu, Hexagon, Layers, Lock, Network, Plug, Radio, Search, 
         Download, Upload, Skull, Power, Laptop,
         Building,
         DollarSign,
         Landmark} from 'lucide-react';

export default function NetrunnerConsole() {
  const [activeTab, setActiveTab] = useState('terminal');
  const [commandInput, setCommandInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([
    { type: 'system', content: 'NetRunner OS v4.2.0 initialized' },
    { type: 'system', content: 'Establishing secure connection to Night City mainframe...' },
    { type: 'warning', content: 'CAUTION: Corporate surveillance detected in sector 7G' },
    { type: 'system', content: 'Countermeasures deployed. Identity obscured.' },
    { type: 'system', content: 'Connection established via encrypted proxy channels.' },
    { type: 'system', content: 'Enter command or type "help" for assistance.' },
  ]);
  const [systemStatus, setSystemStatus] = useState({
    cpu: 42,
    ram: 68,
    network: 87,
    security: 76,
    temperature: 62,
    bandwidth: { up: 12.7, down: 54.3 }
  });
  const [time, setTime] = useState(new Date());
  const [glitchActive, setGlitchActive] = useState(false);
  const [activeNotifications, setActiveNotifications] = useState(3);
  const [hackProgress, setHackProgress] = useState(null);
  const [mapData, setMapData] = useState([
    { id: 1, name: 'Arasaka Tower', level: 'HIGH', status: 'SECURED', coords: {x: 30, y: 15} },
    { id: 2, name: 'Lizzie\'s Bar', level: 'LOW', status: 'OPEN', coords: {x: 50, y: 60} },
    { id: 3, name: 'Pacifica Mall', level: 'MED', status: 'PATROLLED', coords: {x: 70, y: 40} },
    { id: 4, name: 'Northside Clinic', level: 'LOW', status: 'VULNERABLE', coords: {x: 20, y: 70} },
    { id: 5, name: 'Militech Storage', level: 'HIGH', status: 'ALERT', coords: {x: 80, y: 25} }
  ]);
  const [visibleNodes, setVisibleNodes] = useState({});
  const [targets, setTargets] = useState([
    { id: 1, name: 'Arasaka Databank', type: 'Corp', security: 89, value: '★★★★★', status: 'SECURED' },
    { id: 2, name: 'NCPD Database', type: 'Gov', security: 72, value: '★★★★☆', status: 'GUARDED' },
    { id: 3, name: 'Watson Pharmacy', type: 'Comm', security: 45, value: '★★☆☆☆', status: 'VULNERABLE' },
    { id: 4, name: 'Trauma Team Records', type: 'Med', security: 78, value: '★★★★☆', status: 'SECURED' },
    { id: 5, name: 'Pacifica ATM Network', type: 'Finance', security: 62, value: '★★★☆☆', status: 'PATROLLED' },
  ]);
  const [activePrograms, setActivePrograms] = useState([
    { name: 'ICE Shield v3.5', cpu: 12, memory: 18, status: 'ACTIVE' },
    { name: 'Optic Camouflage', cpu: 8, memory: 24, status: 'ACTIVE' }
  ]);
  const terminalRef = useRef(null);
  const [recentLogs, setRecentLogs] = useState([
    { time: '12:42:33', type: 'warn', message: 'Corporate patrol detected near your digital signature' },
    { time: '12:21:15', type: 'error', message: 'Firewall breach attempt blocked from 192.168.23.114' },
    { time: '11:57:02', type: 'info', message: 'Automatic system backup completed successfully' }
  ]);
  const [consoleColors, setConsoleColors] = useState({
    primary: 'cyan',
    secondary: 'pink',
    accent: 'purple'
  });

  // Scroll to bottom of terminal when new commands are added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      
      // Random system status updates
      setSystemStatus(prev => ({
        ...prev,
        cpu: Math.min(95, Math.max(30, prev.cpu + (Math.random() * 10 - 5))),
        ram: Math.min(95, Math.max(40, prev.ram + (Math.random() * 8 - 4))),
        network: Math.min(98, Math.max(50, prev.network + (Math.random() * 6 - 3))),
        security: Math.min(90, Math.max(60, prev.security + (Math.random() * 4 - 2))),
        temperature: Math.min(85, Math.max(55, prev.temperature + (Math.random() * 3 - 1.5))),
        bandwidth: {
          up: Math.min(30, Math.max(5, prev.bandwidth.up + (Math.random() * 2 - 1))),
          down: Math.min(120, Math.max(30, prev.bandwidth.down + (Math.random() * 10 - 5)))
        }
      }));
      
      // Random glitch effect
      if (Math.random() < 0.08) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 200);
      }

      // Randomly add system logs
      if (Math.random() < 0.05) {
        const logTypes = ['info', 'warn', 'error'];
        const logType = logTypes[Math.floor(Math.random() * logTypes.length)];
        const messages = {
          info: [
            'Routine security scan completed',
            'Memory defragmentation complete',
            'Background data synchronization in progress',
            'Neural link signal stable',
            'Encrypted channel established'
          ],
          warn: [
            'Unusual network traffic detected in sector 7',
            'System temperature above normal parameters',
            'Signal degradation detected in eastern grid',
            'Potential surveillance pattern identified',
            'Unauthorized scan attempt detected'
          ],
          error: [
            'Connection lost to peripheral node 3',
            'Memory sector corruption detected',
            'Failed login attempt from unknown source',
            'Neural interface latency spike',
            'Intrusion attempt blocked from 192.168.0.1'
          ]
        };
        
        const newLog = {
          time: new Date().toLocaleTimeString('en-US', { hour12: false }),
          type: logType,
          message: messages[logType][Math.floor(Math.random() * messages[logType].length)]
        };
        
        setRecentLogs(prev => [newLog, ...prev].slice(0, 5));
      }
      
      // Randomly highlight network nodes
      if (Math.random() < 0.1) {
        const targetId = Math.floor(Math.random() * mapData.length) + 1;
        setVisibleNodes(prev => ({
          ...prev,
          [targetId]: !prev[targetId]
        }));
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [mapData.length]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (!commandInput.trim()) return;
    
    setCommandHistory(prev => [...prev, { type: 'user', content: commandInput }]);
    
    // Command handling with delays for cyberpunk "hacking" feel
    processCommand(commandInput);
    
    setCommandInput('');
  };

  const processCommand = (command) => {
    const cmd = command.toLowerCase().trim();
    let response = { type: 'error', content: 'Command not recognized. Type "help" for available commands.' };
    
    // Basic command set
    if (cmd === 'help') {
      response = { 
        type: 'system', 
        content: 'Available commands:\n' +
                 '• help - Display this help menu\n' +
                 '• clear - Clear terminal history\n' +
                 '• status - Show system status\n' +
                 '• scan [target] - Scan for vulnerabilities\n' +
                 '• connect [address] - Establish connection\n' +
                 '• breach [target] - Attempt system breach\n' +
                 '• decrypt [file] - Decrypt secured data\n' +
                 '• list [programs|targets] - List specified items\n' +
                 '• run [program] - Execute specified program\n' +
                 '• kill [program] - Terminate running program\n' +
                 '• theme [color] - Change interface theme (cyan, red, green, amber)'
      };
    } else if (cmd === 'clear') {
      setCommandHistory([{ type: 'system', content: 'Terminal cleared. Ready for input.' }]);
      return;
    } else if (cmd === 'status') {
      response = { 
        type: 'system', 
        content: `SYSTEM STATUS REPORT
• CPU: ${systemStatus.cpu.toFixed(1)}% utilization
• Memory: ${systemStatus.ram.toFixed(1)}% allocation
• Network: ${systemStatus.network.toFixed(1)}% signal strength
• Security: ${systemStatus.security.toFixed(1)}% integrity
• Core Temp: ${systemStatus.temperature.toFixed(1)}°C
• Bandwidth: ↑${systemStatus.bandwidth.up.toFixed(1)} MB/s | ↓${systemStatus.bandwidth.down.toFixed(1)} MB/s
• Active Programs: ${activePrograms.length}
• Connection: Night City Mainframe (encrypted)
• Identity Protection: Active`
      };
    } else if (cmd.startsWith('scan')) {
      const target = cmd.split(' ')[1];
      
      if (!target) {
        response = { type: 'system', content: 'Scanning local network...' };
        setTimeout(() => {
          setCommandHistory(prev => [...prev, { 
            type: 'system', 
            content: 'Scan complete. 5 potential targets identified in proximity.\nUse "list targets" to view available targets.' 
          }]);
        }, 1500);
        return;
      } else {
        const targetMatch = targets.find(t => t.name.toLowerCase().includes(target.toLowerCase()));
        if (targetMatch) {
          response = { type: 'system', content: `Initiating deep scan on ${targetMatch.name}...` };
          
          setTimeout(() => {
            setCommandHistory(prev => [...prev, { 
              type: 'system', 
              content: `Scan results for ${targetMatch.name}:
• Security Level: ${targetMatch.security}/100
• ICE Protection: ${targetMatch.security > 75 ? 'Advanced' : targetMatch.security > 50 ? 'Standard' : 'Basic'}
• Vulnerabilities: ${3 - Math.floor(targetMatch.security/33)} detected
• Data Value: ${targetMatch.value}
• Current Status: ${targetMatch.status}
• Connection Points: ${Math.floor(Math.random() * 3) + 1}`
            }]);
          }, 2000);
          return;
        } else {
          response = { type: 'error', content: `Target "${target}" not found. Try scanning the network first.` };
        }
      }
    } else if (cmd.startsWith('connect')) {
      const target = cmd.split(' ')[1];
      
      if (!target) {
        response = { type: 'error', content: 'Specify connection target. Usage: connect [address]' };
      } else {
        response = { type: 'system', content: `Establishing connection to ${target}...` };
        
        setTimeout(() => {
          const success = Math.random() > 0.3;
          if (success) {
            setCommandHistory(prev => [...prev, { 
              type: 'system', 
              content: `Connection established to ${target}. Authentication required.` 
            }]);
          } else {
            setCommandHistory(prev => [...prev, { 
              type: 'error', 
              content: `Connection failed. Target ${target} is unreachable or blocked.` 
            }]);
          }
        }, 1500);
        return;
      }
    } else if (cmd.startsWith('breach')) {
      const target = cmd.split(' ')[1];
      
      if (!target) {
        response = { type: 'error', content: 'Specify breach target. Usage: breach [target]' };
      } else {
        const targetMatch = targets.find(t => t.name.toLowerCase().includes(target.toLowerCase()));
        
        if (targetMatch) {
          response = { 
            type: 'warning', 
            content: `INITIATING BREACH PROTOCOL ON ${targetMatch.name.toUpperCase()}` 
          };
          
          // Start hack progress animation
          setHackProgress({
            target: targetMatch.name,
            progress: 0,
            security: targetMatch.security
          });
          
          const interval = setInterval(() => {
            setHackProgress(prev => {
              if (prev.progress >= 100) {
                clearInterval(interval);
                const success = Math.random() * 100 > targetMatch.security;
                
                setTimeout(() => {
                  setCommandHistory(prev => [...prev, { 
                    type: success ? 'system' : 'error', 
                    content: success 
                      ? `BREACH SUCCESSFUL. Access granted to ${targetMatch.name} systems.`
                      : `BREACH FAILED. ICE countermeasures activated. Connection terminated.`
                  }]);
                  
                  if (success) {
                    setTimeout(() => {
                      setCommandHistory(prev => [...prev, { 
                        type: 'system', 
                        content: `Extracting data from ${targetMatch.name}...`
                      }]);
                      
                      setTimeout(() => {
                        setCommandHistory(prev => [...prev, { 
                          type: 'system', 
                          content: `Data extraction complete. ${Math.floor(Math.random() * 500) + 100}MB secured.`
                        }]);
                      }, 2000);
                    }, 1000);
                  }
                  
                  setHackProgress(null);
                }, 500);
                
                return prev;
              }
              return {
                ...prev,
                progress: prev.progress + (Math.random() * 10)
              };
            });
          }, 250);
          
          return;
        } else {
          response = { type: 'error', content: `Target "${target}" not found in network.` };
        }
      }
    } else if (cmd.startsWith('decrypt')) {
      response = { type: 'warning', content: 'Initializing decryption sequence...' };
      
      setTimeout(() => {
        setCommandHistory(prev => [...prev, { 
          type: 'system', 
          content: 'Decryption in progress...\nAttempting to break encryption key...'
        }]);
        
        setTimeout(() => {
          const success = Math.random() > 0.4;
          setCommandHistory(prev => [...prev, { 
            type: success ? 'system' : 'error', 
            content: success 
              ? 'Decryption successful. Data accessible.'
              : 'Decryption failed. Encryption algorithm unknown.'
          }]);
        }, 3000);
      }, 1000);
      
      return;
    } else if (cmd.startsWith('list')) {
      const listType = cmd.split(' ')[1];
      
      if (listType === 'programs') {
        response = { 
          type: 'system', 
          content: 'ACTIVE PROGRAMS:\n' + activePrograms.map(p => 
            `• ${p.name} - CPU: ${p.cpu}% | Memory: ${p.memory}% | Status: ${p.status}`
          ).join('\n') + '\n\nAVAILABLE PROGRAMS:\n• Daemon Injector\n• ICE Breaker v3.5\n• Optic Camouflage\n• Cryptographic Suite\n• Neural Bypass\n• Memory Booster'
        };
      } else if (listType === 'targets') {
        response = { 
          type: 'system', 
          content: 'AVAILABLE TARGETS:\n' + targets.map(t => 
            `• ${t.name} - Type: ${t.type} | Security: ${t.security}/100 | Value: ${t.value} | Status: ${t.status}`
          ).join('\n')
        };
      } else {
        response = { type: 'error', content: 'Specify list type. Usage: list [programs|targets]' };
      }
    } else if (cmd.startsWith('run')) {
      const program = cmd.substring(4).trim();
      
      if (!program) {
        response = { type: 'error', content: 'Specify program to run. Usage: run [program]' };
      } else {
        const isAlreadyRunning = activePrograms.some(p => 
          p.name.toLowerCase().includes(program.toLowerCase())
        );
        
        if (isAlreadyRunning) {
          response = { type: 'warning', content: `Program "${program}" is already running.` };
        } else {
          response = { type: 'system', content: `Launching ${program}...` };
          
          setTimeout(() => {
            const newProgram = {
              name: program.charAt(0).toUpperCase() + program.slice(1),
              cpu: Math.floor(Math.random() * 15) + 5,
              memory: Math.floor(Math.random() * 20) + 10,
              status: 'ACTIVE'
            };
            
            setActivePrograms(prev => [...prev, newProgram]);
            
            setCommandHistory(prev => [...prev, { 
              type: 'system', 
              content: `${newProgram.name} successfully launched and running.`
            }]);
          }, 800);
          
          return;
        }
      }
    } else if (cmd.startsWith('kill')) {
      const program = cmd.substring(5).trim();
      
      if (!program) {
        response = { type: 'error', content: 'Specify program to terminate. Usage: kill [program]' };
      } else {
        const programToKill = activePrograms.find(p => 
          p.name.toLowerCase().includes(program.toLowerCase())
        );
        
        if (programToKill) {
          response = { type: 'system', content: `Terminating ${programToKill.name}...` };
          
          setTimeout(() => {
            setActivePrograms(prev => prev.filter(p => p !== programToKill));
            
            setCommandHistory(prev => [...prev, { 
              type: 'system', 
              content: `${programToKill.name} successfully terminated.`
            }]);
          }, 800);
          
          return;
        } else {
          response = { type: 'error', content: `Program "${program}" not found in active processes.` };
        }
      }
    } else if (cmd.startsWith('theme')) {
      const color = cmd.split(' ')[1];
      
      const validColors = {
        'cyan': { primary: 'cyan', secondary: 'pink', accent: 'purple' },
        'red': { primary: 'red', secondary: 'yellow', accent: 'orange' },
        'green': { primary: 'green', secondary: 'yellow', accent: 'lime' },
        'amber': { primary: 'amber', secondary: 'orange', accent: 'yellow' }
      };
      
      if (validColors[color]) {
        setConsoleColors(validColors[color]);
        response = { type: 'system', content: `Interface theme changed to ${color.toUpperCase()}.` };
      } else {
        response = { type: 'error', content: 'Invalid theme. Available themes: cyan, red, green, amber' };
      }
    }
    
    setTimeout(() => {
      setCommandHistory(prev => [...prev, response]);
    }, 300);
  };

  const tabs = [
    { id: 'terminal', icon: <Terminal size={16} />, label: 'TERMINAL' },
    { id: 'network', icon: <Wifi size={16} />, label: 'NETWORK' },
    { id: 'security', icon: <Shield size={16} />, label: 'ICE' },
    { id: 'targets', icon: <Eye size={16} />, label: 'TARGETS' },
    { id: 'map', icon: <Hexagon size={16} />, label: 'MAP' }
  ];

  // Generate color classes based on selected theme
  const themeClasses = {
    primary: {
      text: `text-${consoleColors.primary}-400`,
      border: `border-${consoleColors.primary}-800`,
      borderBright: `border-${consoleColors.primary}-700`,
      bg: `bg-${consoleColors.primary}-900`,
      bgBright: `bg-${consoleColors.primary}-800`,
      gradient: `from-${consoleColors.primary}-500 to-${consoleColors.primary}-900`,
      glow: `shadow-${consoleColors.primary}`
    },
    secondary: {
      text: `text-${consoleColors.secondary}-500`,
      border: `border-${consoleColors.secondary}-800`,
      borderBright: `border-${consoleColors.secondary}-700`,
      bg: `bg-${consoleColors.secondary}-900`,
      gradient: `from-${consoleColors.secondary}-500 to-${consoleColors.secondary}-900`,
      glow: `shadow-${consoleColors.secondary}`
    },
    accent: {
      text: `text-${consoleColors.accent}-500`,
      border: `border-${consoleColors.accent}-800`,
      bg: `bg-${consoleColors.accent}-900`
    }
  };

  return (
    <div className={`bg-black min-h-screen text-cyan-400 font-mono p-4 flex flex-col ${glitchActive ? 'opacity-90' : ''}`}>
      {/* Header */}
      <header className="flex justify-between items-center mb-2 border-b border-cyan-800 pb-2">
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-px rounded">
            <div className="bg-black px-3 py-1 rounded">
              <span className="font-bold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">NETRUNNER_OS v4.2</span>
            </div>
          </div>
          <div className="ml-4 text-xs flex items-center">
            <Clock size={14} className="mr-1 text-pink-500" />
            <span className="text-gray-400">{time.toLocaleTimeString()}</span>
            <span className="mx-2 text-gray-600">|</span>
            <Activity size={14} className="mr-1 text-cyan-400" />
            <span className="text-cyan-500">{systemStatus.network.toFixed(0)}% CONN</span>
            <span className="mx-2 text-gray-600">|</span>
            <Cpu size={14} className="mr-1 text-amber-500" />
            <span className={`${systemStatus.cpu > 80 ? 'text-red-500' : 'text-amber-500'}`}>{systemStatus.cpu.toFixed(0)}%</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="text-xs px-2 py-1 rounded bg-black border border-pink-700 text-pink-500 flex items-center shadow-glow-pink relative">
            <AlertTriangle size={12} className="mr-1" />
            <span>SECURED</span>
            {activeNotifications > 0 && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                {activeNotifications}
              </div>
            )}
          </div>
          <div className="text-xs px-2 py-1 rounded bg-black border border-cyan-700 text-cyan-500 flex items-center shadow-glow-cyan">
            <Server size={12} className="mr-1" />
            <span>NIGHT CITY</span>
          </div>
          <div className="text-xs px-2 py-1 rounded bg-black border border-amber-700 text-amber-500 flex items-center shadow-glow-yellow">
            <Laptop size={12} className="mr-1" />
            <span>CYBERDECK</span>
          </div>
        </div>
      </header>
      
      {/* Main content area */}
      <div className="flex flex-1 space-x-4">
        {/* Left sidebar */}
        <div className="w-1/5 border border-purple-800 rounded bg-gradient-to-b from-gray-900 to-black p-2 shadow-glow-purple">
          <div className="text-xs text-gray-500 mb-2 flex justify-between items-center">
            <span>SYSTEM STATUS</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse animation-delay-200"></div>
            </div>
          </div>
          
          {/* CPU */}
          <div className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-400">CPU</span>
              <span className={`${systemStatus.cpu > 80 ? 'text-red-500' : 'text-cyan-400'}`}>{systemStatus.cpu.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-900 rounded-full h-1.5">
              <div 
                className={`h-1.5 rounded-full ${systemStatus.cpu > 80 ? 'bg-gradient-to-r from-pink-500 to-red-500' : 'bg-gradient-to-r from-cyan-500 to-blue-500'}`} 
                style={{ width: `${systemStatus.cpu}%` }}
              ></div>
            </div>
          </div>
          
          {/* RAM */}
          <div className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-400">RAM</span>
              <span className={`${systemStatus.ram > 80 ? 'text-red-500' : 'text-cyan-400'}`}>{systemStatus.ram.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-900 rounded-full h-1.5">
              <div 
                className={`h-1.5 rounded-full ${systemStatus.ram > 80 ? 'bg-gradient-to-r from-pink-500 to-red-500' : 'bg-gradient-to-r from-cyan-500 to-blue-500'}`} 
                style={{ width: `${systemStatus.ram}%` }}
              ></div>
            </div>
          </div>
          
          {/* Network */}
          <div className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-400">NETWORK</span>
              <span className="text-cyan-400">{systemStatus.network.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-900 rounded-full h-1.5">
              <div 
                className="h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" 
                style={{ width: `${systemStatus.network}%` }}
              ></div>
            </div>
          </div>
          
          {/* Security */}
          <div className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-400">ICE SHIELD</span>
              <span className={`${systemStatus.security < 70 ? 'text-pink-500' : 'text-cyan-400'}`}>{systemStatus.security.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-900 rounded-full h-1.5">
              <div 
                className={`h-1.5 rounded-full ${systemStatus.security < 70 ? 'bg-gradient-to-r from-red-500 to-pink-500' : 'bg-gradient-to-r from-green-500 to-cyan-500'}`} 
                style={{ width: `${systemStatus.security}%` }}
              ></div>
            </div>
          </div>
          
          {/* Temperature */}
          <div className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-400">TEMPERATURE</span>
              <span className={`${systemStatus.temperature > 75 ? 'text-red-500' : 'text-green-400'}`}>{systemStatus.temperature.toFixed(1)}°C</span>
            </div>
            <div className="w-full bg-gray-900 rounded-full h-1.5">
              <div 
                className={`h-1.5 rounded-full ${systemStatus.temperature > 75 ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-green-500 to-emerald-500'}`} 
                style={{ width: `${(systemStatus.temperature / 85) * 100}%` }}
              ></div>
            </div>
          </div>
          
          {/* Bandwidth */}
          <div className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-400">BANDWIDTH</span>
              <div className="flex">
                <span className="text-green-400 mr-2">↑{systemStatus.bandwidth.up.toFixed(1)}</span>
                <span className="text-blue-400">↓{systemStatus.bandwidth.down.toFixed(1)}</span>
              </div>
            </div>
            <div className="w-full flex gap-1">
              <div className="h-1.5 rounded-full bg-gradient-to-r from-green-500 to-green-700"
                style={{ width: `${(systemStatus.bandwidth.up / 30) * 30}%` }}></div>
              <div className="h-1.5 flex-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-700"
                style={{ width: `${(systemStatus.bandwidth.down / 120) * 70}%` }}></div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 my-3"></div>
          
          {/* Active Programs */}
          <div className="text-xs text-gray-500 mb-2">RUNNING PROGRAMS</div>
          <div className="space-y-2 mb-3">
            {activePrograms.map((program, idx) => (
              <div key={idx} className="text-xs border border-cyan-900 bg-black rounded p-1">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Code size={12} className="mr-1 text-cyan-500" />
                    <span className="text-cyan-400">{program.name}</span>
                  </div>
                  <span className={`px-1 text-xs rounded ${
                    program.status === 'ACTIVE' ? 'bg-green-900 text-green-400' : 
                    program.status === 'WARNING' ? 'bg-yellow-900 text-yellow-400' : 
                    'bg-red-900 text-red-400'
                  }`}>
                    {program.status}
                  </span>
                </div>
                <div className="mt-1 flex justify-between text-gray-500 text-xs">
                  <span>CPU: {program.cpu}%</span>
                  <span>MEM: {program.memory}%</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 my-3"></div>
          
          {/* Live stream status */}
          <div className="text-xs text-gray-500 mb-2">STREAM STATUS</div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></div>
              <span className="text-red-400 text-xs">LIVE</span>
            </div>
            <span className="text-xs text-gray-400">02:47:13</span>
          </div>
          
          <div className="text-xs text-gray-400 mb-1">VIEWERS</div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Eye size={14} className="text-cyan-500 mr-1" />
              <span className="text-cyan-400 font-bold">1,257</span>
            </div>
            <span className="text-xs text-green-500">▲ 12%</span>
          </div>
          
          <div className="border-t border-gray-800 my-3"></div>
          
          {/* Recent alerts */}
          <div className="text-xs text-gray-500 mb-2 flex justify-between items-center">
            <span>SYSTEM LOGS</span>
            <span className="text-cyan-600 cursor-pointer text-xs">REFRESH</span>
          </div>
          <div className="text-xs space-y-2">
            {recentLogs.map((log, idx) => (
              <div key={idx} className={`p-1 border rounded text-xs ${
                log.type === 'warn' ? 'border-yellow-800 text-yellow-500' :
                log.type === 'error' ? 'border-red-800 text-red-500' :
                'border-cyan-800 text-cyan-500'
              } bg-black`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {log.type === 'warn' && <AlertTriangle size={12} className="mr-1" />}
                    {log.type === 'error' && <AlertTriangle size={12} className="mr-1" />}
                    {log.type === 'info' && <Database size={12} className="mr-1" />}
                    <span>{log.message}</span>
                  </div>
                </div>
                <div className="text-gray-500 mt-1 text-right">{log.time}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Main console area */}
        <div className="flex-1 flex flex-col">
          {/* Tabs */}
          <div className="flex">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-1 text-xs rounded-t ${
                  activeTab === tab.id
                    ? 'bg-gray-900 text-cyan-400 border-t border-l border-r border-cyan-700'
                    : 'bg-gray-950 text-gray-500 border-b border-cyan-900'
                }`}
              >
                {tab.icon}
                <span className="ml-1">{tab.label}</span>
              </button>
            ))}
            <div className="flex-1 border-b border-cyan-900"></div>
          </div>
          
          {/* Terminal content */}
          <div className="flex-1 bg-gray-900 border border-cyan-900 rounded-b p-2 overflow-hidden flex flex-col shadow-glow-cyan">
            {activeTab === 'terminal' && (
              <>
                {/* Terminal output area with scanline effect */}
                <div 
                  ref={terminalRef}
                  className="flex-1 overflow-y-auto mb-2 p-2 bg-black rounded font-mono text-sm terminal-scanlines"
                >
                  {commandHistory.map((entry, index) => (
                    <div key={index} className={`mb-1 ${
                      entry.type === 'user' 
                        ? 'text-green-500' 
                        : entry.type === 'system' 
                          ? 'text-cyan-400' 
                          : entry.type === 'warning' 
                            ? 'text-yellow-500'
                            : 'text-red-500'
                    }`}>
                      {entry.type === 'user' ? '> ' : ''}
                      {entry.content}
                    </div>
                  ))}
                  
                  {/* Hack progress indicator */}
                  {hackProgress && (
                    <div className="my-2 border border-yellow-900 bg-black p-2 rounded">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-yellow-500">BREACH PROTOCOL: {hackProgress.target}</span>
                        <span className="text-yellow-500">{hackProgress.progress.toFixed(0)}%</span>
                      </div>
                      <div className="w-full bg-gray-900 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            hackProgress.security > 75 
                              ? 'bg-gradient-to-r from-red-500 to-yellow-500' 
                              : 'bg-gradient-to-r from-yellow-500 to-green-500'
                          }`}
                          style={{ width: `${hackProgress.progress}%` }}
                        ></div>
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Breaking ICE security modules... {Math.min(4, Math.floor(hackProgress.progress / 25))} of 4 complete
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Command input */}
                <form onSubmit={handleCommandSubmit} className="flex">
                  <div className="bg-black text-green-500 px-2 py-1 rounded-l flex items-center border-l border-t border-b border-green-900">
                    <Terminal size={16} />
                  </div>
                  <input
                    value={commandInput}
                    onChange={(e) => setCommandInput(e.target.value)}
                    type="text"
                    className="flex-1 bg-black text-green-500 px-2 py-1 outline-none border-t border-b border-green-900"
                    placeholder="Enter command..."
                  />
                  <button 
                    type="submit"
                    className="bg-black text-green-500 px-3 py-1 rounded-r border-t border-r border-b border-green-900 hover:bg-green-900 hover:text-black transition-colors"
                  >
                    EXECUTE
                  </button>
                </form>
              </>
            )}
            
            {activeTab === 'network' && (
              <div className="flex-1 p-3 bg-black rounded">
                <div className="mb-3 text-cyan-500 flex justify-between items-center">
                  <div className="text-lg font-bold flex items-center">
                    <Network size={20} className="mr-2" />
                    Network Interface
                  </div>
                  <div className="flex items-center text-xs">
                    <span className="mr-2">Status: <span className="text-green-500">CONNECTED</span></span>
                    <span className="flex items-center">
                      <Upload size={14} className="mr-1 text-green-500" />
                      {systemStatus.bandwidth.up.toFixed(1)}MB/s
                      <Download size={14} className="ml-2 mr-1 text-blue-500" />
                      {systemStatus.bandwidth.down.toFixed(1)}MB/s
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {/* Network stats */}
                  <div className="border border-cyan-900 bg-gray-900 rounded p-3">
                    <div className="text-sm text-cyan-400 mb-3 border-b border-cyan-900 pb-1">NETWORK STATISTICS</div>
                    
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <div className="text-gray-500 mb-1">PING</div>
                        <div className="text-cyan-400 font-bold">{Math.floor(Math.random() * 20) + 10}ms</div>
                      </div>
                      <div>
                        <div className="text-gray-500 mb-1">UPTIME</div>
                        <div className="text-cyan-400 font-bold">13:47:22</div>
                      </div>
                      <div>
                        <div className="text-gray-500 mb-1">TOTAL TRANSFER</div>
                        <div className="text-cyan-400 font-bold">12.47 GB</div>
                      </div>
                      <div>
                        <div className="text-gray-500 mb-1">TRAFFIC ANALYSIS</div>
                        <div className="text-cyan-400 font-bold">Clean</div>
                      </div>
                      <div>
                        <div className="text-gray-500 mb-1">ENCRYPTION</div>
                        <div className="text-cyan-400 font-bold">AES-256</div>
                      </div>
                      <div>
                        <div className="text-gray-500 mb-1">PROXY JUMPS</div>
                        <div className="text-cyan-400 font-bold">7</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Active connections */}
                  <div className="border border-cyan-900 bg-gray-900 rounded p-3">
                    <div className="text-sm text-cyan-400 mb-3 border-b border-cyan-900 pb-1 flex justify-between">
                      <span>ACTIVE CONNECTIONS</span>
                      <span className="text-xs">{3 + Math.floor(Math.random() * 4)} TOTAL</span>
                    </div>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center border-b border-gray-800 pb-1">
                        <div className="flex items-center">
                          <Server size={12} className="mr-1 text-green-500" />
                          <span className="text-green-400">Night City Mainframe</span>
                        </div>
                        <span className="text-gray-400">192.168.1.1</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-800 pb-1">
                        <div className="flex items-center">
                          <Radio size={12} className="mr-1 text-blue-500" />
                          <span className="text-blue-400">Encrypted Proxy 3</span>
                        </div>
                        <span className="text-gray-400">45.33.27.122</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-800 pb-1">
                        <div className="flex items-center">
                          <Database size={12} className="mr-1 text-purple-500" />
                          <span className="text-purple-400">Neural Data Storage</span>
                        </div>
                        <span className="text-gray-400">10.0.2.15</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Wifi size={12} className="mr-1 text-yellow-500" />
                          <span className="text-yellow-400">Watson District Hub</span>
                        </div>
                        <span className="text-gray-400">172.16.25.99</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Network traffic graph */}
                  <div className="border border-cyan-900 bg-gray-900 rounded p-3 col-span-2">
                    <div className="text-sm text-cyan-400 mb-3 border-b border-cyan-900 pb-1 flex justify-between">
                      <span>NETWORK TRAFFIC</span>
                      <div className="flex items-center text-xs gap-4">
                        <span className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 mr-1"></div>
                          Upload
                        </span>
                        <span className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 mr-1"></div>
                          Download
                        </span>
                      </div>
                    </div>
                    
                    <div className="h-32 flex items-end mt-2">
                      {[...Array(24)].map((_, idx) => (
                        <div key={idx} className="flex-1 flex flex-col justify-end items-center">
                          <div className="w-full flex flex-col items-center">
                            <div 
                              className="w-full bg-green-900 opacity-70"
                              style={{ height: `${(Math.sin(idx * 0.5) * 15 + 20 + Math.random() * 15)}px` }}
                            ></div>
                            <div 
                              className="w-full bg-blue-900 opacity-70"
                              style={{ height: `${(Math.cos(idx * 0.5) * 25 + 40 + Math.random() * 15)}px` }}
                            ></div>
                          </div>
                          <div className="text-gray-600 text-xs mt-1">
                            {idx % 2 === 0 ? `${idx * 5}s` : ''}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'security' && (
              <div className="flex-1 p-3 bg-black rounded">
                <div className="mb-3 text-cyan-500 flex justify-between items-center">
                  <div className="text-lg font-bold flex items-center">
                    <Shield size={20} className="mr-2" />
                    ICE Protection System
                  </div>
                  <div className="flex items-center text-xs">
                    <span className={`px-2 py-1 rounded ${systemStatus.security < 70 ? 'bg-red-900 text-red-300' : 'bg-green-900 text-green-300'}`}>
                      {systemStatus.security < 70 ? 'VULNERABLE' : 'PROTECTED'}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {/* Security status */}
                  <div className="border border-cyan-900 bg-gray-900 rounded p-3">
                    <div className="text-sm text-cyan-400 mb-3 border-b border-cyan-900 pb-1">ICE STATUS</div>
                    
                    <div className="flex flex-col justify-center items-center h-40">
                      <div className="rounded-full w-32 h-32 border-4 border-cyan-700 flex items-center justify-center relative">
                        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 animate-spin"></div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-cyan-400">{systemStatus.security.toFixed(0)}%</div>
                          <div className="text-xs text-gray-400">PROTECTION</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-2 text-xs flex justify-between text-gray-400">
                      <div>Last Attack: <span className="text-cyan-400">37 min ago</span></div>
                      <div>Blocks: <span className="text-cyan-400">17 today</span></div>
                    </div>
                  </div>
                  
                  {/* Active defenses */}
                  <div className="border border-cyan-900 bg-gray-900 rounded p-3 col-span-2">
                    <div className="text-sm text-cyan-400 mb-3 border-b border-cyan-900 pb-1">ACTIVE DEFENSES</div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="border border-green-800 bg-black rounded p-2 text-xs">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Lock size={14} className="mr-1 text-green-500" />
                            <span className="text-green-400">Neural Firewall</span>
                          </div>
                          <span className="bg-green-900 text-green-400 px-1 rounded text-xs">ACTIVE</span>
                        </div>
                        <div className="mt-2 text-gray-400">Protection against basic neural intrusion attempts and data mining.</div>
                        <div className="mt-2 flex justify-between">
                          <span>Strength: <span className="text-green-400">82%</span></span>
                          <span>Layer: <span className="text-green-400">Primary</span></span>
                        </div>
                      </div>
                      
                      <div className="border border-blue-800 bg-black rounded p-2 text-xs">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Layers size={14} className="mr-1 text-blue-500" />
                            <span className="text-blue-400">Trace Blocker</span>
                          </div>
                          <span className="bg-blue-900 text-blue-400 px-1 rounded text-xs">ACTIVE</span>
                        </div>
                        <div className="mt-2 text-gray-400">Prevents digital footprint tracking and identity tracing.</div>
                        <div className="mt-2 flex justify-between">
                          <span>Strength: <span className="text-blue-400">74%</span></span>
                          <span>Layer: <span className="text-blue-400">Secondary</span></span>
                        </div>
                      </div>
                      
                      <div className="border border-purple-800 bg-black rounded p-2 text-xs">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Skull size={14} className="mr-1 text-purple-500" />
                            <span className="text-purple-400">Black ICE Counter</span>
                          </div>
                          <span className="bg-purple-900 text-purple-400 px-1 rounded text-xs">ACTIVE</span>
                        </div>
                        <div className="mt-2 text-gray-400">Advanced protection against lethal corporate countermeasures.</div>
                        <div className="mt-2 flex justify-between">
                          <span>Strength: <span className="text-purple-400">67%</span></span>
                          <span>Layer: <span className="text-purple-400">Tertiary</span></span>
                        </div>
                      </div>
                      
                      <div className="border border-yellow-800 bg-black rounded p-2 text-xs">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Power size={14} className="mr-1 text-yellow-500" />
                            <span className="text-yellow-400">Surge Protector</span>
                          </div>
                          <span className="bg-yellow-900 text-yellow-400 px-1 rounded text-xs">ACTIVE</span>
                        </div>
                        <div className="mt-2 text-gray-400">Hardware protection against electrical feedback attacks.</div>
                        <div className="mt-2 flex justify-between">
                          <span>Strength: <span className="text-yellow-400">91%</span></span>
                          <span>Layer: <span className="text-yellow-400">Hardware</span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Threat log */}
                  <div className="border border-cyan-900 bg-gray-900 rounded p-3 col-span-3">
                    <div className="text-sm text-cyan-400 mb-3 border-b border-cyan-900 pb-1 flex justify-between">
                      <span>THREAT DETECTION LOG</span>
                      <span className="text-xs">LAST 24 HOURS</span>
                    </div>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center bg-red-900 bg-opacity-20 border border-red-800 rounded p-1">
                        <div className="flex items-center">
                          <AlertTriangle size={12} className="mr-1 text-red-500" />
                          <span className="text-red-400">Corporate Black ICE intrusion attempt</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-3">12:32:17</span>
                          <span className="bg-red-800 text-red-200 px-1 rounded">BLOCKED</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center bg-yellow-900 bg-opacity-20 border border-yellow-800 rounded p-1">
                        <div className="flex items-center">
                          <AlertTriangle size={12} className="mr-1 text-yellow-500" />
                          <span className="text-yellow-400">Unauthorized network scan</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-3">10:17:43</span>
                          <span className="bg-yellow-800 text-yellow-200 px-1 rounded">DETECTED</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center bg-cyan-900 bg-opacity-20 border border-cyan-800 rounded p-1">
                        <div className="flex items-center">
                          <Eye size={12} className="mr-1 text-cyan-500" />
                          <span className="text-cyan-400">Pattern analysis of connection data</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-3">08:45:21</span>
                          <span className="bg-cyan-800 text-cyan-200 px-1 rounded">OBSCURED</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center bg-purple-900 bg-opacity-20 border border-purple-800 rounded p-1">
                        <div className="flex items-center">
                          <Database size={12} className="mr-1 text-purple-500" />
                          <span className="text-purple-400">Memory trace extraction attempt</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-3">03:12:58</span>
                          <span className="bg-purple-800 text-purple-200 px-1 rounded">BLOCKED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            
            {activeTab === 'targets' && (
            <div className="flex-1 p-3 overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                <div className={`text-lg font-bold ${themeClasses.primary.text}`}>
                    TARGET DATABASE <span className="text-xs">v2.4.1</span>
                </div>
                <div className="flex items-center">
                    <input
                    type="text"
                    placeholder="Search targets..."
                    className={`bg-black text-gray-300 px-2 py-1 rounded text-xs border ${themeClasses.secondary.border} focus:outline-none mr-2`}
                    />
                    <button className={`p-1 rounded ${themeClasses.secondary.bg} ${themeClasses.secondary.border}`}>
                    <Search size={14} />
                    </button>
                </div>
                </div>

                <div className="space-y-3">
                {targets.map((target) => (
                    <div 
                    key={target.id}
                    className={`border ${themeClasses.primary.border} rounded bg-gradient-to-r from-black to-gray-900 p-3 cursor-pointer hover:bg-gray-900 transition-colors relative overflow-hidden`}
                    >
                    {/* Security level indicator bar */}
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-red-500" 
                        style={{ width: `${target.security}%` }} />
                    
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                        {target.type === 'Corp' && <Building size={16} className={themeClasses.secondary.text} />}
                        {target.type === 'Gov' && <Landmark size={16} className={`text-blue-500`} />}
                        {target.type === 'Comm' && <Radio size={16} className={`text-green-500`} />}
                        {target.type === 'Med' && <Activity size={16} className={`text-red-500`} />}
                        {target.type === 'Finance' && <DollarSign size={16} className={`text-yellow-500`} />}
                        
                        <span className={`ml-2 font-bold ${themeClasses.primary.text}`}>{target.name}</span>
                        </div>
                        <div className={`text-xs ${
                        target.status === 'SECURED' ? 'text-red-500' : 
                        target.status === 'GUARDED' ? 'text-yellow-500' : 
                        target.status === 'VULNERABLE' ? 'text-green-500' : 
                        target.status === 'PATROLLED' ? 'text-blue-500' : 'text-gray-500'
                        }`}>
                        {target.status}
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 mt-2 text-xs text-gray-400">
                        <div>
                        <div className="text-gray-500">TYPE</div>
                        <div className={themeClasses.secondary.text}>{target.type}</div>
                        </div>
                        <div>
                        <div className="text-gray-500">SECURITY</div>
                        <div className={target.security > 75 ? 'text-red-500' : target.security > 50 ? 'text-yellow-500' : 'text-green-500'}>
                            {target.security}/100
                        </div>
                        </div>
                        <div>
                        <div className="text-gray-500">VALUE</div>
                        <div className="text-yellow-500">{target.value}</div>
                        </div>
                    </div>
                    
                    <div className="flex justify-between mt-3">
                        <button className={`px-2 py-1 text-xs rounded ${themeClasses.secondary.bg} ${themeClasses.secondary.border} ${themeClasses.secondary.text} hover:bg-opacity-70`}>
                        <Eye size={12} className="inline mr-1" /> SCAN
                        </button>
                        <button className={`px-2 py-1 text-xs rounded bg-black border border-red-800 text-red-500 hover:bg-red-900 hover:bg-opacity-30`}>
                        <Lock size={12} className="inline mr-1" /> BREACH
                        </button>
                        <button className={`px-2 py-1 text-xs rounded bg-black border border-green-800 text-green-500 hover:bg-green-900 hover:bg-opacity-30`}>
                        <Download size={12} className="inline mr-1" /> DATA
                        </button>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            )}

            {/* Map tab */}
            {activeTab === 'map' && (
            <div className="flex-1 p-3 relative">
                <div className="flex justify-between items-center mb-2">
                <div className={`text-lg font-bold ${themeClasses.primary.text}`}>
                    NIGHT CITY <span className="text-xs">SECTOR MAP</span>
                </div>
                <div className="flex items-center text-xs">
                    <div className="flex items-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                    <span className="text-gray-400">LOW SECURITY</span>
                    </div>
                    <div className="flex items-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
                    <span className="text-gray-400">MEDIUM</span>
                    </div>
                    <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
                    <span className="text-gray-400">HIGH SECURITY</span>
                    </div>
                </div>
                </div>
                
                {/* Map area */}
                <div className={`border ${themeClasses.primary.border} rounded bg-gradient-to-r from-black to-gray-900 h-64 relative terminal-scanlines`}>
                {/* Grid lines */}
                <div className="absolute inset-0 grid grid-cols-10 pointer-events-none">
                    {Array(10).fill(0).map((_, i) => (
                    <div key={`col-${i}`} className={`border-r ${themeClasses.primary.border} border-opacity-30`}></div>
                    ))}
                </div>
                <div className="absolute inset-0 grid grid-rows-10 pointer-events-none">
                    {Array(10).fill(0).map((_, i) => (
                    <div key={`row-${i}`} className={`border-b ${themeClasses.primary.border} border-opacity-30`}></div>
                    ))}
                </div>
                
                {/* Map nodes */}
                {mapData.map((location) => (
                    <div
                    key={location.id}
                    className={`absolute rounded-full w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer
                        ${visibleNodes[location.id] ? `${themeClasses.secondary.glow} animate-pulse` : ''}
                        ${location.level === 'HIGH' ? 'bg-red-500' : 
                        location.level === 'MED' ? 'bg-yellow-500' : 'bg-green-500'}`}
                    style={{
                        left: `${location.coords.x}%`,
                        top: `${location.coords.y}%`,
                    }}
                    >
                    {/* Location tooltip on hover */}
                    <div className="opacity-0 hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 pointer-events-none transition-opacity">
                        <div className={`${themeClasses.secondary.bg} ${themeClasses.secondary.border} ${themeClasses.secondary.text} rounded px-2 py-1 text-xs whitespace-nowrap`}>
                        {location.name} ({location.status})
                        </div>
                    </div>
                    </div>
                ))}
                
                {/* Connection lines between nodes */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <line x1="30%" y1="15%" x2="50%" y2="60%" className="stroke-cyan-800 stroke-1 opacity-50" />
                    <line x1="50%" y1="60%" x2="70%" y2="40%" className="stroke-cyan-800 stroke-1 opacity-50" />
                    <line x1="20%" y1="70%" x2="50%" y2="60%" className="stroke-cyan-800 stroke-1 opacity-50" />
                    <line x1="80%" y1="25%" x2="70%" y2="40%" className="stroke-cyan-800 stroke-1 opacity-50" />
                </svg>
                
                {/* Scan effect */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-500 opacity-20 animate-ping" 
                    style={{width: '60%', height: '60%', left: '20%', top: '20%'}}></div>
                </div>
                
                {/* Map controls */}
                <div className="mt-3 flex justify-between">
                <div className={`text-xs ${themeClasses.primary.text}`}>
                    <div className="text-gray-500">CURRENT SECTOR</div>
                    <div>WATSON DISTRICT - NORTH</div>
                </div>
                
                <div className="flex space-x-2">
                    <button className={`px-2 py-1 text-xs rounded ${themeClasses.secondary.bg} ${themeClasses.secondary.border} ${themeClasses.secondary.text}`}>
                    SCAN PERIMETER
                    </button>
                    <button className={`px-2 py-1 text-xs rounded ${themeClasses.primary.bg} ${themeClasses.primary.border} ${themeClasses.primary.text}`}>
                    MAP DETAILS
                    </button>
                </div>
                </div>
                
                {/* Location information */}
                <div className={`mt-3 border ${themeClasses.primary.border} rounded bg-black bg-opacity-50 p-2`}>
                <div className="flex justify-between items-center mb-1">
                    <div className={`font-bold ${themeClasses.secondary.text}`}>LOCATION INTELLIGENCE</div>
                    <div className="text-xs text-gray-500">LAST UPDATED: 12:42:10</div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                    <div className="text-gray-500">CORPORATE PRESENCE</div>
                    <div className="text-gray-300">ARASAKA (50%), MILITECH (30%)</div>
                    </div>
                    <div>
                    <div className="text-gray-500">SECURITY SYSTEMS</div>
                    <div className="text-gray-300">NEURAL SCANNERS, DRONE PATROL</div>
                    </div>
                    <div>
                    <div className="text-gray-500">NETWORK ACCESS</div>
                    <div className="text-gray-300">4 ENTRY POINTS DETECTED</div>
                    </div>
                </div>
                </div>
            </div>
            )}
          </div>
        </div>
        
        {/* Enhanced Right sidebar */}
        <div className="w-1/4 border border-pink-800 rounded bg-gradient-to-b from-gray-900 to-black p-2 shadow-glow-pink relative overflow-hidden">
        {/* Decorative corner elements */}
        <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-pink-600 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-pink-600 opacity-60"></div>
        
        {/* Scanline overlay for cyberpunk feel */}
        <div className="absolute inset-0 terminal-scanlines pointer-events-none"></div>
        
        <div className="flex items-center justify-between mb-2">
            <div className="text-xs text-gray-500 font-mono">NETRUNNER TOOLS</div>
            <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse mr-1"></div>
            <div className="text-xs text-pink-500 font-mono">{activePrograms.length}/6</div>
            </div>
        </div>
        
        <div className="space-y-2">
            {/* Enhanced Tools with better hover effects and indicators */}
            <button className="w-full p-2 bg-gradient-to-r from-purple-900 to-pink-900 rounded border border-pink-700 text-left flex items-center justify-between text-pink-300 hover:from-purple-800 hover:to-pink-800 transition-colors group relative">
            <div className="flex items-center">
                <Zap size={16} className="mr-2 group-hover:text-pink-300 transition-colors" />
                <span>Daemon Injector</span>
            </div>
            <div className="text-xs opacity-70 font-mono">v4.2</div>
            <div className="absolute inset-0 border border-pink-500 rounded opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </button>
            
            <button className="w-full p-2 bg-gradient-to-r from-blue-900 to-cyan-900 rounded border border-cyan-700 text-left flex items-center justify-between text-cyan-300 hover:from-blue-800 hover:to-cyan-800 transition-colors group relative">
            <div className="flex items-center">
                <Shield size={16} className="mr-2 group-hover:text-cyan-300 transition-colors" />
                <span>ICE Breaker</span>
            </div>
            <div className="text-xs opacity-70 font-mono">v3.1</div>
            <div className="absolute inset-0 border border-cyan-500 rounded opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </button>
            
            <button className="w-full p-2 bg-gradient-to-r from-gray-900 to-blue-900 rounded border border-blue-700 text-left flex items-center justify-between text-blue-300 hover:from-gray-800 hover:to-blue-800 transition-colors group relative">
            <div className="flex items-center">
                <Network size={16} className="mr-2 group-hover:text-blue-300 transition-colors" />
                <span>Remote Access</span>
            </div>
            <div className="text-xs opacity-70 font-mono">v2.7</div>
            <div className="absolute inset-0 border border-blue-500 rounded opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </button>
            
            <button className="w-full p-2 bg-gradient-to-r from-yellow-900 to-orange-900 rounded border border-yellow-700 text-left flex items-center justify-between text-yellow-300 hover:from-yellow-800 hover:to-orange-800 transition-colors group relative">
            <div className="flex items-center">
                <Database size={16} className="mr-2 group-hover:text-yellow-300 transition-colors" />
                <span>Data Extractor</span>
            </div>
            <div className="text-xs opacity-70 font-mono">v5.0</div>
            <div className="absolute inset-0 border border-yellow-500 rounded opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </button>
        </div>
        
        <div className="border-t border-gray-800 my-3 relative">
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-black px-2 text-gray-600 text-xs">SYSTEM</div>
        </div>
        
        {/* Enhanced Chat area with notifications and interface */}
        <div className="flex items-center justify-between mb-2">
            <div className="text-xs text-gray-500 font-mono">SECURE CHANNEL</div>
            <div className="text-xs text-cyan-500 flex items-center">
            <Wifi size={10} className="mr-1" />
            <span className="font-mono">ENCRYPTED</span>
            </div>
        </div>
        
        <div className="bg-black bg-opacity-80 rounded border border-purple-900 p-2 h-48 overflow-y-auto mb-2 text-xs relative">
            {/* Connection status indicator */}
            <div className="absolute right-2 top-2 flex items-center">
            <div className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse mr-1"></div>
            <div className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse mr-1" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            
            <div className="text-gray-600 text-center text-xs mb-2 font-mono">-- SECURE CONNECTION ESTABLISHED --</div>
            
            <div className="mb-2">
            <span className="text-purple-500 font-bold">Alt_V:</span>
            <span className="text-gray-300"> Got that new ICE breaker yet?</span>
            </div>
            <div className="mb-2">
            <span className="text-cyan-500 font-bold">YOU:</span>
            <span className="text-gray-300"> Testing it now on Arasaka's old systems</span>
            </div>
            <div className="mb-2">
            <span className="text-purple-500 font-bold">Alt_V:</span>
            <span className="text-gray-300"> Be careful. Their countermeasures are no joke</span>
            </div>
            <div className="mb-2">
            <span className="text-pink-500 font-bold">R3kt:</span>
            <span className="text-gray-300"> I lost my arm to their black ICE last month</span>
            </div>
            <div className="mb-2">
            <span className="text-cyan-500 font-bold">YOU:</span>
            <span className="text-gray-300"> Got a new shield routing algorithm. Should work</span>
            </div>
            <div className="text-gray-600 text-xs font-mono blink">█</div>
        </div>
        
        <div className="flex">
            <input 
            type="text" 
            className="flex-1 bg-black text-gray-300 px-2 py-1 rounded-l text-xs border border-purple-900 focus:border-purple-600 outline-none font-mono"
            placeholder="Send message..."
            />
            <button className="bg-purple-900 text-purple-200 px-3 py-1 rounded-r text-xs border border-purple-700 hover:bg-purple-800 flex items-center justify-center relative group">
            <span>SEND</span>
            <ChevronRight size={12} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 rounded-r transition-opacity"></div>
            </button>
        </div>
        
        {/* Status indicators */}
        <div className="flex items-center justify-between mt-3 text-xs">
            <div className="flex items-center text-green-500">
            <Activity size={10} className="mr-1" />
            <span className="font-mono">ONLINE</span>
            </div>
            <div className="flex items-center text-gray-500">
            <Lock size={10} className="mr-1" />
            <span className="font-mono">SECURED</span>
            </div>
        </div>
        </div>
        </div>

        {/* Enhanced Custom styling */}
        <style jsx global>{`
        /* Improved Scanline effect */
        .terminal-scanlines {
            background: linear-gradient(
            to bottom,
            rgba(18, 16, 16, 0) 50%,
            rgba(0, 0, 0, 0.25) 50%
            );
            background-size: 100% 4px;
            position: relative;
        }
        
        .terminal-scanlines::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: repeating-linear-gradient(
            to bottom,
            transparent 0,
            rgba(0, 240, 255, 0.05) 1px,
            transparent 2px
            );
            pointer-events: none;
        }
        
        /* Enhanced Glowing shadows */
        .shadow-glow-cyan {
            box-shadow: 0 0 8px rgba(0, 240, 255, 0.3), 
                        inset 0 0 2px rgba(0, 240, 255, 0.2);
        }
        
        .shadow-glow-pink {
            box-shadow: 0 0 8px rgba(255, 0, 127, 0.3),
                        inset 0 0 2px rgba(255, 0, 127, 0.2);
        }
        
        .shadow-glow-purple {
            box-shadow: 0 0 8px rgba(138, 43, 226, 0.3),
                        inset 0 0 2px rgba(138, 43, 226, 0.2);
        }
        
        /* Text cursor blink animation */
        .blink {
            animation: blink-animation 1.2s steps(2, start) infinite;
        }
        
        @keyframes blink-animation {
            to {
            visibility: hidden;
            }
        }
        
        /* Glitch effect */
        .glitch {
            position: relative;
            animation: glitch 0.5s infinite;
        }
        
        @keyframes glitch {
            0% {
            transform: translate(0);
            }
            20% {
            transform: translate(-2px, 2px);
            }
            40% {
            transform: translate(-2px, -2px);
            }
            60% {
            transform: translate(2px, 2px);
            }
            80% {
            transform: translate(2px, -2px);
            }
            100% {
            transform: translate(0);
            }
        }
        `}</style>
    </div>
  );
}