import React from 'react';
import { Utensils, ChefHat, Sparkles, HeartHandshake } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-12 bg-[#121c15] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#17241c] border border-white/5">
            <div className="p-3 bg-amber-400/10 rounded-lg text-amber-400">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-xs text-white">Ingrédients frais</h3>
              <p className="text-gray-400 text-[11px] mt-1">Nous sélectionnons chaque jour les meilleurs produits locaux.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#17241c] border border-white/5">
            <div className="p-3 bg-amber-400/10 rounded-lg text-amber-400">
              <ChefHat className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-xs text-white">Chefs talentueux</h3>
              <p className="text-gray-400 text-[11px] mt-1">Notre équipe passionnée sublime chaque assiette.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#17241c] border border-white/5">
            <div className="p-3 bg-amber-400/10 rounded-lg text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-xs text-white">Recettes uniques</h3>
              <p className="text-gray-400 text-[11px] mt-1">Des saveurs authentiques et des créations originales.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#17241c] border border-white/5">
            <div className="p-3 bg-amber-400/10 rounded-lg text-amber-400">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-xs text-white">Ambiance chaleureuse</h3>
              <p className="text-gray-400 text-[11px] mt-1">Un cadre élégant pour des moments inoubliables.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};