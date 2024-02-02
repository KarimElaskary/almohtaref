import React from 'react'

const Button = ({children, url}) => {
  return (
    <a href={url} className='bg-[#F46D21] text-[#192A68] rounded-[10px] px-[41px] py-[13px] flex gap-2'>{children}</a>
  )
}

export default Button