import React from "react";
import { Button } from "@/components/ui/button";
import "react-phone-number-input/style.css"; 
import {  useNavigate } from "react-router-dom";
import { Home, ClipboardList, Bell, Settings, LogOut } from "lucide-react";

const TechnicianDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 grid grid-cols-1 md:grid-cols-[1fr_4fr] lg:grid-cols-[1fr_3fr]">
      {/* Sidebar */}
      <aside className="bg-white shadow-md md:col-span-1 lg:col-span-1 md:flex md:flex-col hidden">
        <div className="px-4 py-5 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
        </div>
        <nav className="flex-grow px-4">
          <ul>
            <li className="mb-2">
              <Button variant="link" className="flex items-center w-full text-left">
                <Home className="w-5 h-5 mr-3" />
                Home
              </Button>
            </li>
            <li className="mb-2">
              <Button variant="link" className="flex items-center w-full text-left">
                <ClipboardList className="w-5 h-5 mr-3" />
                Jobs
              </Button>
            </li>
            <li className="mb-2">
              <Button variant="link" className="flex items-center w-full text-left">
                <Bell className="w-5 h-5 mr-3" />
                Notifications
              </Button>
            </li>
            <li className="mb-2">
              <Button variant="link" className="flex items-center w-full text-left">
                <Settings className="w-5 h-5 mr-3" />
                Settings
              </Button>
            </li>
          </ul>
        </nav>
        <div className="px-4 py-5 border-t">
          <Button variant="link" className="flex items-center w-full text-left">
            <LogOut className="w-5 h-5 mr-3" />
            Log Out
          </Button>
        </div>
      </aside>

      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden p-4 bg-white shadow-md flex items-center justify-between">
        <Button variant="link" className="text-gray-800">
          <Home className="w-5 h-5" />
          Dashboard
        </Button>
        <Button onClick={() => navigate('/menu')} variant="link" className="text-gray-800">
          Menu
        </Button>
      </div>

      {/* Main Content */}
      <main className="p-4 md:p-8 lg:p-10 bg-white shadow-md rounded-lg md:col-span-2 lg:col-span-2">
        <header className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Welcome, Technician</h1>
          <Button className="md:hidden">Menu</Button>
        </header>
        
        {/* Active Jobs */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Active Jobs</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-gray-700">No active jobs at the moment.</p>
          </div>
        </section>

        {/* Upcoming Appointments */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-gray-700">You have no upcoming appointments.</p>
          </div>
        </section>

        {/* Notifications */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Recent Notifications</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-gray-700">No new notifications.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TechnicianDashboard;
