export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  stock: number;
  seller_id: string;
  created_at: string;
}

export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  is_seller: boolean;
}

export interface CartItem {
  product_id: string;
  quantity: number;
  product: Product;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  seller_id: string;
  created_at: string;
  seller: User;
}