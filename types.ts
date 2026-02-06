
export type UserRole = 'student' | 'teacher' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  department: string;
}

export interface Course {
  id: string;
  code: string;
  name: string;
  instructor: string;
  credits: number;
  schedule: string;
  studentsCount: number;
  description: string;
  category: string;
}

export interface Grade {
  courseId: string;
  courseName: string;
  score: number;
  grade: string;
  semester: string;
}

export interface Attendance {
  date: string;
  status: 'present' | 'absent' | 'late';
  courseId: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  priority: 'low' | 'medium' | 'high';
}

export interface AcademicInsights {
  summary: string;
  recommendations: string[];
  strengths: string[];
}
