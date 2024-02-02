import React from 'react'
import callCenter from '../assets/callCenter.png'
import Button from '../UI/Button'

const ContactUs = () => {
  return (
    <div className='flex justify-around bg-[#E9F2FE] mt-[60px] '>
      <form action="" className='bg-[#192a68bd] mt-[89px] mb-[100px] rounded-[8px] w-[444px] h-[608px] text-center'>
        <h1 className=' mt-[56px] text-white'>تواصل معنا</h1>
        <div className='flex flex-col rounded-[8px] gap-6 mx-[45px] mt-[56px]'>
        <input type="text" placeholder='الاسم'/>
        <input type="text" placeholder='الايميل'/>
        <input type="text" placeholder='رقم المحمول'/>
        <textarea placeholder='الرساله' className='mb-[26px]'/>
        <Button>ارسل</Button>
        </div>
      </form>
      <img src={callCenter} alt="callCenter" className='mt-[149px] mb-[150px]'/>
    </div>
  )
}

export default ContactUs