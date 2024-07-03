import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineClose } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { resetCart, incrementQuantity, decrementQuantity, deleteItem } from '../redux/bazarSlice';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowLeft } from 'react-icons/fa';

const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.bazar.productData);

  const handleDeleteItem = (id, title) => {
    dispatch(deleteItem({ id }));
    toast.error(`${title} is removed`);
  };

  const handleIncrementQuantity = (id) => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrementQuantity = (id) => {
    dispatch(decrementQuantity({ id }));
  };

  const handleResetCart = () => {
    dispatch(resetCart());
    toast.error('Your cart is empty');
  };

  return (
    <div className='w-full mx-auto px-4 '>
      <div className='w-full mb-8'>
        <h2 className='text-2xl font-bold text-gray-800 text-center'>Shopping Cart</h2>
      </div>
      {productData.map((item) => (
        <div className='flex flex-col md:flex-row items-center justify-between gap-6 mt-6 p-4 border rounded-lg shadow-sm bg-white' key={item.id}>
          <div className='flex items-center gap-4'>
            <MdOutlineClose 
              onClick={() => handleDeleteItem(item.id, item.title)} 
              className='text-2xl text-gray-600 hover:text-red-600 cursor-pointer duration-300' 
            />
            <img className='w-32 h-32 object-cover rounded-md' src={item.image} alt={item.title} />
          </div>
          <h2 className='w-full md:w-40 text-lg font-medium text-gray-800 text-center md:text-left'>{item.title}</h2>
          <div className='flex gap-2 items-center'>
            <div className='flex items-center justify-between text-gray-500 gap-2 border p-3 rounded-lg'>
              <p className='text-sm'>Qty</p>
              <div className='flex items-center'>
                <span 
                  onClick={() => handleDecrementQuantity(item.id)} 
                  className='border h-5 w-5 flex items-center justify-center rounded-full text-lg cursor-pointer hover:bg-gray-200 duration-300 active:bg-gray-300'>
                  -
                </span>
                <p className='px-4 text-lg font-medium'>{item.quantity}</p>
                <span 
                  onClick={() => handleIncrementQuantity(item.id)} 
                  className='border h-5 w-5 flex items-center justify-center rounded-full text-lg cursor-pointer hover:bg-gray-200 duration-300 active:bg-gray-300'>
                  +
                </span>
              </div>
            </div>
          </div>
          <p className='w-20 text-lg font-medium text-gray-800 text-center md:text-left'>${item.quantity * item.price}</p>
        </div>
      ))}
      <div className='flex flex-col md:flex-row justify-between items-center mt-8 gap-4'>
        <Link to="/" className='w-full md:w-auto'>
          <button className='flex items-center gap-1 text-gray-400 hover:text-black duration-300 w-full justify-center md:justify-start'>
            <FaArrowLeft /> Go Shopping
          </button>
        </Link>
        <button 
          onClick={handleResetCart} 
          className='flex items-center gap-1 text-gray-400 hover:text-black duration-300 w-full md:w-auto justify-center md:justify-end'>
          Reset Cart
        </button>
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

export default CartItem;
