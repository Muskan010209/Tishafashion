import React, { useEffect, useState, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

// Lazy load CartItem component
const CartItem = React.lazy(() => import('../components/CartItem'));

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.forEach((item) => {
      price += item.price * item.quantity;
    });
    setTotalAmt(price);
  }, [productData]);

  const handleCheckOut = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please Sign in to Checkout");
    }
  }

  const payment = async (token) => {
    try {
      const response = await axios.post("http://localhost:8000/pay", {
        amount: totalAmt * 100,
        token: token,
      });
      console.log('Payment successful:', response.data);
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
      } else if (error.request) {
        console.error('Error request:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
      console.error('Error config:', error.config);
    }
  };

  return (
    <div className=''>
      <div className='mx-auto py-20 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <Suspense fallback={<div>Loading...</div>}>
            <CartItem />
          </Suspense>
          <div className='bg-[#fafafa] py-6 px-4'>
            <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
              <h2 className='text-xl font-medium'>Cart Totals</h2>
              <p className='flex items-center gap-4 text-base'>
                SubTotal{""}
                <span className='font-titleFont font-bold text-lg'>${totalAmt}</span>
              </p>
              <p className='flex items-center gap-4 text-base'>
                Shipping{""}
                <span className='font-titleFont font-bold text-lg'>Free Shipping on all orders above $100</span>
              </p>
            </div>
            <p className='font-titleFont font-semibold flex justify-between mt-6'>
              Total
              <span className='text-xl font-bold'>${totalAmt}</span>
            </p>
            <button onClick={handleCheckOut} className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800'>Proceed to Checkout</button>
            {payNow && (
              <div className='w-full mt-6 flex items-center justify-center text-green-500'>
                <StripeCheckout
                  stripeKey="pk_test_51PYBZvBD0GEdBZs6N2yPtXE27En6HIMlJDzkZgTo1Md3NObRIUMQodxRUkhA5VTGUDQ1M7TjhnHM2PkyTBeeqSrn00IVh7wbqO"
                  name="Bazar"
                  amount={totalAmt * 100}
                  label="Pay to Bazar"
                  description={`Your Payment Amount is $${totalAmt}`}
                  token={payment}
                  email={userInfo?.email}
                />
              </div>
            )}
          </div>
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
  )
}

export default Cart;
