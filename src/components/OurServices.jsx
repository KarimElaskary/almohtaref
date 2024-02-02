import React from 'react'
import Cards from '../UI/Cards'
import cardPic1 from '../assets/cardPic1.png'
import cardPic2 from '../assets/cardPic2.png'

const OurServices = () => {
  return (
    <div className='mt-[90px]'>
      <h1>خدماتنا</h1>
      <Cards img={cardPic1} alt={cardPic1} description={"تركيب السيراميك"}/>
    </div>
  )
}

export default OurServices