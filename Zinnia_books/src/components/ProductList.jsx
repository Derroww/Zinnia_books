import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ products, onDelete }) {
  if (!products || products.length === 0) {
    return <p>No books found.</p>;
  }
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} onDelete={onDelete} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
