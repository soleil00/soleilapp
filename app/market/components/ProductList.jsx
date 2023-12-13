import React from "react";
import ProductCard from "./ProductCard";
import { products } from "@/constants/products";

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-3">
      {products.map(product => (
        <ProductCard key={product.name} product={product}/>
      )
    )}

    </div>
  );
};

export default ProductList;
