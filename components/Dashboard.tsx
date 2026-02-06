
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { User } from '../types';

interface DashboardProps {
  user: User;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const data = [
    { name: 'Mon', hours: 4 },
    { name: 'Tue', hours: 6 },
    { name: 'Wed', hours: 5 },
    { name: 'Thu', hours: 8 },
    { name: 'Fri', hours: 3 },
    { name: 'Sat', hours: 2 },
    { name: 'Sun', hours: 1 },
  ];

  const announcements = [
    { id: '1', title: 'Midterm Results Out', date: '2 hours ago', type: 'Academic' },
    { id: '2', title: 'Campus Workshop: AI Ethics', date: 'Tomorrow, 10 AM', type: 'Event' },
    { id: '3', title: 'New Library Hours', date: 'Oct 25', type: 'Admin' },
  ];

  return (
    <div className="space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: user.role === 'student' ? 'GPA' : 'Class Avg', value: user.role === 'student' ? '3.82' : '78.5%', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', color: 'bg-blue-500' },
          { label: 'Attendance', value: '94%', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', color: 'bg-green-500' },
          { label: user.role === 'student' ? 'Pending Assignments' : 'Grading Tasks', value: user.role === 'student' ? '4' : '12', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z', color: 'bg-amber-500' },
          { label: 'Courses', value: '6', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253', color: 'bg-purple-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className={`${stat.color} p-3 rounded-xl text-white`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.icon}></path>
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Study Activity Hours</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="hours" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorHours)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Announcements */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Recent Announcements</h3>
          <div className="space-y-4">
            {announcements.map((ann) => (
              <div key={ann.id} className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-xs font-semibold text-indigo-600 px-2 py-0.5 bg-indigo-50 rounded-full">{ann.type}</span>
                  <span className="text-xs text-slate-400">{ann.date}</span>
                </div>
                <p className="text-sm font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors">{ann.title}</p>
              </div>
            ))}
            <button className="w-full py-2 text-sm text-indigo-600 font-medium hover:underline">View All Notifications</button>
          </div>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-6">Quick Shortcuts</h3>
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-xl hover:bg-indigo-100 transition-colors">
            <span>📚 Course Catalog</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-xl hover:bg-emerald-100 transition-colors">
            <span>📅 Exam Schedule</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-rose-50 text-rose-700 rounded-xl hover:bg-rose-100 transition-colors">
            <span>📄 Transcript Request</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-xl hover:bg-amber-100 transition-colors">
            <span>💳 Tuition Fees</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
