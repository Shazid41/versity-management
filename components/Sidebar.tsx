
import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, UserRole } from '../types';

interface SidebarProps {
  user: User;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toggleRole: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ user, isOpen, setIsOpen, toggleRole }) => {
  const links = [
    { to: '/', label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { to: '/courses', label: 'Courses', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
    { to: '/grades', label: user.role === 'student' ? 'My Grades' : 'Grade Entry', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { to: '/insights', label: 'AI Insights', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { to: '/profile', label: 'Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  ];

  return (
    <aside className={`bg-indigo-900 text-white h-full flex flex-col transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'} relative z-20`}>
      <div className="p-6 flex items-center justify-between">
        <div className={`font-bold text-xl tracking-tight overflow-hidden ${!isOpen && 'hidden'}`}>
          EduSphere
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="p-1 hover:bg-indigo-800 rounded">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>

      <nav className="flex-1 px-4 space-y-2 py-4">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg transition-colors ${
                isActive ? 'bg-indigo-700 text-white shadow-lg' : 'text-indigo-200 hover:bg-indigo-800 hover:text-white'
              }`
            }
          >
            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon}></path>
            </svg>
            {isOpen && <span className="ml-4 font-medium">{link.label}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-indigo-800">
        <button 
          onClick={toggleRole}
          className="w-full flex items-center p-3 text-indigo-200 hover:bg-indigo-800 rounded-lg transition-colors mb-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
          </svg>
          {isOpen && <span className="ml-4 font-medium capitalize">Switch to {user.role === 'student' ? 'Teacher' : 'Student'}</span>}
        </button>
        <div className={`flex items-center ${!isOpen && 'justify-center'}`}>
          <div className="w-8 h-8 rounded-full bg-indigo-500 flex-shrink-0"></div>
          {isOpen && (
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-semibold truncate">{user.name}</p>
              <p className="text-xs text-indigo-400 truncate capitalize">{user.role}</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
