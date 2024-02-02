import React from 'react';
import ourGoals from '../assets/ourGoals.png';

const OurGoals = () => {
  return (
    <div className='flex flex-col items-center mt-[125px]'>
      <h1 className='text-[36px] text-[#F46D21] font-semibold'>أهدافنا</h1>
      <img src={ourGoals} alt='ourGoals' className='mt-[80px]' />
      <p className='mt-[69px] text-[24px] text-center text-[#192A68] font-bold'>
        تقديم خدمات الصيانة والإصلاح عالية الجودة بأسعار تنافسية.<br/> تحقيق رضا
        العملاء من خلال تقديم خدمات تلبي احتياجاتهم وتفوق توقعاتهم.<br/> المساهمة في
        المجتمع من خلال تقديم خدمات الصيانة والإصلاح للمباني والمرافق العامة.
      </p>
    </div>
  );
};

export default OurGoals;
