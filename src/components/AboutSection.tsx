import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="apropos" className="py-16 bg-[#121c15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#17251d] border border-white/5 rounded-3xl p-6 sm:p-12 overflow-hidden relative">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">À PROPOS DE NOUS</span>
            <h2 className="text-3xl font-serif font-bold text-white">Une histoire de passion et de saveurs.</h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Gusto Restaurant est né d'une passion pour la bonne cuisine et le partage. Notre mission : vous offrir une expérience gastronomique unique, du déjeuner au dîner.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div>
                <h4 className="text-amber-400 text-lg font-bold">5+</h4>
                <p className="text-[11px] text-gray-400 mt-0.5">Années d'expérience</p>
              </div>
              <div>
                <h4 className="text-amber-400 text-lg font-bold">2.5K+</h4>
                <p className="text-[11px] text-gray-400 mt-0.5">Clients satisfaits</p>
              </div>
              <div>
                <h4 className="text-amber-400 text-lg font-bold">30+</h4>
                <p className="text-[11px] text-gray-400 mt-0.5">Plats uniques</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-xl aspect-video">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" 
              alt="Salle du restaurant Gusto" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};