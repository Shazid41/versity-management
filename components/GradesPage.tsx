
import React from 'react';
import { User, Grade } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface GradesPageProps {
  user: User;
}

const MOCK_GRADES: Grade[] = [
  { courseId: '1', courseName: 'CS101', score: 92, grade: 'A', semester: 'Fall 2023' },
  { courseId: '2', courseName: 'MATH201', score: 78, grade: 'B', semester: 'Fall 2023' },
  { courseId: '3', courseName: 'ENG302', score: 88, grade: 'A-', semester: 'Fall 2023' },
  { courseId: '4', courseName: 'CS305', score: 85, grade: 'A-', semester: 'Fall 2023' },
  { courseId: '5', courseName: 'PHYS101', score: 72, grade: 'C+', semester: 'Fall 2023' },
];

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

const GradesPage: React.FC<GradesPageProps> = ({ user }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-800">{user.role === 'student' ? 'Academic Transcript' : 'Grade Submission Center'}</h2>
        <div className="flex space-x-2">
           <select className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-medium focus:ring-2 focus:ring-indigo-300 outline-none">
            <option>Fall 2023</option>
            <option>Spring 2023</option>
          </select>
          <button className="bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-200 transition-colors">
            Download PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Statistics and Chart */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm h-full flex flex-col">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Performance Comparison</h3>
            <div className="flex-1 min-h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={MOCK_GRADES}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="courseName" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11}} />
                  <Tooltip 
                    cursor={{fill: '#f8fafc'}}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="score" radius={[8, 8, 0, 0]} barSize={40}>
                    {MOCK_GRADES.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* GPA Summary Card */}
        <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-32 h-32 rounded-full border-8 border-indigo-100 flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-indigo-600">3.82</span>
            <span className="text-xs text-indigo-400 font-bold uppercase tracking-wider">GPA</span>
          </div>
          <div>
            <h4 className="text-lg font-bold text-slate-800">Honor Roll Status</h4>
            <p className="text-slate-500 text-sm">You are in the top 5% of your class.</p>
          </div>
          <div className="w-full pt-4 space-y-3">
             <div className="flex justify-between text-sm">
                <span className="text-slate-500">Credits Completed</span>
                <span className="font-bold text-slate-800">104 / 120</span>
             </div>
             <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full w-[86%]"></div>
             </div>
          </div>
        </div>
      </div>

      {/* Grade Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Course</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Score</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Grade</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Semester</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {MOCK_GRADES.map((grade) => (
              <tr key={grade.courseId} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-bold text-slate-700">{grade.courseName}</p>
                  <p className="text-xs text-slate-400">{grade.courseId}</p>
                </td>
                <td className="px-6 py-4">
                   <div className="flex items-center space-x-2">
                      <span className="font-bold text-slate-800">{grade.score}</span>
                      <div className="w-16 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <div className="bg-indigo-500 h-full" style={{width: `${grade.score}%`}}></div>
                      </div>
                   </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-lg text-xs font-black ${
                    grade.grade.startsWith('A') ? 'bg-emerald-50 text-emerald-600' : 
                    grade.grade.startsWith('B') ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    {grade.grade}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">{grade.semester}</td>
                <td className="px-6 py-4 text-right">
                   <span className="text-xs font-bold text-slate-300 uppercase">Finalized</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GradesPage;
