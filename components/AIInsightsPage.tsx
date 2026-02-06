
import React, { useState, useEffect } from 'react';
import { getAcademicAdvice } from '../services/geminiService';
import { User, Grade, Course, AcademicInsights } from '../types';

interface AIInsightsPageProps {
  user: User;
}

const MOCK_GRADES: Grade[] = [
  { courseId: '1', courseName: 'CS101', score: 92, grade: 'A', semester: 'Fall 2023' },
  { courseId: '2', courseName: 'MATH201', score: 78, grade: 'B', semester: 'Fall 2023' },
  { courseId: '4', courseName: 'CS305', score: 85, grade: 'A-', semester: 'Fall 2023' },
];

const AIInsightsPage: React.FC<AIInsightsPageProps> = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [insights, setInsights] = useState<AcademicInsights | null>(null);

  const fetchInsights = async () => {
    setLoading(true);
    // In a real app, we'd fetch actual user grades
    const result = await getAcademicAdvice(MOCK_GRADES, []);
    setInsights(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchInsights();
  }, [user.role]);

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-3xl text-white">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">Academic AI Counselor</h2>
            <p className="text-indigo-100 text-lg">
              Get personalized insights based on your academic performance, attendance, and learning patterns.
            </p>
          </div>
          <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          <p className="text-slate-500 font-medium animate-pulse">Analyzing your academic footprint...</p>
        </div>
      ) : insights ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-800 flex items-center">
              <span className="mr-2">📊</span> Summary Analysis
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              {insights.summary}
            </p>
            <div className="pt-6 border-t border-slate-50">
              <h4 className="font-bold text-slate-800 mb-4">Core Strengths</h4>
              <div className="flex flex-wrap gap-2">
                {insights.strengths.map((s, i) => (
                  <span key={i} className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-xl text-sm font-semibold">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
              <span className="mr-2">🚀</span> Recommended Next Steps
            </h3>
            <div className="space-y-4">
              {insights.recommendations.map((rec, i) => (
                <div key={i} className="flex items-start space-x-4 p-4 rounded-2xl border border-slate-50 bg-slate-50/50">
                  <div className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-1">
                    {i + 1}
                  </div>
                  <p className="text-slate-600 font-medium">{rec}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
              <h4 className="text-indigo-800 font-bold mb-2">Ask follow-up questions?</h4>
              <p className="text-indigo-600 text-sm mb-4">Need specific advice on a subject or study technique?</p>
              <div className="flex items-center space-x-2">
                <input 
                  type="text" 
                  placeholder="Type your question..." 
                  className="flex-1 px-4 py-2 rounded-xl border-none focus:ring-2 focus:ring-indigo-300 shadow-sm"
                />
                <button className="bg-indigo-600 text-white p-2 rounded-xl">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white p-20 rounded-3xl text-center">
          <button 
            onClick={fetchInsights}
            className="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200"
          >
            Generate AI Academic Audit
          </button>
        </div>
      )}
    </div>
  );
};

export default AIInsightsPage;
