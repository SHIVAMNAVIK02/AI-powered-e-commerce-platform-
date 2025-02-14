import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, TrendingUp, Truck, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[500px] rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1920"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-4">
              Discover Amazing Products
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Shop the latest trends with confidence. Quality products, secure
              payments, and fast delivery.
            </p>
            <Link
              to="/products"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: ShoppingBag,
            title: 'Quality Products',
            description: 'Curated selection of premium items',
          },
          {
            icon: Shield,
            title: 'Secure Shopping',
            description: 'Protected payments and transactions',
          },
          {
            icon: Truck,
            title: 'Fast Delivery',
            description: 'Quick and reliable shipping',
          },
          {
            icon: TrendingUp,
            title: 'Smart Recommendations',
            description: 'AI-powered product suggestions',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <feature.icon className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Featured Categories */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Popular Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Electronics',
              image:
                'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=600',
            },
            {
              name: 'Fashion',
              image:
                'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=600',
            },
            {
              name: 'Home & Living',
              image:
                'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80&w=600',
            },
          ].map((category, index) => (
            <Link
              key={index}
              to="/products"
              className="relative h-64 rounded-xl overflow-hidden group"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}