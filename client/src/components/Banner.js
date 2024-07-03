import React, { useState } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg"
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className='w-full h-auto overflow-hidden'>
      <div className="w-screen h-[70vh] sm:h-[90vh] md:h-[120vh] lg:h-[650px] relative">
        <div
          className="w-[400vw] h-full flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {data.map((src, index) => (
            <img key={index} src={src} alt={`slide-${index}`} className="w-screen h-full object-cover" />
          ))}
        </div>
        <div className='absolute w-fit left-0 right-0 mx-auto flex gap-4 sm:gap-8 bottom-8 sm:bottom-16 lg:bottom-60'>
          <div onClick={prevSlide} className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
            <HiArrowLeft className='text-sm sm:text-base md:text-lg' />
          </div>
          <div onClick={nextSlide} className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
            <HiArrowRight className='text-sm sm:text-base md:text-lg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
