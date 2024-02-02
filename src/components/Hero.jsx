import React from 'react';
import almohtarefHero from '../assets/almohtarefHero.png';
import Button from '../UI/Button';
import heroBG from '../assets/heroBG.png';
import phoneVector from '../assets/phoneVector.png';

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: 'url(' + heroBG + ')' }}
      className='flex flex-col justify-center items-center mt-[18px] pb-[35px] bg-cover '
    >
      <img src={almohtarefHero} alt='المحترف' className='w-[134px] mt-[85px]' />
      <h1 className='mt-[23px]'>شركه صيانه عامه </h1>
      <p className='mt-[55px]'>
        شركة متخصصة في تقديم خدمات الصيانة والإصلاح للمباني والمرافق المختلفة،
      </p>
      <p className='mb-[66px]'>
        {' '}
        بما في ذلك المباني السكنية والتجارية والحكومية والصناعية. تلتزم الشركة
        بتقديم خدمات عالية الجودة بأسعار تنافسية، وتحقيق رضا العملاء
      </p>
      <Button url='tel:+05024566102'>
        {' '}
        <img src={phoneVector} alt='phoneVector'/> تواصل معنا الآن
      </Button>
    </div>
  );
};

export default Hero;
