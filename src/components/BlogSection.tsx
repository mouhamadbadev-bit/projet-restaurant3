import React from 'react';
import { blogPosts } from '../data/restaurantData';
import { Calendar } from 'lucide-react';

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-[#0d1610]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">ACTUALITÉS</span>
          <h2 className="text-3xl font-serif font-bold text-white">Notre Blog culinaire</h2>
          <p className="text-gray-400 text-xs">Découvrez nos articles, secrets de chefs et conseils gourmands.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-[#152219] border border-white/5 rounded-2xl overflow-hidden group hover:border-amber-400/30 transition-all">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 text-[11px]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </div>
                <h3 className="font-semibold text-sm text-white group-hover:text-amber-400 transition-colors">{post.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};