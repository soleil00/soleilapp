import React from 'react'
import ProductCard from '../ProductCard';
import { products } from '@/constants/products';

const HomeAppliances = () => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-3">
      {products.map(product => {
        if (product.category === "Kitchen appliances") {
          return <ProductCard key={product.name} product={product} />;
        }
        return null;
      })}
    </div>
  )
}

export default HomeAppliances

