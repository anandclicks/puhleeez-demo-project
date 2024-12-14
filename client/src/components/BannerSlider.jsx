import React, { useState } from 'react';

const BannerSlider = () => {
  const [marginLeft, setMarginLeft] = useState(0); 

  const handleSlider = (direction) => {
    if (marginLeft === -200 && direction === '-') {
      setMarginLeft(0); 
    } else if (marginLeft === 0 && direction === '+') {
      setMarginLeft(-200); 
    } else {
      setMarginLeft((prev) => (direction === '-' ? prev - 100 : prev + 100));
    }
  };


  return (
    <div className='w-full h-[300px] mt-5 overflow-hidden relative'>
      <div
        className='sliderWrapper whitespace-nowrap flex h-full w-[400%] transition-transform duration-300 ease-in-out'
        style={{ marginLeft: `${marginLeft}vw` }}
      >
        {/* First slide */}
        <div className='one h-full w-[100vw] bg-green-500'>
          <img
            className='h-full w-full object-cover '
            src='/banners/one.jpg'
            alt='Slide One'
          />
        </div>
        {/* Second slide */}
        <div className='two h-full w-[100vw] bg-red-500'>
          <img
            className='h-full w-full object-cover '
            src='/banners/two.jpg'
            alt='Slide Two'
          />
        </div>
        {/* Third slide */}
        <div className='three h-full w-[100vw] bg-slate-950'>
          <img
            className='h-full w-full object-cover '
            src='/banners/three.jpg'
            alt='Slide Three'
          />
        </div>
      </div>
      {/* Buttons for controlling slider */}
      <div className='btns w-full h-full absolute top-0 left-0 flex justify-between items-center'>
        <i
          onClick={() => handleSlider('+')}
          className='ri-arrow-left-wide-fill bg-black text-white px-3 py-1 cursor-pointer'
        ></i>
        <i
          onClick={() => handleSlider('-')}
          className='ri-arrow-right-wide-fill bg-black text-white px-3 py-1 cursor-pointer'
        ></i>
      </div>
    </div>
  );
};

export default BannerSlider;
