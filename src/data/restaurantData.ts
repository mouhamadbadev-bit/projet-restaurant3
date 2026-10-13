import img from "../data/image1.jpg"
export interface Dish {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  isTopSale?: boolean;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
}

export const popularDishes: Dish[] = [
  {
    id: 1,
    title: "Pâtes à la truffe",
    description: "Crème de truffe, parmesan, champignons, persil",
    price: "8 500 FCFA",
    image: img,
    isTopSale: true
  },
  {
    id: 2,
    title: "Burger Gusto",
    description: "Bœuf, cheddar, oignons caramélisés, sauce maison",
    price: "9 500 FCFA",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Salade César",
    description: "Poulet grillé, laitue romaine, parmesan, croûtons",
    price: "6 000 FCFA",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Fondant au chocolat",
    description: "Cœur coulant, glace vanille, coulis chocolat",
    price: "5 000 FCFA",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "L'art de marier les truffes et les pâtes fraîches",
    excerpt: "Découvrez comment nos chefs sélectionnent et marient les meilleures truffes de saison pour exalter vos plats.",
    date: "10 Octobre 2026",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Les secrets d'un burger artisanal parfait",
    excerpt: "De la sélection du bœuf sénégalais au pain brioché fait maison, plongez dans les coulisses de notre cuisine.",
    date: "28 Septembre 2026",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80"
  }
];