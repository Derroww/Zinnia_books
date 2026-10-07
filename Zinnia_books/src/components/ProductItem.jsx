import React from 'react'

function ProductItem() {
  return (
    <>
    <div className = "product-item">
        <div className = "image-container">
            {
                Product.imageUrl ? <img src={product.imageUrl} alt= {product.title} />:
                <img src="/images/" alt="" />
            }

        </div>

    </div>
    </>
    
  )
}

export default ProductItem