
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CourseManagement from './components/CourseManagement';
import GradesPage from './components/GradesPage';
import ProfilePage from './components/ProfilePage';
import AIInsightsPage from './components/AIInsightsPage';
import { User, UserRole } from './types';

const MOCK_USER: User = {
  id: 'STU123',
  name: 'Alex Johnson',
  email: 'alex.j@university.edu',
  role: 'student',
  avatar: 'https://picsum.photos/200',
  department: 'Computer Science'
};

const App: React.FC = () => {
  const [user, setUser] = useState<User>(MOCK_USER);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Switch role function for demonstration
  const toggleRole = () => {
    setUser(prev => ({
      ...prev,
      role: prev.role === 'student' ? 'teacher' : 'student',
      name: prev.role === 'student' ? 'Dr. Sarah Wilson' : 'Alex Johnson',
      id: prev.role === 'student' ? 'PROF456' : 'STU123',
    }));
  };

  return (
    <Router>
      <div className="flex h-screen bg-slate-50 overflow-hidden">
        {/* Sidebar */}
        <Sidebar 
          user={user} 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen} 
          toggleRole={toggleRole}
        />

        {/* Main Content */}
        <main className={`flex-1 overflow-y-auto transition-all duration-300 ${isSidebarOpen ? 'ml-0' : 'ml-0'}`}>
          <div className="p-4 md:p-8 max-w-7xl mx-auto">
            <header className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-2xl font-bold text-slate-800">Welcome back, {user.name}</h1>
                <p className="text-slate-500">Here's what's happening in your {user.department} portal.</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                </button>
                <img src={user.avatar} alt="Profile" className="w-10 h-10 rounded-full border-2 border-indigo-500" />
              </div>
            </header>

            <Routes>
              <Route path="/" element={<Dashboard user={user} />} />
              <Route path="/courses" element={<CourseManagement user={user} />} />
              <Route path="/grades" element={<GradesPage user={user} />} />
              <Route path="/insights" element={<AIInsightsPage user={user} />} />
              <Route path="/profile" element={<ProfilePage user={user} />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
