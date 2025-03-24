import React from 'react';
import { Bell, Camera, MapPin, AlertTriangle, Clock, Car, Shield, Menu, Info, User } from 'lucide-react';

// Mock data for vehicle crashes
const incidents = [
  {
    id: 1,
    location: "OMR Road, Chennai",
    timestamp: "2024-03-15T15:30:00",
    status: "Active",
    confidence: 95,
    vehicle: {
      type: "mini hatchback",
      make: "Maruti 800",
      color: "White",
      numberPlate: "TN 01 AB 1234",
      damage: "Severe damage",
    },
    cameraId: "CAM-112",
    image: "https://i.ytimg.com/vi/ZUau30Wlztw/maxresdefault.jpg"
  },
  {
    id: 2,
    location: "ECR Road, Chennai",
    timestamp: "2024-03-15T15:15:00",
    status: "Under Investigation",
    confidence: 98,
    vehicle: {
      type: "mini hatchback",
      make: "Tata Nano",
      color: "Pink",
      numberPlate: "TN 02 CD 5678",
      damage: "Front impact, moderate damage",
    },
    cameraId: "CAM-098",
    image: "https://c.ndtvimg.com/2022-07/vfiprb0o_accident_640x480_11_July_22.jpg"
  },
  {
    id: 3,
    location: "Mount Road, Chennai",
    timestamp: "2024-03-15T15:00:00",
    status: "Active",
    confidence: 92,
    vehicle: {
      type: "Sedan",
      make: "Honda City",
      color: "White",
      numberPlate: "TN 03 EF 9012",
      damage: "Front-end collision, moderate damage, person hit",
    },
    cameraId: "CAM-076",
    image: "https://static.toiimg.com/thumb/msid-108659277,width-400,height-225,resizemode-72/108659277.jpg"
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
              <span className="ml-2 text-xl font-bold text-neutral-100">CamSpector</span>
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
            { icon: Camera, label: "Active Cameras", value: "156" },
            { icon: AlertTriangle, label: "Active Incidents", value: "3" },
            { icon: Clock, label: "Avg Response Time", value: "6.5 min" },
            { icon: Car, label: "Vehicles Identified", value: "42" },
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
            <h2 className="text-xl font-bold text-neutral-200 mb-4">Vehicle Incidents</h2>
            <div className="space-y-8">
              {incidents.map((incident) => (
                <div key={incident.id} className="bg-neutral-950/50 rounded-lg p-6 hover:bg-neutral-950/70 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="relative h-[300px] lg:h-[400px] xl:h-[500px] rounded-lg overflow-hidden">
                      <img 
                        src={incident.image} 
                        alt="Vehicle Incident" 
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
                        <p className="text-neutral-400 text-sm uppercase tracking-wider mb-4">Vehicle Details</p>
                        <ul className="text-neutral-200 space-y-3 text-lg">
                          <li>
                            <span className="text-neutral-400">Number Plate:</span>
                            <span className="ml-2 font-mono bg-neutral-900/50 px-3 py-1 rounded">
                              {incident.vehicle.numberPlate}
                            </span>
                          </li>
                          <li><span className="text-neutral-400">Type:</span> {incident.vehicle.type}</li>
                          <li><span className="text-neutral-400">Make:</span> {incident.vehicle.make}</li>
                          <li><span className="text-neutral-400">Color:</span> {incident.vehicle.color}</li>
                          <li>
                            <span className="text-neutral-400">Damage Assessment:</span>
                            <span className="ml-2 text-red-400">{incident.vehicle.damage}</span>
                          </li>
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