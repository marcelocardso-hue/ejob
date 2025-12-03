import { Provider, ServiceCategory } from "./types";

export const MOCK_PROVIDERS: Provider[] = [
  {
    id: '1',
    name: 'Carlos Silva',
    role: 'Eletricista Residencial',
    category: ServiceCategory.MAINTENANCE,
    rating: 4.8,
    reviews: 124,
    hourlyRate: 80,
    location: 'São Paulo, SP',
    verified: true,
    avatar: 'https://picsum.photos/400/300?random=1',
    description: 'Especialista em fiação antiga e instalações de sistemas inteligentes. 15 anos de experiência.'
  },
  {
    id: '2',
    name: 'Ana Souza',
    role: 'Desenvolvedora Web',
    category: ServiceCategory.TECH,
    rating: 5.0,
    reviews: 42,
    hourlyRate: 150,
    location: 'Remoto / Rio de Janeiro',
    verified: true,
    avatar: 'https://picsum.photos/400/300?random=2',
    description: 'Criação de sites institucionais e e-commerces. React, Node.js e UI/UX Design.'
  },
  {
    id: '3',
    name: 'Roberto Mendes',
    role: 'Mestre de Obras',
    category: ServiceCategory.CONSTRUCTION,
    rating: 4.6,
    reviews: 89,
    hourlyRate: 100,
    location: 'Belo Horizonte, MG',
    verified: false,
    avatar: 'https://picsum.photos/400/300?random=3',
    description: 'Gerenciamento completo de reformas residenciais. Equipe própria de pedreiros e pintores.'
  },
  {
    id: '4',
    name: 'Júlia Pereira',
    role: 'Designer de Interiores',
    category: ServiceCategory.TECH,
    rating: 4.9,
    reviews: 56,
    hourlyRate: 120,
    location: 'Curitiba, PR',
    verified: true,
    avatar: 'https://picsum.photos/400/300?random=4',
    description: 'Projetos modernos e funcionais para apartamentos pequenos. Consultoria online disponível.'
  },
  {
    id: '5',
    name: 'Marcos Oliveira',
    role: 'Pintor Profissional',
    category: ServiceCategory.MAINTENANCE,
    rating: 4.7,
    reviews: 210,
    hourlyRate: 60,
    location: 'Porto Alegre, RS',
    verified: true,
    avatar: 'https://picsum.photos/400/300?random=5',
    description: 'Pintura decorativa, texturas e acabamentos finos. Limpeza garantida pós-obra.'
  }
];