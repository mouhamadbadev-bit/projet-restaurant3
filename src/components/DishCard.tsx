import React from 'react';
import { Plus } from 'lucide-react';
import {type Dish } from '../data/restaurantData';

interface DishCardProps {
  dish: Dish;
  onOpenReservation: () => void;
}

export const DishCard: React.FC<DishCardProps> = ({ dish, onOpenReservation }) => {
  return (
    <div className="bg-[#152219] border border-white/5 rounded-2xl overflow-hidden group hover:border-amber-400/30 transition-all relative">
      {dish.isTopSale && (
        <span className="absolute top-3 left-3 z-10 bg-amber-400 text-gray-950 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
          Top vente
        </span>
      )}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={dish.image} 
          alt={dish.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 space-y-2.5">
        <h3 className="font-semibold text-sm text-white">{dish.title}</h3>
        <p className="text-gray-400 text-[11px] leading-relaxed line-clamp-2">{dish.description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-amber-400 font-bold text-xs">{dish.price}</span>
          <button 
            onClick={onOpenReservation}
            className="w-8 h-8 rounded-full bg-amber-400 hover:bg-amber-500 text-gray-950 flex items-center justify-center transition-colors cursor-pointer shadow"
            title="Réserver / Commander"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};