import React from 'react'

function ProductItem({product: book, onDelete}) {
  return (
    <>
    <div className="border border-gray-300 rounded-lg p-4">
        <div className="flex flex-col items-center">
        <img src={book.image} alt={book.name} className="w-full h-48 object-cover mb-4" />
        <div className="text-center">
        <h3 className='text-lg text-green-700 font-bold '>{book.name}</h3>
        <p className='text-gray-600'>Author: {book.author}</p>
        <p className='text-gray-600'>Genre: {book.genre}</p>
        </div>
        <button onClick={() => onDelete(product.id)} className="bg-yellow-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        Delete
        </button>
      </div>    
    </div>
    </>
    
  )
}

export default ProductItem