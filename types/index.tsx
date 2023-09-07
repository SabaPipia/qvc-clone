export interface CardProps {
  data: {
    [x: string]: any;
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: [string[]];
  };
}

export interface ProductItem {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: [string[]];
}

export interface CategoryCardInterface {
  category: string;
  thumbnail: string;
}
export interface CategoryCardProps {
  item: CategoryCardInterface;
}
