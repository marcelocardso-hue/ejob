export enum ServiceCategory {
  CONSTRUCTION = 'Construção & Reforma',
  TECH = 'Tecnologia & Design',
  DOMESTIC = 'Serviços Domésticos',
  MAINTENANCE = 'Manutenção',
  EVENTS = 'Eventos',
  OTHER = 'Outros'
}

export interface Provider {
  id: string;
  name: string;
  role: string;
  category: ServiceCategory;
  rating: number;
  reviews: number;
  hourlyRate: number;
  location: string;
  avatar: string;
  verified: boolean;
  description: string;
}

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
  maps?: {
    uri: string;
    title: string;
    placeAnswerSources?: {
        reviewSnippets?: {
            content: string;
        }[]
    }
  };
}

export interface AiResponse {
  text: string;
  groundingChunks: GroundingChunk[];
}

export interface GeoLocation {
  latitude: number;
  longitude: number;
}