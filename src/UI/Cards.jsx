import React from 'react'
import Button from './Button'

const Cards = ({img, description, alt}) => {
  return (
    <div>
        
        <img src={img} alt={alt}/>
        <h1>{description}</h1>
        <p>اتصل بنا الآن</p>
        <Button>05024566102</Button>
    </div>
  )
}

export default Cards