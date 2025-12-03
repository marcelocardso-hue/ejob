import React, { useState, useEffect } from 'react';
import { generateSmartAdvice } from '../services/geminiService';
import { AiResponse, GeoLocation } from '../types';
import { Sparkles, MapPin, ExternalLink, Loader2, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export const GeminiAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<AiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<GeoLocation | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Attempt to get location on mount
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (err) => console.log("Geolocalização não permitida ou erro:", err)
      );
    }
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const result = await generateSmartAdvice(query, location);
      setResponse(result);
    } catch (err) {
      setError("Não foi possível conectar ao assistente inteligente. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <div className="bg-slate-900/50 border border-amber-500/20 rounded-2xl p-6 backdrop-blur-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-amber-500/10 p-2 rounded-lg">
            <Bot className="w-6 h-6 text-amber-400" />
          </div>
          <h2 className="text-xl font-bold text-slate-100">Assistente Inteligente</h2>
        </div>
        
        <form onSubmit={handleSearch} className="relative mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pergunte sobre preços médios, lojas próximas ou dicas de contratação..."
            className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-xl px-4 py-4 pr-12 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all placeholder-slate-500"
          />
          <button 
            type="submit" 
            disabled={loading}
            className="absolute right-2 top-2 bottom-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-4 rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
          </button>
        </form>

        {error && (
            <div className="p-4 bg-red-900/20 border border-red-500/30 text-red-300 rounded-lg text-sm">
                {error}
            </div>
        )}

        {response && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
            <div className="prose prose-invert prose-amber max-w-none text-slate-300 leading-relaxed">
              <ReactMarkdown>{response.text}</ReactMarkdown>
            </div>

            {/* Grounding Results */}
            {response.groundingChunks.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {response.groundingChunks.map((chunk, idx) => {
                  if (chunk.maps) {
                    return (
                      <a 
                        key={idx} 
                        href={chunk.maps.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 hover:border-amber-400/50 transition-all group"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-5 h-5 text-red-400" />
                          <span className="font-semibold text-slate-200 group-hover:text-amber-400 transition-colors">
                            {chunk.maps.title}
                          </span>
                        </div>
                         {chunk.maps.placeAnswerSources?.reviewSnippets?.[0] && (
                             <p className="text-xs text-slate-400 italic mb-2">"{chunk.maps.placeAnswerSources.reviewSnippets[0].content}"</p>
                         )}
                        <span className="text-xs text-slate-500 flex items-center gap-1 mt-auto">
                          Ver no Google Maps <ExternalLink className="w-3 h-3" />
                        </span>
                      </a>
                    );
                  }
                  if (chunk.web) {
                    return (
                      <a 
                        key={idx} 
                        href={chunk.web.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 hover:border-blue-400/50 transition-all group"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <ExternalLink className="w-4 h-4 text-blue-400" />
                          <span className="font-semibold text-slate-200 group-hover:text-blue-300 transition-colors line-clamp-1">
                            {chunk.web.title}
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 mt-auto">
                           Fonte Google Search
                        </span>
                      </a>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};