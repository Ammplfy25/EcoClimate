import { GoogleGenAI, Type } from "@google/genai";
import { DiagnosisResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeHVACIssue = async (issueDescription: string): Promise<DiagnosisResponse> => {
  const modelId = "gemini-3-flash-preview";
  
  const prompt = `
    You are an expert HVAC technician assistant. A homeowner is reporting the following issue: "${issueDescription}".
    
    Analyze this issue and provide a structured diagnosis. 
    1. Assess the urgency (Low, Medium, High, Critical).
    2. List 2-3 potential technical causes.
    3. Provide 2-3 safe troubleshooting steps the homeowner can try themselves (e.g., check thermostat, change filter).
    4. Give a final professional recommendation.

    Maintain a helpful, professional, and safety-conscious tone. Emphasize that this is an AI assessment and they should consult a professional.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING, description: "A brief 1-sentence summary of the problem." },
            urgency: { type: Type.STRING, enum: ["Low", "Medium", "High", "Critical"] },
            potentialCauses: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "List of possible technical reasons."
            },
            diyTips: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Safe steps the user can take immediately."
            },
            recommendation: { type: Type.STRING, description: "Final advice on next steps." }
          },
          required: ["summary", "urgency", "potentialCauses", "diyTips", "recommendation"]
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }

    return JSON.parse(text) as DiagnosisResponse;

  } catch (error) {
    console.error("Error diagnosing issue:", error);
    throw new Error("Failed to analyze the issue. Please try again later.");
  }
};