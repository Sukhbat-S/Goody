import React from 'react'

export const Header = ({}) => {
  return (
    <div className=' flex  w-full h-[90px] bg-[#ffffff] items-center border color-[EDEDED] '>
        <div className='flex flex-col py-2 px-4 w-[242px]'>
           <div className='text-xl  text-[#308226] font-medium'> Goody </div>
           <div className=' text-md text-[#8B8E95]'> Бүтээмжийн бүүстэр </div>
        </div>
        <div className=' flex w-full h-full bg-[#ededed] items-center justify-center'>
        image
        </div>
       
    </div>
  )
}

export default Header
