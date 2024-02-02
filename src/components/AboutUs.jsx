import React from 'react';
import aboutUsImg from '../assets/aboutUsImg.png';
import aboutUsImg2 from '../assets/aboutUsImg2.png';

const AboutUs = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-around items-center'>
        <img src={aboutUsImg} alt='aboutUsImg' className='mt-[88px]' />
        <div className='flex flex-col mt-[102px] items-center'>
          <h1 className='mb-[34px]'>نبذه عنا</h1>
          <p className='mr-[66px]'>
            نحن شركه صيانه عامه مخصصه في أعمال الصيانه اللازمه للفلل والبنايات
            من تركيب سيراميك ورخام وأعمال الصحيه من تركيب بيبات المياه والصرف
            الصحي وتسليك بلاعات الحمامات والمطابخ وجميع اكسسوارات الحمام واعمال
            صيانه الكهربه واعمال الاصباغ الداخلية والخارجية واعمال العزل الحراري
            والمائي واعمال تركيب الجبس إمبورد والفورسيلينج وأعمال تركيب
            الانترلوك
          </p>
        </div>
      </div>
      <img src={aboutUsImg2} alt="aboutUsImg2" className='w-[1150px] h-[203px] self-center'/>
    </div>
  );
};

export default AboutUs;
