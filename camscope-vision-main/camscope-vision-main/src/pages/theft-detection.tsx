import React from 'react';
import { Bell, Camera, MapPin, AlertTriangle, Clock, User, Shield, Menu } from 'lucide-react';

// Mock data for demonstration
const incidents = [
  {
    id: 3,
    location: "Velachery, Chennai",
    timestamp: "202 4-03-15T14:30:00",
    status: "Active",
    confidence: 92,
    suspect: {
      height: "160-170cm",
      clothing: "Black hoodie",
      distinguishing: "Sunglasses, Brown leather handbag (stolen)",
    },
    cameraId: "CAM-087",
    image: "https://img.philkotse.com/temp/2024/07/27/keeping-valuables-away-from-thiefs-sight-d981-cc5a.webp"
  },
  {
    id: 1,
    location: "Anna Nagar, Chennai",
    timestamp: "2024-03-15T14:23:00",
    status: "Active",
    confidence: 96,
    suspect: {
      height: "150-165cm",
      clothing: "White t-shirt",
      distinguishing: ", medium build",
    },
    cameraId: "CAM-045",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQA7Oj1MeYE-rQQKziktIFUv4s_NlIWbMvv0an_qUyf1eaQ6KfjRxhXhA86OCRCvPv58E&usqp=CAU"
  },
  {
    id: 2,
    location: "T Nagar, Chennai",
    timestamp: "2024-03-15T14:20:00",
    status: "Under Investigation",
    confidence: 98,
    suspect: {
      height: "170-180cm",
      clothing: "Camouflage military-style dress",
      distinguishing: "White backpack, carrying suspicious object",
    },
    cameraId: "CAM-032",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhwK4eK3UwFx_U1OqYVm7hHEEkPrZqpScrBj8rkOzsMicXdBp6aR_3vJdV9FBKPUlKVQ&usqp=CAU"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Navigation */}
      <nav className="bg-neutral-900/30 backdrop-blur-xl border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-neutral-300" />
              <span className="ml-2 text-xl font-bold text-neutral-100">Indian Police CCTV AI System</span>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-neutral-400 cursor-pointer hover:text-neutral-200" />
              <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
                <User className="w-5 h-5 text-neutral-300" />
              </div>
              <Menu className="w-6 h-6 text-neutral-400 cursor-pointer hover:text-neutral-200" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Camera, label: "Active Cameras", value: "124" },
            { icon: AlertTriangle, label: "Active Incidents", value: "3" },
            { icon: Clock, label: "Avg Response Time", value: "4.2 min" },
            { icon: User, label: "Suspects Identified", value: "27" },
          ].map((stat, index) => (
            <div key={index} className="bg-neutral-900/40 backdrop-blur-xl rounded-xl p-6 border border-neutral-800 hover:bg-neutral-900/60 transition-all duration-300">
              <div className="flex items-center">
                <stat.icon className="w-8 h-8 text-neutral-400" />
                <div className="ml-4">
                  <p className="text-sm text-neutral-500">{stat.label}</p>
                  <p className="text-2xl font-bold text-neutral-200">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Incidents List */}
        <div className="bg-neutral-900/40 backdrop-blur-xl rounded-xl border border-neutral-800 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold text-neutral-200 mb-4">Active Incidents</h2>
            <div className="space-y-8">
              {incidents.map((incident) => (
                <div key={incident.id} className="bg-neutral-950/50 rounded-lg p-6 hover:bg-neutral-950/70 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="relative h-[300px] lg:h-[400px] xl:h-[500px] rounded-lg overflow-hidden">
                      <img 
                        src={incident.image} 
                        alt="Incident" 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute top-2 right-2 bg-red-500/80 text-neutral-100 px-2 py-1 rounded text-sm backdrop-blur-sm">
                        LIVE
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center">
                            <MapPin className="w-5 h-5 text-neutral-400" />
                            <span className="ml-2 text-neutral-200 text-lg">{incident.location}</span>
                          </div>
                          <span className={`px-4 py-1.5 rounded-full text-sm backdrop-blur-sm ${
                            incident.status === 'Active' ? 'bg-red-500/20 text-red-300' : 'bg-yellow-500/20 text-yellow-300'
                          }`}>
                            {incident.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-6 mb-6">
                          <div>
                            <p className="text-neutral-500 text-sm">Camera ID</p>
                            <p className="text-neutral-300 text-lg">{incident.cameraId}</p>
                          </div>
                          <div>
                            <p className="text-neutral-500 text-sm">Timestamp</p>
                            <p className="text-neutral-300 text-lg">
                              {new Date(incident.timestamp).toLocaleString('en-IN')}
                            </p>
                          </div>
                          <div>
                            <p className="text-neutral-500 text-sm">AI Confidence</p>
                            <p className="text-neutral-300 text-lg">{incident.confidence}%</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-neutral-950/70 rounded-lg p-6 backdrop-blur-sm">
                        <p className="text-neutral-400 text-sm uppercase tracking-wider mb-4">Suspect Description</p>
                        <ul className="text-neutral-200 space-y-3 text-lg">
                          <li><span className="text-neutral-400">Height:</span> {incident.suspect.height}</li>
                          <li><span className="text-neutral-400">Clothing:</span> {incident.suspect.clothing}</li>
                          <li><span className="text-neutral-400">Distinguishing Features:</span> {incident.suspect.distinguishing}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;