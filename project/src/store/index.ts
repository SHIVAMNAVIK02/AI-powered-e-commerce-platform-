import { create } from 'zustand';
import { CartItem, Product } from '../types';

interface StoreState {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

export const useStore = create<StoreState>((set) => ({
  cart: [],
  addToCart: (product, quantity) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.product_id === product.id
      );

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.product_id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }

      return {
        cart: [...state.cart, { product_id: product.id, quantity, product }],
      };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.product_id !== productId),
    })),
  clearCart: () => set({ cart: [] }),
}));