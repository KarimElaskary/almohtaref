import React from 'react';
import logo from '../assets/logo.png';
import callLogo from '../assets/callLogo.png';

const NavBar = () => {
  return (
    <div className='container flex justify-between mx-auto items-center mt-[18px] text-[#192A68]'>
      <img src={logo} alt='logo' />
      <div className='flex justify-between gap-[52px]'>
        <a href=''>الرئيسية</a>
        <a href=''>من نحن</a>
        <a href=''>خدمتنا</a>
        <a href=''>تواصل معنا</a>
      </div>
      <div className='flex flex-row justify-center text-center gap-5'>
        <div className='flex flex-col gap-3'>
          <p>يمكنك التواصل معنا عبر</p>
          <h1 className=''>05024566102</h1>
        </div>
        <div>
          <img src={callLogo} alt='callLogo' />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
