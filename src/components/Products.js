import React from 'react'
import ProductCard from './Productcard'



const Products = ({products}) => {
  

  return (
    <div>
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>shopping everyday</h1>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className='max-w-[700px] text-gray-600 text-center'>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.

            </p>
        </div>

    </div>
    <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
      {
        products.map((item)=>(
          <ProductCard key={item._id} products={item}/>

        ))
      }
    </div>
    </div>
  )
}

export default Products