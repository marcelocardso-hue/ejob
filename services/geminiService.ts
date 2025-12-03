import { GoogleGenAI } from "@google/genai";
import { AiResponse, GeoLocation } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSmartAdvice = async (
  query: string, 
  location?: GeoLocation
): Promise<AiResponse> => {
  try {
    const modelId = "gemini-2.5-flash"; // Using 2.5 Flash for speed and grounding support
    
    // Configure tools based on availability of location
    const tools: any[] = [];
    // We add both. The model decides which to use.
    tools.push({ googleSearch: {} });
    tools.push({ googleMaps: {} });

    const toolConfig: any = {};
    if (location) {
      toolConfig.retrievalConfig = {
        latLng: {
          latitude: location.latitude,
          longitude: location.longitude
        }
      };
    }

    const response = await ai.models.generateContent({
      model: modelId,
      contents: `O usuário está procurando ajuda na plataforma "Encontre o Job" (uma plataforma de freelancers e prestadores de serviço).
      
      A consulta do usuário é: "${query}".
      
      1. Se o usuário estiver perguntando sobre preços, médias de mercado ou dicas técnicas, use o Google Search para fornecer informações precisas e atuais.
      2. Se o usuário estiver procurando lojas de materiais, serviços físicos específicos na região ou locais relacionados, use o Google Maps.
      3. Responda de forma prestativa, profissional e encorajadora. Formate a resposta usando Markdown.
      4. Se encontrar locais ou links, eles serão exibidos automaticamente pela UI, então apenas referencie-os naturalmente no texto.`,
      config: {
        tools: tools,
        toolConfig: Object.keys(toolConfig).length > 0 ? toolConfig : undefined,
        systemInstruction: "Você é o assistente inteligente da plataforma 'Encontre o Job'. Ajude clientes a tomar decisões informadas sobre contratações.",
      },
    });

    const text = response.text || "Desculpe, não consegui processar sua solicitação no momento.";
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    return {
      text,
      groundingChunks: groundingChunks as any // Casting to match our simplified interface
    };

  } catch (error) {
    console.error("Erro ao consultar Gemini:", error);
    throw new Error("Falha na comunicação com a IA.");
  }
};