import React, { useState } from 'react';
import { analyzeHVACIssue } from '../services/geminiService';
import { DiagnosisResponse, UrgencyColor } from '../types';
import { IconBrain, IconAlert, IconCheck, IconTool } from './Icons';

const AIAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [diagnosis, setDiagnosis] = useState<DiagnosisResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setError(null);
    setDiagnosis(null);

    try {
      const result = await analyzeHVACIssue(input);
      setDiagnosis(result);
    } catch (err) {
      setError("We couldn't process that right now. Please try again or call our emergency line.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-helper" className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-500/20 rounded-full mb-4">
            <IconBrain className="w-8 h-8 text-blue-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Diagnostic Helper</h2>
          <p className="text-blue-200 text-lg">
            Not sure what's wrong? Describe your problem below, and our Gemini-powered AI will give you an instant preliminary assessment and troubleshooting tips.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl">
          <form onSubmit={handleAnalyze} className="mb-8">
            <label htmlFor="issue" className="block text-sm font-medium text-blue-200 mb-2">
              Describe the symptoms (e.g., "AC is blowing warm air", "Heater smells like burning")
            </label>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                id="issue"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your HVAC issue here..."
                className="flex-1 px-4 py-3 rounded-lg bg-white/90 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  loading 
                    ? 'bg-blue-800 text-blue-300 cursor-wait' 
                    : 'bg-blue-500 hover:bg-blue-400 text-white shadow-lg hover:shadow-blue-500/50'
                }`}
              >
                {loading ? 'Analyzing...' : 'Diagnose Issue'}
              </button>
            </div>
          </form>

          {error && (
            <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 flex items-center gap-3">
              <IconAlert className="w-5 h-5" />
              <p>{error}</p>
            </div>
          )}

          {diagnosis && (
            <div className="animate-fade-in space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 bg-white rounded-xl p-6 text-slate-800">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-900">Analysis Result</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${UrgencyColor[diagnosis.urgency]}`}>
                      {diagnosis.urgency} Urgency
                    </span>
                  </div>
                  <p className="text-slate-600 mb-4">{diagnosis.summary}</p>
                  
                  <h4 className="font-semibold text-slate-900 mb-2">Potential Causes:</h4>
                  <ul className="list-disc pl-5 mb-4 text-slate-600 space-y-1">
                    {diagnosis.potentialCauses.map((cause, idx) => (
                      <li key={idx}>{cause}</li>
                    ))}
                  </ul>

                  <h4 className="font-semibold text-slate-900 mb-2">Recommendation:</h4>
                  <p className="text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200">
                    {diagnosis.recommendation}
                  </p>
                </div>

                <div className="md:w-1/3 bg-blue-600/20 border border-blue-400/30 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <IconTool className="w-5 h-5" />
                    DIY Quick Checks
                  </h3>
                  <ul className="space-y-3">
                    {diagnosis.diyTips.map((tip, idx) => (
                      <li key={idx} className="flex gap-3 text-blue-100 text-sm">
                        <IconCheck className="w-5 h-5 text-blue-400 shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <a 
                      href="#contact" 
                      className="block w-full text-center py-2 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Book a Tech Now
                    </a>
                    <p className="text-xs text-center text-blue-300 mt-2">
                      *AI advice is for reference only.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;