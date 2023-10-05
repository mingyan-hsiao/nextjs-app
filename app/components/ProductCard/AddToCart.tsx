'use client'; // client component, included in js bundle
import React from 'react'

const AddToCart = () => {
  return (
    <div>
        <button className='btn btn-success' onClick={()=> console.log("Click!")}>Add to Cart</button>
    </div>
  )
}

export default AddToCart
