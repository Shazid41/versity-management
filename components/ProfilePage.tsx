
import React from 'react';
import { User } from '../types';

interface ProfilePageProps {
  user: User;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        {/* Cover Photo */}
        <div className="h-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        
        <div className="px-8 pb-8">
          <div className="flex flex-col md:flex-row items-end -mt-16 md:space-x-6 mb-8">
            <img 
              src={user.avatar} 
              alt="Avatar" 
              className="w-32 h-32 rounded-3xl border-4 border-white shadow-lg object-cover bg-white"
            />
            <div className="mt-4 md:mt-0 pb-2 text-center md:text-left flex-1">
              <h2 className="text-3xl font-black text-slate-800">{user.name}</h2>
              <p className="text-slate-500 font-medium">{user.role.charAt(0).toUpperCase() + user.role.slice(1)} • {user.department}</p>
            </div>
            <div className="pb-2 flex space-x-3">
               <button className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-md">
                 Edit Profile
               </button>
               <button className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:text-slate-600 border border-slate-100 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
               </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <section>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Account Information</h3>
                <div className="space-y-4">
                   <div>
                     <p className="text-xs text-slate-400 mb-1">University Email</p>
                     <p className="text-slate-700 font-semibold">{user.email}</p>
                   </div>
                   <div>
                     <p className="text-xs text-slate-400 mb-1">Student/Faculty ID</p>
                     <p className="text-slate-700 font-semibold">{user.id}</p>
                   </div>
                   <div>
                     <p className="text-xs text-slate-400 mb-1">Department</p>
                     <p className="text-slate-700 font-semibold">{user.department}</p>
                   </div>
                </div>
              </section>
              
              <section>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Bio</h3>
                <p className="text-slate-600 leading-relaxed italic">
                  "Passionate about leveraging technology to solve complex problems and building a more connected academic community."
                </p>
              </section>
            </div>

            <div className="space-y-6">
              <section className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-sm font-bold text-slate-700 mb-4">Privacy & Security</h3>
                <div className="space-y-4">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm text-slate-600">Public profile</span>
                    <div className="w-10 h-5 bg-indigo-600 rounded-full relative">
                      <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm text-slate-600">Two-factor auth</span>
                    <div className="w-10 h-5 bg-slate-300 rounded-full relative">
                      <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </label>
                </div>
              </section>

              <section className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                 <h3 className="text-sm font-bold text-indigo-800 mb-2">Connected Accounts</h3>
                 <p className="text-xs text-indigo-600 mb-4">Link your academic tools for better integration.</p>
                 <div className="flex space-x-2">
                    <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center">G</div>
                    <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center">M</div>
                    <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center">S</div>
                 </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
