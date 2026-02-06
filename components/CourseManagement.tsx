
import React from 'react';
import { User, Course } from '../types';

interface CourseManagementProps {
  user: User;
}

const MOCK_COURSES: Course[] = [
  { id: '1', code: 'CS101', name: 'Introduction to Computer Science', instructor: 'Dr. Sarah Wilson', credits: 4, schedule: 'Mon/Wed 10:00 AM', studentsCount: 45, category: 'CS', description: 'Fundamental concepts of programming and logic.' },
  { id: '2', code: 'MATH201', name: 'Advanced Calculus', instructor: 'Prof. James Bond', credits: 3, schedule: 'Tue/Thu 02:00 PM', studentsCount: 30, category: 'Math', description: 'Multivariable calculus and analysis.' },
  { id: '3', code: 'ENG302', name: 'Technical Writing', instructor: 'Dr. Emily Rose', credits: 2, schedule: 'Fri 09:00 AM', studentsCount: 25, category: 'Eng', description: 'Clear communication for technical documentation.' },
  { id: '4', code: 'CS305', name: 'Database Systems', instructor: 'Dr. Michael Chen', credits: 4, schedule: 'Mon/Wed 01:00 PM', studentsCount: 40, category: 'CS', description: 'Relational database design and SQL.' },
];

const CourseManagement: React.FC<CourseManagementProps> = ({ user }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-800">{user.role === 'student' ? 'My Enrolled Courses' : 'My Assigned Courses'}</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-indigo-700 transition-colors">
          {user.role === 'student' ? '+ Register for Course' : '+ Create New Course'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_COURSES.map((course) => (
          <div key={course.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-indigo-200 transition-all flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{course.code}</span>
                <span className="text-sm font-medium text-slate-400">{course.credits} Credits</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{course.name}</h3>
              <p className="text-sm text-slate-500 line-clamp-2 mb-4">{course.description}</p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center text-xs text-slate-400">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  {course.instructor}
                </div>
                <div className="flex items-center text-xs text-slate-400">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  {course.schedule}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://picsum.photos/seed/${course.id}${i}/32/32`} alt="avatar" />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-600">
                  +{course.studentsCount - 4}
                </div>
              </div>
              <button className="text-indigo-600 font-bold text-sm hover:text-indigo-800">
                {user.role === 'student' ? 'Access Materials →' : 'Manage Students →'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseManagement;
