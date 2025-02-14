import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Store, BookOpen, User } from 'lucide-react';
import { useStore } from '../store';

export default function Navbar() {
  const cart = useStore((state) => state.cart);
  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Store className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">ModernShop</span>
          </Link>

          <div className="flex items-center space-x-8">
            <Link
              to="/products"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Products
            </Link>
            <Link
              to="/blog"
              className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <BookOpen className="h-5 w-5" />
              <span>Blog</span>
            </Link>
            <Link
              to="/cart"
              className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="bg-indigo-600 text-white rounded-full px-2 py-1 text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 transition-colors">
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}