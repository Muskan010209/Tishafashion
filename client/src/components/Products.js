import React, { Suspense } from 'react';

const ProductsCard = React.lazy(() => import('./ProductsCard'));

const Products = ({ products }) => {
  return (
    <div className='py-10'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>Shopping Everyday</h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className='max-w-[700px] text-gray-600 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quod. Quisquam, quod.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {products.map((item) => (
          <Suspense fallback={<div>Loading...</div>} key={item._id}>
            <ProductsCard product={item} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default Products;
