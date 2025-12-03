import React, { useState } from 'react';
import { Logo } from './components/Logo';
import { MOCK_PROVIDERS } from './constants';
import { ServiceCard } from './components/ServiceCard';
import { GeminiAssistant } from './components/GeminiAssistant';
import { ServiceCategory } from './types';
import { Search, Menu, User, Bell } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'Todos'>('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProviders = MOCK_PROVIDERS.filter(provider => {
    const matchesCategory = selectedCategory === 'Todos' || provider.category === selectedCategory;
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          provider.role.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="w-10 h-10" />
            <h1 className="text-2xl font-bold tracking-tight text-white hidden sm:block">
              Encontre o <span className="text-amber-400">Job</span>
            </h1>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
              <a href="#" className="hover:text-amber-400 transition-colors">Explorar</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Meus Projetos</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Mensagens</a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="text-slate-400 hover:text-white transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-2 px-4 rounded-full transition-colors flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Entrar</span>
              </button>
              <button className="md:hidden text-slate-300">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="pb-20">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Os melhores profissionais <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">
                ao seu alcance
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Conectamos você aos melhores profissionais da sua região, para qualquer projeto, de reparos rápidos a grandes soluções.
            </p>
            
            <GeminiAssistant />
          </div>
        </div>

        {/* Directory Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              Profissionais em Destaque
              <span className="text-xs font-normal text-slate-500 bg-slate-800 px-2 py-1 rounded-full">
                {filteredProviders.length} encontrados
              </span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              {/* Category Filter */}
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as ServiceCategory | 'Todos')}
                className="bg-slate-900 border border-slate-700 text-slate-300 rounded-lg px-4 py-2 focus:border-amber-400 focus:outline-none"
              >
                <option value="Todos">Todas as Categorias</option>
                {Object.values(ServiceCategory).map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>

              {/* Local Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                <input 
                  type="text" 
                  placeholder="Buscar por nome ou função..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full sm:w-64 bg-slate-900 border border-slate-700 text-slate-300 rounded-lg pl-9 pr-4 py-2 focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {filteredProviders.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProviders.map(provider => (
                <ServiceCard key={provider.id} provider={provider} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-slate-800 rounded-xl">
              <div className="inline-block p-4 rounded-full bg-slate-900 mb-4">
                <Search className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-300">Nenhum profissional encontrado</h3>
              <p className="text-slate-500 mt-2">Tente ajustar seus filtros ou use o assistente inteligente acima.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Logo className="w-8 h-8 grayscale opacity-50" />
            <span className="text-slate-600 font-semibold">Encontre o Job © 2024</span>
          </div>
          <div className="flex gap-6 text-slate-600 text-sm">
            <a href="#" className="hover:text-amber-400">Termos</a>
            <a href="#" className="hover:text-amber-400">Privacidade</a>
            <a href="#" className="hover:text-amber-400">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;