import { ArrowRight, RotateCcw, Users, Phone, Activity, Home, MapPin, Camera, User } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
              <img src="/placeholder.svg" alt="Profile" width={40} height={40} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Welcome Back</p>
              <h1 className="text-xl font-bold">Vinit21</h1>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full bg-gray-200">
              <RotateCcw className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full bg-gray-200">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </header>

        <main className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="relative h-64 md:h-96">
              {/* Replace with img tag */}
              <img
                src="/placeholder.svg"
                alt="Map of Hyderabad"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <button className="w-full py-3 bg-red-500 text-white font-bold">Get Data</button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <button className="p-4 bg-white rounded-lg shadow text-center">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <span className="block font-bold">4</span>
                <span className="text-sm text-gray-500">Workers</span>
              </button>
              <button className="p-4 bg-white rounded-lg shadow text-center">
                <Phone className="w-8 h-8 mx-auto mb-2" />
                <span className="block font-bold">Contacts</span>
                <span className="text-sm text-gray-500">Emergency</span>
              </button>
              <button className="p-4 bg-white rounded-lg shadow text-center">
                <Activity className="w-8 h-8 mx-auto mb-2" />
                <span className="block font-bold">Sensor</span>
                <span className="text-sm text-gray-500">Status</span>
              </button>
            </div>

            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold">Checked In Workers:</h2>
                <button className="p-1 bg-blue-100 rounded-full">
                  <RotateCcw className="w-5 h-5 text-blue-500" />
                </button>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500">
                    <th>ID. Name</th>
                    <th>Check-In</th>
                    <th>Check-Out</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-100">
                    <td>Dheeraj .</td>
                    <td>8:00 AM</td>
                    <td>7:30 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>

        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
          <ul className="flex justify-around py-2">
            <li><button className="p-2"><Home className="w-6 h-6" /></button></li>
            <li><button className="p-2"><MapPin className="w-6 h-6" /></button></li>
            <li><button className="p-2"><Camera className="w-6 h-6" /></button></li>
            <li><button className="p-2"><User className="w-6 h-6" /></button></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
