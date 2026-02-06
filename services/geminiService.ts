
import { GoogleGenAI, Type } from "@google/genai";
import { Grade, Course } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAcademicAdvice = async (grades: Grade[], courses: Course[]) => {
  const prompt = `
    As an AI University Counselor, analyze this student's performance and provide advice.
    Grades: ${JSON.stringify(grades)}
    Current Courses: ${JSON.stringify(courses)}
    
    Provide a structured response including:
    1. A summary of overall academic health.
    2. Key strengths identified from grades.
    3. Actionable recommendations for improvement.
    4. Suggested focus areas for next semester.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
            recommendations: { type: Type.ARRAY, items: { type: Type.STRING } },
          },
          required: ["summary", "strengths", "recommendations"],
        },
      },
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return null;
  }
};

export const getTeacherInsights = async (studentGrades: any[], courseName: string) => {
  const prompt = `
    As an AI Teaching Assistant, analyze the class performance for the course "${courseName}".
    Data: ${JSON.stringify(studentGrades)}
    
    Provide a summary of how the class is doing, identify students who might need extra help, and suggest pedagogical improvements.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "Could not generate insights at this time.";
  }
};
