import React from 'react';
import gpsVector from '../assets/gpsVector.png';
import phoneVector from '../assets/phoneVector.png';

const Header = () => {
  return (
    <div className='flex items-center justify-around bg-[#192A68] text-white py-[22px]'>
      <p className='flex gap-2'>
        <img src={gpsVector} alt='gpsVector' />
        <span> الشارقه دبي راس الخيمه</span>
      </p>
      <p>تواصل معنا عبر الواتس اب </p>
      <p className='flex gap-2'>
        <img src={phoneVector} alt='phoneVector' />
        <span>05024566102</span>
      </p>
    </div>
  );
};

export default Header;
