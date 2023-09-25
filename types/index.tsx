export interface CardProps {
  data: {
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

export interface CartItem {
  id: number;
  cartI: ProductItem;
  quantity: number;
}

export interface CategoryCardInterface {
  category: string;
  thumbnail: string;
}
export interface CategoryCardProps {
  item: CategoryCardInterface;
}

export interface CategoryPageCard {
  selectedValue: string;
  renderPattern: string;
}
export interface BrowsingPageCard {
  renderPattern: string;
}
export interface SingleProduct {
  item: ProductItem;
}

export interface appState {
  data: {
    loading: true;
    categories: string[];
    topSelling: ProductItem[];
    categoryItem: ProductItem[];
    searchedItem: ProductItem[];
    lowStock: ProductItem[];
    history: ProductItem[];
    itemCategory: ProductItem[];
    singleProduct: ProductItem;
    allProducts: ProductItem[];
    favourites: ProductItem[];
    cartItem: ProductItem[];
  };
}

export interface actionInterface {
  type: string;
  payload: ProductItem | string;
}
