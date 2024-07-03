import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MdOutlineStar } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/bazarSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  let [baseQty, setBaseQty] = useState(1);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.item) {
      setDetails(location.state.item);
    }
  }, [location.state]);

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: details.id,
      price: details.price,
      title: details.title,
      image: details.image,
      qty: baseQty,
      description: details.description,
    }));
    toast.success(`${details.title} is added`);
  };

  return (
    <div>
      <div className='container mx-auto my-10 flex flex-col lg:flex-row gap-10'>
        <div className='w-full lg:w-2/5 relative'>
          <img
            className='w-full h-[300px] lg:h-[550px] object-cover'
            src={details.image}
            alt="productImg"
          />
          <div className='absolute top-4 right-0'>
            {details.isNew && (
              <p className='bg-black text-white font-semibold font-titleFont px-8 py-1'>
                Sale
              </p>
            )}
          </div>
        </div>
        <div className='w-full lg:w-3/5 flex flex-col justify-center gap-12'>
          <div>
            <h2 className='text-2xl lg:text-3xl font-bold'>{details.title}</h2>
            <div className='flex items-center gap-4 mt-3'>
              {details.oldPrice && (
                <p className='line-through font-base text-gray-500'>${details.oldPrice}</p>
              )}
              <p className='text-xl lg:text-2xl font-medium text-gray-900'>${details.price}</p>
            </div>
          </div>
          <div className='flex items-center gap-2 text-base'>
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <p className='text-xs text-gray-500'>(1 customer review)</p>
          </div>
          <div>
            <p className='text-base text-gray-500'>{details.description}</p>
          </div>
          <div className='flex gap-4'>
            <div className='w-full lg:w-52 flex flex-col lg:flex-row items-center justify-between text-gray-500 gap-4 border p-3'>
              <p className='text-sm'>Quantity</p>
              <div className='flex items-center gap-4 text-sm font-semibold'>
                <button 
                  onClick={() => setBaseQty(baseQty > 1 ? baseQty - 1 : 1)} 
                  className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>
                  -
                </button>
                <span>{baseQty}</span>
                <button 
                  onClick={() => setBaseQty(baseQty + 1)} 
                  className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>
                  +
                </button>
              </div>
            </div>
            <div>
              <button 
                onClick={handleAddToCart} 
                className='bg-black text-white px-8 py-2 mt-4 lg:mt-0 active:bg-gray-800'>
                Add to Cart
              </button>
            </div>
          </div>
          <p className='text-base text-gray-500'>Category: <span className='font-medium capitalize'>{details.category}</span></p>
        </div>
      </div>
      <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  );
};

export default Product;
