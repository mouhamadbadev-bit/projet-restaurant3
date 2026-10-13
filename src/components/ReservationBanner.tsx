import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ReservationBannerProps {
  onOpenReservation: () => void;
}

export const ReservationBanner: React.FC<ReservationBannerProps> = ({ onOpenReservation }) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0d1610]">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative border border-white/10 bg-linear-to-r from-[#17251d] to-[#121c15] p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
        
        <div className="space-y-2 max-w-xl text-center md:text-left">
          <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">RÉSERVATION</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">Réservez votre table dès maintenant</h2>
          <p className="text-gray-300 text-xs leading-relaxed">
            Que ce soit pour un dîner romantique, un déjeuner d'affaires ou une célébration, nous avons la table parfaite pour vous.
          </p>
        </div>

        <button 
          onClick={onOpenReservation}
          className="bg-amber-400 hover:bg-amber-500 text-gray-950 font-medium px-7 py-3.5 rounded-xl text-xs transition-all shadow-lg shadow-amber-400/10 cursor-pointer flex items-center gap-2 shrink-0"
        >
          <span>Réserver une table</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};